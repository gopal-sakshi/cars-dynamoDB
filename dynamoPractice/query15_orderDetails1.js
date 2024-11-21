/*
    Order
    - separate entity; 
    - PK = orderId; SK = orderId

    OrderItem
    - cant exist without order; 
    - wont ever be queried separately
    - intersection of product & order
    - PK = orderId && SK = productId

*/

// Get all order details for a given orderId would be PK="o#12345"
// order details include ===> products, invoice, shipping, payment stuff
// but u want only products in that order ---> see "next file"
var query13 = require("./query_base_onlineshop");
var params1 = {
    TableName: "OnlineShop",
    ProjectionExpression: "PK, SK, EntityType, #Date23_reserved_word_anta",
    KeyConditionExpression: "#pkval = :PK_value23",
    ExpressionAttributeNames: {
        "#pkval": "PK",
        "#Date23_reserved_word_anta": "Date"
    },
    ExpressionAttributeValues: {
        ":PK_value23": "o#12345",
    },
    ConsistentRead: true,
}

query13(params1).then((data) => {
    console.log("Items ====> ", data.Items)
});



