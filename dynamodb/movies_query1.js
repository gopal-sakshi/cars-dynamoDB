var { docClient } = require("../config/aws-config-v2");

// Querying for movies from 2014

var params = {
    TableName: "Movies",
    KeyConditionExpression: "#yr = :yyyy",
    ExpressionAttributeNames: {
        "#yr": "year",
    },
    ExpressionAttributeValues: {
        ":yyyy": 2014,
    },
};

docClient.query(params, function (err, data) {
    if (err) { console.error("Unable to query. Error:", JSON.stringify(err, null, 2)); } 
    else {
        console.log("Query succeeded.");
        data.Items.forEach(function (item) {
            console.log(" -", item.year + ": " + item.title);
        });
    }
});
