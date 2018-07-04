## Primas Node API Document 功能-nonce

### Get nonce(获取nonce)  
##### URL: /nonce/user/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version | string | Yes | 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja| 
| address	| string	| Yes	| 用户的公钥地址| 
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| nonce	| int	| Yes	| nonce |


