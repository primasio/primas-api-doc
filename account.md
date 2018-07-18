# Primas Node API Documentation

## Account APIs

#### Account ID


### 1. Get account metadata

[GET] /accounts/{account_id}

[GET] /accounts/{account_id}/{sub_account_id}

#### Response

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Account id. |
| address             | string  | n        | Account address. |
| title               | string  | n        | Account name. |
| abstract            | string  | y        | Description. |
| avatar              | string  | y        | An image DNA used for avatar. |
| creator             | object  | y        | Creator of the [sub account](./README.md#sub-accounts). |
| created             | string  | n        | Account creation time. Unix timestamp. |
| updated             | string  | n        | Account last updating time. Unix timestamp. |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |
| dna                 | string  | n        | DNA of the account. |
| hp_total            | integer | n        | Total HP. |
| hp_current          | integer | n        | Current HP. |
| credits             | integer | n        | Current credits. |

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
| type                | string  | n        | Fixed to "object". |
| tag                 | string  | n        | Fixed to "account". |
| name                | string  | n        | Name. |
| abstract            | string  | y        | Description. |
| avatar              | string  | y        | An image id used for avatar. |
| creator             | object  | y        | Creator. Required when creating [sub account](./README.md#sub-accounts). |
| created             | integer | n        | Account creation time. Unix timestamp. |
| updated             | integer | n        | Account creation time. Unix timestamp. |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

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

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Fixed to "object". |
| tag                 | string  | n        | Fixed to "account". |
| name                | string  | y        | Name. |
| abstract            | string  | y        | Description. |
| avatar              | string  | y        | An image DNA used for avatar. |
| creator             | object  | y        | Creator. Required when updating [sub account](./README.md#sub-accounts). |
| created             | integer | n        | Account creation time. Unix timestamp. |
| updated             | integer | n        | Updating time. Unix timestamp. |
| extra               | object  | y        | Extra metadata. |
| parent_dna          | string  | n        | The latest DNA of the account. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| sub_account_id      | string  | n        | Sub account id. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| hash                | string  | y        | In the case of proof of existence of secret data. The hash can be filled in this field. |

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

[GET] /accounts/{account_id}/{sub_account_id}/credits


### 5. Get account content list

[GET] /accounts/{account_id}/content

[GET] /accounts/{account_id}/{sub_account_id}/content

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |

#### Response

`data` is an array of [content](./content.md#1.-get-content-metadata).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 6. Get account groups list

[GET] /accounts/{account_id}/groups

[GET] /accounts/{account_id}/{sub_account_id}/groups

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |

#### Response

`data` is an array of [group](./group.md#1.-get-group-metadata).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 7. Get account shares

[GET] /accounts/{account_id}/shares

[GET] /accounts/{account_id}/{sub_account_id}/shares

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| application_status | string   | y        | Status filter. "pending", "approved" or "declined". |

#### Response

`data` is an array of [group shares](./group.md#9.-get-group-shares).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 8. Get account shares in a single group

[GET] /accounts/{account_id}/groups/{group_id}/shares

[GET] /accounts/{account_id}/{sub_account_id}/groups/{group_id}/shares

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| application_status | string   | y        | Status filter. "pending", "approved" or "declined". |

#### Response

`data` is an array of [group shares](./group.md#9.-get-group-shares).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 9. Get account likes 

[GET] /accounts/{account_id}/likes

[GET] /accounts/{account_id}/{sub_account_id}/likes

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |

#### Response

`data` is an array of [likes](./content-interaction.md#4.-get-the-likes-of-a-group-share).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 10. Get account comments  

[GET] /accounts/{account_id}/comments

[GET] /accounts/{account_id}/{sub_account_id}/comments

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |

#### Response

`data` is an array of [comments](./content-interaction.md#7.-get-the-comments-of-a-group-share).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```
