var { writeClient } = require("../config/aws-config-prod-timestream-v3");
const { DescribeDatabaseCommand } = require("@aws-sdk/client-timestream-write");

async function describeDatabase (client23) {    
    const params = new DescribeDatabaseCommand({
        DatabaseName: "database25"
    });

    await client23.send(params).then(
        (data) => {
            console.log(`Database25 ===> ${data.Database.DatabaseName} __ ${data.Database.Arn}`);
        },
        (err) => {
            console.log("Describe database failed.", err);    
        }
    );
}

describeDatabase(writeClient);