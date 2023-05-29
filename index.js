const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/category.json');
const stones = require('./data/stone.json');
const slabs = require('./data/slabs.json');
const marbles = require('./data/marble.json');
const kitchens = require('./data/kitchen.json');
const storages = require('./data/storage.json');
const fireplaces = require('./data/firplace.json');
const floorings = require('./data/flooring.json');
const bathrooms = require('./data/bathroom.json');
const granites = require('./data/granite.json');
const projects = require('./data/projects.json');

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

app.get('/marbles', (req, res) => {
    res.send(marbles)
})

app.get('/kitchens', (req, res) => {
    res.send(kitchens)
})

app.get('/storages', (req, res) => {
    res.send(storages)
})

app.get('/fireplaces', (req, res) => {
    res.send(fireplaces)
})

app.get('/floorings', (req, res) => {
    res.send(floorings)
})

app.get('/granites', (req, res) => {
    res.send(granites)
})

app.get('/bathrooms', (req, res) => {
    res.send(bathrooms)
})

app.get('/projects', (req, res) => {
    res.send(projects);
})

app.get('/', (req, res) => {
    res.send('Server is Running...');
})

app.listen(port, () => {
    console.log('Server Running Port', port);
})