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


### Publish content

[POST] /content

#### Request

| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- |
| type | string | no | Content type. Currently "article", "image", "person" are supported. | 
|  content  | string | no | Base64 encoded original content |
|  signature  | string | no | metadata signature |

#### Response

| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
|  dna  | string | no | The DNA of the content |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```