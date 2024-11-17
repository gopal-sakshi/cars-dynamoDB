var { writeClient } = require("../config/aws-config-prod-timestream-v3");
const { CreateTableCommand } = require("@aws-sdk/client-timestream-write");

async function createTable(client23) {    
    const params = new CreateTableCommand({
        DatabaseName: "database25",
        TableName: "table23",
        RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: 24,
            MagneticStoreRetentionPeriodInDays: 7
        }
    });

    await client23.send(params).then(
        (data) => {
            console.log(`${data.Table.TableName} created23`);
        },
        (err) => {
            console.log("Error creating table. ", err);
        }
    );
}

createTable(writeClient);
// updateTable, listTables, describeTable ==== LATERRRRRR