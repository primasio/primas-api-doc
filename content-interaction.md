# Primas Node API Documentation

## Content Interaction APIs
In Primas, content interactions(like, comment, share) can only happen
in groups. And interactions in a given group are only visible to this group.
When interacting with content, the corresponding group id must be provided.

### 1. Get share metadata

[GET] /shares/{share_id}

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| account_id         | string   | y        | Account id. Account related status will be returned.|

#### Response

`data` is the metadata of a share:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Share id. |
| src_id              | string  | n        | Content id. |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Share created time. Unix timestamp. |
| updated             | integer | n        | Share updated time. Unix timestamp. |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |
| dna                 | string  | n        | Latest share DNA. |
| transaction_id      | string  | n        | Latest transaction id. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| account_name        | string  | n        | Account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. |

`extra` object:

| Name           | Type    | Optional | Description |
| -------------- | ------- | -------- | ----------------------------------------------- |
| share_id       | string  | y        | Parent share id. |
| likes_total    | integer | n        | Total likes number.    |
| comments_total | integer | n        | Total comments number. |
| shares_total   | integer | n        | Total shares number.   |
| pst_total      | big integer | n    | Total PST earned.      |
| pst_updated    | integer | n        | Last PST updated time. Unix timestamp. |
| is_liked       | bool    | y        | Whether current account liked this share. |
| content        | object  | n        | Share related content. |
| report         | object  | y        | Report metadata. |

