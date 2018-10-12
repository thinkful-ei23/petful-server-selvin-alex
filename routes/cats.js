'use strict';

const express = require('express');
const router = express.Router();

let cats = [
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 3,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 4,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
];

router.get('/', (req, res, next) => {
  res.status(201).json(cats[0]);
});


router.delete('/', (req, res, next) => {
  cats.shift();
  res.status(201).json(cats[0]);
});

module.exports = router;