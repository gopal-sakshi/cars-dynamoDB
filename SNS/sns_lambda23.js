exports.handler = async (event) => {
    let body = JSON.parse(event.body)
    const product = body.num1 * body.num2;
    const response = {
        statusCode: 200,
        body: "The product of " + body.num1 + " and " + body.num2 + " is " + product,
    };
    return response;
};

/* 
    zip function23.zip sns_lambda23.js
    docker cp function23.zip localStack23:/tmp

    awslocal lambda create-function \
        --function-name sns_lambda23 \
        --runtime nodejs18.x \
        --zip-file fileb:///tmp/function23.zip \
        --handler index.handler \
        --role arn:aws:iam::000000000000:role/lambda-role

    awslocal lambda list-functions --query 'Functions[].FunctionName' --output text
    awslocal lambda list-functions

*/