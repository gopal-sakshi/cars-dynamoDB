var { sqs } = require("../config/aws-config-sqs-v2");

var params = {
    AttributeNames: ["SentTimestamp"],
    MaxNumberOfMessages: 10,
    MessageAttributeNames: ["All"],
    QueueUrl: "http://localhost:4566/000000000000/queue2323",
    VisibilityTimeout: 20,
    WaitTimeSeconds: 0,
};

sqs.receiveMessage(params, function (err, data) {
    if (err) {
        console.log("Receive Error", err);
    } else if (data.Messages) {
        console.log("messages ===> ", data.Messages);

        // Manually delete the messages in the QUEUE
        // var deleteParams = { QueueUrl: queueURL, ReceiptHandle: data.Messages[0].ReceiptHandle, };
        // sqs.deleteMessage(deleteParams, function (err, data) {
        //     if (err) { console.log("Delete Error", err); } 
        //     else { console.log("Message Deleted", data); }
        // });
    }
});
