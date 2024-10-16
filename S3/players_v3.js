var express = require('express');
var router = express.Router();

const { s3Thingy, PutObjectCommand } = require("../config/aws-config-prod-v3");
const { Readable } = require('stream');
var stream44 = new Readable();
var fs = require('fs');

const obj23 = { info23: "noData", time23: new Date().toISOString() }

const blah1 = async (req, res) => {    
    const response22 = await new Promise((resolve, reject) => {
        var obj23 = {
            Bucket: 'gopal612-football-backend-acl',        // this bucket doesnt allow no ALCs error            
            Body: fs.createReadStream("S3/s3_player.json"),
            Key: `Jude__` + (Date.now()).toString(),
            ACL:'public-read'
        };
        s3Thingy.send(new PutObjectCommand(obj23), (err) => {
            if (err) { console.log(err); res.status(500).send('false phattu'); };
            res.status(200).send('uploaded abbaayi');
        });
    });
};

const blah2 = async (req, res) => {
    stream44.push(JSON.stringify(req.body ? req.body : obj23));
    stream44.push(null);
    const response22 = await new Promise((resolve, reject) => {
        var obj23 = {
            Bucket: 'gopal612-football-backend-acl',        // this bucket doesnt allow no ALCs error            
            Body: fs.createReadStream("S3/s3_player.json"),
            Key: `Jude__` + (Date.now()).toString(),
            ACL:'public-read',
            ContentType: "text/plain",      // readme23
            ContentLength: 42 
        };
        s3Thingy.send(new PutObjectCommand(obj23), (err) => {
            if (err) { console.log(err); res.status(500).send('false phattu'); };
            res.status(200).send('uploaded abbaayi');
        });
    });
};


router.post('/addPlayer', blah1);
router.post('/addPlayer_readable', blah2);


module.exports = router;

/*
    readme23 == 
    Readable is no longer a file that has metadata such as MIME type & content length 
    so, you'd need to update your putObject to include those values:
*/


