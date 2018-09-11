# Primas Node API Documentation

## Group APIs

### 1. Get group metadata

[GET] /groups/{group_id}

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| account_id         | string   | y        | Account id. Account related status will be returned.|

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
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |
| dna                 | string  | n        | Group DNA. |
| transaction_id      | string  | n        | Latest transaction id. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name        | string  | n        | Root account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| allow_join          | string  | n        | Joining group control. "all" or "application". |
| allow_post          | string  | n        | Posting control. "all", "none", "application". |
| members_total       | integer | n        | Total members number. |
| shares_total        | integer | n        | Total shares number. |
| account_role        | string  | y        | Member status of current account. "owner", "member", "applicant" or "none". |
| members             | array   | n        | Members overview. An array of [account metadata](./account.md#1-get-account-metadata). |


### 2. Create group

[POST] /groups

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "object". |
| tag                 | string  | n        | Fixed to "group". |
| title               | string  | n        | Group title. |
| creator             | object  | n        | Creator. |
| avatar              | string  | y        | An image id used for avatar. |
| abstract            | string  | n        | Group introduction. |
| language            | string  | n        | Group language. [RFC4646](http://www.ietf.org/rfc/rfc4646.txt) defined locales such as "en-US" |
| category            | string  | n        | Group categories. Comma separated words list. |
| created             | integer | n        | Group creation time. Unix timestamp. |
| extra               | object  | n        | Extra metadata. |
| status              | string  | n        | Fixed to "created". |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| allow_join          | string  | n        | Joining group control. "all" or "application". |
| allow_post          | string  | n        | Posting control. "all", "none", "application". |

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


### 3. Update group(designing)

[PUT] /groups/{group_id}

For updating, only the changed metadata need to be provided.

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "object". |
| tag                 | string  | n        | Fixed to "group". |
| parent_dna          | string  | n        | The latest DNA of the group. |
| status              | string  | n        | Fixed to "updated". |
| updated             | integer | n        | Group update time. Unix timestamp. |
| title               | string  | y        | Group title. |
| avatar              | string  | y        | An image id used for avatar. |
| abstract            | string  | y        | Group introduction. |
| language            | string  | y        | Group language. [RFC4646](http://www.ietf.org/rfc/rfc4646.txt) defined locales such as "en-US" |
| category            | string  | y        | Group categories. Comma separated words list. |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| allow_join          | string  | y        | Joining group control. "all" or "application". |
| allow_post          | string  | y        | Posting control. "all", "none", "application". |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| dna  | string | n | The new DNA of the group. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 4. Dismiss group(designing)

[DELETE] /groups/{group_id}

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "object". |
| tag                 | string  | n        | Fixed to "group". |
| parent_dna          | string  | n        | The latest DNA of the group. |
| status              | string  | n        | Fixed to "deleted". |
| updated             | integer | n        | Group updating time. Unix timestamp. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

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
| src_id              | string  | n        | Account id. Root account id in the case of [Sub account](./dtcp.md#sub-accounts). |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Member joining time. Unix timestamp. |
| updated             | integer | n        | Member updating time. Unix timestamp. |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |
| dna                 | string  | n        | Group member DNA. |
| transaction_id      | string  | n        | Latest transaction id. |
| account             | object  | n        | Related member account. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| account_name        | string  | n        | Account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
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
| creator             | object  | y        | Creator. Provided when this account is a [sub account](./dtcp.md#sub-accounts). |
| created             | string  | n        | Account creation time. Unix timestamp. |
| updated             | string  | n        | Account last updating time. Unix timestamp. |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |
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
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_member". |
| src_id              | string  | n        | Account id. Root account id in the case of [Sub account](./dtcp.md#sub-accounts). |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Member joining time. Unix timestamp. |
| status              | string  | n        | Fixed to "created". |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ----------------------------------------------- |
| application_status  | string  | n        | For group requiring application. Fill "pending". |
| application_expire  | integer | n        | Application expiration time. |

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
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_member". |
| parent_dna          | string  | n        | Latest group member DNA. |
| status              | string  | n        | Fixed to "updated". |
| updated             | integer | n        | Member updating time. Unix timestamp. |
| creator             | object  | n        | Creator. Group owner. |
| extra               | object  | n        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |

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

This API can be used for both quiting group and kicking member out of the group. Use members account to generate
the signature and leave `creator` empty to quit the group and fill in the group owner's info in the `creator` field
to kick member out. 

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_member". |
| parent_dna          | string  | n        | Latest group member DNA. |
| status              | string  | n        | "deleted". |
| updated             | integer | n        | Member quiting time. Unix timestamp. |
| creator             | object  | n        | Creator. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| dna     | string  | n        | Group member DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 9. Get group member whitelist

[GET] /groups/{group_id}/whitelist/members

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| application_status | string   | y        | Status filter. "pending", "approved" or "declined". |

#### Response

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Whitelist id. |
| src_id              | string  | n        | Account id. |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Whitelist creating time. Unix timestamp. |
| status              | string  | n        | Fixed to "created". |
| extra               | object  | n        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |
| dna                 | string  | n        | Latest whitelist DNA. |
| account             | object  | n        | Account metadata. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| account_name        | string  | n        | Account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ----------------------------------------------- |
| application_status  | string  | n        | Fixed to "pending". |

`account` object contains metadata for [account](./account.md#1-get-account-metadata).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 10. Add group member whitelist

[POST] /groups/{group_id}/whitelist/members

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_member_whitelist". |
| src_id              | string  | n        | Account id. |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Whitelist creating time. Unix timestamp. |
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

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ----------------------------------------------- |
| application_status  | string  | n        | Fixed to "pending". |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| id  | string  | n        | Group member whitelist id. |
| dna | string  | n        | Group member whitelist DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 11. Approve or decline group member whitelist

[PUT] /groups/{group_id}/whitelist/members/{whitelist_id}

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_member_whitelist". |
| parent_dna          | string  | n        | Latest whitelist DNA. |
| status              | string  | n        | Fixed to "updated". |
| updated             | integer | n        | Whitelist updating time. Unix timestamp. |
| creator             | object  | n        | Creator. |
| extra               | object  | n        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |

`extra` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ----------------------------------------------- |
| application_status  | string  | n        | "approved" or "declined". |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| dna | string  | n        | Group member whitelist DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 12. Quit group member whitelist

[DELETE] /groups/{group_id}/whitelist/members/{whitelist_id}

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_member_whitelist". |
| parent_dna          | string  | n        | Latest whitelist DNA. |
| status              | string  | n        | Fixed to "deleted". |
| updated             | integer | n        | Whitelist updating time. Unix timestamp. |
| creator             | object  | n        | Creator. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| dna | string  | n        | Group member whitelist DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 13. Get group shares

[GET] /groups/{group_id}/shares

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| application_status | string   | y        | Status filter. "pending", "approved" or "declined". |

#### Response

`data` is an array of [shares](./content-interaction.md#1-get-share-metadata).
 
 #### Example
 
 ```bash
 $ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'
 
 {"result_code":0,"data":{"dna":"", ...}}
 
 ```


### 14. Share to a group

[POST] /groups/{group_id}/shares

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_share". |
| src_id              | string  | n        | Content id. |
| dest_id             | string  | n        | Group id. |
| hp                  | integer | n        | hp value. Greater than or equal to zero. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Share created time. Unix timestamp. |
| status              | string  | n        | Fixed to "created". |
| extra               | object  | y        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

`extra` object:

| Name               | Type    | Optional | Description |
| ------------------ | ------- | -------- | ------------------------------------------------ |
| share_id           | string  | y        | Parent share id.                                 |
| application_status | string  | y        | For group requiring application. Fill "pending". |
| application_expire | integer | y        | Application expiration time. |

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
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_share". |
| parent_dna          | string  | n        | Latest share DNA. |
| status              | string  | n        | Fixed to "updated". |
| updated             | integer | n        | Share updated time. Unix timestamp. |
| creator             | object  | n        | Creator. Group owner |
| extra               | object  | n        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |

`extra` object:

| Name               | Type    | Optional | Description |
| ------------------ | ------- | -------- | ------------------------------------------------ |
| application_status | string  | n        | "approved" or "declined". |

#### Response

| Name    | Type    | Optional | Description |
| ------- | ------- | -------- | ----------- | 
| dna     | string  | n        | Share DNA.  |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 16. Delete group share

[DELETE] /shares/{share_id}

This API can be called both by group owner or share creator with corresponding creator info and its signature.

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_share". |
| parent_dna          | string  | n        | Latest share DNA. |
| status              | string  | n        | Fixed to "deleted". |
| updated             | integer | n        | Share updated time. Unix timestamp. |
| creator             | object  | y        | Creator. Group owner. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| dna     | string  | n        | Share DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 17. Get group avatar metadata

[GET] /groups/{group_id}/avatar

#### Response

`data` is [content](./content.md#1-get-content-metadata) metadata.

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 18. Get group avatar raw image

[GET] /groups/{group_id}/avatar/raw

Primas Node can build local cache of raw image for accessing speed. Or redirect the request to
image URI for raw content directly.

#### Response

Response is raw image data.

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```
