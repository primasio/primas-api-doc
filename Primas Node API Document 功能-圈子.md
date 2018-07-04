## Primas Node API Document 功能-圈子
### 一、get group list(获取用户所在的圈子列表 )
##### URL：/groups/list/get 
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
| datas	| []group	| Yes	| 圈子列表, group format |

### 二、create new group(创建新圈子)
##### URL：/groups/add
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| title	| string	| Yes	| 圈子名称 |
| description	| string	| Yes	| 圈子描述 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ title + description + nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| title	| string	| Yes	| 圈子名称 |
| description	| string	| Yes	| 圈子描述 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ title + description + nonce)，sha3/keccak256算法 |

### 三、get group (获取用户所在的圈子)
##### URL：/groups/get 
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
| groupdna	| string	| Yes	| 圈子dna |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
| groupdna	| string	| Yes	| 圈子dna |
| group	| group(object)	| Yes | 圈子详情, group format |

### 四、get group articles (获取用户所在圈子的文章)
##### URL：/groups/articles/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
| start	| uint	| Yes	| 开始时间(查询小于start) |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息  |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| pageid	 | int	| Yes	| 翻页页码，从0开始 |
| start	| uint	| Yes	| 开始时间(查询小于start) |
| datas	| []article	| Yes	| 文章列表，article format |

### 五、get group members (获取用户所在圈子的成员)
##### URL：/groups/members/get 
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| datas	| []author	| Yes	| 成员列表，author format |

### 六、check group member (判断用户所在圈子的成员)
##### URL：/groups/members/check 
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| isin	| bool	| Yes	| 是否是圈子的成员 |

### 七、add group member (增加用户所在圈子的成员)
##### URL：/groups/members/add
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	 |string	| Yes	| 本次数据的签名(version+ language+ groupdna + address+ uid + nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |  
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ groupdna + address+ uid + nonce)，sha3/keccak256算法 |

### 八、delete group member (删除用户所在圈子的成员)
##### URL：/groups/members/delete
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ groupdna + address+ uid + nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |  
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ groupdna + address+ uid + nonce)，sha3/keccak256算法 |

### 九、delete group member by group owner (由圈主删除用户所在圈子的成员)
##### URL：/groups/members/owner/delete
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| owneraddress	 | string	| Yes | 圈主的公钥地址 |
| owneruid	| string	| Yes	| 圈主(第三方平台唯一的用户编号) |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature | string | Yes	| 本次数据的签名(version+ language+ groupdna + address+ uid + owneraddress + owneruid + nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |  
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| owneraddress	| string	| Yes	| 圈主的公钥地址 |
| owneruid	| string	| Yes	| 圈主(第三方平台唯一的用户编号) |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ groupdna + address+ uid + owneraddress+ owneruid +nonce)，sha3/keccak256算法 |

### 十、get group article all (获取圈子的文章详细信息)
##### URL：/groups/articles/main/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| pageid	 | int	| Yes	| 翻页页码，从0开始 |
| start	| uint	| Yes	| 开始时间(查询小于start) |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |  
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
| start	| uint	| Yes	| 开始时间(查询小于start) |
| datas	| []grouparticleinfo	| Yes | 圈子文章列表详情, grouparticleinfo format |

### 十一、delete group article (删除圈子中某个成员的文章)
##### URL：/groups/articles/single/delete
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| articledna	| string	| Yes	| 文章dna |
| memberaddress	| string	| Yes | 转载人 |
| memberuid	 | string	| No	| 转载人(第三方平台唯一的用户编号)
| address	| string	| Yes	| 操作人 |
| uid	| string	| No	| 操作人(第三方平台唯一的用户编号) |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ groupdna + articledna + memberaddress + memberuid + address + uid +nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |  
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| articledna	| string	| Yes	| 文章dna |
| memberaddress	| string	| Yes | 转载人 |
| memberuid	 | string	| No	| 转载人(第三方平台唯一的用户编号) |
| address	| string	| Yes	| 操作人 |
| uid	| string	| No	| 操作人(第三方平台唯一的用户编号) |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ groupdna + articledna + memberaddress + memberuid + address + uid +nonce)，sha3/keccak256算法 |

### 十二、delete group all article (删除圈子中某个成员的所有文章)
##### URL：/groups/articles/all/delete
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| articledna	| string	| Yes	| 文章dna |
| memberaddress	| string	| Yes | 转载人 |
| memberuid	| string	| No	| 转载人(第三方平台唯一的用户编号) |
| address	| string	| Yes	| 操作人 |
| uid	| string	| No	| 操作人(第三方平台唯一的用户编号) |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ groupdna + articledna + memberaddress + memberuid + address + uid +nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| groupdna	| string	| Yes	| 圈子dna |
| articledna	| string	| Yes	| 文章dna |
| memberaddress	| string	| Yes | 转载人 |
| memberuid	| string	| No	| 转载人(第三方平台唯一的用户编号) |
| address	| string	| Yes	| 操作人 |
| uid	| string	| No	| 操作人(第三方平台唯一的用户编号) |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ groupdna + articledna + memberaddress + memberuid + address + uid +nonce)，sha3/keccak256算法 |

