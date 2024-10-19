const { sqs_client, SendMessageCommand } = require("../config/aws-config-sqs-prod-v3");
const SQS_QUEUE_URL = "https://sqs.ap-south-1.amazonaws.com/713195410081/prod_queue_44";

// HOW TO RUN ====>     node SQS/send_msg_prod.js '{"club23":"RealMadrid", "info23": "started in 2011"}'

const sendMsg23 = async (sqsQueueUrl = SQS_QUEUE_URL) => {
    const command = new SendMessageCommand({
        QueueUrl: sqsQueueUrl,
        DelaySeconds: 1,
        MessageBody: process.argv[2],
    });

    const response = await sqs_client.send(command);
    return JSON.stringify(response);
};

sendMsg23().then(data => console.log(data));