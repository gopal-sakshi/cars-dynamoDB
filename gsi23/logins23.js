var AWS = require("../config/aws-config-v2");
var dynamoDb = new AWS.DynamoDB()

var params = {
    TableName : "gsi23_Logins",
    KeySchema: [       
        { AttributeName: "email", KeyType: "HASH"},
        {  AttributeName: "timestamp", KeyType: "RANGE"}
    ],
    AttributeDefinitions: [       
        { AttributeName: "email", AttributeType: "S" },
        { AttributeName: "timestamp", AttributeType: "N" }
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 5, 
        WriteCapacityUnits: 5
    }
};

dynamoDb.createTable(params, (err, data) => {
    if (err) { console.error("Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2)); }
}); 