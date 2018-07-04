## Primas Node API Document 接入指南-返回码和问题诊断
开发者每次调用接口时，可能获得正确或者错误的返回码，开发者可以根据返回码信息调试接口，诊断问题，排查错误。

### request result id(请求返回码)
| result_code(请求返回码)	| result_msg(返回码描述) | problem diagnosis(问题诊断) |
| ------------ | ------------- | ------------- |
| 200	| success | 调用成功|
| 400 | client error |
| 401	| invalid data | 无效的数据 |
| 402 | parse input JSON format error | 数据不符合JSON的语法结构|
| 403 | client signature error | 签名校验失败 |
| 404	| input parameter error | 输入的参数错误 |
| 405	| input parameter empty | 输入的参数是空值 |
| 406	| nonce less than lasted | nonce错误 |
| 500	| server error | 服务端错误 |


