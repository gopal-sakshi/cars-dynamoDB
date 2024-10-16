var express = require('express');
var router = express.Router();
var dynamoDb = require("../config/dynamo-local-config");
var dynamoClient = require("../config/dynamo-local-config");

// CREATE TABLE - available only with dynamoDb... not available with dynamoClient
router.post('/createTable', function(req, res){
    console.log('wait - let me create table');
    createTable().then(data => res.send(data)).catch(err => res.send(err));
});
/***********************************************************************/
router.post('/db/addPlayer', function(req,res) {
    addPlayerDb(req.body).then(data => res.send(data)).catch(err => res.send(err));
});

router.post('/client/addPlayer', function(req,res) {
    addPlayerClient(req.body).then(data => res.send(data)).catch(err => res.send(err));
});
/***********************************************************************/
router.get('/db/:playerId',function(req,res) {
    getPlayerDb(req.params.playerId).then(data => res.send(data)).catch(err => res.send(err));
});

router.get('/client/:playerId',function(req,res) {
    getPlayerClient(req.params.playerId).then(data => res.send(data)).catch(err => res.send(err));
});
/************************************** PRIVATE METHODS for dynamoDb *****************/
function createTable() {
    var params = {
        TableName : "footballers",
        KeySchema: [
            { AttributeName: "id", KeyType: "HASH" },  //Partition key
            { AttributeName: "name", KeyType: "RANGE" }
        ],
        AttributeDefinitions: [
            { AttributeName: "id", AttributeType: "N" },
            { AttributeName: "name", AttributeType: "S" }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    }; 
    return new Promise((resolve, reject) => {
        dynamoDb.createTable(params, function(err, data) {
            if (err) { console.error("err =>", JSON.stringify(err, null, 2)); reject(err); } 
            else { console.log("Created table", JSON.stringify(data, null, 2)); resolve(data); }
        });
    });
}

/*************************************************************************************/
function addPlayerDb(params23) {

    var params = {
        TableName: "footballers",
        Item: {
            id: { N: params23.id },
            name: { S: params23.name },
            club: { S: params23.club},
            position: { S: params23.position}
        }
    };
    // console.log(params23);
    return new Promise((resolve, reject) => {
        dynamoDb.putItem(params, (err, res) => {
            if(err) { reject(err) }
            else resolve(res);
        })
    });
}

function addPlayerClient(params23) {
    var params = {
        TableName: "footballers",
        Item: {
            "id": Number(params23.id),
            "name": params23.name,
            "club": params23.club,
            "position": params23.position
        }
    };
    return new Promise((resolve, reject) => {
        dynamoClient.put(params, (err, res) => {
            if(err) { reject(err) }
            else resolve(res);
        })
    });
}
/*************************************************************************************/

function getPlayerDb(playerId) {
    console.log(playerId);
    var params = {
        TableName: 'footballers',        
        Key: { 'id': { "N": playerId }, 'name': { "S": 'Cristiano Ronaldo' } }
    };
    return new Promise((resolve, reject) => {
        dynamoDb.getItem(params, (err, data) => {
            if(err) reject(err);
            else resolve(data);
        })
    });
}

function getPlayerClient(playerId) {
        
    var params = {
        TableName: 'footballers',        
        Key: { "id": Number(playerId) , "name": "Karim Benzema" } 
    };
    return new Promise((resolve, reject) => {
        dynamoClient.get(params, (err, data) => {
            if(err) reject(err);
            else resolve(data);
        })
    });
}
/************************************** PRIVATE METHODS for dynamoDb *******************/




/************************************** PRIVATE METHODS for dynamoClient *******************************************/





/************************************** PRIVATE METHODS for dynamoClient *********************************************/
module.exports = router;



/* 

    var params_old = {
        TableName : "footballers",
        KeySchema: [
            { AttributeName: "id", KeyType: "HASH" },  //Partition key
            { AttributeName: "name", KeyType: "RANGE" }
        ],
        AttributeDefinitions: [
            { AttributeName: "id", AttributeType: "N" },
            { AttributeName: "name", AttributeType: "S" },
            { AttributeName: "club", AttributeType: "S" },
            { AttributeName: "position", AttributeType: "S" }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    }; 



*/


// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AppendixSampleTables.html
// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AppendixSampleTables.html#AppendixSampleData.ProductCatalog
// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SampleData.CreateTables.html#SampleData.CreateTables1