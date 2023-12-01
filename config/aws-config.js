/***********************************************************/
var AWS = require('aws-sdk');
AWS.config.update({
    region: "us-east-2",
    accessKeyId: 'chanti_gadu_local',   // this doesnt have to be real Values
    secretAccessKey: 'idiot_movie',
    endpoint: "http://localhost:8002"
});

var docClient = new AWS.DynamoDB.DocumentClient();
var dynamoDb = new AWS.DynamoDB();
/***********************************************************/





/***********************************************************/
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const client = new DynamoDBClient({ region: "REGION" });
/***********************************************************/




/***********************************************************/
module.exports = {
    AWS: AWS,
    docClient: docClient,
    dynamoDb: dynamoDb,
    DynamoDBClient:DynamoDBClient
};
/***********************************************************/