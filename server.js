const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.get('/', (req, res) => {
    console.log('Its Alive')
    res.send('Its Alive')
})

    


app.listen(3000, (req, res) => {
    console.log('andre 3000 listening')
})