# Primas Node API Documentation

## Content Interaction APIs
In Primas, content interactions(like, comment, share) can only happen
in groups. And interactions in a given group are only visible to this group.
When interacting with content, the corresponding group DNA must be provided.

### Get content likes

[GET] /shares/{share_dna}/likes

### Like content

[POST] /shares/{share_dna}/likes

### Delete like

[DELETE] /shares/{share_dna}/likes/{like_dna}

### Get content comments

[GET] /shares/{share_dna}/comments

### Comment content

[POST] /shares/{share_dna}/comments

### Delete comment

[DELETE] /shares/{share_dna}/comments/{comment_dna}

### Get content shares

[GET] /shares/{share_dna}/shares

### Share content

[POST] /shares/{share_dna}/shares

### Delete share

[DELETE] /shares/{share_dna}/shares/{share_dna}

### Report shares

[POST] /shares/{share_dna}/reports

### Get share reports

[GET] /shares/{share_dna}/reports


