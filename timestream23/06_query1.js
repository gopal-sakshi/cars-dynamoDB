var { queryClient } = require("../config/aws-config-prod-timestream-v3");
const { QueryCommand } = require("@aws-sdk/client-timestream-query");
const QUERY23 = require("./06_queries_all_gopal").QUERY_1;

const { parseRow } = require("./06_query_util_functions");

async function runQuery(client23, nextToken) {
    const params = new QueryCommand({
        QueryString: QUERY23
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
    // console.log("columns ===> ", response.ColumnInfo.map((column) => column.Name));
    console.log("columns ===> ", response.ColumnInfo.reduce((column, curr) => { return  column + " " + curr.Name }, ""));
    response.Rows.forEach((row, i) => {
        console.log(`index_${i}`, parseRow(response.ColumnInfo, row));
    })
}

runQuery(queryClient, null);