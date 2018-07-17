# Primas Node API Documentation

## Group APIs

### 1. Get group metadata

[GET] /groups/{group_id}

#### Response

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Group id. |
| title               | string  | n        | Group title. |
| creator             | object  | n        | Creator. |
| avatar              | string  | n        | An image id used for avatar. |
| abstract            | string  | n        | Group introduction. |
| language            | string  | n        | Group language. [RFC4646](http://www.ietf.org/rfc/rfc4646.txt) defined locales such as "en-US" |
| category            | string  | n        | Group categories. Comma separated words list. |
| created             | integer | n        | Group creation time. Unix timestamp. |
| updated             | integer | n        | Group last updating time. Unix timestamp. |
| extra               | object  | n        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |
| dna                 | string  | n        | Group DNA. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name        | string  | n        | Root account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| allow_join          | string  | n        | Joining group control. "all" or "application". |
| allow_post          | string  | n        | Posting control. "all", "none", "application". |
| allow_post_whitelist| array   | y        | An array containing `account_id`s that can always post in the group. |


### 2. Create group

[POST] /groups

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Fixed to "object". |
| tag                 | string  | n        | Fixed to "group". |
| title               | string  | n        | Group title. |
| creator             | object  | n        | Creator. |
| avatar              | string  | n        | An image id used for avatar. |
| abstract            | string  | n        | Group introduction. |
| language            | string  | n        | Group language. [RFC4646](http://www.ietf.org/rfc/rfc4646.txt) defined locales such as "en-US" |
| category            | string  | n        | Group categories. Comma separated words list. |
| created             | integer | n        | Group creation time. Unix timestamp. |
| updated             | integer | n        | Group creation time. Unix timestamp. |
| extra               | object  | n        | Extra metadata. |
| status              | string  | n        | Fixed to "created". |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| allow_join          | string  | n        | Joining group control. "all" or "application". |
| allow_post          | string  | n        | Posting control. "all", "none", "application". |
| allow_post_whitelist| array   | y        | An array containing `account_id`s that can always post in the group. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
|  id  | string | n | The id of the group. |
|  dna  | string | n | The DNA of the group. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 3. Update group

[PUT] /groups/{group_id}

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Fixed to "object". |
| tag                 | string  | n        | Fixed to "group". |
| title               | string  | n        | Group title. |
| creator             | object  | n        | Creator. |
| avatar              | string  | n        | An image id used for avatar. |
| abstract            | string  | n        | Group introduction. |
| language            | string  | n        | Group language. [RFC4646](http://www.ietf.org/rfc/rfc4646.txt) defined locales such as "en-US" |
| category            | string  | n        | Group categories. Comma separated words list. |
| created             | integer | n        | Group creation time. Unix timestamp. |
| updated             | integer | n        | Group update time. Unix timestamp. |
| extra               | object  | n        | Extra metadata. |
| parent_dna          | string  | n        | The latest DNA of the group. |
| status              | string  | n        | Fixed to "updated". |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| allow_join          | string  | n        | Joining group control. "all" or "application". |
| allow_post          | string  | n        | Posting control. "all", "none", "application". |
| allow_post_whitelist| array   | y        | An array containing `account_id`s that can always post in the group. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| dna  | string | n | The new DNA of the group. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 4. Dismiss group

[DELETE] /groups/{group_id}

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Fixed to "object". |
| tag                 | string  | n        | Fixed to "group". |
| title               | string  | n        | Group title. |
| creator             | object  | n        | Creator. |
| avatar              | string  | n        | An image id used for avatar. |
| abstract            | string  | n        | Group introduction. |
| language            | string  | n        | Group language. [RFC4646](http://www.ietf.org/rfc/rfc4646.txt) defined locales such as "en-US" |
| category            | string  | n        | Group categories. Comma separated words list. |
| created             | integer | n        | Group creation time. Unix timestamp. |
| updated             | integer | n        | Group updating time. Unix timestamp. |
| extra               | object  | n        | Extra metadata. |
| parent_dna          | string  | n        | The latest DNA of the group. |
| status              | string  | n        | Fixed to "deleted". |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| allow_join          | string  | n        | Joining group control. "all" or "application". |
| allow_post          | string  | n        | Posting control. "all", "none", "application". |
| allow_post_whitelist| array   | y        | An array containing `account_id`s that can always post in the group. |

#### Response

| Name | Type   | Optional | Description |
| ---- | ------ | -------- | ----------- | 
| dna  | string | n        | Group DNA.  |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 5. Get group members

[GET] /groups/{group_id}/members

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| application_status | string   | y        | Status filter. "pending", "approved" or "declined". |

#### Response

Response `data` is an array whose elements contain:

| Name                | Type    | Optional | Description |
| ------------------- | ------- | -------- | ----------- |
| id                  | string  | n        | Group member id. |
| src_id              | string  | n        | Account id. Root account id in the case of [Sub account](./README.md#sub-accounts). |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Member joining time. Unix timestamp. |
| updated             | integer | n        | Member updating time. Unix timestamp. |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |
| dna                 | string  | n        | Group member DNA. |
| account             | object  | n        | Related member account. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| account_name        | string  | n        | Account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ----------------------------------------------- |
| application_status  | string  | n        | "pending", "approved" or "declined". |

`account` object:

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

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 6. Join group

[POST] /groups/{group_id}/members

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_member". |
| src_id              | string  | n        | Account id. Root account id in the case of [Sub account](./README.md#sub-accounts). |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Member joining time. Unix timestamp. |
| updated             | integer | n        | Member joining time. Unix timestamp. |
| status              | string  | n        | Fixed to "created". |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ----------------------------------------------- |
| application_status  | string  | n        | For group requiring application. Fill "pending". |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| id  | string  | n        | Group member id. |
| dna | string  | n        | Group member DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 7. Approve or decline member application

[PUT] /groups/{group_id}/members/{group_member_id}

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_member". |
| src_id              | string  | n        | Account id. Root account id in the case of [Sub account](./README.md#sub-accounts). |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Member joining time. Unix timestamp. |
| updated             | integer | n        | Member updating time. Unix timestamp. |
| status              | string  | n        | Fixed to "updated". |
| extra               | object  | n        | Extra metadata. |
| parent_dna          | string  | n        | Latest group member DNA. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ----------------------------------------------- |
| application_status  | string  | n        | "approved" or "declined".  |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| dna     | string  | n        | Group member DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 8. Quit group or kick member out

[DELETE] /groups/{group_id}/members/{group_member_id}

This API can be used for both quiting group and kicking member out of the group. Use the member's
info in the `creator` and `signature` field to quit group and use group owner's info otherwise. 

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_member". |
| src_id              | string  | n        | Account id. Root account id in the case of [Sub account](./README.md#sub-accounts). |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Member joining time. Unix timestamp. |
| updated             | integer | n        | Member quiting time. Unix timestamp. |
| status              | string  | n        | "deleted". |
| parent_dna          | string  | n        | Latest group member DNA. |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ----------------------------------------------- |
| application_status  | string  | n        | "pending" or "approved".  |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| dna     | string  | n        | Group member DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 9. Get group shares

[GET] /groups/{group_id}/shares

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| application_status | string   | y        | Status filter. "pending", "approved" or "declined". |

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
 
 `content` object contains the related [content metadata](./content.md#1.-get-content-metadata):
 
 #### Example
 
 ```bash
 $ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'
 
 {"result_code":0,"data":{"dna":"", ...}}
 
 ```


### 10. Share to a group

[POST] /groups/{group_id}/shares

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_share". |
| src_id              | string  | n        | Content id. |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Share created time. Unix timestamp. |
| updated             | integer | n        | Share created time. Unix timestamp. |
| status              | string  | n        | Fixed to "created". |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

`extra` object:

| Name               | Type    | Optional | Description |
| ------------------ | ------- | -------- | ------------------------------------------------ |
| share_id           | string  | y        | Parent share id.                                 |
| application_status | string  | y        | For group requiring application. Fill "pending". |

#### Response

| Name    | Type    | Optional | Description |
| ------- | ------- | -------- | ------------- |
| id      | string  | n        | Share id. |
| dna     | string  | n        | Share DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 15. Approve or decline share application

[PUT] /shares/{share_id}
 
#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_share". |
| src_id              | string  | n        | Content id. |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Share created time. Unix timestamp. |
| updated             | integer | n        | Share updated time. Unix timestamp. |
| status              | string  | n        | Fixed to "updated". |
| extra               | object  | y        | Extra metadata. |
| parent_dna          | string  | n        | Latest share DNA. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |

`extra` object:

| Name               | Type    | Optional | Description |
| ------------------ | ------- | -------- | ------------------------------------------------ |
| share_id           | string  | y        | Parent share id.                                 |
| application_status | string  | y        | "approved" or "declined". |

#### Response

| Name    | Type    | Optional | Description |
| ------- | ------- | -------- | ----------- | 
| dna     | string  | n        | Share DNA.  |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 17. Delete group share

[DELETE] /shares/{share_id}

This API can be called both by group owner or share creator with corresponding creator info and its signature.

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_share". |
| src_id              | string  | n        | Content id. |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Share created time. Unix timestamp. |
| updated             | integer | n        | Share updated time. Unix timestamp. |
| status              | string  | n        | Fixed to "deleted". |
| extra               | object  | y        | Extra metadata. |
| parent_dna          | string  | n        | Latest share DNA. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |

`extra` object:

| Name               | Type    | Optional | Description |
| ------------------ | ------- | -------- | ------------------------------------------------ |
| share_id           | string  | y        | Parent share id.                                 |
| application_status | string  | y        | "pending" or "approved". |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| dna     | string  | n        | Share DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```
