const { snsClient, ListTopicsCommand, ListSubscriptionsByTopicCommand } = require("../config/aws-config-sns-v3");

const listTopics = async () => {
    const response = await snsClient.send(new ListTopicsCommand({}));
    console.log(JSON.stringify(response), '\n\n');
};


const listSubscriptionsByTopic = async (topicArn) => {
    const response = await snsClient.send(new ListSubscriptionsByTopicCommand({ TopicArn: topicArn }));
    console.log('\n\n\n', JSON.stringify(response));
};

let topicArn23 = "arn:aws:sns:us-east-1:000000000000:topic23_football";
listTopics();       // arn:aws:sns:us-east-1:000000000000:topic23_football
listSubscriptionsByTopic(topicArn23);