# Primas Node API Documentation

## Timeline APIs

### 1. Get account timeline

[GET] /accounts/{account_id}/timeline

Get all the shares in all the groups account has joined.
Notice that **if the same article is shared multiple times
in several adjacent shares, only the first one will show.**

#### Query parameters

| Name               | Type     | Optional | Description                                         |
| ------------------ | -------- | -------- | --------------------------------------------------- |
| page               | integer  | y        | Page number. Starts from 0.                         |
| page_size          | integer  | y        | Page size. Default to 20.                           |

#### Response

`data` is an array of [shares](./content-interaction.md#1-get-share-metadata):
 
#### Example
 
 ```bash
 $ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'
 
 {"result_code":0,"data":{"dna":"", ...}}
 
 ```
