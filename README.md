# Primas Node API Documentation

**Notice: this document is in a working draft status.
We're still tweaking many aspects of the APIs.
Parameters are constantly changing. Examples are missing.
APIs can't be found on the mainnet.
We're trying our best to release it soon.**

### Version

3.0

### Introduction

Primas is a platform for premium quality content based on DTCP (Decentralized Trusted Content Protocol).
Primas uses blockchain technology to ensure the credibility of content, 
uses economic incentives to accelerate the generation and circulation of high-quality content,
and allows readers to see personalized, high-quality content through social recommendations.
Traditional Internet applications can also use APIs to access Primas,
immediately gaining access to the power Primas offers.

### Primas Node

Primas decentralized network is accessible through one of the Primas Nodes.
And every Primas Node exposes the same collection of APIs as described in this document.
To use these APIs, you need to find a live Primas Node or host one yourself.
Nodes hosted by the Primas development team are accessible at:

Testnet: [https://staging.primas.io](https://staging.primas.io)

Mainnet Nodes:

* Rigel A: [https://rigel-a.primas.network](https://rigel-a.primas.network)

### RESTful API and Transfer Encoding

APIs are served using standard RESTful methods with HTTPS. For posting, both JSON and Form-Data are
supported for request body. Data sent from Primas Node is always in JSON format.

To post data in JSON format, set `Content-Type` to `application/json` in http header. To post using
Form-Data, set `Content-Type` to `application/x-www-form-urlencoded` or `multipart-formdata` to upload images.

API should be prefixed with API version. For example, when trying to get the metadata for an article.
We should call:

`GET https://staging.primas.io/v3/content/1GFYUNP815RUIFDNNRKLNU78RPCFLNL5DWGT7EXODHFVRCRVXJ`

The response data will always include a field `result_code` indicating the invocation status.
On successful invocation `result_code` will be `0`. And the response data is in the field `data`. Otherwise `result_code` will be the corresponding
error type while at the same time there will be another field `result_msg` containing the detailed
description of the error.

### DTCP Metadata

Primas is built upon DTCP. A lot of APIs are transferring data in the DTCP standard. Check [this document](./dtcp.md) for
a detailed explanation about DTCP and its usage in Primas.

### API Batch Post

APIs creating object, such as posting article, creating group, sharing article, all support batch post. Batch post can
only be used with JSON format posting. To post in batch, simply pass a JSON array whose elements are the same group of
metadata passed when creating a single object. The returning `data` field becomes an array containing the corresponding
data for each metadata in the same order then.

### API Categories

* [Account](./account.md)
* [Content](./content.md)
* [Group](./group.md)
* [Token](./token.md)
* [Timeline](./timeline.md)
* [Query](./query.md)
* [Node](./node.md)
* [System](./system.md)

### Error Code and Troubleshooting

| result_code	| result_msg | description |
| ------------ | ------------- | ------------- |
| 0	| success | Success|
| 400 | client error | Client error|
| 401	| invalid data | Invalid post data |
| 402 | parse input JSON format error | Invalid JSON string |
| 403 | client signature error | Signature verification failed |
| 404	| input parameter error | Invalid parameter |
| 405	| input parameter empty | Empty parameter |
| 406	| nonce less than lasted | Nonce is used before |
| 500	| server error | Server error |