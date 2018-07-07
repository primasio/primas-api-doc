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

```json
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

```json
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

### 1. Get content metadata

[GET] /content/{content_dna}

#### Response

| Name                | type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| dna                 | string  | n        | Content DNA.
| type                | string  | n        | Content type. Currently "article", "image" are supported. |
| title               | string  | n        | Content title. |
| creator             | object  | n        | Creator of the content. |
| creator.dna         | string  | n        | Creator DNA. |
| creator.name        | string  | n        | Creator name. |
| abstract            | string  | n        | Content abstract. |
| language            | string  | n        | Content language. [RFC4646](http://www.ietf.org/rfc/rfc4646.txt) defined locales such as "en-US" |
| category            | string  | n        | Content categories. Comma separated words list. |
| created_at          | string  | n        | Content creation time. Unix timestamp. |
| content             | string  | n        | Content URI. |
| content_hash        | string  | n        | Keccak256 hash of the raw content. |
| license             | object  | y        | [Content authorization license](./content.md#content-licensing). |
| sub_account         | object  | y        | [Sub account](./README.md#sub-accounts). |
| sub_account.id      | string  | n        | Sub account id. |
| sub_account.name    | string  | y        | Sub account name. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |
| extra               | object  | n        | Extra content metadata. |
| extra.block_hash    | string  | n        | Block hash used to generate DNA. |
| extra.transaction_id| string  | n        | Transaction that includes this content. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content/1GFYUNP815RUIFDNNRKLNU78RPCFLNL5DWGT7EXODHFVRCRVXJ

{"result_code":0,"data":{"dna":"", ...}}

```


### 2. Get raw content

[GET] /content/{content_dna}/content

#### Response

| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
|  content  | string | no | Base64 encoded raw content |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content/1GFYUNP815RUIFDNNRKLNU78RPCFLNL5DWGT7EXODHFVRCRVXJ/content

{"result_code":0,"data":{"content:"..."}}

```


### 3. Post content

[POST] /content

#### Request

| Name                | type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| type                | string  | n        | Content type. Currently "article", "image" are supported. |
| title               | string  | n        | Content title. |
| abstract            | string  | n        | Content abstract. |
| language            | string  | n        | Content language. [RFC4646](http://www.ietf.org/rfc/rfc4646.txt) defined locales such as "en-US" |
| category            | string  | n        | Content categories. Comma separated words list. |
| created_at          | string  | y        | Content creation time. Unix timestamp. Node time is used if empty. |
| content             | string  | n        | Raw content in base64 encoded format. |
| license             | object  | y        | [Content authorization license](./content.md#content-licensing). "none" is used if empty. |
| sub_account         | object  | y        | [Sub account](./README.md#sub-accounts). |
| sub_account.id      | string  | n        | Sub account id. |
| sub_account.name    | string  | y        | Sub account name. |
| signature           | string  | n        | [Metadata signature](./README.md#dtcp-metadata-signature). |

#### Response

| Parameter | Type | Optional | Description |
| ------------ | ------------- | ------------ | ------------- | 
|  content_dna  | string | n | The DNA of the content. |

#### Example

```bash
$ curl -x https://rigel-a.primas.network/v3/content -d '{"type":"article","content":"...","signature":"..."}'

{"result_code":0,"data":{"dna":"", ...}}

```