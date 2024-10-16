var express = require('express');
var router = express.Router();
var httpStatusCodes = require("../constants/http-error-codes")
var dynamoClient = require("../config/dynamo-config")

/********************************* METHODS ******************** */
    //            ------> GET; display all players
    // :club      ------> GET; display players from 'club'    not working
    // addPlayer  ------> POST; add a player 
/********************************* METHODS ******************** */


/*
    partition key
    - is used for partitioning the data. 
    - Data with the same partition key is stored together
    - which allows you to query data with the same partition key in 1 query.

    sort key
    - determines the order of how data with the same partition key is stored. 
    - Using a clever sort key allows you to query many items in 1 query.
*/

router.post('/createTable', (req, res) => {
    let params23 = {
        TableName: "fb_playersTable",
        KeySchema: [
            { AttributeName: "name", KeyType: "HASH"},  //Partition key
            { AttributeName: "position", KeyType: "RANGE" }  //Sort key
        ],
        AttributeDefinitions: [
            { AttributeName: "name", AttributeType: "S" },
            { AttributeName: "position", AttributeType: "S" }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10
        }
    };
    dynamoClient.createTable(params23, function(tableErr, tableData) {
        if (tableErr) {
            console.error("Error JSON:", JSON.stringify(tableErr, null, 2));
        } else {
            console.log("Created table successfully! ", JSON.stringify(tableData));
        }
        res.send({ info23: "table create ayindi aa ", time23: Date.now(), tableInfo: tableData})
    })
});


/** display all players */
router.get('/', function(req, res) {
    console.log("display players Data");
    var params = {
        TableName: "fb_playersTable"
    }
    dynamoClient.scan(params, function (err, data) {
        if (err) {
            console.log("unable to fetch players data");
            console.log(err);
            res.status = httpStatusCodes.serverError
            res.send("Unable to fetch player data23");
        } else {
            res.send(data);
        }
    })
    
})


/** display all players of a particular club */
/** it seems, this wont work... we can query only on primary keys (or) u need to create index like global secondary index to query on non-primary key columns */
router.get('/:club', async function(req, res) {
    var clubId = req.params.club;

    var params = {
        TableName: 'fb_playersTable',        
        KeyConditionExpression: "#club = :club23",
        ExpressionAttributeNames: { "#club": "club" },
        ExpressionAttributeValues: {
            ":club23": clubId
        }
    };
    
    dynamoClient.query(params, function(err, data) {
        if (err) {
            console.log(err);
            res.send("utter flop")
        } else {
            console.log(data);
            console.log("display teams from ", teamId);
            res.send("very good");
        } 
    });
}) 

/** add a player */
router.post('/addPlayer', async function(req, res) {
    console.log('post request for player');
    //console.log(req.body);
    await addPlayer(req.body) ? res.send('player added successfully') : res.send('phattu - cant add player') ;
    
})

/************************************* PRIVATE METHODS  ******************************/
async function addPlayer(playerData) {
    console.log(playerData);

    var params = {
        TableName: "fb_playersTable",
        Item: {
            "name": playerData.name,
            "age": playerData.age,
            "nationality": playerData.nationality,
            "presentClub": playerData.presentClub,
            "position": playerData.position
        }
    };

    return new Promise ((resolve, reject) => {
        dynamoClient.put(params, function(err, data) {
            if(err) { console.log(err); reject(false) } 
            else { resolve(true); }
        });
    })    
}

module.exports = router;