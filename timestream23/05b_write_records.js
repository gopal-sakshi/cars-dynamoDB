var { writeClient } = require("../config/aws-config-prod-timestream-v3");
const { WriteRecordsCommand } = require("@aws-sdk/client-timestream-write");

async function writeRecords(client23) {

    const currentTime = Date.now();

    const dimensions = [
        { "Name": "region",     "Value": "us-east-1"},
        { "Name": "az",         "Value": "az1"},
        { "Name": "hostId",     "Value": "host34"}
    ];

    const commonAttributes = {
        "Dimensions": dimensions,
        "Time": currentTime.toString()
    };

    const cpuUtilization = {
        "MeasureName": "cpu_utilization",
        "MeasureValue": "55",
        "MeasureValueType": "DOUBLE"
    };

    const memoryUtilization = {
        "MeasureName": "memory_utilization",
        "MeasureValue": "99",
        "MeasureValueType": "DOUBLE"
    };

    // Adding multi record
    const cpuMemory = {
        "MeasureName": "cpu_memory",
        "MeasureValueType": "MULTI",
        "MeasureValues": [
            { "Name": "cpu_utilization", "Value": "55", "Type": "DOUBLE" },
            { "Name": "memory_utilization", "Value": "99", "Type": "DOUBLE" }
        ]
    }

    const records = [cpuUtilization, memoryUtilization, cpuMemory];

    const params = new WriteRecordsCommand({
        DatabaseName: "database25",
        TableName: "hm_dim_pk",
        Records: records,
        CommonAttributes: commonAttributes
    });

    const response = await client23.send(params).then(
        (data) => { console.log("Write records successful."); },
        (err) => { console.log("Error writing records:", err); }
    );
}


writeRecords(writeClient);