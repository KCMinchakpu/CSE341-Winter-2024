const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World, This is home router');
  });

  router.use('/contacts', require('./contacts'));


  module.exports = router;