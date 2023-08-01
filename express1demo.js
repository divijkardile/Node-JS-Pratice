const express = require('express')
const app = express();

app.get('', (req, res) =>{
    console.log(req.query);
    res.send(`<h1>Hello, ${req.query.name} to home page</h1>`)
})

app.get('/about', (req, res) =>{
    res.send('Hello, this is about page')
})

app.listen(2500)