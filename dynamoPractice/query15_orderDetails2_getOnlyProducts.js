var query13 = require("./query_base_onlineshop");

// Get all products for a given orderId would be PK="o#12345" and SK begins_with "p#"
// But dont get invoices, shipping stuff ----> begins_with is a Function
var params2 = {
    TableName: "OnlineShop",
    ProjectionExpression: "PK, SK, EntityType, Price, Quantity",
    KeyConditionExpression: "#pkval = :PK_value23 and begins_with(#skval, :products_vetukuni)",
    ExpressionAttributeNames: {
        "#pkval": "PK",
        "#skval": "SK"
    },
    ExpressionAttributeValues: {
        ":PK_value23": "o#12345",
        ":products_vetukuni": "p#"
    },
    ConsistentRead: true,
}

query13(params2).then((data) => {
    console.log("Items ====> ", data.Items)
});