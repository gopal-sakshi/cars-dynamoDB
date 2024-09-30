var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3010, () => console.log('Cars API listening on port 3010!'))

/********************************************************************************************/

app.get('/cars', require("./dynamoMethods/scan"));
app.get('/cars/:id', require("./dynamoMethods/getById"));
app.put('/addCar', require("./dynamoMethods/addCar"));

app.get('/', function (req, res) {
    res.send({ title: "Cars API Entry Point" });
});
/********************************************************************************************/