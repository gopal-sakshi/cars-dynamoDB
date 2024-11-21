var { dynamoClient } = require("../config/aws-config-v3")
var { QueryCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
const docClient23 = DynamoDBDocumentClient.from(dynamoClient);

module.exports = async (params) => {
    const command = new QueryCommand(params);
    return await docClient23.send(command);    
};