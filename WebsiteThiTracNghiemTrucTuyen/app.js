const express = require('express')
const bodyParse = require('body-parser')
//const form_function = require('./function_form')
//const aws_function = require('./function_aws')
const app = express()
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:true}))

app.listen(3000,function(){
    console.log("ok")
})
