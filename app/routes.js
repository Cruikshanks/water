var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.get('/v3/a/int/online_licence', function (req, res) {
  res.render('v3/a/int/online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router
