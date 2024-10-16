var fs = require('fs');
var cars = JSON.parse(fs.readFileSync('carData.json', 'utf8'));
var { docClient } = require("../config/aws-config-v2");

/**********************************************************************/

cars.forEach(function (car) {    
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
        if (err) { console.error("Unable to add Car", car.name, ". Error JSON:", JSON.stringify(err, null, 2)); } 
        else { console.log("PutItem succeeded:", car.name); }
    });
});
/**********************************************************************/