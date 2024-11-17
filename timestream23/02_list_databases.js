var { writeClient } = require("../config/aws-config-prod-timestream-v3");
const { ListDatabasesCommand } = require("@aws-sdk/client-timestream-write");

async function listDatabases(writeClient) {
    console.log("Listing databases: =====> ");
    const databases = await getDatabasesList(null, writeClient);
    databases.forEach(function(database){
        console.log("db23 =========> " ,database.DatabaseName);
    });
}

listDatabases(writeClient);



function getDatabasesList(nextToken, writeClient, databases = []) {
    var params = new ListDatabasesCommand({
        MaxResults: 15
    });

    if(nextToken) { params.NextToken = nextToken; }

    return writeClient.send(params).then(
            (data) => {
                databases.push.apply(databases, data.Databases);
                if (data.NextToken) { return getDatabasesList(data.NextToken, writeClient, databases); } 
                else { return databases; }
            },
            (err) => { console.log("Error while listing databases", err); }
        );
}
