// insert GSI, LSI --- just specify the corresponding attributes for the index  "company" & "factory"

var AWS = require("../config/aws-config-v2");
var dynamoDb = new AWS.DynamoDB();

var params1 = {
    TableName:"gsi23_Supervisors",
    Item:{
        name: { S:"supervisor23"},
        company: { S:"football company"},
        factory: { S:"spain factory"}
    }
};

var params2 = {
    TableName:"gsi23_Supervisors",
    Item:{
        name: { S:"supervisor24"},
        company: { S:"football company"},
        factory: { S:"sevilla factory"}
    }
};
var params3 = {
    TableName:"gsi23_Supervisors",
    Item:{
        name: { S:"supervisor25"},
        company: { S:"football youth"},
        factory: { S:"la masia"}
    }
};
 
var params4 = {
    TableName:"gsi23_Supervisors",
    Item:{
        name: { S:"supervisor26"},
        company: { S:"football youth"},
        factory: { S:"la fabrica"}
    }
};

var params5 = {
    TableName:"gsi23_Supervisors",
    Item:{
        name: { S:"supervisor27"},
        company: { S:"football company"},
        factory: { S:"atletico"}
    }
};

var params6 = {
    TableName:"gsi23_Supervisors",
    Item:{
        name: { S:"supervisor28"},
        company: { S:"football company"},
        factory: { S:"malaga factory"}
    }
};

var params7 = {
    TableName:"gsi23_Supervisors",
    Item:{
        name: { S:"supervisor29"},
        company: { S:"football company"},
        factory: { S:"rayo vallecano"}
    }
};

dynamoDb.putItem(params1, (err, data) => {
    if (err) { console.error("Unable to add Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("PutItem succeeded:", data); }
});

dynamoDb.putItem(params2, (err, data) => {
    if (err) { console.error("Unable to add Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("PutItem succeeded:", data); }
});

dynamoDb.putItem(params3, (err, data) => {
    if (err) { console.error("Unable to add Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("PutItem succeeded:", data); }
});

dynamoDb.putItem(params4, (err, data) => {
    if (err) { console.error("Unable to add Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("PutItem succeeded:", data); }
});

dynamoDb.putItem(params5, (err, data) => {
    if (err) { console.error("Unable to add Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("PutItem succeeded:", data); }
});

dynamoDb.putItem(params6, (err, data) => {
    if (err) { console.error("Unable to add Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("PutItem succeeded:", data); }
});

dynamoDb.putItem(params7, (err, data) => {
    if (err) { console.error("Unable to add Error JSON:", JSON.stringify(err, null, 2)); } 
    else { console.log("PutItem succeeded:", data); }
});
