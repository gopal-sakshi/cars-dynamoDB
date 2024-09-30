// query using GSI

var AWS = require("../config/aws-config-v2");
var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "gsi23_Supervisors",
    IndexName: "FactoryIndex23",
    KeyConditionExpression:"#company = :companyValue and #factory = :factoryValue",
    ExpressionAttributeNames: {
        "#company":"company",
        "#factory":"factory"
    },
    ExpressionAttributeValues: {
        ":companyValue": "football company",
        ":factoryValue": "spain factory"
    }
};


docClient.query(params, (err, data) => {
    if (err) { console.error("Unable to add Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("GSI succeeded:", data); }
});