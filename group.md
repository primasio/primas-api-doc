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
| created             | string  | n        | Group creation time. Unix timestamp. |
| updated             | string  | n        | Group last updating time. Unix timestamp. |
| extra               | object  | n        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |
| dna                 | string  | n        | Group DNA. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name        | string  | n        | Root account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

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
| title               | string  | n        | Group title. |
| creator             | object  | n        | Creator. |
| avatar              | string  | n        | An image id used for avatar. |
| abstract            | string  | n        | Group introduction. |
| language            | string  | n        | Group language. [RFC4646](http://www.ietf.org/rfc/rfc4646.txt) defined locales such as "en-US" |
| category            | string  | n        | Group categories. Comma separated words list. |
| created             | string  | n        | Group creation time. Unix timestamp. |
| extra               | object  | n        | Extra metadata. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Account id. Root account id in the case of Sub account posting. |
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

### Dismiss group

[DELETE] /groups/{group_id}

### Get group members

[GET] /groups/{group_id}/members

### Get group member applications

[GET] /groups/{group_id}/members/applications

### Apply to join group

[POST] /groups/{group_id}/members/applications

### Cancel member application

[DELETE] /groups/{group_id}/members/applications/{account_id}

### Approve or decline application

[PUT] /groups/{group_id}/members/applications/{account_id}

### Join group

[POST] /groups/{group_id}/members

### Quit group

[DELETE] /groups/{group_id}/members/{account_id}

### Get group shares

[GET] /groups/{group_id}/shares
 
### Get group share applications

[GET] /groups/{group_id}/shares/applications

### Apply to share

[POST] /groups/{group_id}/shares/applications

### Approve or decline share application

[PUT] /groups/{group_id}/shares/applications/{application_id}
 
### Cancel share application

[DELETE] /groups/{group_id}/shares/applications/{application_id}
 
### Delete group share

[DELETE] /groups/{group_id}/shares/{share_id}
