// store our customers with PK=customerId and SK=customerId
// We will not use "__________expression_attribute_names_______"
var query13 = require("./query_base_onlineshop");
var params = {
    TableName: "OnlineShop",
    ProjectionExpression: "PK, SK, EntityType, Email",
    KeyConditionExpression: "PK = :PK_value23 and SK = :SK_value23",
    // ExpressionAttributeNames: { },       // Its not needed if PK, SK arent keywords
    ExpressionAttributeValues: {
        ":PK_value23": "c#12345",
        ":SK_value23": "c#12345"
    },
    ConsistentRead: true,
}

query13(params).then((data) => {
    console.log("Items ====> ", data.Items)
})