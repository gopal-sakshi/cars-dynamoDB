# EXPLANATION: 

`use dynamo locally - windows`
- navigate to the path where dynamo local is installed ----> cd "C:\Users\gopal\Downloads\dynamodb_local_latest"
- 3 ways
    java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb --port 8002            WRONG
    java -D"java.library.path"=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb --port 8002          RIGHT         
    java "-Djava.library.path=./DynamoDBLocal_lib" -jar DynamoDBLocal.jar -sharedDb --port 8002          RIGHT      
    WHY = We found that PowerShell misinterprets the -Djava.library.path parameter...
    Enclosing either the parameter name or the entire name & value fixed the issue in our case.

`use dynamo locally - ubuntu`
- alias ddb=
    "cd /home/vsspl/Desktop/otherFiles/dynamoLocal && 
    java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb"

- alias ddbPort=
    "cd /home/vsspl/Desktop/otherFiles/dynamoLocal && 
    java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb -port 8002"

# Intro

a) If you use the -sharedDb option, 
- DynamoDB creates a single database file named shared-local-instance.db. 
- Every program that connects to DynamoDB accesses this file. 
- If you delete the file, you lose any data that you have stored in it.

b) If you omit -sharedDb, the database file is named myaccesskeyid_region.db
- with the AWS access key ID and AWS Region as they appear in your application configuration. 
- If you delete the file, you lose any data that you have stored in it.




