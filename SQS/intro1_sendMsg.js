const { sqs_client, SendMessageCommand } = require("../config/aws-config-sqs-v3");
const SQS_QUEUE_URL = "http://sqs.us-east-1.localhost.localstack.cloud:4566/000000000000/queue2323";

const sendMsg23 = async (sqsQueueUrl = SQS_QUEUE_URL) => {
    const command = new SendMessageCommand({
        QueueUrl: sqsQueueUrl,
        DelaySeconds: 1,
        MessageBody: "baahubali was directed by rajamouli s s",
    });

    const response = await sqs_client.send(command);
    return JSON.stringify(response);
};

sendMsg23().then(data => console.log(data));