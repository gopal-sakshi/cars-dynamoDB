-- Get the 10 most recently added data points in the past 15 minutes. You can change the time period if you're not continuously ingesting data
SELECT * FROM "database23"."IoTMulti" WHERE time between ago(15m) and now() ORDER BY time DESC LIMIT 10 

/*
    fleet   truck_id      fuel_capacity     model   load_capacity   make 
    Alpha   4431598972    150               C-600   1000            Ford

    measure_name    time                            load        fuel-reading        location                        speed
    IoTMulti-stats 2024-11-14 06:11:57.182000000    333.0       116.41383853801044  45.5051° N, 122.6750° W         13.0
*/

-----------------------------------------------------------------------------------------------------

-- Get a list of all the sensor attributes and values being monitored for each truck in the fleet.
SELECT
    truck_id,
    fleet,
    fuel_capacity,
    model,
    load_capacity,
    make,
    measure_name
FROM "database23".IoTMulti
GROUP BY truck_id, fleet, fuel_capacity, model, load_capacity, make, measure_name


-----------------------------------------------------------------------------------------------------

-- Get the most recent fuel reading of each truck in the fleet in the past 24 hours.
WITH latest_recorded_time AS (
    SELECT
        truck_id,
        max(time) as latest_time
    FROM "database23".IoTMulti
    WHERE time >= ago(24h)
    GROUP BY truck_id 
)
SELECT
    b.truck_id,
    b.fleet,
    b.make,
    b.model,
    b.time,
    b."fuel-reading" as last_reported_fuel_reading
FROM latest_recorded_time a 
INNER JOIN "database23".IoTMulti b ON a.truck_id = b.truck_id AND b.time = a.latest_time
WHERE b.time > ago(24h)
ORDER BY b.truck_id
-----------------------------------------------------------------------------------------------------


-- Identify trucks that have been running on low fuel(less than 10 %) in the past 48 hours.
WITH low_fuel_trucks AS (
    SELECT time, truck_id, fleet, make, model, ("fuel-reading"/cast(fuel_capacity as double)*100) AS fuel_pct
    FROM "database23".IoTMulti
    WHERE time >= ago(48h) AND 
    ("fuel-reading"/cast(fuel_capacity as double)*100) < 10
), other_trucks AS (
    SELECT time, truck_id, ("fuel-reading"/cast(fuel_capacity as double)*100) as remaining_fuel
    FROM "database23".IoTMulti
    WHERE time >= ago(48h) AND 
    truck_id IN (SELECT truck_id FROM low_fuel_trucks) AND 
    ("fuel-reading"/cast(fuel_capacity as double)*100) >= 10
), trucks_that_refuelled AS (
    SELECT a.truck_id
    FROM low_fuel_trucks a JOIN other_trucks b
    ON a.truck_id = b.truck_id AND b.time >= a.time
)
SELECT DISTINCT truck_id, fleet, make, model, fuel_pct
FROM low_fuel_trucks
WHERE truck_id NOT IN (SELECT truck_id FROM trucks_that_refuelled)
-----------------------------------------------------------------------------------------------------


-- Find the average load and max speed for each truck for the past week.
SELECT
    bin(time, 1d) as binned_time,
    fleet,
    truck_id,
    make,
    model,
    AVG(load) AS avg_load_tons,
    MAX(speed) AS max_speed_mph
FROM "database23".IoTMulti
WHERE time >= ago(7d)
GROUP BY fleet, truck_id, make, model, bin(time, 1d)
ORDER BY truck_id

---------------------------------------------------------------------------------------

-- Get the load efficiency for each truck for the past week.
WITH average_load_per_truck AS (
    SELECT truck_id, avg(load)  AS avg_load 
    FROM "database23".IoTMulti 
    WHERE time >= ago(7d)
    GROUP BY truck_id, fleet, load_capacity, make, model
), truck_load_efficiency AS (
    SELECT a.truck_id, fleet, load_capacity, make,
    model, avg_load, load, time, (load*100)/avg_load as load_efficiency -- , approx_percentile(avg_load_pct, DOUBLE '0.9')
    FROM "database23".IoTMulti a 
    JOIN average_load_per_truck b ON a.truck_id = b.truck_id
)
SELECT truck_id, time, load_efficiency
FROM truck_load_efficiency
ORDER BY truck_id, time
---------------------------------------------------------------------------------------