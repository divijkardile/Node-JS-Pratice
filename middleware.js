const express = require('express')

const app = express()

const reqFilter = (req, res, next) =>{
    if(!req.query.age)
    {
        res.send('Please provide age')
    }
    else if(req.query.age < 18){
        res.send('You can\'t access this page')
    }
    else{
        next();
    }
}

app.use(reqFilter)

app.get('/', (req, res) => {
    res.send('Here in landing page')
})

app.get('/home', (req, res) => {
    res.send('Here in home')
})

app.get('/user', (req, res) => {
    res.send('Here in user')
})

app.listen(2500)