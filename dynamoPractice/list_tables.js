const { fromIni } = require("@aws-sdk/credential-providers");


const { ListTablesCommand, DynamoDBClient } = require("@aws-sdk/client-dynamodb");
var credentials34 = fromIni({
    profile: "priya22",
});

// const dynamoClient = new DynamoDBClient({ region: 'us-east-1', credentials: fromIni({profile: "priya22"})});
const dynamoClient = new DynamoDBClient({ region: 'us-east-1', credentials: credentials34 });

const main = async () => {
    const command = new ListTablesCommand({});
  
    const response = await dynamoClient.send(command);
    console.log("tables =====> ", response);
};

main();