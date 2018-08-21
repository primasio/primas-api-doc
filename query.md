# Primas Node API Documentation

## Query APIs

### 1. Query all

[GET] /query

#### Query parameters

| Name               | Type     | Optional | Description                                                          |
| ------------------ | -------- | -------- | -------------------------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                                          |
| page_size          | integer  | y        | Page size. Default to 20.                                            |
| text               | string   | y        | Text filter. Full text search on title, description, etc.            |
| type               | string   | y        | Query type. Currently supports "all", "share", "account", "group".   |
| category           | string   | y        | Category filter.                                                     |

#### Response

`data` is an array containing [groups](./group.md#1-get-group-metadata),
[content](./content.md#1-get-content-metadata), [accounts](./account.md#1-get-account-metadata)
or a mixture of all types.

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```
### 2. Find content using URL or hash

[GET] /query/content

#### Query parameters

| Name               | Type     | Optional | Description                                                          |
| ------------------ | -------- | -------- | -------------------------------------------------------------------- |
| url                | string   | y        | Url encoded url.                                                     |
| hash               | string   | y        | Lowercase hex string of the Keccak256 hash of the raw content.       |

#### Response

`data` is an array of [content](./content.md#1-get-content-metadata).

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 3. Find reproductions using URL(designing)

[GET] /query/reproductions

#### Query parameters

| Name               | Type     | Optional | Description                                                          |
| ------------------ | -------- | -------- | -------------------------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                                          |
| page_size          | integer  | y        | Page size. Default to 20.                                            |
| url                | string   | n        | Url encoded url.                                                     |

#### Response

`data` is an array of reproductions:



#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```