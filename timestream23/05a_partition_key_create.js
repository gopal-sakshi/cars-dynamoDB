var { writeClient } = require("../config/aws-config-prod-timestream-v3");
const { CreateTableCommand } = require("@aws-sdk/client-timestream-write");

async function createTable23(client23) {

    // Create table with partition key type dimension and OPTIONAL enforcement
    const dim23 = [{
        Type: "DIMENSION",
        Name: "hostId",
        EnforcementInRecord: "OPTIONAL"
    }];

    const params = new CreateTableCommand({
        DatabaseName: "database25",
        TableName: "hm_dim_pk",
        RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: 24,
            MagneticStoreRetentionPeriodInDays: 7
        },        
        Schema: {           // Set CompositePartitionKey for the table
            CompositePartitionKey: dim23
        }
    });

    await client23.send(params).then(
        (data) => { console.log(`${data.Table.TableName} created23 ===> `)  }, 
        (err) => { console.log(`error while creating table ${err}`) }
    )
}

createTable23(writeClient);