const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET cool users listing. */
router.get('/cool', function (req, res, next) {
  res.send(`You're so cool!`);
});

router.route('/:id')
  .get((req, res) => {
    res.send(`Info about User ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User ${req.params.id}`);
  })


module.exports = router;
