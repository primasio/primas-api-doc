# Primas Node API Documentation

## Token APIs


### 1. Get account tokens data

[GET] /accounts/{account_id}/tokens

#### Response

| Name                 | Type        | Optional | Description                           |
| -------------------- | ----------- | -------- | ------------------------------------- | 
| balance              | big integer | n        | Token balance.                        |
| pre_lock_all         | big integer | n        | Total pre-locked amount.              |
| pre_lock_available   | big integer | n        | Remaining pre-locked amount.          |
| incentives_all       | big integer | n        | Total incentives on this node.   .    |
| incentives_locked    | big integer | n        | Incentives locked on this node.       |
| incentives_on_node   | big integer | n        | Amount in the node's incentives pool. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 2. Get incentives list

[GET] /accounts/{account_id}/tokens/incentives

#### Query parameters

| Name        | Type     | Optional | Description                       |
| ----------- | -------- | -------- | --------------------------------- |
| start_date  | integer  | y        | Query start date. Unix timestamp. |
| end_date    | integer  | y        | Query end date. Unix timestamp.   |
| page        | integer  | y        | Page number. Starts from 0.       |
| page_size   | integer  | y        | Page size. Default to 20.         |

#### Response

Response `data` is an array whose element containing:

| Name              | Type          | Optional | Description                                                       |
| ----------------- | ------------- | -------- | ----------------------------------------------------------------- |
| date              | string        | n        | Incentives date. Unix timestamp.                                  |
| from              | string        | n        |  "original", "share", "group", "original_like", "original_comment", "original_share". |
| object_id         | string        | n        | Corresponding object id. Such as article_id, group_id, share_id.  |
| amount            | big integer   | n        | Incentives amount.                                                |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 3. Get incentives statistics list

[GET] /accounts/{account_id}/tokens/incentives/stats

#### Query parameters

| Name        | Type     | Optional | Description                       |
| ----------- | -------- | -------- | --------------------------------- |
| start_date  | integer  | y        | Query start date. Unix timestamp. |
| end_date    | integer  | y        | Query end date. Unix timestamp.   |
| page        | integer  | y        | Page number. Starts from 0.       |
| page_size   | integer  | y        | Page size. Default to 20.         |

#### Response

Response `data` is an array whose element containing:

| Name              | Type          | Optional | Description                           |
| ----------------- | ------------- | -------- | ------------------------------------- |
| date              | string        | n        | Incentives date. Unix timestamp.      |
| total             | big integer   | n        | Total incentives get for today.       |
| originals         | big integer   | n        | Incentives get from original. 40% of all the incentives.              |
| shares            | big integer   | n        | Incentives get from shares. 40% of all the incentives.                |
| original_likes    | big integer   | n        | Incentives get from likes. 10% of the original incentives.            |
| original_comments | big integer   | n        | Incentives get from comments. 10% of the original incentives.         |
| original_shares   | big integer   | n        | Incentives get from shares. 10% of the original incentives.           |
| groups            | big integer   | n        | Incentives get from group management.                                 |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 4. Get incentives withdrawal list

[GET] /accounts/{account_id}/tokens/incentives/withdrawal

#### Query parameters

| Name        | Type     | Optional | Description                         |
| ----------- | -------- | -------- | ----------------------------------- |
| start_date  | integer  | y        | Query start date. Unix timestamp.   |
| end_date    | integer  | y        | Query end date. Unix timestamp.     |
| page        | integer  | y        | Page number. Starts from 0.         |
| page_size   | integer  | y        | Page size. Default to 20.           |
| status      | string   | y        | Status filter. "pending" or "done". |

#### Response

Response `data` is an array whose element containing:

