const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World, This is home router');
  });

  module.exports = router;