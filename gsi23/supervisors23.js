var AWS = require("../config/aws-config-v2");
var dynamoDb = new AWS.DynamoDB()

const GSI23 = [{
    IndexName: "FactoryIndex23",
    KeySchema: [
        { AttributeName: "company", KeyType: "HASH" },
        { AttributeName: "factory", KeyType: "RANGE" }
    ],
    Projection: { ProjectionType: "ALL" },
    ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }
}]

var params = {
    TableName : "gsi23_Supervisors",
    KeySchema: [       
        { AttributeName: "name", KeyType: "HASH"}
    ],
    AttributeDefinitions: [       
        { AttributeName: "name", AttributeType: "S" },
        { AttributeName: "company", AttributeType: "S" },
        { AttributeName: "factory", AttributeType: "S" }    
    ],
    ProvisionedThroughput: { ReadCapacityUnits: 5,  WriteCapacityUnits: 5 },
    GlobalSecondaryIndexes: GSI23
};

dynamoDb.createTable(params, (err, data) => {
    if (err) { console.error("Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2)); }
}); 