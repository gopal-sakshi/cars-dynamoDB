

module.exports = function (req, res) {
    var car = req.body;    
    var params = {
        TableName: "Cars_v2",
        Item: {
            "id": car.id,
            "type": car.type,
            "name": car.name,
            "manufacturer": car.manufacturer,
            "fuel_type": car.fuel_type,
            "description": car.description
        }
    };
    docClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add Car", car.name, ". Error JSON:", JSON.stringify(err, null, 2));
            res.send("athi pedda flopp");
        } else {
            console.log("PutItem succeeded:", car.name);
            res.status(200).send({info: "PutItem succeeded:", name23: car.name});
        }
    });
}