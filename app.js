var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.listen(3010, () => console.log('Cars API listening on port 3010!'))

// var AWS = require("./config/aws-config");
// var docClient = new AWS.DynamoDB.DocumentClient();

var docClient = require("./config/aws-config");
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'jade');
app.get('/', function (req, res) {
  res.send({ title: "Cars API Entry Point" })
})
app.get('/cars', function (req, res) {
var params = {
    TableName: "Cars",
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
console.log("Scanning Cars table.");
docClient.scan(params, onScan);
function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        res.send(data)
        // print all the Cars
        console.log("Scan succeeded.");
        data.Items.forEach(function(car) {
           console.log(car.id, car.type, car.name)
        });
        if (typeof data.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        }
    }
  }
})

app.get('/cars/:id', function (req, res) {
var carID = parseInt(req.url.slice(6));
  console.log(req.url)
  console.log(carID)
var params = {
      TableName : "Cars",
      KeyConditionExpression: "#id = :id",
      ExpressionAttributeNames:{
          "#id": "id"
      },
      ExpressionAttributeValues: {
          ":id": carID
      }
  };
docClient.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        res.send(data.Items)
        data.Items.forEach(function(car) {
            console.log(car.id, car.name, car.type);
        });
    }
});
});

app.put('/addCar', function(req, res) {

    var car = req.body;
    console.log(car);    
    var params = {
        TableName: "Cars",
        Item: {
            "id": car.id,
            "type": car.type,
            "name": car.name,
            "manufacturer": car.manufacturer,
            "fuel_type": car.fuel_type,
            "description": car.description
        }
    };
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add Car", car.name, ". Error JSON:", JSON.stringify(err, null, 2));
            res.send("athi pedda flopp");
        } else {
            console.log("PutItem succeeded:", car.name);
            // res.send(200).status("PutItem succeeded:", car.name);       // I used this... what kind of idiot I am...
            // res.status(200).send("PutItem succeeded:", car.name);        // even this threw error...
            res.status(200).send("PutItem succeeded:");
        }
    });
})