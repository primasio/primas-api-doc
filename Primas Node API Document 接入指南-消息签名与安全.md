## Primas Node API Document 接入指南-消息签名与安全
##### 以太坊SHA3、Keccak256概念解释
SHA3采用Keccak算法，在很多场合下Keccak和SHA3是同义词，但在2015年8月SHA3最终完成标准化时，NIST调整了填充算法，标准的SHA3和原先的Keccak算法就有所区别了。在早期的Ethereum相关代码中，普遍使用SHA3代指Keccak256，为了避免和NIST标准的SHA3混淆，现在的代码直接使用Keccak256作为函数名。
Ethereum和Solidity智能合约代码中的SHA3是指Keccak256，而不是标准的NIST-SHA3，为了避免混淆，直接在合约代码中写成Keccak256是最清晰的。

##### 私钥
以太坊的私钥是一个32字节的数，取值范围从1~0xFFFF FFFF FFFF FFFF FFFF FFFF FFFF FFFE BAAE DCE6 AF48 A03B BFD2 5E8C D036 4140。这个数可以由伪随机算法(PRNG)产生。其实0也是一个合法的私钥，只不过这是一个特殊私钥，以太坊的创世区块就是这个私钥生成的。

##### 公钥
以太坊的非压缩公钥是一个65字节的数，这个是继承至比特币的。但以太坊只使用了其中64个字节，有一个字节这64个字节中，32字节表示椭圆曲线的X坐标，32字节表示椭圆曲线的Y坐标。这个XY坐标是私钥通过ECDSA-secp256k1推导出来的。所以说，椭圆曲线算法的公钥是通过私钥计算出来的。而反过来，用公钥推导私钥，以现有计算机的计算几乎是不可能的，这也是以太坊和比特币存在的基础。如果哪天计算机技术出现大飞跃，比如量子计算机普及，现有链上所有账户的私钥都会曝光。当然，区块链技术本身也会一定会持续演进的。

##### 哈希
哈希，也可以形象的叫做“摘要”。就是无论消息有多大，都可以生成一个固定长度的“摘要”，这个“摘要”可以用来校验消息是否被篡改。只要消息被修改了一个字节，“摘要”的校验就会失败。
比特币的哈希算法使用的是SHA2-256。相对于SHA1，SHA2只是扩展了哈希的字节数而已。目前SHA1已经被攻破，SHA2被攻破只是时间问题。
以太坊的哈希算法采用的是全新的SHA3-256。和SHA1，SHA2不一样，SHA3并不是单纯扩展字节数，而是采用了新的Keccak算法。同样字节宽度的SHA3比SHA2更安全。

##### 地址
以太坊的地址是公钥经过一系列哈希和变换，在经由Base58编码生成的字符串。过程不述。Base58编码和Base64差不多，都是使用“”可读符号“来表示二进制数据，Base58相对Base64移除了一些容易产生视觉混淆的字母和数字。

##### 签名
签名其实就是用私钥对消息的哈希进行加密。当一个以太坊节点向另一个节点发送消息时，会用自己的私钥将消息的哈希做签名，然后吧签名和消息本身发送给对方。

</br>

![签名](media/15306686610223/%E7%AD%BE%E5%90%8D.png)


##### 校验签名
节点收到对方发来的消息和签名后，会先做一个“recover”的动作，用消息和签名推导出对方的公钥。再通过公钥，签名，消息的哈希值计算出一个叫“value”的值，这个"value"是签名的一部分，校验签名就是拿计算出来的"value"和签名中携带的"value"经行对比，如果一致就校验通过。

</br>
![校验签名1](media/15306686610223/%E6%A0%A1%E9%AA%8C%E7%AD%BE%E5%90%8D1.png)



##### 代码示例(golang)

```
import (
	"crypto"
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha256"
	"crypto/x509"
	"encoding/base64"
	"encoding/hex"
)

func SignatureEncoding(data []byte, privateKey string) (string, error) {
	h := sha256.New()
	h.Write(data)
	hashed := h.Sum(nil)
	buff, _ := base64.StdEncoding.DecodeString(privateKey)
	//获取私钥
	priv, err := x509.ParsePKCS1PrivateKey(buff)
	if err != nil {
		return "", err
	}
	sign, err := rsa.SignPKCS1v15(rand.Reader, priv, crypto.SHA256, hashed)
	return hex.EncodeToString(sign), err
}

func SignatureChecked(data []byte, signature, public string) error {
	signatureDecode, err := hex.DecodeString(signature)
	if err != nil {
		return err
	}
	hashed := sha256.Sum256(data)
	buff, _ := base64.StdEncoding.DecodeString(public)
	// 解析公钥
	pubInterface, err := x509.ParsePKIXPublicKey(buff)
	if err != nil {
		return err
	}
	// 类型断言
	pub := pubInterface.(*rsa.PublicKey)
	//验证签名
	return rsa.VerifyPKCS1v15(pub, crypto.SHA256, hashed[:], signatureDecode)
}
```

##### 代码示例(java)

```

```


