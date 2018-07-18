# Primas Node API Documentation

## Timeline APIs

#### 1. Get account timeline

[GET] /accounts/{account_id}/timeline

Get all the shares in all the groups account has joined.
Notice that **if the same article is shared multiple times
in several adjacent shares, only the first one will show.**

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |

#### Response

`data` is an array of shares:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Share id. |
| src_id              | string  | n        | Content id. |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Share created time. Unix timestamp. |
| updated             | integer | n        | Share updated time. Unix timestamp. |
| status              | string  | n        | Fixed to "created". |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |
| dna                 | string  | n        | Latest share DNA. |
| content             | object  | n        | Share related content. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| account_name        | string  | n        | Account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. |

`extra` object:

| Name           | Type    | Optional | Description |
| -------------- | ------- | -------- | ----------------------------------------------- |
| share_id       | string  | n        | Parent share id. |
 
 `content` object contains the related [content metadata](./content.md#1-get-content-metadata):
 
 #### Example
 
 ```bash
 $ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'
 
 {"result_code":0,"data":{"dna":"", ...}}
 
 ```
