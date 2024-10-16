/************************** This is Dynamo local ************************************* */ 

var AWS = require('aws-sdk');
AWS.config.update({
    region: "us-east-2",
    // DynamoDB local v2 --> AWS_ACCESS_KEY_ID can contain the only letters (A–Z, a–z) and numbers (0–9).
    accessKeyId: 'chantiGaduLocal123',              // this doesnt have to be real Values
    secretAccessKey: 'idiot_movie',
    endpoint: "http://localhost:8002"               // make sure that dynamo service is running locally
});
var dynamoDb = new AWS.DynamoDB();
module.exports = dynamoDb;

/************************** This is Dynamo local ************************************* */ 

/*

    EXPLANATION: 

    alias ddb=
        "cd /home/vsspl/Desktop/otherFiles/dynamoLocal && 
        java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb"
    
    alias ddbPort=
        "cd /home/vsspl/Desktop/otherFiles/dynamoLocal && 
        java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb -port 8002"

    Intro

    a) If you use the -sharedDb option, 
    - DynamoDB creates a single database file named shared-local-instance.db. 
    - Every program that connects to DynamoDB accesses this file. 
    - If you delete the file, you lose any data that you have stored in it.

    b) If you omit -sharedDb, the database file is named myaccesskeyid_region.db
    - with the AWS access key ID and AWS Region as they appear in your application configuration. 
    - If you delete the file, you lose any data that you have stored in it.


    Other commands:

    a) see the list of tables
    "export AWS_PROFILE=dynamoLocal23" -----> As, I have two aws profiles; for now use dynamoLocal23 (valid till end of shell session)
    "aws dynamodb list-tables --endpoint-url http://localhost:8002"

*/
