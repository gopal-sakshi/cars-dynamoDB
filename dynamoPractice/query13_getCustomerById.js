// store our customers with PK=customerId and SK=customerId

var query13 = require("./query_base_onlineshop");
var params = {
    TableName: "OnlineShop",
    ProjectionExpression: "PK, SK, EntityType, Email",
    KeyConditionExpression: "#pkval = :PK_value23 and #skval = :SK_value23",
    ExpressionAttributeNames: {
        "#pkval": "PK",
        "#skval": "SK"
    },
    ExpressionAttributeValues: {
        ":PK_value23": "c#12345",
        ":SK_value23": "c#12345"
    },
    ConsistentRead: true,
}

query13(params).then((data) => {
    console.log("Items ====> ", data.Items)
})