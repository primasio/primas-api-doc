# Primas Node API Documentation

## Group APIs

### Get group metadata

[GET] /groups/{group_id}

### Create group

[POST] /groups

### Edit group

[PUT] /groups/{group_id}

### Dismiss group

[DELETE] /groups/{group_id}

### Get group members

[GET] /groups/{group_id}/members

### Get group member applications

[GET] /groups/{group_id}/members/applications

### Apply to join group

[POST] /groups/{group_id}/members/applications

### Cancel member application

[DELETE] /groups/{group_id}/members/applications/{account_id}

### Approve or decline application

[PUT] /groups/{group_id}/members/applications/{account_id}

### Join group

[POST] /groups/{group_id}/members

### Quit group

[DELETE] /groups/{group_id}/members/{account_id}

### Get group shares

[GET] /groups/{group_id}/shares
 
### Get group share applications

[GET] /groups/{group_id}/shares/applications

### Apply to share

[POST] /groups/{group_id}/shares/applications

### Approve or decline share application

[PUT] /groups/{group_id}/shares/applications/{application_id}
 
### Cancel share application

[DELETE] /groups/{group_id}/shares/applications/{application_id}
 
### Delete group share

[DELETE] /groups/{group_id}/shares/{share_id}
