# Primas Node API Documentation

**Notice: this document is in a working draft status.
We're still tweaking many aspects of the APIs.
Parameters are constantly changing. Examples are missing.
APIs can't be found on the mainnet.
We're trying our best to release it soon.**

### Version

3.0

### Introduction

Primas is a platform for premium quality content based on DTCP (Distributed Trusted Content Protocol).
Primas uses blockchain technology to ensure the credibility of content, 
uses economic incentives to accelerate the generation and circulation of high-quality content,
and allows readers to see personalized, high-quality content through social recommendations.
Traditional Internet applications can also use APIs to access Primas,
immediately gaining access to the power Primas offers.

### Primas Node

Primas decentralized network is accessible through one of the Primas Nodes.
And every Primas Node exposes the same collection of APIs as described in this document.
To use these APIs, you need to find a live Primas Node or host one yourself.
Nodes hosted by the Primas development team are accessible at:

Testnet: [https://staging.primas.io](https://staging.primas.io)

Mainnet Nodes:

* Rigel A: [https://rigel-a.primas.network](https://rigel-a.primas.network)

### DTCP Metadata Posting

Primas is built upon DCTP, which contains a standard for metadata of content and links between them.
For compatibility the metadata used in Primas is the same as DCTP,
which including metadata for content(articles, images, and in the future videos and audios),
groups and links. Like is a link between content and a person. Sharing is a link between content
and a group. Comment is a new article and a link between this article and the original one.

For all the metadata related APIs such as person registration, article posting, group creation and article sharing,
the metadata in DTCP standard is post in request body. And the metadata is saved
in the same format in decentralized storage.

For content posting APIs there's a small difference in metadata however
which is about the raw content. Since DTCP concerns about metadata only so the raw data
is not stored in DTCP metadata. DTCP contains a field called `content` which is used
to store a URI to the raw content. The raw content is stored separately in other places
that can be accessed using URI.

In Primas API however, the raw content in its base64 encoded form should be filled in the `content`
field in the post metadata. Primas Node extracts the content from metadata
and saves it in decentralized storage, gets a URI(in the case of IPFS, a link starts with "ipfs://"),
and puts the URI in the `content` field and saves the metadata to decentralized storage then.

### DTCP Metadata Signature

There's a field `signature` in the metadata standard to proof the integrity and ownership of the data.
The signature in Primas is also calculated using the same method, both the hash function and
the asymmetric cryptography as the DTCP specifies, which is also the same with Ethereum.

SHA3 and Keccak256

Primas uses Keccak256 as the hasing function. In most cases SHA3 and Keccak256 are the same function.
However in Ethereum SHA3, which is Keccak256 is slightly different than the standard NIST-SHA3.
To be compatible with Ethereum. Primas uses Keccak256 in both DTCP and Primas network.

Asymmetric Cryptography

Primas uses ECDSA-SECP256K1 to calculate the signature which is also the same with DTCP and Ethereum.
The private key is a 32-byte big number. And the address is a portion of the public key.

##### Example of signature calculation and verification in Golang

```go
package main

import (
	"crypto"
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha256"
	"crypto/x509"
	"encoding/base64"
	"encoding/hex"
)

func Sign(data []byte, privateKey string) (string, error) {
	h := sha256.New()
	h.Write(data)
	hashed := h.Sum(nil)
	buff, _ := base64.StdEncoding.DecodeString(privateKey)
	priv, err := x509.ParsePKCS1PrivateKey(buff)
	if err != nil {
		return "", err
	}
	sign, err := rsa.SignPKCS1v15(rand.Reader, priv, crypto.SHA256, hashed)
	return hex.EncodeToString(sign), err
}

func Verify(data []byte, signature, public string) error {
	signatureDecode, err := hex.DecodeString(signature)
	if err != nil {
		return err
	}
	hashed := sha256.Sum256(data)
	buff, _ := base64.StdEncoding.DecodeString(public)
	pubInterface, err := x509.ParsePKIXPublicKey(buff)
	if err != nil {
		return err
	}
	pub := pubInterface.(*rsa.PublicKey)
	return rsa.VerifyPKCS1v15(pub, crypto.SHA256, hashed[:], signatureDecode)
}
```

### RESTful API and Transfer Encoding

APIs are served using standard RESTful methods with HTTPS. For posting, both JSON and Form-Data are
supported for request body. Data sent from Primas Node is always in JSON format.

API should be prefixed with API version. For example, when trying to get the metadata for an article.
We should call:

`GET https://staging.primas.io/v3/content/1GFYUNP815RUIFDNNRKLNU78RPCFLNL5DWGT7EXODHFVRCRVXJ`

The response data will always include a field `result_code` indicating the invocation status.
On successful invocation `result_code` will be `0`. And the response data is in the field `data`. Otherwise `result_code` will be the corresponding
error type while at the same time there will be another field `result_msg` containing the detailed
description of the error.

### API Categories

* [Account](./account.md)
* [Content](./content.md)
* [Group](./group.md)
* [Token](./token.md)

### Error Code and Troubleshooting

| result_code	| result_msg | description |
| ------------ | ------------- | ------------- |
| 0	| success | Success|
| 400 | client error | Client error|
| 401	| invalid data | Invalid post data |
| 402 | parse input JSON format error | Invalid JSON string |
| 403 | client signature error | Signature verification failed |
| 404	| input parameter error | Invalid parameter |
| 405	| input parameter empty | Empty parameter |
| 406	| nonce less than lasted | Nonce is used before |
| 500	| server error | Server error |