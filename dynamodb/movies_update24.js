var { docClient } = require("../config/aws-config-v2");

// Increment an atomic counter

var params = {
    TableName: "Movies",
    Key: {
        year: 2013,
        title: "Rush",
    },
    UpdateExpression: "set info.rating = info.rating + :val",
    ExpressionAttributeValues: {
        ":val": 1,
    },
    ReturnValues: "UPDATED_NEW",
};

docClient.update(params, function (err, data) {
    if (err) { console.error("Error JSON:", JSON.stringify(err, null, 2) ); } 
    else { console.log("Update success:", JSON.stringify(data, null, 2)); }
});