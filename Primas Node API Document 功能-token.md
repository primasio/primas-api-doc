## Primas Node API Document 功能-token
### 一、Search personal account balance(查询个人账号余额)
##### URL: /token/users/balance/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| totalbalance	 |float64	| Yes | 总Token(PST) |
| availableamount	 | float64	| Yes | 可用Token |
| preauthorizeamount	| float64 | Yes | 预授权Token |
| nodeamount	| float64	| Yes | Node节点收益 |
| tokenvalue	| float64	| No | token价值按人民币折算 |


### 二、Search personal account incentive(查询个人账号收益分类统计 )
##### URL: /token/users/incentive/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| originate	| float64	| Yes	| 原创收益PST |
| activity	| float64	| Yes	| 操作收益PST |
| management	| float64	| Yes |	传播收益PST |
| admin	| float64	| Yes	| 圈主收益PST |
| total	| float64	| Yes	| 昨日收益PST |
| historytotal	 | float64	| Yes |	历史累计收益PST |

### 三、Search personal account history incentive list(查询个人账号历史收益按天统计)
##### URL: /token/users/incentive/list/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| datas	| []chartinfo	| Yes	| 收益按天列表, chartinfo format|

### 四、Search personal account incentive  in node (查询个人账号在节点的收益)
##### URL: /token/users/incentive/node/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| total	| float64	| Yes	| 总收益PST | 
| available	| float64	| Yes	| 剩余收益PST |
| locked	 | float64	| Yes	| 冻结收益PST |

### 五、personal account withdraw in node(个人在节点取现)
##### URL: /token/users/app/withdraw/add
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| address	| string	| Yes	| 用户的公钥地址 |
| amount	| float64	| Yes	| 取现金额 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address+ amount +nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| address	| string	| Yes	| 用户的公钥地址 |
| amount	| float64	| Yes	| 取现金额 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address+ amount +nonce)，sha3/keccak256算法 |

### 六、personal account withdraw history list in node(个人在节点取现历史列表)
##### URL: /token/users/app/withdraw/list/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
| datas	| []withdraw	| Yes	| 交易列表, withdraw format |

### 七、personal account withdraw audit  list in node(个人在节点取现审核列表)
##### URL: /token/users/app/withdraw/audit/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	 |Yes	| 用户的公钥地址 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表
| result_msg	| string	| Yes	| 返回提示信息
| version	| string	| Yes	| 版本号
| language	| string	| Yes	| 语言; 如: zh, en, ja
| address	| string	| Yes	| 用户的公钥地址
| datas	| []withdraw	| Yes	| 交易列表


