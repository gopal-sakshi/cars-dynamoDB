var AWS = require("../config/aws-config-v2");
var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "Movies",
    Key: {
        year: 2013,
        title: "Rush",
    },
    UpdateExpression: "set info.rating = :r, info.plot=:p, info.actors=:a",
    ExpressionAttributeValues: {
        ":r": 5.5,
        ":p": `plot_updated_at__${Date.now()}`,
        ":a": ["Larry", "Moe", "Curly"],
    },
    ReturnValues: "UPDATED_NEW",
};

docClient.update(params, function (err, data) {
    if (err) { console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2)); }
});