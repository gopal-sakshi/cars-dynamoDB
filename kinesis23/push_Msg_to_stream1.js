var express = require('express');
var router = express.Router();

var { kinesisClient } = require("../config/aws-config-prod-kinesis-v2");

router.get('/getStreams', (req, res) => {    
    kinesisClient.listStreams({}, (err, data) => {
        if(err) { console.log("err ==> ", err); res.status(500).send("phattu") }
        else { console.log("data ===> ", data); res.send(data)}
    })
});

router.get("/listShards", (req, res) => {
    let mumbaiKinesis = "arn:aws:kinesis:ap-south-1:713195410081:stream/stream2323"
    let virKinesis = "arn:aws:kinesis:us-east-1:713195410081:stream/stream2323"
    var params = { StreamARN: mumbaiKinesis, };
    kinesisClient.listShards(params, function(err, data) {
        if (err) {  console.log(err, err.stack); res.status(500).send("phattu23") }
        else { res.send(data); }
      });
})

router.put('/addMsg', async (req, res) => { 
    const body23 = req.body || {clubName: "RMA", manager: "Ancelotti", time23: `${new Date().toISOString()}`};
    const params = {
        Data: JSON.stringify(body23),
        PartitionKey: req.body.pkeyType ? req.body.pkeyType : "misc23",
        StreamName: "stream2323"
    };
    try {
        const result = await kinesisClient.putRecord(params).promise();
        res.send(result);
    } catch (error) {        
        res.status(500).send("phattu");
    }    
});


router.get("/describeSummary", (req, res) => {
    var params = { StreamARN: 'arn:aws:kinesis:ap-south-1:713195410081:stream/stream2323' };
    kinesisClient.describeStreamSummary(params, function(err, data) {
        if (err) {  console.log(err, err.stack); res.status(500).send(phattu); }
        else { console.log(data); res.send(data) };
    });
})

module.exports = router;