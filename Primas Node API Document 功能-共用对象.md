## Primas Node API Document 功能-共用对象

### Public object (共用对象)
##### chartinfo format （按天收益）
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| incentivetime	| int	| Yes	| 收益日期 |
| amount	| float64	| Yes	| 收益值 |

##### withdraw format（取现信息）
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| withdrawbegin	| uint	| Yes | 取现开始时间 |
| withdrawcheck	| uint	| Yes | 取现审核时间 |
| orderid	| string	| Yes	| 业务编号 |
| dindex	| uint	| Yes	| 用户取现序号 |
| nodeaddress	| string	| Yes	| 取现节点公钥 |
| amount | float64	| Yes	| 取现金额 |
| balance	| float64	| Yes	| 取现余额 |
| status	| uint	| Yes	| 取现状态 | 
| isdelete	| uint	| Yes	| 无效取现 |
| txstatus	| int	| Yes	| 区块链确认状态 |
| transactionhash | string	| Yes | 区块链交易哈希 |
| nodefee	| float64	| Yes	| 取现手续费 |

##### group format（圈子信息）
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| id	| uint	| Yes	| 编号 |
| groupdna	| string	| Yes	| 圈子的唯一标识 |
| createat	| uint	| Yes	| 创建时间 |
| useraddress	| string	| Yes	| 创建人 |
| uid	| string	| Yes	| 第三方平台唯一的用户编号 |
| title	| string	| Yes	| 圈子名称 |
| description	| string	| Yes	| 描述 |
| language	| string	| Yes	| 圈子的语言类型 |
| status	| int	| Yes	| 圈子的状态 |
| txstatus	| int	| Yes	| 圈子的上链状态 |
| membercount	| uint	| Yes	| 圈子的组员数 |
| articlecount	| uint	| Yes	| 圈子的文章数 |
| filepath	| string	| Yes	| 圈子头像 |
| imgheight	| int	| Yes	| 圈子头像的高度 |
| imgwidth	| int	| Yes	| 圈子头像的宽度 |
| ismember	| groupmember(object) | No | 圈主, groupmember fromat |
| grouparticle	 | []article	| No | 圈子的文章, article format |
| groupmembers	 | []groupmember | No | 圈子成员 groupmember format |

##### groupmember format（圈子成员信息）
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| id	| int	| Yes	| 用户编号 |
| createdat	 | uint	| Yes	| 创建时间 |
| memberaddress	| string	| Yes | 用户的公钥地址 |
| memberuid	 | string	| No	| 第三方平台唯一的用户编号 |
| name	| string	| Yes	| 用户的用户名，当uid填写后，此项也是必填 |
| file_path	| string	| Yes	| 用户头像 |
| height	| int	| Yes	| 用户头像高度 |
| width	| int	| Yes	| 用户头像宽度 |
| extra	| string	| Yes	| 自定义内容, 如简历 |

##### article format（文章信息）
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| id	| uint	| Yes	| 编号 |
| aritcledna	| string	| Yes	| 文章的唯一标识 |
| useraddress	| string	| Yes	| 文章作者 |
| useruid	| string	| No	| 文章作者(第三方平台唯一的用户编号) |
| title	| string	| Yes	| 文章标题 |
| abstract	| string	| Yes	| 文章摘要 |
| language	| string	| Yes	| 文章语言类型 |
| contenthash	| string	| Yes	| 文章内容hash值 |
| blockhash	| string	| Yes	| 区块Tx-Hash |
| extra	| string	| Yes	| 文章分类 |
| status	| int	| Yes	| 状态 |
| txstatus	| int	| Yes	| 区块状态 |
| likecount	| int	| Yes	| 总点赞数 |
| commentcount	| int	| Yes	| 总评论数 |
| sharecount	| int	| Yes	| 总转载数 |
| atype	| int	| Yes	| 文章类型 | 0=none, 1=iso_txt 2=ios_img 3=html |
| license	| string	| Yes	| 支持协议 |
| totoalincentives	| float64 | Yes | 文章收益 |
| blockheight	| int	| Yes	| 区块number |
| txhash	| string	| Yes	| 区块TxHash |
| treadop	| int	| Yes	| 举报处理结果 0=none, 1=tread_yes, 2=tread_no |
| standimgs	| []image	| No	| 文章中图片信息 |
| smallimgs	| []string	| No	| 文章中图片对应小图URL |
| author	| author(object)	| No | 文章作者信息 |

