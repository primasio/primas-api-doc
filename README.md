# Primas Node API Documentation

**Notice: this document is in a working draft status.
We're still tweaking many aspects of the APIs.
Parameters are constantly changing. Examples are missing.
APIs can't be found on the mainnet.
We're trying our best to release it soon.**

**Status update: This document is almost finalized. Our focus is on the SDK now. The API examples will be
provided with the implementation and testing of the SDK. The parameters of APIs might still be changed slightly
during this process.**

**Join Primas developer community on Slack: [https://slack.primas.io](https://slack.primas.io/)**

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

### Getting Started

[The getting started guide](./getting-started.md) will walk you through the general process of connecting a 
traditional content application to Primas. Be sure to check the [basic concepts](./dtcp.md) about Primas and
DTCP before you start.

### RESTful API and Transfer Encoding

APIs are served using standard RESTful methods with HTTPS. For posting, both JSON and Form-Data are
supported for request body. Data sent from Primas Node is always in JSON format.

To post data in JSON format, set `Content-Type` to `application/json` in http header. To post using
Form-Data, set `Content-Type` to `application/x-www-form-urlencoded` or `multipart-formdata` to upload images.

API should be prefixed with API version. For example, when trying to get the metadata for an article.
We should call:

`GET https://staging.primas.io/v3/content/1GFYUNP815RUIFDNNRKLNU78RPCFLNL5DWGT7EXODHFVRCRVXJ`

The response data will always include a field `result_code` indicating the invocation status.
On successful invocation `result_code` will be `0`. And the response data is in the field `data`.
Otherwise `result_code` will be the corresponding error type while at the same time there will be another field
`result_msg` containing the detailed description of the error.

### DTCP Metadata

Primas is built upon DTCP. A lot of APIs are transferring data in the DTCP standard. Check
[the DTCP brief introduction](./dtcp.md) for a detailed explanation about DTCP and its usage in Primas.

### API Batch Post

APIs creating object, such as posting article, creating group, sharing article, all support batch post. Batch post can
only be used with JSON format posting. To post in batch, simply pass a JSON array whose elements are the same group of
metadata passed when creating a single object. The returning `data` field becomes an array containing the corresponding
data for each metadata in the same order then.

### API List

- [Content APIs](./content.md#content-apis)
  * [Content Licensing](./content.md#content-licensing)
  * [Content Format](./content.md#content-format)
  * [1. Get content metadata](./content.md#1-get-content-metadata)
  * [2. Get raw content](./content.md#2-get-raw-content)
  * [3. Post content](./content.md#3-post-content)
  * [4. Update content](./content.md#4-update-content)
- [Content Interaction APIs](./content-interaction.md#content-interaction-apis)
  * [1. Get share metadata](./content-interaction.md#1-get-share-metadata)
  * [2. Get the shares of a group share](./content-interaction.md#2-get-the-shares-of-a-group-share)
  * [3. Get share reports](./content-interaction.md#3-get-share-reports)
  * [4. Report share](./content-interaction.md#4-report-share)
  * [5. Get the likes of a group share](./content-interaction.md#5-get-the-likes-of-a-group-share)
  * [6. Like a group share](./content-interaction.md#6-like-a-group-share)
  * [7. Cancel the like of a group share](./content-interaction.md#7-cancel-the-like-of-a-group-share)
  * [8. Get the comments of a group share](./content-interaction.md#8-get-the-comments-of-a-group-share)
  * [9. Get replying comments of a comment](./content-interaction.md#9-get-replying-comments-of-a-comment)
  * [10. Comment a group share](./content-interaction.md#10-comment-a-group-share)
  * [11. Update the comment of a group share](./content-interaction.md#11-update-the-comment-of-a-group-share)
  * [12. Delete the comment of a group share](./content-interaction.md#12-delete-the-comment-of-a-group-share)
- [Group APIs](./group.md#group-apis)
  * [1. Get group metadata](./group.md#1-get-group-metadata)
  * [2. Create group](./group.md#2-create-group)
  * [3. Update group](./group.md#3-update-group)
  * [4. Dismiss group](./group.md#4-dismiss-group)
  * [5. Get group members](./group.md#5-get-group-members)
  * [6. Join group](./group.md#6-join-group)
  * [7. Approve or decline member application](./group.md#7-approve-or-decline-member-application)
  * [8. Quit group or kick member out](./group.md#8-quit-group-or-kick-member-out)
  * [9. Get group member whitelist](./group.md#9-get-group-member-whitelist)
  * [10. Add group member whitelist](./group.md#10-add-group-member-whitelist)
  * [11. Approve or decline group member whitelist](./group.md#11-approve-or-decline-group-member-whitelist)
  * [12. Quit group member whitelist](./group.md#12-quit-group-member-whitelist)
  * [13. Get group shares](./group.md#13-get-group-shares)
  * [14. Share to a group](./group.md#14-share-to-a-group)
  * [15. Approve or decline share application](./group.md#15-approve-or-decline-share-application)
  * [16. Delete group share](./group.md#16-delete-group-share)
  * [17. Get group avatar metadata](./group.md#17-get-group-avatar-metadata)
  * [18. Get group avatar raw image](./group.md#18-get-group-avatar-raw-image)
- [Account APIs](./account.md#account-apis)
  * [1. Get account metadata](./account.md#1-get-account-metadata)
  * [2. Create account](./account.md#2-create-account)
  * [3. Update account metadata](./account.md#3-update-account-metadata)
  * [4. Get account credits list](./account.md#4-get-account-credits-list)
  * [5. Get account content list](./account.md#5-get-account-content-list)
  * [6. Get account groups list](./account.md#6-get-account-groups-list)
  * [7. Get account shares](./account.md#7-get-account-shares)
  * [8. Get account shares in a single group](./account.md#8-get-account-shares-in-a-single-group)
  * [9. Get account likes](./account.md#9-get-account-likes)
  * [10. Get account comments](./account.md#10-get-account-comments)
  * [11. Get account group applications](./account.md#11-get-account-group-applications)
  * [12. Get account share applications](./account.md#12-get-account-share-applications)
  * [13. Get account report list](./account.md#13-get-account-report-list)
  * [14. Get account notifications](./account.md#14-get-account-notifications)
  * [15. Get account avatar metadata](./account.md#15-get-account-avatar-metadata)
  * [16. Get account avatar raw image](./account.md#16-get-account-avatar-raw-image)
- [Token APIs](./token.md#token-apis)
  * [1. Get account tokens data](./token.md#1-get-account-tokens-data)
  * [2. Get incentives list](./token.md#2-get-incentives-list)
  * [3. Get incentives statistics list](./token.md#3-get-incentives-statistics-list)
  * [4. Get incentives withdrawal list](./token.md#4-get-incentives-withdrawal-list)
  * [5. Withdraw incentives](./token.md#5-withdraw-incentives)
  * [6. Get token pre-lock list](./token.md#6-get-token-pre-lock-list)
  * [7. Pre-lock tokens](./token.md#7-pre-lock-tokens)
  * [8. Unlock pre-locked tokens](./token.md#8-unlock-pre-locked-tokens)
  * [9. Get token lock list](./token.md#9-get-token-lock-list)
- [Timeline APIs](./timeline.md#timeline-apis)
  * [1. Get account timeline](./timeline.md#1-get-account-timeline)
- [Query APIs](./query.md#query-apis)
  * [1. Query all APIs](./query.md#1-query-all-apis)
- [System APIs](./system.md#system-apis)
  * [1. Get system parameters](./system.md#1-get-system-parameters)
- [Node APIs](./node.md#node-apis)
  * [1. Get node list](./node.md#1-get-node-list)

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