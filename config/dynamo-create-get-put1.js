var { dynamoClient } = require("../config/aws-config")
var { CreateTableCommand, GetItemCommand, PutItemCommand, PutCommand, GetCommand, QueryCommand, marshall, unmarshall } = require("../config/aws-config");

/************************************************************************* */
const createTable = (async () => {
    var params = {
        TableName: "Cars",
        KeySchema: [
            { AttributeName: "id", KeyType: "HASH" },  //Partition key
        ],
        AttributeDefinitions: [
            { AttributeName: "id", AttributeType: "N" },
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    };
    const command23 = new CreateTableCommand(params);
    const response = await dynamoClient.send(command23);         // DONT create table again
    console.log("create table resp ===> ", JSON.stringify(response));
});



/************************************************************************* */
// PUT item

const put23 = (async () => {
    const putCommand1 = new PutCommand({
        TableName: 'Cars',
        Item: {
            id: 101,              // id is mandatory; rest all are optional
            name: "BMW",
            model: "X1",
            otherInfo: { cost: "23 lakhs", type: "diesel", country: "germany" },
        },
    });
    const putCommand2 = new PutCommand({
        TableName: 'Cars',
        Item: {
            id: 102,
            name: "BMW - luxury",
            model: "X3",
            otherInfo: { cost: "72 lakhs", type: "petrol", country: "germany" },
        },
    });
    console.log("putResp1 ===> ", JSON.stringify(await dynamoClient.send(putCommand1)));
    console.log("putResp2 ===> ", JSON.stringify(await dynamoClient.send(putCommand2)));
});

// S, N, M  ==== string, number, mixed; BUT nobody wants to use this horrific syntax
const put24 = (async () => {
    const params = {
        "TableName": "Cars",
        "ReturnConsumedCapacity": "TOTAL",
        "Item": {
            "id": { "N": 103 },
            "name": { "S": "Audi basic" },
            "model": { "S": "Q1" },
            "otherInfo": { "M": { "cost": { "S": "20 lakhs" }, "type": { "S": "EV"  }, "year": { "N": 2015 } }  }
        }
    }
    const command = new PutItemCommand(params);
    console.log("putItemResp1 ===> ", JSON.stringify(await dynamoClient.send(command)));
})

const marshall23 = () => {
    const club23 = { name: "RealMadrid", manager: "Ancelotti", year: 1902, others23: { stadium: "Bernabeu", city: "Madrid" } }
    console.log("marshall23 ====> ", marshall(club23));
    const dynamo_json = { "updated_at": { "N": "146548182" }, "uuid": { "S": "foo" }, "status": { "S": "new" } };
    console.log("unmarshall ====> ", unmarshall(dynamo_json));    
}

const get23 = async () => {
    const command = new GetCommand({
        TableName: "Cars",
        Key: {
          id: 102,
        },
        "ReturnConsumedCapacity": "TOTAL",
    });
    const response = await dynamoClient.send(command);
    console.log("getResp1 ===> ", JSON.stringify(response));
}

const get24 = async () => {
    const command = new GetCommand({
        TableName: "Movies",
        Key: { year: 2013, title: "Rush" }
    });
    const response = await dynamoClient.send(command);
    console.log("getResp1 ===> ", JSON.stringify(response));
}

const query23 = async () => {
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
        }
    })
    const response = await dynamoClient.send(command);
    console.log("getResp1 ===> ", JSON.stringify(response));
}
/************************************************************************* */



// createTable();           // run this only once
// put23();
// put24();
// marshall23();
// get23();
// get24();
query23();
/************************************************************************* */
