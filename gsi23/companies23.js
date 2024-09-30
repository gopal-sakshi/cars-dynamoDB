var AWS = require("../config/aws-config-v2");
var dynamoDb = new AWS.DynamoDB()

var LSI23 = [{
    IndexName: "CeoIndex",
    KeySchema: [
        { AttributeName: "name", KeyType: "HASH" },
        { AttributeName: "ceo", KeyType: "RANGE" }
    ],
    Projection: { ProjectionType: "ALL" }
}]

var params = {
    TableName : "gsi23_Companies",
    KeySchema: [       
        { AttributeName: "name", KeyType: "HASH"},
        { AttributeName: "subsidiary", KeyType: "RANGE"}
    ],
    AttributeDefinitions: [       
        { AttributeName: "name", AttributeType: "S" },
        { AttributeName: "subsidiary", AttributeType: "S" },
        { AttributeName: "ceo", AttributeType: "S" }    
    ],
    ProvisionedThroughput: { ReadCapacityUnits: 5,  WriteCapacityUnits: 5 },
    LocalSecondaryIndexes: LSI23
};

dynamoDb.createTable(params, (err, data) => {
    if (err) { console.error("Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2)); }
}); 