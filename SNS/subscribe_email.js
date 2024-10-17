const { snsClient, SubscribeCommand } = require("../config/aws-config-sns-v3");

const subscribeEmail = async (topicArn, emailAddress) => {
    const response = await snsClient.send(
        new SubscribeCommand({
            Protocol: "email",
            TopicArn: topicArn,
            Endpoint: emailAddress,
        }),
    );
    console.log(JSON.stringify(response));
};

let topicArn23 = "arn:aws:sns:us-east-1:000000000000:topic23_football";
let email23 = "pedabicar@gmail.com";
subscribeEmail(topicArn23, email23);