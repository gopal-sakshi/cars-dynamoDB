/***********************************************************/
var AWS = require('aws-sdk');
AWS.config.update({
    region: "us-east-2",
    accessKeyId: 'OnlyAlphaNumericAllowed',   // this doesnt have to be real Values
    secretAccessKey: '123456789',
    endpoint: "http://192.168.29.120:49003"
});


/*
    DynamoDB local version 2.0.0 and greater 
    AWS_ACCESS_KEY_ID can contain the only letters (A–Z, a–z) and numbers (0–9)
*/

module.exports = AWS
/***********************************************************/