const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/category.json');
const stones = require('./data/stone.json');
const slabs = require('./data/slabs.json')

app.use(cors());

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/stones', (req, res) => {
    res.send(stones)
})
app.get('/slabs', (req, res) => {
    res.send(slabs)
})

app.get('/', (req, res) => {
    res.send('Server is Running...');
})

app.listen(port, () => {
    console.log('Server Running Port', port);
})