var AWS = require("../config/aws-config-v2");
var docClient = new AWS.DynamoDB.DocumentClient();

// Attempting a conditional delete...
var params = {
    TableName: "Movies",
    Key: {
        year: 2015,
        title: "test_movie23",
    },
    ConditionExpression: "info.rating <= :val",
    ExpressionAttributeValues: {
        ":val": 5.0,
    },
};


docClient.delete(params, function (err, data) {
    if (err) { console.error("Error JSON:", JSON.stringify(err, null, 2) ); } 
    else { console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2)); }
});