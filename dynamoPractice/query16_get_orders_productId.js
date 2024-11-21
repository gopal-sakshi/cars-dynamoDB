/*    
    Querying a DynamoDB table on an attribute that's neither PK nor SK is extremely slow & expensive
    coz, DynamoDB scans every single item in the table
*/

// query on GSI1: PK="p#99887" and SK between time23 and time24


var query13 = require("./query_base_onlineshop");

var params2 = {
    TableName: "OnlineShop",
    ScanIndexForward: true,
    IndexName: "GSI1",    
    KeyConditionExpression: "#pkval = :PK_value23 and #skval between :time1 and :time2",
    ExpressionAttributeNames: {
        "#pkval": "GSI1-PK",            // GSI1-PK attribute lo "p#99887" undaali... plus, within date range
        "#skval": "GSI1-SK"             // aa condition unna 23 rows vastaayi... 
    },
    ExpressionAttributeValues: {
        ":PK_value23": "p#99887",
        ":time1": "2020-05-21T19:20:00",
        ":time2": "2020-07-21T19:20:00"
    }
}

query13(params2).then((data) => {
    console.log("Items ====> ", data.Items)
});