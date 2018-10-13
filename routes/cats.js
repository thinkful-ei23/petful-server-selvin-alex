'use strict';

const express = require('express');
const router = express.Router();
const Queue = require('../Queue');
const catQueue = new Queue();


function peek(queue) {
  return queue.first.value;
}


catQueue.enqueue(
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
);
catQueue.enqueue(
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Kitty',
    sex: 'Female',
    age: 3,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
);
catQueue.enqueue(
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Tiger',
    sex: 'Female',
    age: 4,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
);

console.log(peek(catQueue));


router.get('/', (req, res, next) => {
  res.status(201).json(peek(catQueue));
});


router.delete('/', (req, res, next) => {
  catQueue.dequeue();
  console.log(peek(catQueue));
  res.status(201).json(peek(catQueue));
});

module.exports = router;