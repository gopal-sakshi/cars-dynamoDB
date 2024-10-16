var { docClient } = require("../config/aws-config-v2");
// Querying for movies from 1992 - titles A-L, with genres and lead actor

var params = {
    TableName: "Movies",
    ProjectionExpression: "#yr, title, info.genres, info.actors[0]",
    KeyConditionExpression: "#yr = :yyyy and title between :letter1 and :letter2",
    ExpressionAttributeNames: {
        "#yr": "year",
    },
    ExpressionAttributeValues: {
        ":yyyy": 2013,
        ":letter1": "M",
        ":letter2": "S",
    },
};

docClient.query(params, function (err, data) {
    if (err) { console.log("Unable to query. Error:", JSON.stringify(err, null, 2)); } 
    else {
        console.log("Query succeeded.");
        data.Items.forEach(function (item) {
            console.log(" -", item.year + ": " + item.title + " ... " + item.info.genres + " ... " + item.info.actors[0] );
        });
    }
});