// Create web server using express
// Create routes for comments
// Export routes
// ---------------------------------------------------------

// Dependencies
const express = require('express');
const router = express.Router();
const db = require('../models');

// Create all routes and set up logic within routes
router.get('/', (req, res) => {
  db.Comment.findAll({})
    .then((dbComment) => {
      res.json(dbComment);
    });
});

router.post('/', (req, res) => {
  db.Comment.create({
    text: req.body.text,
    complete: req.body.complete,
  })
    .then((dbComment) => {
      res.json(dbComment);
    });
});

router.put('/:id', (req, res) => {
  db.Comment.update(
    {
      text: req.body.text,
      complete: req.body.complete,
    },
    {
      where: {
        id: req.params.id,
      },
    },
  )
    .then((dbComment) => {
      res.json(dbComment);
    });
});

router.delete('/:id', (req, res) => {
  db.Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbComment) => {
      res.json(dbComment);
    });
});

module.exports = router;