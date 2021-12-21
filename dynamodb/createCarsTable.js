var AWS = require("aws-sdk");

AWS.config.update({  
  endpoint: "http://localhost:8000",
  accessKeyId: 'AKIA2MDOCKKQ4A4QW7NN',
  secretAccessKey: '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', 
  region: 'us-west-2'
});

/*
    var config = new AWS.Config({
    accessKeyId: 'AKID', secretAccessKey: 'SECRET', region: 'us-west-2'
    });
*/

var dynamodb = new AWS.DynamoDB();
var params = {
    TableName : "Cars",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH"},  //Partition key
],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "N" },
],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};
dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});