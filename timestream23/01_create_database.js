var { writeClient } = require("../config/aws-config-prod-timestream-v3");
const { CreateDatabaseCommand } = require("@aws-sdk/client-timestream-write");

async function createDatabase(client23) {    
    const params = new CreateDatabaseCommand({
        DatabaseName: "database25"
    });

    await client23.send(params).then(
        (data) => { console.log(`Database ${data.Database.DatabaseName} created23`); },
        (err) => {
            if (err.name === 'ConflictException') {
                console.log(`Database ${constants.DATABASE_NAME} already exists. Skipping creation.`);
            } else {
                console.log("Error creating database", err);
            }
        }
    );
}

createDatabase(writeClient);