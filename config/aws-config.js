/***********************************************************/
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const dynamoClient = new DynamoDBClient({
    endpoint: "http://192.168.29.120:49003",
    region: 'us-east-1',
    credentials: {
        accessKeyId: "xxx",
        secretAccessKey: "yyy",
    },
});
/***********************************************************/




/***********************************************************/
const { CreateTableCommand } = require("@aws-sdk/client-dynamodb"); 

const { PutItemCommand, GetItemCommand } = require("@aws-sdk/client-dynamodb");
const { PutCommand, GetCommand } = require("@aws-sdk/lib-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");


/***********************************************************/
module.exports = {
    dynamoClient,
    CreateTableCommand,
    GetCommand,
    PutCommand,
    GetItemCommand, 
    PutItemCommand,
    marshall, unmarshall
};
/***********************************************************/