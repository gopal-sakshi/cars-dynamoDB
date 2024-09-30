var AWS = require("../config/aws-config-v2");
var docClient = new AWS.DynamoDB.DocumentClient();

// The conditional request failed --->      actors[] > 3        FAILED
var params = {
    TableName: "Movies",
    Key: {
        year: 2013,
        title: "Rush",
    },
    UpdateExpression: "remove info.actors[0]",
    ConditionExpression: "size(info.actors) > :num",
    ExpressionAttributeValues: {
        ":num": 3,
    },
    ReturnValues: "UPDATED_NEW",
};

docClient.update(params, function (err, data) {
    if (err) { console.error( "Error JSON:", JSON.stringify(err, null, 2) ); } 
    else { console.log("good ==> :", JSON.stringify(data, null, 2)); }
});