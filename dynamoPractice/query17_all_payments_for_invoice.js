// Get invoice for a given invoiceId and 
// Get all payments for a given invoiceId

var query13 = require("./query_base_onlineshop");
var params1 = {
    TableName: "OnlineShop",
    IndexName: "GSI1",    
    KeyConditionExpression: "#pkval = :PK_value23 and #skval = :SK_value23",
    ExpressionAttributeNames: {
        "#pkval": "GSI1-PK",
        "#skval": "GSI1-SK"
    },
    ExpressionAttributeValues: {
        ":PK_value23": "i#55443",
        ":SK_value23": "i#55443"
    },    
}

query13(params1).then((data) => {
    console.log("Items ====> ", data.Items)
});