`content` object contains the related [content metadata](./content.md#1-get-content-metadata).

`report` object contains the related [report metadata](./content-interaction.md#3-get-share-reports).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 2. Get the shares of a group share

[GET] /shares/{share_id}/shares

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| account_id         | string   | y        | Account id filter.                                  |

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
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |
| dna                 | string  | n        | Latest share DNA. |
| transaction_id      | string  | n        | Latest transaction id. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| account_name        | string  | n        | Account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. |

`extra` object:

| Name           | Type    | Optional | Description |
| -------------- | ------- | -------- | ----------------------------------------------- |
| share_id       | string  | n        | Parent share id. |
| likes_total    | integer | n        | Total likes number.    |
| comments_total | integer | n        | Total comments number. |
| shares_total   | integer | n        | Total shares number.   |
| pst_total      | big integer | n    | Total PST earned.      |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 3. Get share reports

[GET] /shares/{share_id}/reports

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| report_status      | string   | y        | Status filter. "pending", "approved" or "declined". |

#### Response

`data` is an array of reports:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Report id. |
| src_id              | string  | n        | Account id. |
| dest_id             | string  | n        | Share id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Report created time. Unix timestamp. |
| updated             | integer | n        | Report updated time. Unix timestamp. |
| extra               | object  | n        | Extra metadata. |
| dna                 | string  | n        | Latest report DNA. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |
| transaction_id      | string  | n        | Latest transaction id. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| account_name        | string  | n        | Account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. |

`extra` object:

| Name          | Type    | Optional | Description |
| ------------- | ------- | -------- | ------------------------------------------------ |
| content       | string  | n        | Content URI. In the case of IPFS, a link starts with "ipfs://" |
| content_hash  | string  | n        | Lowercase hex string of the SHA256 hash of the raw content. |
| report_type   | string  | n        | Report type. |
| report_status | string  | n        | "pending", "approved" or "declined". |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 4. Report share

[POST] /shares/{share_id}/reports

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "share_report". |
| src_id              | string  | n        | Account id. |
| dest_id             | string  | n        | Share id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Report created time. Unix timestamp. |
| status              | string  | n        | Fixed to "created". |
| extra               | object  | n        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

`extra` object:

| Name          | Type    | Optional | Description |
| ------------- | ------- | -------- | ------------------------------------------------ |
| content       | string  | n        | base64 encoded report [content](./dtcp.md#content-format). |
| content_hash  | string  | n        | Lowercase hex string of the SHA256 hash of the raw content. |
| report_type   | string  | n        | Report type. |
| report_status | string  | n        | Fixed to "pending". |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| id      | string  | n        | Report id. |
| dna     | string  | n        | Report DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 5. Get the likes of a group share

[GET] /shares/{share_id}/likes

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| account_id         | string   | y        | Account id filter.                                  |

#### Response

`data` is an array of likes:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Like id. |
| src_id              | string  | n        | Account id. |
| dest_id             | string  | n        | Share id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Like created time. Unix timestamp. |
| updated             | integer | n        | Like updated time. Unix timestamp. |
| dna                 | string  | n        | Like DNA. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |
| transaction_id      | string  | n        | Latest transaction id. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| account_name        | string  | n        | Account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 6. Like a group share

[POST] /shares/{share_id}/likes

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "share_like". |
| src_id              | string  | n        | Account id. |
| dest_id             | string  | n        | Share id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Like created time. Unix timestamp. |
| status              | string  | n        | Fixed to "created". |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

#### Response

| Name   | Type   | Optional | Description   |
| ------ | ------ | -------- | ------------- |
| id     | string | n        |  Like id.     |
| dna    | string | n        |  Like dna.    |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 7. Cancel the like of a group share

[DELETE] /shares/{share_id}/likes/{like_id}

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "share_like". |
| parent_dna          | string  | n        | Latest DNA of the like. |
| updated             | integer | n        | Like updated time. Unix timestamp. |
| status              | string  | n        | Fixed to "deleted". |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

#### Response

| Name   | Type   | Optional | Description   |
| ------ | ------ | -------- | ------------- |
| dna    | string | n        |  Like dna.    |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 8. Get the comments of a group share

[GET] /shares/{share_id}/comments

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| account_id         | string   | y        | Account id filter.                                  |

#### Response

`data` is an array of top level comments:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Comment id. |
| src_id              | string  | n        | Account id. |
| dest_id             | string  | n        | Share id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Comment created time. Unix timestamp. |
| updated             | integer | n        | Comment created time. Unix timestamp. |
| extra               | object  | n        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |
| transaction_id      | string  | n        | Latest transaction id. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| account_name        | string  | n        | Account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. |

`extra` object:

| Name              | Type    | Optional | Description |
| ----------------- | ------- | -------- | ------------------------------------------------ |
| content           | string  | n        | Comment content. |
| comments          | array   | n        | Replying comments overview. |

`comments` is an array of replying comments.

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 9. Get replying comments of a comment

[GET] /comments/{comment_id}/reply/comments

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 10. Comment a group share

[POST] /shares/{share_id}/comments

The way comment content is processed is the same as [post content API](./content.md#3-post-content).

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "share_comment". |
| src_id              | string  | n        | Account id. |
| dest_id             | string  | n        | Share id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Comment created time. Unix timestamp. |
| status              | string  | n        | Fixed to "created". |
| extra               | object  | n        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

`extra` object:

| Name              | Type    | Optional | Description |
| ----------------- | ------- | -------- | ------------------------------------------------ |
| parent_comment_id | string  | y        | Parent comment id.                               |
| content           | string  | n        | Comment content. |
| content_hash      | string  | n        | Lowercase hex string of the SHA256 hash of the raw content. |

#### Response

| Name   | Type   | Optional | Description   |
| ------ | ------ | -------- | ------------- |
| id     | string | n        |  Comment id.     |
| dna    | string | n        |  Comment dna.    |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 11. Update the comment of a group share

[PUT] /shares/{share_id}/comments/{comment_id}

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "share_comment". |
| parent_dna          | string  | n        | Latest comment DNA. |
| creator             | string  | n        | creator. |
| updated             | integer | n        | Comment updated time. Unix timestamp. |
| status              | string  | n        | Fixed to "updated". |
| extra               | object  | n        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |

`extra` object:

| Name          | Type    | Optional | Description |
| ------------- | ------- | -------- | ------------------------------------------------ |
| content       | string  | n        | Comment content. |
| content_hash  | string  | n        | Lowercase hex string of the SHA256 hash of the raw content. |

#### Response

| Name   | Type   | Optional | Description   |
| ------ | ------ | -------- | ------------- |
| dna    | string | n        |  Comment dna.    |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 12. Delete the comment of a group share

[DELETE] /shares/{share_id}/comments/{comment_id}

This API can be used by both the comment creator or the group owner.

When delete comment by the group owner, the group owner's info must be
filled in the `creator` field and group owner's account is used to generate signature.

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "share_comment". |
| parent_dna          | string  | n        | Latest comment DNA. |
| status              | string  | n        | Fixed to "deleted". |
| updated             | integer | n        | Comment updated time. Unix timestamp. |
| creator             | object  | y        | Creator. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |

#### Response

| Name   | Type   | Optional | Description   |
| ------ | ------ | -------- | ------------- |
| dna    | string | n        |  Comment dna.    |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```
