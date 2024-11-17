var { writeClient } = require("../config/aws-config-prod-timestream-v3");
const { WriteRecordsCommand } = require("@aws-sdk/client-timestream-write");

async function writeRecords(client23) {    
    const cpuUtilization = require('./04_write_records_data').cpuUtilization;
    const memoryUtilization = require('./04_write_records_data').memoryUtilization;

    const records = [cpuUtilization, memoryUtilization];

    const params = new WriteRecordsCommand({
        DatabaseName: "database25",
        TableName: "table23",
        Records: records
    });

    await client23.send(params).then(
        (data) => { console.log("Write records successful ", JSON.stringify(data)); },
        (err) => { console.log("Error writing records:", err); }
    );
}

writeRecords(writeClient);

/*
    a) writeRecords --- "CommonAttributes"
    b) writeRecords == idempotent... 
    - meaing, retry same writeRecordsRequest with same records && versions 432 times... no problemo
    - but if you lower version number ---> it FAILS
    - you can increase version number... try the writeRecordsRequest ---> then row is updated
*/
