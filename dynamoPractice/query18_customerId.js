/*
    Now --> we need Customer ID as a Partition Key
    so, we will create another GSI (GSI2)
    customerId === will be the partitionKey
                == we will worry about sortKey later
*/

var query13 = require("./query_base_onlineshop");
var params1 = {
    TableName: "OnlineShop",
    IndexName: "GSI2",
    KeyConditionExpression: "#pkval = :PK_value23 and #skval between :time1 and :time2",
    ExpressionAttributeNames: {
        "#pkval": "GSI2-PK",
        "#skval": "GSI2-SK"
    },
    ExpressionAttributeValues: {
        ":PK_value23": "c#12345",
        ":time1": "2020-04-15",
        ":time2": "2020-09-30"
    },    
}

query13(params1).then((data) => {
    console.log("Items ====> ", data.Items)
});



