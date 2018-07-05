# Primas Node API Documentation

## Content Interaction APIs
In Primas, content interactions(like, comment, share) can only happen
in groups. And interactions in a given group are only visible to this group.
When interacting with content, the corresponding group DNA must be provided.

### Get content likes

[GET] /groups/{group_dna}/content/{content_dna}/likes

### Like content

[POST] /groups/{group_dna}/content/{content_dna}/likes

### Delete like

[DELETE] /groups/{group_dna}/content/{content_dna}/likes/{like_dna}

### Get content comments

[GET] /groups/{group_dna}/content/{content_dna}/comments

### Comment content

[POST] /groups/{group_dna}/content/{content_dna}/comments

### Delete comment

[DELETE] /groups/{group_dna}/content/{content_dna}/comments/{comment_dna}

### Get content shares

[GET] /groups/{group_dna}/content/{content_dna}/shares

### Share content

[POST] /groups/{group_dna}/content/{content_dna}/shares

### Delete share

[DELETE] /groups/{group_dna}/content/{content_dna}/shares/{share_dna}

