# Primas Node API Documentation

## Content APIs


### Get content metadata

[GET] /content/{content_dna}

#### Response

| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
|  dna  | string | no | The DNA of the content |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content/1GFYUNP815RUIFDNNRKLNU78RPCFLNL5DWGT7EXODHFVRCRVXJ

{"result_code":0,"data":{"dna":"", ...}}

```


### Get raw content

[GET] /content/{content_dna}/content

#### Response

| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
|  content  | string | no | Base64 encoded raw content |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content/1GFYUNP815RUIFDNNRKLNU78RPCFLNL5DWGT7EXODHFVRCRVXJ

{"result_code":0,"data":{"dna":"", ...}}

```


### Post content

[POST] /content

#### Request

| Name                | type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Content type. Currently "article", "image" are supported. |
| title               | string  | n        | Content title. |
| abstract            | string  | n        | Content abstract. |
| language            | string  | n        | Content language. [RFC4646](http://www.ietf.org/rfc/rfc4646.txt) defined locales such as "en-US" |
| category            | string  | n        | Content categories. Comma separated words list. |
| created_at          | string  | y        | Content creation time. Unix timestamp. Node time is used if empty.               |
| content             | string  | n        | Raw content in base64 encoded format. |
| license             | object  | y        | Content authorization license. |
| license.name        | string  | n        | License name."cc" for Creative Commons and "cm" for Commercial. |
| license.parameters  | object  | n        | License parameters. |
| sub_account         | string  | y        | [Sub account identifier](./README.md#sub-accounts). |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

#### Response

| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
|  dna  | string | n | The DNA of the content. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```