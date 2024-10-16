# Other commands:

a) switch aws profile
`export AWS_PROFILE=dynamoLocal23` -- UBUNTU ---> As, I have two aws profiles; for now use dynamoLocal23 (valid till end of shell session)
`set AWS_PROFILE dynamoLocal23` -- WINDOWS --> export is valid only for unix shells... in windows, use set... plus, there is not '=' sign
    // for some reason, its not working... so use this command...
`aws dynamodb list-tables --endpoint-url http://localhost:8002 --profile dynamoLocal23` 
    // use a particular profile while running AWS

b) see the list of tables
`aws dynamodb list-tables --endpoint-url http://localhost:8002`
`aws dynamodb list-tables --endpoint-url http://localhost:8002 --profile dynamoLocal23`

c) create table

<create ProductCatalog table> ------------------------> Only 1 partition key Id
aws dynamodb create-table 
    --table-name ProductCatalog 
    --attribute-definitions AttributeName=Id,AttributeType=N 
    --key-schema AttributeName=Id,KeyType=HASH 
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5  
    --table-class STANDARD
    --endpoint-url http://localhost:8002 
    --profile dynamoLocal23

<create Music table> ---------------------------------> Artist = partitionKey, SongTitle = rangeKey
aws dynamodb create-table \
    --table-name Music \
    --attribute-definitions \
        AttributeName=Artist,AttributeType=S \
        AttributeName=SongTitle,AttributeType=S \
    --key-schema \
        AttributeName=Artist,KeyType=HASH \
        AttributeName=SongTitle,KeyType=RANGE \
    --provisioned-throughput \
        ReadCapacityUnits=5,WriteCapacityUnits=5 \
    --table-class STANDARD

d) see contents of footballers table
`aws dynamodb scan --table-name footballers --endpoint-url http://localhost:8002 --profile dynamoLocal23`

e) get total rows in a table
`aws dynamodb scan --table-name footballers --select "COUNT"`
`aws dynamodb scan --table-name footballers --select "COUNT" --endpoint-url http://localhost:8002 --profile dynamoLocal23`

dynamo AWS CLI
`https://docs.aws.amazon.com/cli/latest/reference/dynamodb/index.html#cli-aws-dynamodb`
