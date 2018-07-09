# Primas Node API Documentation

## Account APIs

### Get people metadata

[GET] /people/{people_dna}

### Create people metadata

[POST] /people

#### Request

| Name                | type    | Optional | Description |
| --------------      | ------- | -------- | ---------------------------------------- |
| name                | string  | y        | Name. |
| creator             | object  | n        | Creator. |
| created_at          | string  | y        | People creation time. Unix timestamp. Node time is used if empty. |
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

### Update people metadata

[PUT] /people/{people_dna}

### Get people credits list

[GET] /people/{people_dna}/credits

### Get account content list

[GET] /people/{people_dna}/content

### Get account groups list

[GET] /people/{people_dna}/groups

### Get account shares in a single group

[GET] /people/{people_dna}/groups/{group_dna}/shares

### Get account likes 

[GET] /people/{people_dna}/likes

### Get account comments  

[GET] /people/{people_dna}/comments

### Get account shares

[GET] /people/{people_dna}/shares