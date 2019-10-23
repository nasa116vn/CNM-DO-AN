const AWS = require('aws-sdk')
const function_form = require('./Function_form')
const uuid = require('uuid/v1')
AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
})
let docClient = new AWS.DynamoDB.DocumentClient()