##### image format（图片信息）
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| id	| uint	| Yes	| 编号 |
| createdat	| uint	| Yes	| 创建时间 |
| updateat	| uint	| Yes	| 修改时间 |
| useraddress	| string	| Yes	| 创建图片的用户的公钥地址 |
| uid	| string	| Yes	| 第三方平台唯一的用户编号 |
| articledna	| string	| Yes	| 文章dna |
| filepath	| string	| Yes	| 图片URL地址 |
| height	| uint	| Yes	| 图片高度 |
| width	| uint	| Yes	| 图片宽度 |
| status	| int	| Yes	| 状态,默认0 |
| imgindex	| int	| Yes	| 图片位置 |
| isdel	| int	| Yes	| 是否有效 |

##### groupshare format（圈子转载信息）
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| id	| uint	| Yes	| 编号 |
| groupdna	| string	| Yes	| 圈子的dna |
| status	| bool	| Yes	| 是否已分享 |
| group	| group(object)	| Yes | 圈子详细信息，同上(group format) |

##### author format (作者信息)
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| id	| int	| Yes	| 用户编号 |
| createdat	| uint	| Yes	| 创建时间 |
| address	| string	| Yes	| 用户的公钥地址 |
| uid	| string	| No	| 第三方平台唯一的用户编号 |
| name	| string	| Yes	| 用户的用户名，当uid填写后，此项也是必填 |
| file_path	| string	| Yes	| 用户头像 |
| height	| int	| Yes	| 用户头像高度 |
| width	| int	| Yes	| 用户头像宽度 |
| extra	| string	| Yes	| 自定义内容, 如简历 |

##### userinfo format (文章、圈子信息)
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| article	| article(object)	 | Yes | 文章信息, article format |
| group	| []group	| Yes	| 圈子列表，group format |
| images	| []image	| Yes	| 文章图片列表, image format |
| smallimgs	 | []string	| Yes	| 小图片URL列表 |

##### articlecomment format (文章评论信息)
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| id	| int	| Yes	| 编号 |
| createdat |	uint	| Yes	| 创建时间 |
| groupdna	| string	| Yes	| 圈子dna |
| groupmemberaddress	| string | Yes | 评论用户的公钥地址 |
| groupmemberuid	| string	| Yes | 评论用户的uid(第三方平台唯一的用户编号) |
| articledna	| string	| Yes	| 文章的dna |
| content	| string	| Yes	| 评论的内容 |
| contenthash	| string	| Yes	| 评论的内容hash值, (content)sha3/keccak256算法 |
| txstatus	| int	| Yes	| 区块状态 |
| isdel	| uint	| Yes	| 是否可用 |
| ctype	| uint	| Yes	| 0=first, 1=second 2=more than second |
| toaddress	 | string	| Yes	| 对谁评论 |
| touid	| string	| No	| 对谁评论(第三方平台唯一的用户编号) |
| fromid	| uint	| Yes	| 对应哪个父id |
| author	| author(object)	| Yes | 评论者的详细信息， author format |
| toauthor	| author(object)	| Yes | 父评论者的详细信息 ，author format |
| subnum	 | uint	| Yes	| 子评论数 |
| subcomments	| []articlecomment | Yes | 子评论列表 |

##### articlecontent format (文章内容信息)
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- | 
| id	| int	| Yes	| 编号 |
| createdat	| uint	| Yes	| 创建时间 |
| dna	| string	| Yes	| 文章dna |
| content	| string	| Yes	| 文章内容 |

