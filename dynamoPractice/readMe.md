https://newsletter.simpleaws.dev/p/dynamodb-database-design

Customer            = Email
Product             = Detail
Order               = Date
OrderItem           = Price, Quantity

`Principles`
- new data goes into the base table
- new ways to query existing data need indices (LSI for a new SK, GSI for a new PK+SK).