const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.status(200).send("Hello This is a sample node app created for deployment purpose")
})

module.exports =app