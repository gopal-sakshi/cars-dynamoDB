var AWS = require("../config/aws-config-v2");
var docClient = new AWS.DynamoDB.DocumentClient();

module.exports = function (req, res) {
    var params = {
        TableName: "Cars_v2",
        ProjectionExpression: "#id, #name, #type, #manufacturer, #fuel_type, #description",
        ExpressionAttributeNames: {
            "#id": "id",
            "#name": "name",
            "#type": "type",
            "#manufacturer": "manufacturer",
            "#fuel_type": "fuel_type",
            "#description": "description"
        }
    };

    docClient.scan(params, onScan);
    function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            res.send(data)            
            console.log("Scan succeeded.");
            data.Items.forEach(function (car) {
                console.log(car.id, car.type, car.name)
            });
            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log("Scanning for more...");
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            }
        }
    }
}