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
    imageURL: 'https://vetstreet.brightspotcdn.com/dims4/default/9f7acb2/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Ff3%2F6b9a10a33e11e087a80050568d634f%2Ffile%2FMunchkin-2-645mk062211.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Kitty',
    sex: 'Male',
    age: 3,
    breed: 'Ally',
    story: 'Found eating dead owner'
  }
);
catQueue.enqueue(
  {
    imageURL: 'https://i.etsystatic.com/14472237/d/il/e1e550/1516612521/il_340x270.1516612521_lcg9.jpg?version=0',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Tiger',
    sex: 'Female',
    age: 4,
    breed: 'Mainecoon',
    story: 'Arrested for corruption charges'
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