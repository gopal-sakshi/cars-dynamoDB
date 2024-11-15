var { kinesisClient } = require("../config/aws-config-prod-kinesis-v2");

const getRecords = async function (stream) {
    let stream_arn23 = "arn:aws:kinesis:ap-south-1:713195410081:stream/stream2323";
    const arr = [];
    const params = {
        StreamName: "stream2323",
        ShardIteratorType: 'LATEST'        
    };
    const result = await kinesisClient.listShards({ StreamARN: stream_arn23 }).promise();
    for (let shard of result.Shards) {
        if (!shard.ShardId) continue;
        params.ShardId = shard.ShardId;
        try {
            const si = await kinesisClient.getShardIterator(params).promise().then((data) => data.ShardIterator);
            const data = await kinesisClient.getRecords({ ShardIterator: si }).promise();
            arr.push(JSON.stringify(data));
        } catch (error) {
            console.error(`Can't Fetch the records within shardId :: ${shard.ShardId} \n`, error);
        }
    }
    console.log("records ===========> ", arr);
};

