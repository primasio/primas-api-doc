## Primas Node API Document 功能-收益
### 一、personal account incentives list（用户收益列表）
##### URL：/incentives/list/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 操作人 |
| uid	| string	| No	| 操作人(第三方平台唯一的用户编号) |
| pageid	 | int	| Yes	| 翻页页码，从0开始 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 操作人 |
| uid	| string	| No	| 操作人(第三方平台唯一的用户编号) |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
| datas	| []incentive	| Yes	| 收益列表 |

### 二、personal account total incentives（用户总的 收益）
##### URL：/incentives/user/total/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 操作人 |
| uid	| string	| No	| 操作人(第三方平台唯一的用户编号) |
| starttime	| uint	| Yes	| 开始时间 |
| endtime	| uint	| Yes	| 结束时间 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 操作人 |
| uid	| string	| No	| 操作人(第三方平台唯一的用户编号) |
| starttime	| uint	| Yes	| 开始时间 |
| endtime	| uint	| Yes	| 结束时间 |
| amount	| float64	| Yes	| 总收益 |

### 三、personal account locked incentives（用户总的 收益）
##### URL：/incentives/user/lock/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 操作人 |
| uid	| string	| No	| 操作人(第三方平台唯一的用户编号) |
| starttime	| uint	| Yes	| 开始时间 |
| endtime	| uint	| Yes	| 结束时间 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes | 操作人 |
| uid	| string	| No	| 操作人(第三方平台唯一的用户编号) |
| starttime	| uint	| Yes	| 开始时间 |
| endtime	| uint	| Yes	| 结束时间 |
| amount | float64	| Yes	| 总收益 |

### 四、personal account pad all (用户收益)
##### URL：/pad/user/all/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 操作人 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 | 
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 操作人 |
| total	| float64	| Yes	| 总收益 |
| spend	| float64	| Yes	| 花费的收益 |
| lock	| float64	| Yes	| 锁定的收益 |

### 五、personal account pad list (用户花费列表)
##### URL：/pad/user/list/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 操作人 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 操作人 |
| datas	| []tokenlock	| Yes | 花费列表,tokenlock format |

### 六、personal account pad status (用户充值/预授权列表)
##### URL：/pad/user/status/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 操作人 |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
| status	| int	| Yes	| 充值/预授权 | 
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 操作人 |
| datas	| []pretokenlock	| Yes | 花费列表 |


