var { dynamoClient } = require("../config/aws-config-v3")
var { QueryCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
const docClient23 = DynamoDBDocumentClient.from(dynamoClient);

const main = async () => {
    const command = new QueryCommand({
        TableName: "OnlineShop",
        ProjectionExpression: "PK, SK, Address",
        KeyConditionExpression: "#japan = :amrica",
        ExpressionAttributeNames: {
            "#japan": "PK",
        },
        ExpressionAttributeValues: {
            ":amrica": "o#12345"
        },
        ConsistentRead: true,
    });

    const response = await docClient23.send(command);
    console.log("response ====> ", response);    
};

main();