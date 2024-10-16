```js
var params = {
    Item: {
        "AlbumTitle": "Somewhat Famous",
        "Artist": "No One You Know",
        "SongTitle": "Call Me Today"
    },
    TableName: "Music"
};

var documentClient = new AWS.DynamoDB.DocumentClient();

documentClient.put(params, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});
/*************************************************************************************************/


var params = {
    Item: {
        "AlbumTitle": { S: "Somewhat Famous" },
        "Artist": { S: "No One You Know" },
        "SongTitle": { S: "Call Me Today" }
    },
    TableName: "Music"
};
dynamodb.putItem(params, function (err, data) {
    if (err) console.log(err)
    else console.log(data);           
});

// document client abstraction ==> makes it easier to read & write data to Amazon DynamoDB with the AWS SDK

/*************************************************************************************************/
```