| Name                | Type        | Optional | Description                                                   |
| --------------      | ----------- | -------- | ------------------------------------------------------------- |
| id                  | string      | n        | Withdrawal id.                                                |
| created             | integer     | n        | Withdrawal created time. Unix timestamp.                      |
| updated             | integer     | n        | Withdrawal updated time.                                      |
| amount              | big integer | n        | Withdrawal amount.                                            |
| node_fee            | big integer | n        | Node charged withdrawal fee.                                  |
| status              | string      | n        | Withdrawal status. "pending", "done" or "cancelled".          |
| transaction         | object      | n        | Withdrawal [transaction object](./transaction.md#transaction) |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 5. Withdraw incentives

[POST] /accounts/{account_id}/tokens/incentives/withdrawal

#### Request

| Name         | Type        | Optional     | Description                                                |
| ------------ | ----------- | ------------ | ---------------------------------------------------------- |
| node_id      | string      | n            | Node id.
| created      | integer     | n            | Withdrawal creation time. Unix timestamp.                  |
| amount       | big integer | n            | Withdraw amount value.                                     |
| node_fee     | big integer | n            | Node charged withdrawal fee.                               |
| signature    | string      | n            | [Metadata signature](./dtcp.md#metadata-signature). |

#### Response

| Name | Type   | Optional | Description     |
| ---- | ------ | -------- | --------------- |
| id   | string | n        | Withdrawal id.  |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 6. Get token pre-lock list

[GET] /accounts/{account_id}/tokens/pre_locks

#### Query parameters

| Name        | Type     | Optional | Description                         |
| ----------- | -------- | -------- | ----------------------------------- |
| start_date  | integer  | y        | Query start date. Unix timestamp.   |
| end_date    | integer  | y        | Query end date. Unix timestamp.     |
| page        | integer  | y        | Page number. Starts from 0.         |
| page_size   | integer  | y        | Page size. Default to 20.           |
| type        | string   | y        | Type filter. "lock" or "unlock".    |

#### Response

Response `data` is an array whose element containing:

| Name               | Type        | Optional | Description |
| ------------------ | ----------- | -------- | ---------------------------------------- |
| id                 | string      | n        | Lock id.        |
| created            | integer     | n        | Lock creation time. Unix timestamp. |
| type               | string      | n        | Pre-lock type. "lock" or "unlock"   |
| amount             | big integer | n        | Pre-lock amount. |
| signature          | string      | n        | [Metadata signature](./dtcp.md#metadata-signature). |
| transaction_hash   | string      | n        | Transaction hash. |
| transaction_status | string      | n        | Transaction status. "pending", "done" or "failed" |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 7. Pre-lock tokens

[POST] /accounts/{account_id}/tokens/pre_locks

#### Request

| Name             | Type    | Optional | Description                            |
| ---------------- | ------- | -------- | -------------------------------------- |
| transaction      | string  | n        | Signed raw transaction to lock tokens. |

#### Response

| Name    | Type   | Optional | Description  |
| ------- | ------ | -------- | ------------ |
| id      | string | n        | Pre-lock id. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 8. Unlock pre-locked tokens(designing)

[DELETE] /accounts/{account_id}/tokens/pre_locks

#### Request

| Name         | Type        | Optional | Description                                                |
| ------------ | ----------- | -------- | ---------------------------------------------------------- |
| node_id      | string      | n        | Primas Node id.                                            |
| created      | integer     | n        | People creation time. Unix timestamp.                      |
| amount       | big integer | n        | Unlock amount.                                             |
| signature    | string      | n        | [Metadata signature](./dtcp.md#metadata-signature). |

#### Response

| Name    | Type   | Optional | Description  |
| ------- | ------ | -------- | ------------ |
| id      | string | n        | Pre-lock id. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 9. Get token lock list

[GET] /accounts/{account_id}/tokens/locks

#### Query parameters

| Name        | Type     | Optional | Description                                     |
| ----------- | -------- | -------- | ----------------------------------------------- |
| start_date  | integer  | y        | Query start date. Unix timestamp.               |
| end_date    | integer  | y        | Query end date. Unix timestamp.                 |
| page        | integer  | y        | Page number. Starts from 0.                     |
| page_size   | integer  | y        | Page size. Default to 20.                       |
| type        | string   | y        | Type filter. "content", "group_create", "group_join" or "report".    |

#### Response

Response `data` is an array whose element containing:

| Name      | Type        | Optional | Description |
| --------- | ----------- | -------- | -------------------------------------------------------- |
| id        | string      | n       | Lock id.                                                  |
| amount	| big integer | n	    | Lock amount.                                              |
| expire    | integer     | n       | Lock expire time. Unix timestamp. 0 for non-expire locks. |
| type      | string      | n       | Lock type. "content", "group_create", "group_join" or "report". |
| object_id | string      | n       | Locked object(content, group, report) id.                 |
| created   | integer     | n       | Lock creation time. Unix timestamp.                       |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```
