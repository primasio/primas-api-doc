## Primas Node API Document 功能-用户
### 二、Add  or update personal account  (增加或者更新个人账号)
##### URL: /users/add
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
|version	| string	| Yes	| 版本号 |
|language	| string	| Yes	| 语言; 如: zh, en, ja |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| name	| string	| No	| 用户的用户名，当uid填写后，此项也是必填 |
| extra	| string	| No	| 自定义内容, 如简历 |
| signature	 | string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ name+ extra + nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| name	| string	| No	| 用户的用户名，当uid填写后，此项也是必填 |
| extra	| string	| No	| 自定义内容, 如简历 |
| signature	 | string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ name+ extra +nonce)，sha3/keccak256算法 |

### 三、Search personal account  (查询个人账号)
##### URL: /users/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string| No	| 第三方平台唯一的用户编号 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| id	| int	| Yes	| 用户编号 |
| createdat | uint	| Yes	| 创建时间 |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| name	| string	| Yes	| 用户的用户名，当uid填写后，此项也是必填 |
| file_path	 | string	| Yes	| 用户头像 |
| height	| int	| Yes	| 用户头像高度 |
| width	| int	| Yes	| 用户头像宽度 |
| extra	| string	| Yes	| 自定义内容, 如简历 |

### 十一、	personal account create groups(个人自己创建的圈子列表)
##### URL: /users/groups/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户(第三方平台)的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	 | string	| No	| 第三方平台唯一的用户编号 |
| pageid | int	 | Yes	| 翻页页码，从0开始 |
| datas	| []group	| Yes	| 圈子列表 |

### 十二、	personal account join group's  articles(个人加入圈子的文章列表)
##### URL: /users/groups/articles/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| groupdna	| string	| Yes	| 圈子的dna |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号  |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| groupdna	| string	| Yes	| 圈子的dna |
| pageid	 | int	| Yes	| 翻页页码，从0开始 |
| datas	| []article	| Yes	| 圈子的文章列表, article format |


### 十三、	personal account share groups info (个人用户加入圈子转载情况)
##### URL: /users/groups/articles/share/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| string	| Yes	| 版本号 |
| language	| string |Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| groupdna	| string	| Yes	| 圈子的dna |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| groupdna	| string	| Yes	| 圈子的dna |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
| datas	| []groupshare	| Yes	| 圈子转载情况, groupshare format |

### 十四、	personal account publish articles(个人发布的文章列表)
##### URL: /users/groups/articles/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
| datas	| []article	| Yes	| 文章列表, article format | 

### 十五、	personal account hp value(个人账号hp值)
##### URL: /users/hp/get
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
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| total	| int	| Yes	| 总hp值 |
| hp	| int	| Yes	| 可用hp值 |

### 十六、	personal account Pre-Lock(个人预授权)
##### URL: /users/signlock/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| amount	| float64	| Yes	| 预授权PST值 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	 | string	| Yes	| 本次数据的签名(version+ language+ address+ amount+ nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| amount	| float64	| Yes	| 预授权PST值 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	 | string	| Yes	| 本次数据的签名(version+ language+ address+ amount+  nonce)，sha3/keccak256算法 |
| nodefee	| float64	| Yes | 手续费 |
| locktype	| int	| Yes	| 预锁定类型 |
| orderid	| string	| Yes	| 订单号 |
| txstatus	| int	| Yes	| tx状态 |
| txhash	| string	| Yes	| 区块tx-hash |

### 十七、	personal account credit rating(获取个人信用)
##### URL: /users/score/get
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
| score	| int	| Yes	| 信用分 |
| isdel	| int	| Yes	| 是否可用 |

### 十八、	personal account info contain groups(获取个人信息包含文章、圈子)
##### URL: /users/articlespageid/get
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
| name	| string	| Yes	| 用户名 |
| filepath	| string	| Yes	| 用户头像 |
| height	| int	| Yes	| 用户头像高度 |
| width	| int	| Yes	| 用户头像宽度 |
| datas	| []userinfo	| Yes	| 文章、圈子, userinfo format |

### 十九、personal account collect articles(获取个人收藏的文章)
##### URL: /users/collect/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| pageid	 | int	| Yes	| 翻页页码，从0开始 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| pageid	 | int	| Yes	| 翻页页码，从0开始 |
| datas	| []article	| Yes	| 收集的文章, article format |


