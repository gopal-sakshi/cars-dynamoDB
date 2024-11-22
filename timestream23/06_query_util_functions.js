module.exports = { parseRow }

function parseRow(columnInfo, row) {
    const data = row.Data;
    const rowOutput = [];
    var i;
    for (var i=0; i< data.length; i++) { rowOutput.push(parseDatum(columnInfo[i], data[i])) }
    return `{${rowOutput.join(", ")}}`
}

function parseDatum(info, datum) {
    if (datum.NullValue != null && datum.NullValue === true) {
        return `${info.Name}=NULL`;
    }

    const columnType = info.Type;

    // If the column === TimeSeries, Array, Row Type
    if (columnType.TimeSeriesMeasureValueColumnInfo != null) { return parseTimeSeries(info, datum); }
    else if (columnType.ArrayColumnInfo != null) { return `${info.Name}=${parseArray(info.Type.ArrayColumnInfo, datum.ArrayValue)}`; }
    else if (columnType.RowColumnInfo != null) { return parseRow(info.Type.RowColumnInfo, datum.RowValue); }
    else { return parseScalarType(info, datum); }
}

function parseTimeSeries(info, datum) {
    const timeSeriesOutput = [];
    datum.TimeSeriesValue.forEach(function (dataPoint) {
        timeSeriesOutput.push(`{time=${dataPoint.Time}, value=${parseDatum(info.Type.TimeSeriesMeasureValueColumnInfo, dataPoint.Value)}}`)
    });

    return `[${timeSeriesOutput.join(", ")}]`
}

function parseScalarType(info, datum) {
    return datum.ScalarValue;                                // dont append column value23232323232323
    // return parseColumnName(info) + datum.ScalarValue;
}

function parseColumnName(info) {
    return info.Name == null ? "" : `${info.Name}=`;
}

function parseArray(arrayColumnInfo, arrayValues) {
    const arrayOutput = [];
    arrayValues.forEach(function (datum) {
        arrayOutput.push(parseDatum(arrayColumnInfo, datum));
    });
    return `[${arrayOutput.join(", ")}]`
}