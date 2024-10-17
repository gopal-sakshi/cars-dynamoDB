const { snsClient, PublishCommand } = require("../config/aws-config-sns-v3");


const publishMsg23 = async (message, topicArn) => {
    const response = await snsClient.send(
        new PublishCommand({
            Message: message,
            TopicArn: topicArn,
        }),
    );
    console.log(response);
    return response;
};

let topicArn23 = "arn:aws:sns:us-east-1:000000000000:topic23_football";
let msg23 = `sns_msg23__${Date.now()}`
publishMsg23(msg23, topicArn23);