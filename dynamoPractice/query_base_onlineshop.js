var fs = require("fs"), dynamoClient34;
if(fs.existsSync("config/aws-config-v3")) {
    dynamoClient34 = require("../config/aws-config-v3")
} else {
    const { fromIni } = require("@aws-sdk/credential-providers");
    var { QueryCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
    const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
    var credentials34 = fromIni({
        profile: "priya22",
    });
    dynamoClient34 = new DynamoDBClient({ region: 'us-east-1', credentials: credentials34 });
}

const docClient23 = DynamoDBDocumentClient.from(dynamoClient34);

module.exports = async (params) => {
    const command = new QueryCommand(params);
    return await docClient23.send(command);    
};