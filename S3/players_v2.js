var express = require('express');
var router = express.Router();
var fs = require('fs');

var { s3Client } = require("../config/aws-config-prod-v2");
var bucketName2 = 'gopal612-football-backend-no-acl';   // learn about ACL_vs_NOACL


var filePath = 'S3/s3_player.json';

router.get('/getPlayers', (req, res) => {
    res.status(200).send('okay.. get of playersInS3');
})


router.put('/addPlayer', function (req, res) {
    // learn differences between putObject() & upload() later
    s3Client.upload({
        Bucket: bucketName2,
        Body: fs.createReadStream(filePath),
        Key: `${req.body.playerName}` || `no_name_${Date.now()}`
    }, (err, data) => {
        if(err) { console.log('Error is ', err); res.status(400).send('phattu, couldnt upload'); }
        if(data) { res.status(200).send(`uploaded arey ${req.body.playerName}`); }
    })    
})

module.exports = router;