var AWS = require("../config/aws-config-v2");
var docClient = new AWS.DynamoDB.DocumentClient();

// get an item

var params = {
    TableName: "Movies",
    Key: {
        year: 2013,
        title: "Rush",
    }
};

docClient.get(params, function (err, data) {
    if (err) { console.error("Error JSON:", JSON.stringify(err, null, 2) ); } 
    else { console.log("GetItem succeeded:", JSON.stringify(data, null, 2)); }
});