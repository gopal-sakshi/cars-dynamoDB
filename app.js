var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3010, () => console.log('Cars API listening on port 3010!'))

// RUN DYNAMO LOCALLLLLLLLYYYYYYYYYYYY
app.get('/cars', require("./dynamoMethods/scan"));
app.get('/cars/:id', require("./dynamoMethods/getById"));
app.put('/addCar', require("./dynamoMethods/addCar"));


// "lambda-express23" repo  ====> S3 upload functionality
app.use('/s3_v2', require("./S3/players_v2"));
app.use('/s3_v3', require("./S3/players_v3"));



app.get('/', function (req, res) {
    res.send({ title: "Cars API Entry Point" });
});
/********************************************************************************************/