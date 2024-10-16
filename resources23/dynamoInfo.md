Methods available on
- dynamoClient
- dynamodb

# var dynamoClient = new AWS.DynamoDB.DocumentClient();

`batchGet`(params, callback);
`batchWrite`(params, callback);    
`delete`(params, callback);    
`get`(params, callback);    
`put`(params, callback);    
`query`(params, callback);    
`scan`(params, callback);    
`update`(params, callback);
-------------------------------------------------------------------------------------------------

# var dynamodb = new AWS.DynamoDB();

`constructor()`
config()
`batchExecuteStatement()` ---> batch reads or writes on data stored in DynamoDB, using PartiQL
`batchGetItem(params, callback)` ----> returns the attributes of one or more items from one or more tables
    // use this batchGetItem(callback)
batchWriteItem(callback) ----> puts or deletes multiple items in one or more tables
    // use this batchWriteItem(callback)
createBackup(params, callback) -----> Creates a backup for an existing table
createGlobalTable() -----------> Creates a global table from an existing table
`createTable()` -----------------> Adds a new table to your account... for AWS account, table names must be unique within the region
deleteBackup()
deleteItem() -----------> Deletes a single item in a table by primary key
deleteTable()
describeContinuousBackups() ----> Checks the status of continuous backups and point in time recovery
describeContributorInsights() ----> returns info about contributor insights, for a given table or global secondary index.
... few more ...
`getItem()` ----> returns a set of attributes for the item with the given primary key
`putItem()` -----> Creates a new item, or replaces an old item with a new item 
`query(params, callback)` --------> 
    // provide the name of the partition key attribute & single value for that attribute
    // Query returns all items with that partition key value
-------------------------------------------------------------------------------------------------

`This WONT work for dynamoDb`        
params = {
  TableName: 'TABLE-NAME',
  Item: {
    pid: 'abc123'
  }
};


`This WILL work for dynamoClient`        
params = {
  TableName: 'TABLE-NAME',
  Item: {
    pid: {
      S: 'abc123'
    }
  }
};
-------------------------------------------------------------------------------------------------