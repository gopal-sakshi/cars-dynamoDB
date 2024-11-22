var { queryClient } = require("../config/aws-config-prod-timestream-v3");
const { QueryCommand } = require("@aws-sdk/client-timestream-query");
const { parseRow } = require("./06_query_util_functions");

const QUERY_1 = "SELECT count(*) FROM database25.table23";
const QUERY_2 = "SELECT distinct(hostname) FROM database25.table23";

async function runQuery(client23, nextToken) {
    const params = new QueryCommand({
        QueryString: QUERY_2
    });

    if (nextToken) {
        params.input.NextToken = nextToken
    }

    await queryClient.send(params).then(
        (response) => {
            parseResult23(response);
            if (response.NextToken) {
                getAllRows(queryClient, query, response.NextToken);
            }
        },
        (err) => { console.error("Error while querying:", err); });
}

function parseResult23(response) {
    
    // QUERY_1
    // [{"Data":[{"ScalarValue":"126004"}]}]        ----> we have 126k records
    // console.log("total rows ====> ", JSON.stringify(response.Rows));

    // QUERY_2
    response.Rows.forEach((row, i) => {
        console.log(`index_${i}`, parseRow(response.ColumnInfo, row));      // 107 unique hosts
    })
}

runQuery(queryClient, null);