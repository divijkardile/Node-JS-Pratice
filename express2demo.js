const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');
//app.use(express.static(publicPath));

app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (_, res) => {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/profile', (_, res) => {
    const user = {name: 'Divij', email: 'divijkardile@gmail.com', city: 'Junnar'}
    res.render('profile', {user});
})

app.get('*', (_, res) => {
    res.send(`<h1 style = 'color: red'>Error 404 !!!!</h1>`)
})

app.listen(2500);