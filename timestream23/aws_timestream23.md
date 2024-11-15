3 main things that timestream does
- store
- query
- identity patterns & trends
- but not on 1000 rows... but trillions of rows...

`Concepts`
- keeping recent data in memory
- move historical data to a cost optimized storage tier
- only influx database available in eu-north-1 (Stockholm) region
- so, switched to n virgina region

`steps`
- created database "database23" -- loaded with sample data
- IoT sample data from trucks
- a table is already present -- "IoTMulti"
- our app sends more than 1 metric
- multi-measure
- single-measure
<!-- --------------------------------------------------------------------------- -->


measure_name        IoTMulti-stats
data_type           multi
dimensions          [
    ( fleet, varchar ),
    ( truck_id, varchar ),
    ( fuel_capacity, varchar ),
    ( model, varchar ),
    ( load_capacity, varchar ),
    ( make, varchar ) 
]

<!-- --------------------------------------------------------------------------- -->