const { sqs_client, paginateListQueues } = require("../config/aws-config-sqs-v3");

const helloSqs = async () => {
    const paginatedListQueues = paginateListQueues({ client:sqs_client }, {});    
    const urls = [];
    for await (const page of paginatedListQueues) {
        const nextUrls = page.QueueUrls?.filter((qurl) => !!qurl) || [];
        urls.push(...nextUrls);
    }
    return urls;
};

helloSqs().then(data => { console.log("urls ===> ", data); return data; })
