# Primas Node API Documentation

## Node APIs

#### 1. Get node list

[GET] /nodes

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |

#### Response

`data` is an array of nodes:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Node id.|
| title               | string  | n        | Node name. |
| created             | integer | n        | Node creation time. Unix timestamp. |
| updated             | integer | n        | Node last updating time. Unix timestamp. |
| url                 | string  | n        | Node access url. |
| withdrawal_fee      | big integer | n    | Withdrawal fee charged by node. |
| address_hot         | string  | n        | Node hot address. |
| address_cold        | string  | n        | Node cold address. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```