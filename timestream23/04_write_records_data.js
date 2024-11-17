const currentTime = Date.now().toString();
/****************************************************************************/
const dimensions1 = [
    {'Name': 'region',      'Value': 'us-east-1'},
    {'Name': 'az',          'Value': 'az1'},
    {'Name': 'hostname',    'Value': 'host1'}
];

const dimensions2 = [
    {'Name': 'region',      'Value': 'us-east-2'},
    {'Name': 'az',          'Value': 'az1'},
    {'Name': 'hostname',    'Value': 'host23'}
]
/****************************************************************************/

module.exports = {

    cpuUtilization: {
        'Dimensions': dimensions2,
        'MeasureName': 'cpu_utilization',
        'MeasureValue': '66',
        'MeasureValueType': 'DOUBLE',
        'Time': currentTime.toString()
    },

    memoryUtilization: {
        'Dimensions': dimensions2,
        'MeasureName': 'memory_utilization',
        'MeasureValue': '69',
        'MeasureValueType': 'DOUBLE',
        'Time': currentTime.toString()
    }
}
/****************************************************************************/

var writeRecordsOutput = {"$metadata":{"httpStatusCode":200,"requestId":"DOMFB3TN33FYFO2RXBZ44GOUXE","attempts":1,"totalRetryDelay":0},"RecordsIngested":{"MagneticStore":0,"MemoryStore":2,"Total":2}}