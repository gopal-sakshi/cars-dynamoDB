var AWS = require('aws-sdk');

var credentials23 = {
    region: "us-east-2",
    accessKeyId: 'OnlyAlphaNumericAllowed',
    secretAccessKey: '123456789',
    endpoint: "http://192.168.29.120:49003"
};

var docClient = new AWS.DynamoDB.DocumentClient(credentials23);
var dynamoDb = new AWS.DynamoDB(credentials23)

module.exports = {
    dynamoDb: dynamoDb,
    docClient: docClient
}