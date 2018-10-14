'use strict';

const express = require('express');
const router = express.Router();
const Queue = require('../Queue');
const dogQueue = new Queue();


function peek(queue) {
  return queue.first.value;
}

dogQueue.enqueue(
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
);
dogQueue.enqueue(
  {
    imageURL: 'https://i.ytimg.com/vi/oH_GHvcF9VM/hqdefault.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Powerder Puff',
    sex: 'Male',
    age: 4,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
);
dogQueue.enqueue(
  {
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdRlDRFosG98bSpdFmmJGxGTgMl_xLdyTJXJKtYGkgcBZe0Gh3',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Happy',
    sex: 'Male',
    age: 5,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
);
console.log(peek(dogQueue));


router.get('/', (req, res, next) => {
  res.status(201).json(peek(dogQueue));
});

router.delete('/', (req, res, next) => {
  dogQueue.dequeue();
  console.log(peek(dogQueue));
  res.status(201).json(peek(dogQueue));
});

module.exports = router;