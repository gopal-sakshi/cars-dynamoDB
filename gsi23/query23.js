var AWS = require("../config/aws-config-v2");
var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "gsi23_Users",
    KeyConditionExpression: "#email = :email",
    ExpressionAttributeNames: {
        "#email": "email"
    },
    ExpressionAttributeValues: {
        ":email": "benzema@doe.com"
    }
};

docClient.query(params, (err, data) => {
    if (err) { console.error("Unable to add Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("query succeeded:", data); }
});