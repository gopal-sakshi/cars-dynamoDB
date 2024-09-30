var AWS = require("../config/aws-config-v2");
var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "Movies",
    Item: {
        year: 2015,
        title: "test_movie23",
        info: { plot: "Nothing happens at all.", rating: 0, },
    },
};


docClient.put(params, function (err, data) {
    if (err) { console.error("Error JSON:", JSON.stringify(err, null, 2)); }
    else { console.log("Added item:", JSON.stringify(data, null, 2)); }
});