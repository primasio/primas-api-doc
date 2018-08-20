# Primas Node API Documentation

## Account APIs

### 1. Get account metadata

[GET] /accounts/{account_id}/metadata

[GET] /accounts/{account_id}/sub/{sub_account_id}/metadata

#### Response

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Account id. |
| address             | string  | n        | Account address. |
| title               | string  | n        | Account name. |
| abstract            | string  | y        | Description. |
| avatar              | string  | y        | An image id used for avatar. |
| creator             | object  | y        | Creator of the [sub account](./dtcp.md#sub-accounts). |
| created             | integer | n        | Account creation time. Unix timestamp. |
| updated             | integer | n        | Account last updating time. Unix timestamp. |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |
| dna                 | string  | n        | DNA of the account. |
| credits             | integer | n        | Current credits. |
| transaction_id      | string  | n        | Latest transaction id. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name        | string  | n        | Root account name. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| hash                | string  | y        | In the case of proof of existence of secret data. The hash can be filled in this field. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 2. Create account

[POST] /accounts

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "object". |
| tag                 | string  | n        | Fixed to "account". |
| name                | string  | n        | Name. |
| abstract            | string  | y        | Description. |
| avatar              | string  | y        | An image id used for avatar. |
| creator             | object  | y        | Creator. Required when creating [sub account](./dtcp.md#sub-accounts). |
| created             | integer | n        | Account creation time. Unix timestamp. |
| extra               | object  | y        | Extra metadata. |
| status	          | string	| n	       | Fixed to "created". |
| address	          | string	| n	       | Ethereum address, start with "0x" |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| sub_account_id      | string  | n        | Sub account id. This id is provided by the third-party application. Usually the id in the application system is used directly. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| hash                | string  | y        | In the case of proof of existence of secret data. The hash can be filled in this field. |

#### Response

| Name  | Type   | Optional | Description                                                |
| ----- | ------ | -------- | ---------------------------------------------------------- | 
|  id   | string | y        | The id of the account. No id is returned for sub accounts. |
|  dna  | string | n        | The DNA of the account.                                    |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 3. Update account metadata

[PUT] /accounts/{account_id}

For updating, only the changed metadata need to be provided.

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "object". |
| tag                 | string  | n        | Fixed to "account". |
| parent_dna          | string  | n        | The latest DNA of the account. |
| status              | string  | n        | Fixed to "updated".            |
| updated             | integer | n        | Updating time. Unix timestamp. |
| name                | string  | y        | Name. |
| abstract            | string  | y        | Description. |
| avatar              | string  | y        | An image DNA used for avatar. |
| creator             | object  | y        | Creator. Required when updating [sub account](./dtcp.md#sub-accounts). |
| extra               | object  | y        | Extra metadata. |
| address	          | string	| n	       | Ethereum address, start with "0x" |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| sub_account_id      | string  | n        | Sub account id. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| hash                | string  | n        | In the case of proof of existence of secret data. The hash can be filled in this field. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| dna | string | n | Updated DNA of the (sub) account. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 4. Get account credits list

[GET] /accounts/{account_id}/credits

[GET] /accounts/{account_id}/sub/{sub_account_id}/credits


### 5. Get account content list

[GET] /accounts/{account_id}/content

[GET] /accounts/{account_id}/sub/{sub_account_id}/content

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |

#### Response

`data` is an array of [content](./content.md#1-get-content-metadata).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 6. Get account groups list

[GET] /accounts/{account_id}/groups

[GET] /accounts/{account_id}/sub/{sub_account_id}/groups

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |

#### Response

`data` is an array of [group](./group.md#1-get-group-metadata).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 7. Get account shares

[GET] /accounts/{account_id}/shares

[GET] /accounts/{account_id}/sub/{sub_account_id}/shares

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| application_status | string   | y        | Status filter. "pending", "approved" or "declined". |

#### Response

`data` is an array of [group shares](./group.md#9-get-group-shares).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 8. Get account shares in a single group

[GET] /accounts/{account_id}/groups/{group_id}/shares

[GET] /accounts/{account_id}/sub/{sub_account_id}/groups/{group_id}/shares

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| application_status | string   | y        | Status filter. "pending", "approved" or "declined". |

#### Response

`data` is an array of [group shares](./group.md#9-get-group-shares).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 9. Get account likes 

[GET] /accounts/{account_id}/likes

[GET] /accounts/{account_id}/sub/{sub_account_id}/likes

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |

#### Response

`data` is an array of [likes](./content-interaction.md#4-get-the-likes-of-a-group-share).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 10. Get account comments  

[GET] /accounts/{account_id}/comments

[GET] /accounts/{account_id}/sub/{sub_account_id}/comments

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |

#### Response

`data` is an array of [comments](./content-interaction.md#7-get-the-comments-of-a-group-share).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 11. Get account group applications

[GET] /accounts/{account_id}/applications/groups

[GET] /accounts/{account_id}/sub/{sub_account_id}/applications/groups

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| application_status | string   | y        | "pending", "approved" or "declined".                |

#### Response

`data` is an array of [group member](./group.md#5-get-group-members).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 12. Get account share applications

[GET] /accounts/{account_id}/applications/shares

[GET] /accounts/{account_id}/sub/{sub_account_id}/applications/shares

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| application_status | string   | y        | "pending", "approved" or "declined".                |

#### Response

`data` is an array of [share](./content-interaction.md#1-get-share-metadata).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 13. Get account report list

[GET] /accounts/{account_id}/reports

[GET] /accounts/{account_id}/sub/{sub_account_id}/reports

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| report_status      | string   | y        | "pending", "approved" or "declined".                |

#### Response

`data` is an array of [report](./content-interaction.md#3-get-share-reports).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 14. Get account notifications

[GET] /accounts/{account_id}/notifications

[GET] /accounts/{account_id}/sub/{sub_account_id}/notifications

The notification read status cannot be recorded in a decentralized system. To implement read status
in clients, client should record a timestamp about the last time notifications are fetched. When calling
API the timestamp should be passed as `start_time` to retrieve only the notifications after and mark
them as unread notifications.

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| start_time         | integer  | y        | List from this time. Unix timestamp.                |

#### Response

`data` is an array of notifications:

| Name                | Type    | Optional | Description                              |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Notification type.                       |
| created             | integer | n        | Notification creation time.              |
| object_id           | string  | y        | Notification related object id.          |
| extra               | object  | y        | Extra metadata.                          |

**Notification Types:**

* Share
  * `share_liked` - Share is liked
  * `share_commented` - Share is commented
  * `share_shared` - Share is shared
* Report
  * `report_processed` - Report is processed
* Group
  * `member_application` - New group member application
  * `member_application_processed` - Group member application processed
  * `share_application` - New group share application
  * `share_application_processed` - Group share application processed
* Incentives
  * `incentives` - Incentives calculated
  * `withdrawal_processed` - Withdrawal processed
* Token
  * `pre_lock_success` - Token pre-lock success
  * `pre_lock_unlocked` - Token pre-lock unlocked

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 15. Get account avatar metadata

[GET] /accounts/{account_id}/avatar

[GET] /accounts/{account_id}/sub/{sub_account_id}/avatar

#### Response

`data` is [content](./content.md#1-get-content-metadata) metadata.

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 16. Get account avatar raw image

[GET] /accounts/{account_id}/avatar/raw

[GET] /accounts/{account_id}/sub/{sub_account_id}/avatar/raw

Primas Node can build local cache of raw image for accessing speed. Or redirect the request to
image URI for raw content directly.

#### Response

Response is raw image data.

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```

### 17. Get address metadata

[GET] /main/accounts/{address}/metadata

Get main account metadata by address.

#### Response

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Account id. |
| address             | string  | n        | Account address. |
| title               | string  | n        | Account name. |
| abstract            | string  | y        | Description. |
| avatar              | string  | y        | An image id used for avatar. |
| creator             | object  | y        | Creator of the [sub account](./dtcp.md#sub-accounts). |
| created             | integer | n        | Account creation time. Unix timestamp. |
| updated             | integer | n        | Account last updating time. Unix timestamp. |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |
| dna                 | string  | n        | DNA of the account. |
| credits             | integer | n        | Current credits. |
| transaction_id      | string  | n        | Latest transaction id. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name        | string  | n        | Root account name. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| hash                | string  | y        | In the case of proof of existence of secret data. The hash can be filled in this field. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```