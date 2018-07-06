# Primas Node API Documentation

## Query APIs

[GET] /query

#### Request

| Parameter | Type | Data Type | Optional | Description |
| ------------ | ----------- | ------------- | ------------ | ------------- |
| q | GET | string | no |Query string |
| type | GET | string | no | Query type. Currently supports "all", "content", "person", "group" |
| page | GET | integer | no | Current page number. Starts from 0. | 
| page_size | GET  | integer | no | Page size |

#### Response

Response in `data` field is a JSON array whose element contains following field:

| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
|  dna  | string | no | The DNA of the content |

#### Example

```bash

```