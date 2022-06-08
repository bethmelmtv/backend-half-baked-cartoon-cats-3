const { Router } = require('express');
// const { cats } = require('../../data/cats');
const Cat = require('../models/Cat');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingCat = await Cat.getById(id);
    res.json(matchingCat);
  })

  .get('/', async (req, res) => {
    const getAllCats = await Cat.getAll();
    res.json(getAllCats);
  });
