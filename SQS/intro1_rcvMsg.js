const { sqs_client, ReceiveMessageCommand } = require("../config/aws-config-sqs-v3");
const SQS_QUEUE_URL = "http://sqs.us-east-1.localhost.localstack.cloud:4566/000000000000/queue2323";

const receiveMessage = (queueUrl) =>
    sqs_client.send(
        new ReceiveMessageCommand({
            AttributeNames: ["SentTimestamp"],
            MaxNumberOfMessages: 10,
            MessageAttributeNames: ["All"],
            QueueUrl: queueUrl,
            WaitTimeSeconds: 20,
            VisibilityTimeout: 20,
        }),
    );

const rcvMsg23 = async (queueUrl = SQS_QUEUE_URL) => {
    const { Messages } = await receiveMessage(queueUrl);
    if (!Messages) { return; }
    else {
        console.log("msgs ===> ", Messages);
    }
};

rcvMsg23();