# Primas Node API Documentation

## Group APIs

### Get group metadata

[GET] /groups/{group_dna}

### Create group

[POST] /groups

### Edit group
[PUT] /groups/{group_dna}

### Dismiss group

[DELETE] /groups/{group_dna}

### Get group members

[GET] /groups/{group_dna}/members

### Get group member applications

[GET] /groups/{group_dna}/members/applications

### Apply to join group

[POST] /groups/{group_dna}/members/applications

### Cancel member application

[DELETE] /groups/{group_dna}/members/applications/{person_dna}

### Approve or decline application

[PUT] /groups/{group_dna}/members/applications/{person_dna}

### Join group

[POST] /groups/{group_dna}/members

### Quit group

[DELETE] /groups/{group_dna}/members/{person_dna}

### Get group shares

[GET] /groups/{group_dna}/shares
 
### Get group share applications

[GET] /groups/{group_dna}/shares/applications

### Apply to share

[POST] /groups/{group_dna}/shares/applications

### Approve or decline share application

[PUT] /groups/{group_dna}/shares/applications/{application_dna}
 
### Cancel share application

[DELETE] /groups/{group_dna}/shares/applications/{application_dna}
 
### Delete group share

[DELETE] /groups/{group_dna}/shares/{share_dna}

### Delete all shares of a person in a group

[DELETE] /groups/{group_dna}/members/{person_dna}/shares




