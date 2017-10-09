'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use('/public', express.static(__dirname + '/static'));

const pastries = [
  {
    name: 'Torte',
    price: 5
  },
  {
    name: 'Cream Puff',
    price: 2
  },
  {
    name: 'Petit Four',
    price: 1
  },
  {
    name: 'Tompounce',
    price: 3
  },
  {
    name: 'Cookies',
    price: 4
  }
];

app.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Home',
    url: `${req.url}`
  });
});

app.get('/about', (req, res, next) => {
  const now = new Date();
  console.log('now', now);

  res.render('about', {
    title: 'About',
    url: `${req.url}`,
    now
  });
});

app.get('/inventory', (req, res, next) => {
  res.render('inventory', {
    title: 'Inventory',
    url: `${req.url}`,
    pastries
  });
});

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000');
});