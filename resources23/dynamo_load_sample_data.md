first create the table
- aws dynamodb create-table --table-name ProductCatalog --attribute-definitions AttributeName=Id,AttributeType=N --key-schema AttributeName=Id,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5  --table-class STANDARD --endpoint-url http://localhost:8002 --profile dynamoLocal23
- aws dynamodb create-table 
    --table-name ProductCatalog 
    --attribute-definitions AttributeName=Id,AttributeType=N 
    --key-schema AttributeName=Id,KeyType=HASH 
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5  
    --table-class STANDARD
    --endpoint-url http://localhost:8002 
    --profile dynamoLocal23

`aws dynamodb batch-write-item --request-items file://ProductCatalog.json`
- cd "C:\Users\gopal\Downloads\sampledata"
- go to this path & execute this command
- but since, we are using dynamo locally... use these flags
    --endpoint-url http://localhost:8002 
    --profile dynamoLocal23



`aws dynamodb batch-write-item --request-items file://ProductCatalog.json --endpoint-url http://localhost:8002 --profile dynamoLocal23`
- If all items are inserted, you get this response ---> UnprocessedItems : {}

check for table data
- `aws dynamodb scan --table-name ProductCatalog --endpoint-url http://localhost:8002 --profile dynamoLocal23`