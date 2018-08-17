`transaction` object:

| Name                | Type        | Optional | Description                                                   |
| ------------------- | ----------- | -------- | ------------------------------------------------------------- |
| transaction_id      | string      | y        | Transaction hash.                                             |
| block_number        | integer     | y        | Block number of this transaction.                             |
| block_confirmations | integer     | y        | Block confirmation time.                                      |
| estimated_time      | integer     | n        | Estimated confirmation time. Unix timestamp.                  |
| confirmed_time      | integer     | y        | Confirmation time. Unix timestamp.                            |
