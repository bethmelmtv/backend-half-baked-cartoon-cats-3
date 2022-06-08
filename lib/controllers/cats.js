const { Router } = require('express');
const { cats } = require('../../data/cats');
const { Cat } = require('../models/Cat');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingCat = cats.find((cat) => cat.id === id);
    res.json(matchingCat);
  })

  .get('/', async (req, res) => {
    const getAllCats = await Cat.getAll();
    res.json(getAllCats);
  });
