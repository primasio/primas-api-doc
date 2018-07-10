# Primas Node API Documentation

## Content Interaction APIs
In Primas, content interactions(like, comment, share) can only happen
in groups. And interactions in a given group are only visible to this group.
When interacting with content, the corresponding group DNA must be provided.

### Get content shares

[GET] /shares/{share_id}/shares?page_id={page_id}
page_id: start from 0 

#### Response
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| records | []object | n | share history list |

`records` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| content_id | string  | n | Content id. |
| group_id | string | n | Group id. |
| share_id | string | n |  share id |
| share_dna | string | n |  share dna |
| created | string  | n | People creation time. Unix timestamp. |
| creator | object  | n | Operator of the share like.  |
| signature	| string | n | [Metadata signature](./README.md#dtcp-metadata-signature). |
| txstatus	| int	| n	| blockchain transaction status|
| txhash	| string	| n	| blockchain TxHash |
| isdelete	| uint	| n	| record invalid |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name          | string  | n        | Root account name. |
| sub_account_id      | string  | y        | Sub account id. This id is provided by the third-party application. Usually the id in the application system is used directly. |
| sub_account_name      | string  | y        | Sub account name. This id is provided by the third-party application. Usually the id in the application system is used directly. |

### Share content

[POST] /shares/{share_id}/shares

#### Request
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| content_id | string  | n | Content id. |
| group_id | string | n | Group id. |
| created | string  | n | People creation time. Unix timestamp. |
| creator | object  | n | Creator of the share .  |
| signature	| string | n | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name          | string  | n        | Root account name. |
| sub_account_id      | string  | y        | Sub account id. This id is provided by the third-party application. Usually the id in the application system is used directly. |
| sub_account_name      | string  | y        | Sub account name. This id is provided by the third-party application. Usually the id in the application system is used directly. |


#### Response
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| share_id | string | n |  share id |
| share_dna | string | n |  share dna |

### Delete share

[DELETE] /shares/{share_id}/shares

#### Request
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| content_id | string  | n | Content id. |
| group_id | string | n | Group id. |
| created | string  | n | People creation time. Unix timestamp. |
| creator | object  | n | Creator of the share .  |
| signature	| string | n | [Metadata signature](./README.md#dtcp-metadata-signature). |

#### Response
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| share_id | string | n |  share id |


### Report shares

[POST] /shares/{share_id}/reports



### Get share reports

[GET] /shares/{share_id}/reports


### Get content likes

[GET] /shares/{share_id}/likes?page_id={page_id}
page_id: start from 0 

#### Response
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| records | []object | n | share like history list |

`records` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| content_id | string  | n | Content id. |
| like_id | string | n |  share like id |
| like_dna | string | n |  share like dna |
| created | string  | n | People creation time. Unix timestamp. |
| creator | object  | n | Operator of the share like.  |
| signature	| string | n | [Metadata signature](./README.md#dtcp-metadata-signature). |
| txstatus	| int	| n	| blockchain transaction status|
| txhash	| string	| n	| blockchain TxHash |
| isdelete	| uint	| n	| record invalid |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name          | string  | n        | Root account name. |
| sub_account_id      | string  | y        | Sub account id. This id is provided by the third-party application. Usually the id in the application system is used directly. |
| sub_account_name      | string  | y        | Sub account name. This id is provided by the third-party application. Usually the id in the application system is used directly. |


### Like content

[POST] /shares/{share_id}/likes

#### Request
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| content_id | string  | n | Content id. |
| created | string  | n | People creation time. Unix timestamp. |
| creator | object  | n | Creator of the share like.  |
| signature	| string | n | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| sub_account_id      | string  | y        | Sub account id. This id is provided by the third-party application. Usually the id in the application system is used directly. |


#### Response
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| like_id | string | n |  share like id |
| like_dna | string | n |  share like dna |

### Delete like

[DELETE] /shares/{share_id}/likes/{like_id}

#### Request
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| content_id | string  | n | Content id. |
| created | string  | n | People creation time. Unix timestamp. |
| creator | object  | n | Operator of the share like delete .  |
| signature	| string | n | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| sub_account_id      | string  | y        | Sub account id. This id is provided by the third-party application. Usually the id in the application system is used directly. |

#### Response
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| like_id | string | n |  share like id |

### Get content comments

[GET] /shares/{share_id}/comments?page_id={page_id}&type={type}
page_id: start from 0 
type: 0=first level  1= second level 2= more than level

#### Response
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| records | []object | n | share comment history list |

`records` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| content_id | string  | n | Content id. |
| comment_id | string | n | share comment id |
| comment_dna | string | n | share comment dna |
| created | string  | n | People creation time. Unix timestamp. |
| creator | object  | n | Operator of the share comment.  |
| content | string  | n | content of the share comment.  |
| content_hash | string  | n | Keccak256 hash of the raw share comment. |
| to_people | object  | n | to comment people's comment |
| parent_comment_id | string  | n | parent comment id |
| parent_comment_dna | string  | n | parent comment dna |
| type | int | n | comment type |
| signature	| string | n | [Metadata signature](./README.md#dtcp-metadata-signature). |
| txstatus	| int	| n	| blockchain transaction status|
| txhash	| string	| n	| blockchain TxHash |
| isdelete	| uint	| n	| record invalid |
| sub_comment_num | int | y | Sub comment number |
| sub_comment_list | records | y | Sub comment list |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name          | string  | n        | Root account name. |
| sub_account_id      | string  | y        | Sub account id. This id is provided by the third-party application. Usually the id in the application system is used directly. |
| sub_account_name      | string  | y        | Sub account name. This id is provided by the third-party application. Usually the id in the application system is used directly. |

`to_people` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name          | string  | n        | Root account name. |
| sub_account_id      | string  | y        | Sub account id. This id is provided by the third-party application. Usually the id in the application system is used directly. |
| sub_account_name      | string  | y        | Sub account name. This id is provided by the third-party application. Usually the id in the application system is used directly. |


### Comment content

[POST] /shares/{share_id}/comments

#### Request
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| content_id | string  | n | Content id. |
| created | string  | n | People creation time. Unix timestamp. |
| creator | object  | n | Operator of the share comment.  |
| content | string  | n | content of the share comment.  |
| content_hash | string  | n | Keccak256 hash of the raw share comment. |
| to_people | object  | n | to comment people's comment |
| parent_comment_id | string  | y | parent comment dna |
| type | int | n | comment type |
| signature	| string | n | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name          | string  | n        | Root account name. |
| sub_account_id      | string  | y        | Sub account id. This id is provided by the third-party application. Usually the id in the application system is used directly. |
| sub_account_name      | string  | y        | Sub account name. This id is provided by the third-party application. Usually the id in the application system is used directly. |

`to_people` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name          | string  | n        | Root account name. |
| sub_account_id      | string  | y        | Sub account id. This id is provided by the third-party application. Usually the id in the application system is used directly. |
| sub_account_name      | string  | y        | Sub account name. This id is provided by the third-party application. Usually the id in the application system is used directly. |


#### Response
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| comment_id | string | n |  share comment id |
| comment_dna | string | n |  share comment dna |


### Delete comment

[DELETE] /shares/{share_id}/comments/{comment_id}

#### Request
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| content_id | string  | n | Content id. |
| created | string  | n | People creation time. Unix timestamp. |
| creator | object  | n | Operator of the share comment.  |
| signature	| string | n | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name          | string  | n        | Root account name. |
| sub_account_id      | string  | y        | Sub account id. This id is provided by the third-party application. Usually the id in the application system is used directly. |
| sub_account_name      | string  | y        | Sub account name. This id is provided by the third-party application. Usually the id in the application system is used directly. |


#### Response
| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| comment_id | string | n |  share comment id |


