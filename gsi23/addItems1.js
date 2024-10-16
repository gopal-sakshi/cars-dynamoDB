var { dynamoDb } = require("../config/aws-config-v2");

var params1 = {
    TableName:"gsi23_Users",
    Item: {
        email : { S:"ronaldo@doe.com"},
        fullname: { S:"cristiano ronaldo"}
        
    }
};

var params2 = {
    TableName:"gsi23_Users",
    Item: {
        email : { S:"benzema@doe.com"},
        fullname: { S:"karim benzema"}
    }
};

// insert params1.... then insert params2
dynamoDb.putItem(params1, (err, data) => {
    if (err) { console.error("Unable to add Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("PutItem succeeded:", data); }
});
/******************************************************************************************/

var items23 = [
    // { "email": { S: "ronaldo@doe.com" }, "timestamp": { N: "1467041009976" } },
    { "email": { S: "ronaldo@doe.com" }, "timestamp": { N: "1467041023311" } },
    { "email": { S: "benzema@doe.com" }, "timestamp": { N: "1467041033444" } },    
]
var batchRequest = {
    RequestItems: {
        "gsi23_Logins": [
            { PutRequest: { Item: items23[0] } },
            { PutRequest: { Item: items23[1] } }
        ]
    }
};

dynamoDb.batchWriteItem(batchRequest, (err, data) => {
    if (err) { console.error("Unable to add Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("PutItem succeeded:", data); }
});
   

/******************************************************************************************/