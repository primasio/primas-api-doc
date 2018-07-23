# Primas Node API Documentation

## Content APIs

Content(articles and images) related APIs. Posting and reading content.

#### Content Licensing

When posting, the author could attach a license to the content
to describe how the content could be used or disseminated.

DTCP supports the register of all kinds of licenses while in Primas however,
only 2 types of standard license is currently supported. 

There's a widely used license for freely content sharing
called [Creative Commons](https://creativecommons.org/), or CC in short,
which has a combination of different parameters to fully customize the way
content can be shared.

Primas supports CC 4.0 by filling "cc" in the `license.name` field.
Different options can also be specified in the `license.parameters` field.

```
{
  "name": "cc",
  "version": "4.0",
  "parameters": [
    {
      "name": "derivative",     // Whether Derivation is allowed.
      "value": "y"              // "y", "n" or "sa" for share-alike
    },
    {
      "name": "commercial",     // Whether commercial usage is allowed
      "value": "n"              // "y" or "n"
    }
  ]
}
``` 

Beside CC license, Primas supports commercial license as well, which allows the author
to set a price on the authorization of the content:

```
{
  "name": "commercial",
  "version": "2.0",
  "parameters": [
    {
      "name": "derivative",     // Whether Derivation is allowed.
      "value": "y"              // "y", "n"
    },
    {
      "name": "currency",       // Currency used for payment
      "value": "PST"            // Only PST is supported in Primas network
    },
    {
      "name": "price",
      "value": 100
    }
  ]
}
``` 

#### Content Format

### 1. Get content metadata

[GET] /content/{content_id}

#### Response

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| id                  | string  | n        | Content id.|
| tag                 | string  | n        | Content tag. Currently "article", "image" are supported. |
| title               | string  | n        | Content title. |
| creator             | object  | n        | Creator of the content. |
| abstract            | string  | n        | Content abstract. |
| language            | string  | n        | Content language. [RFC4646](http://www.ietf.org/rfc/rfc4646.txt) defined locales such as "en-US" |
| category            | string  | n        | Content categories. Comma separated words list. |
| created             | integer | n        | Content creation time. Unix timestamp. |
| updated             | integer | n        | Content last updating time. Unix timestamp. |
| content             | string  | n        | Content URI. In the case of IPFS, a link starts with "ipfs://" |
| content_hash        | string  | n        | Lowercase hex string of the SHA256 hash of the raw content. |
| license             | object  | y        | [Content authorization license](./content.md#content-licensing). |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |
| dna                 | string  | n        | Content DNA. |
| extra               | object  | n        | Extra content metadata. |
| transaction_id      | string  | n        | Transaction id. |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| account_name        | string  | n        | Account name. Root account name in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. |

`extra` object:

| Name           | Type    | Optional | Description |
| -------------- | ------- | ----- | -------------------- |
| ext            | string  | y     | Image format, such as 'png', 'jpg'. Image only. |
| width          | integer | y     | Image width in pixels. Image only.              |
| height         | integer | y     | Image height in pixels. Image only.             |
| size           | integer | y     | Image size in bytes. Image only.                |
| pst_total      | big integer | n | Total PST earned.      |
| pst_updated    | integer | n     | Last PST updated time. Unix timestamp. |
| objects        | array   | y     | A list of images, videos, audios contained in the content. Article only. |

`objects` array:

| Name           | Type    | Optional | Description |
| -------------- | ------- | ----- | -------------------- |
| id             | string  | n     | Object id. |
| type           | string  | n     | "image", "audio" or "video". |
| extra          | object  | n     | Extra metadata. |

`extra` object in `resources`:

| Name           | Type    | Optional | Description |
| -------------- | ------- | ----- | -------------------- |
| ext            | string  | y     | Image format, such as 'png', 'jpg'. Image only. |
| width          | integer | y     | Image width in pixels. Image only.              |
| height         | integer | y     | Image height in pixels. Image only.             |
| size           | integer | y     | Image size in bytes. Image only.                |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content/1GFYUNP815RUIFDNNRKLNU78RPCFLNL5DWGT7EXODHFVRCRVXJ

{"result_code":0,"data":{"dna":"", ...}}

```


### 2. Get raw content

[GET] /content/{content_id}/raw

Primas Node can build local cache of raw data for accessing speed. Or redirect the request to
content URI directly.

#### Response

Response is raw image data.

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content/1GFYUNP815RUIFDNNRKLNU78RPCFLNL5DWGT7EXODHFVRCRVXJ/content

{"result_code":0,"data":{"content:"..."}}

```


### 3. Post content

[POST] /content

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "object". |
| tag                 | string  | n        | Content type. Currently "article", "image" are supported. |
| title               | string  | n        | Content title. |
| creator             | object  | n        | Creator. |
| abstract            | string  | n        | Content abstract. |
| language            | string  | n        | Content language. [RFC4646](http://www.ietf.org/rfc/rfc4646.txt) defined locales such as "en-US" |
| category            | string  | n        | Content categories. Comma separated words list. |
| created             | integer | n        | Content creation time. Unix timestamp. |
| content             | string  | n        | Raw [content](./content.md#content-format) in base64 encoded format. |
| content_hash        | string  | n        | Lowercase hex string of the SHA256 hash of the raw content. |
| license             | object  | y        | [Content authorization license](./content.md#content-licensing). "none" is used if empty. |
| status              | string  | n        | Fixed to "created". |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

`creator` object:

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| account_id          | string  | n        | Account id. Root account id in the case of Sub account posting. |
| sub_account_id      | string  | y        | Sub account id. Refer to [Sub account](./dtcp.md#sub-accounts) for details. |
| sub_account_name    | string  | y        | Sub account name. For fast creation of new sub accounts. |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
|  id  | string | n | The id of the content. |
|  dna  | string | n | The DNA of the content. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```


### 4. Update content

[PUT] /content/{content_id}

For updating, only the changed metadata need to be provided.

#### Request

| Name                | Type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| version             | string  | n        | DTCP version. Fixed to "1.0". |
| type                | string  | n        | Fixed to "object". |
| tag                 | string  | n        | Content type. Currently "article", "image" are supported. |
| parent_dna          | string  | n        | Latest DNA of the content. |
| status              | string  | n        | Fixed to "updated". |
| updated             | integer | n        | Content updating time. Unix timestamp.|
| title               | string  | y        | Content title. |
| abstract            | string  | y        | Content abstract. |
| category            | string  | y        | Content categories. Comma separated words list. |
| content             | string  | y        | Raw content in base64 encoded format. |
| content_hash        | string  | y        | Lowercase hex string of the SHA256 hash of the raw content. |
| license             | object  | y        | [Content authorization license](./content.md#content-licensing). "none" is used if empty. |
| signature           | string  | n        | [Metadata signature](./dtcp.md#metadata-signature). |

#### Response

| Name | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
|  dna  | string | n | The updated DNA of the content. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```