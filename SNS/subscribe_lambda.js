const { snsClient, SubscribeCommand } = require("../config/aws-config-sns-v3");

const subscribeLambda = async (topicArn, endpoint) => {
    const response = await snsClient.send(
        new SubscribeCommand({
            Protocol: "lambda",
            TopicArn: topicArn,
            Endpoint: endpoint,
        }),
    );
    console.log(JSON.stringify(response));
};

let topicArn23 = "arn:aws:sns:us-east-1:000000000000:topic23_football";
let lambda23 = "arn:aws:lambda:us-east-1:000000000000:function:sns_lambda23";

subscribeLambda(topicArn23, lambda23);