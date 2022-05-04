var AWS = require('aws-sdk');
AWS.config.update({
    region: "us-east-2",
    accessKeyId: 'XXXX',                            // this doesnt have to be real Values
    secretAccessKey: 'XXXXx',
    endpoint: "http://localhost:8002"
});
module.exports = AWS;