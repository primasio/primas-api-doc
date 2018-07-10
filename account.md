# Primas Node API Documentation

## Account APIs

#### Account ID


### 1. Get account metadata

[GET] /accounts/{account_id}

#### Response

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Account id. |
| address             | string  | n        | Account address. |
| title               | string  | n        | Account name. |
| abstract            | string  | y        | Description. |
| avatar              | string  | y        | An image DNA used for avatar. |
| creator             | object  | y        | Creator. Provided when this account is a [sub account](./README.md#sub-accounts). |
| created             | string  | n        | Account creation time. Unix timestamp. |
| updated             | string  | n        | Account last updating time. Unix timestamp. |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |
| dna                 | string  | n        | DNA of the account. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name        | string  | n        | Root account name. |
| sub_account_id      | string  | n        | Sub account id. This id is provided by the third-party application. Usually the id in the application system is used directly. |

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
| name                | string  | n        | Name. |
| abstract            | string  | y        | Description. |
| avatar              | string  | y        | An image id used for avatar. |
| creator             | object  | y        | Creator. Required when creating [sub account](./README.md#sub-accounts). |
| created             | string  | n        | People creation time. Unix timestamp. |
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

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
|  id  | string | n | The id of the account. |
|  dna  | string | n | The DNA of the account. |

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
| name                | string  | y        | Name. |
| abstract            | string  | y        | Description. |
| avatar              | string  | y        | An image DNA used for avatar. |
| creator             | object  | y        | Creator. Required when updating [sub account](./README.md#sub-accounts). |
| updated             | integer | y        | Updating time. Unix timestamp. |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
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


### 4. Get people credits list

[GET] /accounts/{account_id}/credits

### 5. Get account content list

[GET] /accounts/{account_id}/content

### 6. Get account groups list

[GET] /accounts/{account_id}/groups

### 7. Get account shares in a single group

[GET] /accounts/{account_id}/groups/{group_id}/shares

### 8. Delete all shares of an account in a group

[DELETE] /accounts/{account_id}/groups/{group_id}/shares

### 8. Get account likes 

[GET] /accounts/{account_id}/likes

### 9. Get account comments  

[GET] /accounts/{account_id}/comments

### 10. Get account shares

[GET] /accounts/{account_id}/shares