##### grouparticleinfo format (圈子文章信息)
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| id	| uint	| Yes	| 编号 |
| aritcledna	| string	| Yes	| 文章的唯一标识 |
| useraddress	| string	| Yes	| 文章作者 |
| useruid	| string	| No	| 文章作者(第三方平台唯一的用户编号) |
| title	| string	| Yes	| 文章标题 |
| abstract	| string	| Yes	| 文章摘要 |
| language	| string	| Yes	| 文章语言类型 |
| contenthash	| string	| Yes	| 文章内容hash值 |
| blockhash	| string	| Yes	| 区块Tx-Hash |
| extra	| string	| Yes	| 文章分类 |
| status	| int	| Yes	| 状态 |
| txstatus	| int	| Yes	| 区块状态 |
| likecount	| int	| Yes	| 总点赞数 |
| commentcount	| int	| Yes	| 总评论数 |
| sharecount	| int	| Yes	| 总转载数 |
| atype	| int	| Yes	| 文章类型 0=none, 1=iso_txt 2=ios_img 3=html |
| license	| string	| Yes	| 支持协议 |
| totoalincentives	| float64 | Yes | 文章收益 |
| blockheight	| int	| Yes	| 区块number |
| txhash	| string	| Yes	| 区块TxHash |
| treadop	| int	| Yes	| 举报处理结果 0=none, 1=tread_yes, 2=tread_no |
| standimgs	| []image	| Yes	| 文章中图片信息 |
| smallimgs	| []string	| Yes	| 文章中图片对应小图URL |
| author	| author(object) | Yes | 文章作者, author format |
| transfer	| author(object)	| No | 文章转载者, author format |
| groupdna	| string	| Yes	| 圈子dna | 
| groups	| []group	| Yes	| 文章已转载的圈子，group format |

##### incentive format (收益信息)
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| id	| int	| Yes	| 编号 |
| createdat	| uint	| Yes	| 创建时间 |
| incentivetype	| uint	| Yes | 收益类型 |
| address	| string	| Yes	| 用户公钥 |
| uid	| string	| Yes	| 用户(第三方平台唯一的用户编号) |
| articledna	| string	| Yes	| 文章dna |
| groupdna	| string	| Yes	| 圈子dna |
| amount	| float64	| Yes	| 收益 |
| status	| int	| Yes	| 状态 |
| score	| float64	| Yes	| hp值 |
| isdel	| uint	| Yes	| 是否可用 |
| incentivearticle	| article(object) | Yes | 文章 article format |
| incentivegroup	| group(object) | Yes | 圈子 group format |

##### tokenlock format (用户花费信息)
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| id	| int	| Yes	| 编号 |
| createdat	| uint	| Yes	| 创建时间 |
| useraddress	| string	| Yes	| 用户 |
| resourcetype	| uint	| Yes	| 类型 |
| amount	| float64	| Yes	| PST值 |
| expire	| uint	| Yes	| 有效期 | 
| isdel	| uint	| Yes	| 是否有效 |
| txstatus	| int	| Yes	| 区块状态 |
| txhash	| string	| Yes	| 区块txhash |
| blockheight	| uint | Yes | 区块高度number |

##### pretokenlock format (用户充值/预授权信息)
| Field(字段) | Type(类型) | Required(必填) | Comment(备注) |
| ------------ | ------------- | ------------ | ------------- |
| id	| int	| Yes	| 编号 |
| createdat	| uint	| Yes	| 创建时间 |
| nodeaddress	| string	| Yes	| 节点公钥 |
| useraddress	| string	| Yes	| 用户公钥 |
| amount	| float64	| Yes	| PST值 |
| nodefee	| float64	| Yes	| 手续费 |
| locktype	| uint	| Yes	| 充值/预授权 |
| txstatus	| int	| Yes	| 区块状态 |
| txhash	| string	| Yes	| 区块txhash |


