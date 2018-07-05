# Primas Node API Documentation

## Group APIs

### Get group metadata

[GET] /groups/{group_dna}

### Create group

[POST] /groups

### Dismiss group

[DELETE] /groups/{group_dna}

### Get group members

[GET] /groups/{group_dna}/members

### Get group member applications

[GET] /groups/{group_dna}/members/applications

### Apply to join group

[POST] /groups/{group_dna}/members/applications

### Cancel application

[DELETE] /groups/{group_dna}/members/applications/{person_dna}

### Approve or decline application

[PUT] /groups/{group_dna}/members/applications/{person_dna}

### Join group

[POST] /groups/{group_dna}/members

### Quit group

[DELETE] /groups/{group_dna}/members/{person_dna}

### Get group content

[GET] /groups/{group_dna}/content