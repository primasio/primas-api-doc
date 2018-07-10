# Primas Node API Documentation

## Token APIs

### Get token balances

[GET] /account/{account_id}/tokens

#### Response
| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
| total	 |float64	| n | total token balance |
| available	 | float64	| n | available online token |
| prelock	| float64 | n | pre-lock token|
| residual	| float64	| n | residual income in node |
| rmb_value	| float64	| y | total token value to transform RMB |

### Get incentives list

[GET] /account/{account_id}/tokens/incentives?page_id={page_id}

#### Response
| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| originate	| float64	| n	| originate incentive, example publish article |
| alike	| float64	| n	| alike incentive |
| comment	| float64	| n | comment incentive  |
| share	| float64	| n | share incentive |
| manager	| float64	| n	| manager group incentive |
| yesterday	| float64	| n	| yesterday incentive |
| history_total	 | float64	| n | history incentive total |
| history_records | []object	| n | history incentive list |

`history_records` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id | string | n |  incentive id |
| dna | string | n |  operate dna |
| content_id | string | n |  operate article content id |
| type | string | n |  incentive type, originate, alike, comment, share, manager |
| creator             | object  | n        | Creator. |
| created | string  | n | operate creation time. Unix timestamp. |
| incentive | float64 | n | incentive value |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

`creator` object:

| Name                | type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Root account id. |
| account_name        | string  | n        | Root account name. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./README.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |


### Get incentives withdrawal list

[GET] /account/{account_id}/tokens/incentives/withdrawal?page_id={page_id}
page_id: start from 0 

#### Response
| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| residual	| float64	| n | residual income in node |
| locked	| float64	| n | locked income in node |
| records | []object | n | withdraw audit and history list |

`records` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id | string  | n  | Root account id. |
| node_id	| string	| n	| withdraw from node id |
| dna | string | n |  withdraw dna |
| begin_time	| uint	| n | withdraw begin datetime |
| check_time	| uint	| n | withdraw check datetime |
| orderid	| string	| n	| withdraw orderid |
| index	| uint	| n	| withdraw index |
| amount | float64	| n	| withdraw amount |
| balance	| float64	| n	| balance after withdraw |
| status	| uint	| n	| withdraw status | 
| isdelete	| uint	| n	| withdraw invalid |
| txstatus	| int	| n	| blockchain transaction status |
| txhash | string	| n | blockchain TxHash |
| node_fee	| float64	| n	| withdraw fee in node |


### Withdraw incentives

[POST] /account/{account_id}/tokens/incentives/withdrawal

#### Request
| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| node_id | string	| Yes	| withdraw node id |
| account_id  | string	| Yes	| Root account id. |
| amount	| float64	| Yes	| withdraw amount value |
| signature	| string	| Yes	| [Metadata signature](./README.md#dtcp-metadata-signature). |

#### Response
| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| dna | string | n |  withdraw dna |

### Get token lock list

[GET] /account/{account_id}/tokens/locks

#### Response
| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| records | []object | n | tokens lock history list |

`records` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| node_id | string	| n	| predict lock node id |
| account_id  | string	| n	| Root account id. |
| dna | string | n |  predict lock dna |
| created   | string  | n       | Content creation time. Unix timestamp. |
| amount	| float64	| n	| predict lock value |
| signature	| string	| n	| [Metadata signature](./README.md#dtcp-metadata-signature). |
| orderid	| string	| n	| predict lock orderid |
| node_fee	| float64	| n | node fee |
| lock_type	| int	| n	| predict lock type |
| txstatus	| int	| n	| blockchain transaction status|
| txhash	| string	| n	| blockchain TxHash |

### Lock tokens

[POST] /account/{account_id}/tokens/locks

#### Request
| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| node_id | string	| Yes	| predict lock node id |
| account_id  | string	| Yes	| Root account id. |
| amount	| float64	| Yes	| withdraw amount value |
| signature	| string	| Yes	| [Metadata signature](./README.md#dtcp-metadata-signature). |

#### Response
| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| dna | string | n |  predict lock dna |

### Unlock tokens

[DELETE] /account/{account_id}/tokens/locks

#### Request
| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| node_id | string	| Yes	| predict unlock node id |
| account_id  | string	| Yes	| Root account id. |
| amount	| float64	| Yes	| withdraw amount value |
| signature	| string	| Yes	| [Metadata signature](./README.md#dtcp-metadata-signature). |

#### Response
| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| dna | string | n |  predict unlock dna |
