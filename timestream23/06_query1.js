var { queryClient } = require("../config/aws-config-prod-timestream-v3");
const { CancelQueryCommand, QueryCommand } = require("@aws-sdk/client-timestream-query");
const HOSTNAME = "host-24Gju";

//1. Find the average, p90, p95, p99 CPU utilization for a specific EC2 host over the past 2 hours.
const QUERY_1 = "SELECT region, az, hostname, BIN(time, 15s) AS binned_timestamp, " +
    "    ROUND(AVG(measure_value::double), 2) AS avg_cpu_utilization, " +
    "    ROUND(APPROX_PERCENTILE(measure_value::double, 0.9), 2) AS p90_cpu_utilization, " +
    "    ROUND(APPROX_PERCENTILE(measure_value::double, 0.95), 2) AS p95_cpu_utilization, " +
    "    ROUND(APPROX_PERCENTILE(measure_value::double, 0.99), 2) AS p99_cpu_utilization " +
    "FROM " +  "database25" + "." +  "table23" + " " +
    "WHERE measure_name = 'cpu_utilization' " +
    "   AND hostname = '" + HOSTNAME + "' " +
    // "    AND time > ago(2h) " +
    "GROUP BY region, hostname, az, BIN(time, 15s) " +
    "ORDER BY binned_timestamp ASC";

async function runQuery(client23, nextToken) {
    const params = new QueryCommand({
        QueryString: QUERY_1
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
    const rows = response.Rows;
    // rows.forEach(function (row) {
    //     console.log(parseRow(columnInfo, row));
    // });
    console.log("total rows ====> ", rows.length);
}

runQuery(queryClient, null);