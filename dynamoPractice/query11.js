var { dynamoClient } = require("../config/aws-config-v3")
var { QueryCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
const docClient23 = DynamoDBDocumentClient.from(dynamoClient);

const main = async () => {
    const command = new QueryCommand({
        TableName: "Movies",
        ProjectionExpression: "#yr, title, info.genres, info.actors[0]",
        KeyConditionExpression: "#yr = :yyyy and title between :letter1 and :letter2",
        ExpressionAttributeNames: {
            "#yr": "year",
        },
        ExpressionAttributeValues: {
            ":yyyy": 2013,
            ":letter1": "M",
            ":letter2": "S",
        },
        ConsistentRead: true,
    });

    const response = await docClient23.send(command);
    console.log("response ====> ", response);    
};

main();