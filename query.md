# Primas Node API Documentation

### 1. Query all APIs

[GET] /query

#### Query parameters

| Name               | Type     | Optional | Description                                                          |
| ------------------ | -------- | -------- | -------------------------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                                          |
| page_size          | integer  | y        | Page size. Default to 20.                                            |
| text               | string   | y        | Text filter. Full text search on title, description, etc.            |
| type               | string   | y        | Query type. Currently supports "all", "content", "account", "group". |
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
