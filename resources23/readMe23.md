this repo will contain both `aws-sdk v2`  and  `aws-sdk v3`

`aws-sdk-v3`
- node config/dynamo-create-get-put1.js


`aws-sdk-v2`
- npm run create-db
- npm run load-data
- npm run read-data
- node app.js
- curl --location 'localhost:3010/cars'


`aws-sdk-v2----movies`
- node dynamodb/movies_createTable.js 
- node dynamodb/movies_addData.js
- node dynamodb/movies_getItem.js
- node dynamodb/movies_update23.js
- node dynamodb/movies_update24.js
- 

<!-- --------------------------------------------------------------------------------------- -->

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.KeyConditionExpressions.html

`partition key`  = (<only isEqualTo> allowed)
#id = :id
#yr = :yyyy


`sort key`      only these <six operators> allowed
= < <= > >= 
BETWEEN "M" and "S"         <!-- all movies with titles between M & S are returned -->
