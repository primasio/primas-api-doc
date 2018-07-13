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
| updated             | string  | n        | Group updating time. Unix timestamp. |
| status              | string  | n        | Fixed to "deleted". |
| parent_dna          | string  | n        | The latest DNA of the group. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| dna  | string | n | Group DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 5. Get group members

[GET] /groups/{group_id}/members

#### Query parameters

| Name        | Type     | Optional | Description                       |
| ----------- | -------- | -------- | --------------------------------- |
| page        | integer  | y        | Page number. Starts from 0.       |
| page_size   | integer  | y        | Page size. Default to 20.         |

#### Response

Response `data` is an array whose elements contain:

| Name                | Type    | Optional | Description |
| ------------------- | ------- | -------- | ----------- |
| src_id              | string  | n        | Account id. Root account id in the case of [Sub account](./README.md#sub-accounts). |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Member joining time. Unix timestamp. |
| status              | string  | n        | "created". |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |
| dna                 | string  | n        | Group member DNA. |
| account             | object  | n        | Related member account. |

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

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| account_name        | string  | n        | Account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 6. Get group member applications

[GET] /groups/{group_id}/members/applications

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |
| application_status | string   | y        | Status filter. "pending", "cancelled", "approved" or "declined". |

#### Response

Response `data` is an array of applications:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Application id. |
| src_id              | string  | n        | Account id. Root account id in the case of [Sub account](./README.md#sub-accounts). |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Application creation time. Unix timestamp. |
| updated             | integer | n        | Application updating time. Unix timestamp. |
| application_status  | string  | n        | "pending", "cancelled", "approved" or "declined". |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |
| dna                 | string  | n        | Application DNA. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| account_name        | string  | n        | Account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 7. Apply to join group

[POST] /groups/{group_id}/members/applications

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_application". |
| src_id              | string  | n        | Account id. Root account id in the case of [Sub account](./README.md#sub-accounts). |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | integer | n        | Application creation time. Unix timestamp. |
| status              | string  | n        | Fixed to "pending". |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| id      | string  | n        | Application id.  |
| dna     | string  | n        | Application DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 8. Cancel member application

[DELETE] /groups/{group_id}/members/applications/{application_id}

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_application". |
| src_id              | string  | n        | Account id. Root account id in the case of [Sub account](./README.md#sub-accounts). |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| updated             | integer | n        | Application updating time. Unix timestamp. |
| status              | string  | n        | Fixed to "cancelled". |
| parent_dna          | string  | n        | Latest application DNA. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| dna     | string  | n        | Application DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 9. Approve or decline application

[PUT] /groups/{group_id}/members/applications/{application_id}

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_application". |
| src_id              | string  | n        | Account id. Root account id in the case of [Sub account](./README.md#sub-accounts). |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| updated             | integer | n        | Application updating time. Unix timestamp. |
| status              | string  | n        | "approved" or "declined". |
| parent_dna          | string  | n        | Latest application DNA. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| dna     | string  | n        | Application dna. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 10. Join group

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
| status              | string  | n        | "created". |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| dna | string  | n        | Group member DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 11. Quit group

[DELETE] /groups/{group_id}/members/{account_id}

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Fixed to "relation". |
| tag                 | string  | n        | Fixed to "group_member". |
| src_id              | string  | n        | Account id. Root account id in the case of [Sub account](./README.md#sub-accounts). |
| dest_id             | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| updated             | integer | n        | Member quiting time. Unix timestamp. |
| status              | string  | n        | "deleted". |
| parent_dna          | string  | n        | Latest group member DNA. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| dna     | string  | n        | Group member DNA. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### Get group shares

[GET] /groups/{group_id}/shares?page_id={page_id}


#### Response
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| records      | []object      | n      | share history list |

`records` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| content_id          | string  | n        | Content id. |
| group_id            | string  | n        | Group id. |
| share_id            | string  | n        | Share id |
| share_dna           | string  | n        | Share dna |
| created             | string  | n        | People creation time. Unix timestamp. |
| creator             | object  | n        | Operator of the share like.  |
| signature	          | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |
| txstatus	          | int	    | n	       | blockchain transaction status|
| txhash	          | string	| n	       | blockchain TxHash |
| isdelete	          | uint	| n	       | record invalid |
 
### Get group share applications

[GET] /groups/{group_id}/shares/applications?page_id={page_id}


#### Response
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| records      | []object      | n      | share history list |

`records` object:

| Name                  | Type    | Optional | Description |
| --------------        | ------- | -------- | ---------------------------------------- |
| content_id            | string  | n        | Content id. |
| group_id              | string  | n        | Group id. |
| share_id              | string  | n        | Share id |
| share_dna             | string  | n        | Share dna |
| share_application_id  | string  | n        | Share application id |
| share_application_dna | string  | n        | Share application dna |
| created               | string  | n        | People creation time. Unix timestamp. |
| creator               | object  | n        | Operator of the share like.  |
| signature	            | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |
| txstatus	            | int	  | n	     | blockchain transaction status|
| txhash	            | string  | n	     | blockchain TxHash |
| application_result    | uint    | n        | Application result |
| isdelete	            | uint	  | n	     | record invalid |


### Apply to share

[POST] /groups/{group_id}/shares/applications

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| group_id            | string  | n        | Group id. |
| creator             | object  | n        | Creator. |
| created             | string  | n        | Share update time. Unix timestamp. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| share_application_id      | string  | n        | Share application id.  |
| share_application_dna     | string  | n        | Share application dna. |

### Approve or decline share application

[PUT] /groups/{group_id}/shares/applications/{application_id}
 
#### Request

| Name                      | Type    | Optional | Description |
| --------------            | ------- | -------- | ---------------------------------------- |
| share_application_id      | string  | n        | Share application id.  |
| share_application_dna     | string  | n        | Share application dna. |
| group_id                  | string  | n        | Group id. |
| creator                   | object  | n        | Creator. |
| created                   | string  | n        | Share update time. Unix timestamp. |
| signature                 | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| share_application_id      | string  | n        | Share application id.  |
| share_application_dna     | string  | n        | Share application dna. |

### Cancel share application

[DELETE] /groups/{group_id}/shares/applications/{application_id}

#### Request

| Name                      | Type    | Optional | Description |
| --------------            | ------- | -------- | ---------------------------------------- |
| share_application_id      | string  | n        | Share application id.  |
| share_application_dna     | string  | n        | Share application dna. |
| group_id                  | string  | n        | Group id. |
| creator                   | object  | n        | Creator. |
| created                   | string  | n        | Share update time. Unix timestamp. |
| signature                 | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| share_application_id      | string  | n        | Share application id.  |
| share_application_dna     | string  | n        | Share application dna. |

### Delete group share

[DELETE] /groups/{group_id}/shares/{share_id}

#### Request

| Name                      | Type    | Optional | Description |
| --------------            | ------- | -------- | ---------------------------------------- |
| content_id                | string  | n        | Content id. |
| group_id                  | string  | n        | Group id. |
| share_id                  | string  | n        | Share id. |
| creator                   | object  | n        | Creator. |
| created                   | string  | n        | Share update time. Unix timestamp. |
| signature                 | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| share_id      | string  | n        | Share application id.  |
| share_dna     | string  | n        | Share application dna. |
