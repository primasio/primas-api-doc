## Primas Node API Document 功能-图片
### 一、upload aticle images (上传文章图片)  
##### URL：/images/article/upload
##### form-data(not JSON object):
| key(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| text	| Yes	| 版本号 |
| language	| text	| Yes	| 语言; 如: zh, en, ja |
| address	| text	| Yes	| 操作人 |
| uid	| text	| No	| 操作人(第三方平台唯一的用户编号) |
| files	| file	| Yes	| 图片文件 |
| nonce	| text	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address + uid +nonce)，sha3/keccak256算法 |
##### output format(JSON)
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 操作人 |
| uid	| string	| No	| 操作人(第三方平台唯一的用户编号) |
| files	| file	| Yes	| 图片文件 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address + uid +nonce)，sha3/keccak256算法 |
| datas	| []string	| Yes	| files对应的图片URL地址 |
    
### 二、upload user images (上传用户头像图片) 
##### URL：/images/userimg/upload
##### form-data(not JSON object):
| key(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| text	| Yes	| 版本号 |
| language	| text	| Yes	| 语言; 如: zh, en, ja |
| address	| text	| Yes	| 操作人 |
| uid	| text	| No	| 操作人(第三方平台唯一的用户编号) |
| files	| file	| Yes	| 图片文件 |
| nonce	| text	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address + uid +nonce)，sha3/keccak256算法 |
##### output format(JSON)
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 操作人 |
| uid	| string	| No	| 操作人(第三方平台唯一的用户编号) |
| files	| file	| Yes	| 图片文件 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address + uid +nonce)，sha3/keccak256算法 |
| datas	| []string	| Yes	| files对应的图片URL地址 |

### 三、upload group images (上传圈子图片)
##### URL：/images/groupimg/upload
##### form-data(not JSON object):
| key(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| text	| Yes	| 版本号 |
| language	| text	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| text	| Yes	| 圈子dna |
| address	| text	| Yes	| 操作人 |
| uid	| text	| No	| 操作人(第三方平台唯一的用户编号) |
| files	| file	| Yes	| 图片文件 |
| nonce	| text	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ groupdna +address + uid +nonce)，sha3/keccak256算法 |
##### output format(JSON)
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| text	| Yes	| 圈子dna |
| address	| string	| Yes	| 操作人 |
| uid	| string	| No	| 操作人(第三方平台唯一的用户编号) |
| files	| file	| Yes	| 图片文件 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ groupdna+ address + uid +nonce)，sha3/keccak256算法 |
| datas	| []string	| Yes | files对应的图片URL地|


