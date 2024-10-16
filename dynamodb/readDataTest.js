var { docClient } = require("../config/aws-config-v2");

var params = {
    TableName: "Cars_v2",
    Key:{
        "id": 12
    }
};

docClient.get(params, function(err, data) {
    if (err) { console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("GetItem succeeded:", JSON.stringify(data, null, 2)); }
});