## Primas Node API Document 接入指南- 快速入门
### Project environment(项目环境)
| Item(项目) | Comment(备注) |
| ------------ | ------------- | 
| current API version(当前版本) | v2.10.17 |
| test URL(测试地址) | https://staging.primas.io/v3 |
| interface protocol(接口协议) | https |
| request method(请求方法)	| POST |
| input format(入参格式)	 | JSON or form-data |
| Content-Type | application/json or image/jpeg(jpeg, jpg, png) |
| output format(出参格式) | JSON |

#### 第一步、开发环境的说明 
Primas Node API 为第三方内容平台的开发者提供两套环境：测试环境和正式环境
测试环境地址: https://staging.primas.io/v3
正式环境地址: 联系Primas Node的联系人，确认无误予以接入

#### 第二步、数据签名
对于增加类型的数据，如增加用户，发布文章等，需要对推送的消息数据进行安全验证，即数据签名。Primas Node 对此类数据进行签名验证，对于非法的数据不接受并予以错误返回，验证通过的数据处理后正确返回。

对于非增加类型的数据，比如获取用户信息，获取文章详情信息等，不需要数据签名，忽略此步骤。

#### 第三步、发送和接受消息
调用Primas Node的URL需要使用https POST方法，参数有两种情况：
一种是消息型，参数以JSON的形式组织到请求body中，Context-Type为application/json, Primas Node API处理后返回JSON形式的数据。
另一种是文件型，主要是图片类型，包括用户头像，圈子头像等，参数以form-data的形式组织到请求body中，Content-Type为: image/jpeg 、image/jpg 、image/png, Primas Node API处理后返回JSON形式的数据。

#### 第四步、调用Primas Node API 接口
在完成前面步骤的工作之后，开发者就可以按照开发者文章中业务接口规范调用Primas Node API 对应的服务类。


