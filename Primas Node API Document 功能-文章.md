## Primas Node API Document 功能-文章
### 一、article list (文章列表)
##### URL：/articles/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| pageid	 | int	| Yes	| 翻页页码，从0开始 |
| start	| uint	| Yes	| 开始时间(查询小于start) |
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
| start	| uint	| Yes	| 开始时间(查询小于start) |
| datas	| []article	| Yes	| 收集的文章, userinfo format |

### 二、article publish（文章发布）
##### URL：/articles/publish/add
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| title	| string	| Yes	| 文章标题 |
| content	| string	| Yes	| 文章内容 |
| contenthash	| string	| Yes	| 文章内容hash，(content)sha3/keccak256算法|
| atype	| int	| Yes	| 文章类型 0=none, 1=ios_txt 2=ios_img 3=html |
| license	| string	| Yes	| 支持协议 |
| images | string |	Yes	| 文章中包含的图片列表，发布文章先上传图片，把返回的图片URL放入此列表中，中间用逗号","分隔 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature |	string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ title+content +images+ nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| title	| string	| Yes	| 文章标题 |
| content	| string	| Yes	| 文章内容 |
| contenthash	| string	| Yes	| 文章内容hash，(content)sha3/keccak256算法|
| atype	| int	| Yes	| 文章类型 0=none, 1=ios_txt 2=ios_img 3=html |
| license	| string	| Yes	| 支持协议 |
| images	| string	| Yes	| 文章中包含的图片列表，发布文章先上传图片，把返回的图片URL放入此列表中，中间用逗号","分隔 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ title+content +images+ nonce)，sha3/keccak256算法 |

### 三、article content (获取单篇文章内容)
##### URL：/articles/content/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址  |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| content	| string	| Yes	| 文章内容 |

### 四、get article info(获取文章信息)
##### URL：/articles/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| article	| article(object)	| Yes | 文章详情,article format |

### 五、article like (文章点赞)
##### URL：/articles/likes/add
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| groupdna	| string | Yes	| 文章所在的圈子 |
| hp	| int	| Yes	| 消耗hp值 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ articledna + groupdna + hp + nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| groupdna	| string 	| Yes	| 文章所在的圈子 |
| hp	| int	| Yes	| 消耗hp值 |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature |	string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ articledna + groupdna + hp + nonce)，sha3/keccak256算法 |

### 六、get article comment (获取文章评论)
##### URL：/articles/comments/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
| start	| uint	| Yes	| 开始时间(查询小于start) |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid | string	 | No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| pageid	 | int	| Yes	| 翻页页码，从0开始 |
| start	| uint	| Yes	| 开始时间(查询小于start) |
| count	| int	| Yes	| 评论数 |
| comments	| []articlecomment | Yes | 评论评论列表,articlecomment format|

### 七、get article sub comment (获取文章评论的评论)
##### URL：/articles/subcomments/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| fromid	 | int	| Yes	| 父评论id |
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
| articledna	| string	| Yes	| 文章dna |
| fromid	 |int	| Yes	| 父评论id |
| pageid	| int	| Yes	| 翻页页码，从0开始 |
| parentobj	 | articlecomment(object) | Yes | 父评论 |
| subobjs	| []articlecomment | Yes | 子评论集 | 

### 八、collect article(收藏文章)
##### URL：/articles/collections/add
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| groupdna	| string	| Yes	| 圈子dna |
| status	 | int	| Yes	| 文章收藏状态  |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	 | string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ articledna + groupdna + status + nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| groupdna	| string	| Yes	| 圈子dna |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ articledna + groupdna + status + nonce)，sha3/keccak256算法 |
| status	| int	| Yes	| 文章收藏状态  |
| isdel	| int	| Yes	| 是否有效 |

### 九、update collect article status(修改收藏文章状态)
##### URL：/articles/collections/status/add
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| groupdna	| string	| Yes	| 圈子dna |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ articledna + groupdna + nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| groupdna	| string	| Yes	| 圈子dna |
| status	| int	| Yes	| 文章收藏状态 | 
| isdel	| int	| Yes	| 是否有效 |

### 十、article comment (文章评论)
##### URL：/articles/comments/add
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| groupdna	| string	| Yes	| 圈子dna |
| hp	| int	| Yes	| 消耗hp值 |
| content	| string	| Yes	| 评论内容 |
| contenthash	| string	| Yes	| 评论的内容hash值, (content)sha3/keccak256算法 |
| ctype	| int	| Yes	| 0=first, 1=second 2=more than second |
| toaddress	| string	| Yes	| 对谁评论 |
| touid	| string	| Yes	| 对谁评论(第三方平台唯一的用户编号) |
| fromid	| uint	| Yes	| 父评论id |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	 | string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ articledna + groupdna + hp + content + ctype + toaddress + touid + fromid + nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| groupdna	| string	| Yes	| 圈子dna |
| hp	| int	| Yes	| 消耗hp值 |
| content	| string	| Yes	| 评论内容 |
| contenthash	| string	| Yes	| 评论的内容hash值, (content)sha3/keccak256算法 |
| ctype	| int	| Yes	| 0=first, 1=second 2=more than second |
| toaddress	| string	| Yes	| 对谁评论 |
| touid	| string	| Yes	| 对谁评论(第三方平台唯一的用户编号) |
| fromid	| uint	| Yes	| 父评论id |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ articledna + groupdna + hp + content + ctype + toaddress + touid + fromid + nonce)，sha3/keccak256算法 |
| txstatus	| int	| Yes	| 区块状态 |
| createdat	 | int	| Yes	| 创建时间  |

### 十一、article share (文章转载)
##### URL：/articles/groups/share/add
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| fromgroupdna	| string	| Yes	| 从哪个圈子dna |
| hp	| int	| Yes	| 消耗hp值 |
| groupdnas	 |[]string	| Yes	| 转载到哪些圈子dna |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ articledna + fromgroupdna + hp groupdnas（数组字符串拼接） + nonce)，sha3/keccak256算法 |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| fromgroupdna	| string	| Yes	| 从哪个圈子dna |
| hp	| int	| Yes	| 消耗hp值 |
| groupdnas	| []string	| Yes	| 转载到哪些圈子dna |
| nonce	| int	| Yes	| 从获取nonce接口获取后加1 |
| signature	| string	| Yes	| 本次数据的签名(version+ language+ address+ uid+ articledna + fromgroupdna + hp + groupdnas（数组字符串拼接） + nonce)，sha3/keccak256算法 |

### 十二、get article detail(获取文章详情)
##### URL：/articles/detail/get
##### input format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| articledna	| string	| Yes	| 文章dna |
##### output format
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| result_code	| int	| Yes	| 返回值, 具体查阅返回值列表 |
| result_msg	| string	| Yes	| 返回提示信息 |
| version	| string	| Yes	| 版本号 |
| language	| string	| Yes	| 语言; 如: zh, en, ja |
| articledna	| string	| Yes	| 文章dna |
| article	| article(object)	| Yes | 文章信息article format |
| content	| articlecontent(object) | Yes | 文章内容,articlecontent format |
| group	| []group(object)	| Yes | 文章所在圈子列表, group format |
| comment	| []articlecomment | Yes |文章评论列表,articlecomment format | 

