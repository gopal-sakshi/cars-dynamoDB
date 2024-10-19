var { sqs } = require("../config/aws-config-sqs-v2");

var params = {    
    DelaySeconds: 10,
    MessageAttributes: {
        Title: { DataType: "String", StringValue: "Antarmukham", },
        Author: { DataType: "String", StringValue: "Yandamoori Veerendranath", }        
    },
    MessageBody: "Antarmukham is inspired from albert camus the stranger - a french novel",
    QueueUrl: "http://localhost:4566/000000000000/queue2323",
    // MessageDeduplicationId: "TheWhistler",                       // Required for FIFO queues
    // MessageGroupId: "Group1",                                    // Required for FIFO queues
};

sqs.sendMessage(params, function (err, data) {
    if (err) { console.log("Error", err); } 
    else { console.log("Success", data.MessageId); }
});
