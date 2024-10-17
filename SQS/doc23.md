# Standard queues 
- support a nearly unlimited number of transactions per second (TPS) per API action (SendMessage, ReceiveMessage, DeleteMessage). 
- A message is delivered at least once, but occasionally more than one copy of a message is delivered. 
- Standard queues provide best-effort ordering. 
- Occasionally, messages might be delivered in an order different from which they were sent.
- useful when very high throughput is important
    let users upload media while resizing or encoding it.
    Allocate tasks to multiple worker nodes: process a high number of credit card validation requests.

<!-------------------------------------------------------------------------->

# FIFO queues
- support up to 3000 messages per second
- each message is delivered exactly once, and message order is preserved. 
- FIFO queues are designed to enhance messaging between applications 
    when the order of operations & events is critical
    where duplicates can't be tolerated. 
- Examples include:
    Ensure that user-entered commands are executed in the right order.
    Display the correct product price by sending price modifications in the right order.
    The name of a FIFO queue must end with the .fifo suffix.

<!-------------------------------------------------------------------------->

visibility timeout      30sec       0-12hrs
retention period        4 days      1min-14 days


`SQS` & `Lambda`
- both SQS & Lambda must be in the same region
- <prod_queue_44> is in Mumbai region

<!-------------------------------------------------------------------------->


https://github.com/NidalShaterM/localstack-nodejs/tree/main/ec2
https://blog.devops.dev/using-localstack-with-nodejs-and-aws-sdk-4b111e2e6bd
https://medium.com/@anchan.ashwithabg95/using-localstack-sns-and-sqs-for-devbox-testing-fa09de5e3bbb
https://medium.com/cloudfordummies/a-dummies-guide-tutorial-to-aws-sqs-b3431ad7be1d

https://www.reddit.com/r/aws/comments/1c9jqgs/why_would_i_need_sns_topic_in_front_of_an_sqs/?rdt=62646
<!-------------------------------------------------------------------------->