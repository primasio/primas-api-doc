# Primas Node API Documentation

## System APIs

### 1. Get system parameters

[GET] /system

#### Response

| Name                     | Type        | Optional | Description |
| ------------------------ | ----------- | -------- | ---------------------------------------- |
| lock_amount_content      | big integer | n        | Token lock amount for posting content. |
| lock_period_content      | integer     | n        | Token lock period in seconds for posting content. |
| lock_amount_group_join   | big integer | n        | Token lock amount for joining group. |
| lock_amount_group_create | big integer | n        | Token lock amount for creating group.|
| consume_amount_report    | big integer | n        | Token consumed amount for report share. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```
