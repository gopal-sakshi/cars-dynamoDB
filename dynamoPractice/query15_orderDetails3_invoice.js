var query13 = require("./query_base_onlineshop");

var params2 = {
    TableName: "OnlineShop",
    ProjectionExpression: "PK, SK, EntityType, Price, Quantity",
    KeyConditionExpression: "#pkval = :PK_value23 and begins_with(#skval, :invoice_vetukuni)",
    ExpressionAttributeNames: {
        "#pkval": "PK",
        "#skval": "SK"
    },
    ExpressionAttributeValues: {
        ":PK_value23": "o#12345",
        ":invoice_vetukuni": "i#"
    },
    ConsistentRead: true,
}

query13(params2).then((data) => {
    console.log("Items ====> ", data.Items)
});