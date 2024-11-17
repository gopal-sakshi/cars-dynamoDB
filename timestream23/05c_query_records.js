var { queryClient } = require("../config/aws-config-prod-timestream-v3");
const { CancelQueryCommand, QueryCommand } = require("@aws-sdk/client-timestream-query");


async function runSingleQuery(client23, databaseName, tableName, partitionKeyName, partitionKeyValue) {
    const queryString = `SELECT * FROM "${databaseName}"."${tableName}" WHERE "${partitionKeyName}"=${partitionKeyValue}`;
    
    // SELECT * FROM "database25"."hm_dim_pk" WHERE "hostId"='host34'
    console.log(`query23 ====> ${queryString}`);
    await getAllRows23(queryClient, queryString, null);    
}

runSingleQuery(queryClient, "database25", "hm_dim_pk", "hostId", `'host34'` );      // "host34" WRONG; 'host34' RIGHTTTT

/*****************************************************************************************/
async function getAllRows23(queryClient, query, nextToken) {
    const params = new QueryCommand({
        QueryString: query
    });

    if (nextToken) {
        params.input.NextToken = nextToken
    }

    await queryClient.send(params).then(
        (response) => {
            console.log("response23 =====> ", JSON.stringify(response));
            if (response.NextToken) { getAllRows23(queryClient, query, response.NextToken); }
        },
        (err) => { console.error("Error while querying:", err); }
    );
}
/*****************************************************************************************/