var { docClient } = require("../config/aws-config-v2");

module.exports = function (req, res) {
    var carID = parseInt(req.url.slice(6));
    var params = {
        TableName: "Cars_v2",
        KeyConditionExpression: "#id = :id",        
        ExpressionAttributeNames: {
            "#id": "id"
        },
        ExpressionAttributeValues: {
            ":id": carID
        }
    };
    docClient.query(params, function (err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            console.log("Query succeeded.");
            res.send(data.Items)
            data.Items.forEach(function (car) {
                console.log(car.id, car.name, car.type);
            });
        }
    });
}