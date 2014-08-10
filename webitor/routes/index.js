var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/editor', function(req, res) {
    res.render('partials/editor.jade', {});
});

module.exports = router;
