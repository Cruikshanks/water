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

router.get('/v3/a/int/online_licence/contact_details', function (req, res) {
  res.render('v3/a/int/online_licence/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v3/a/int/online_licence/terms', function (req, res) {
  res.render('v3/a/int/online_licence/terms',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v3/a/int/online_licence/map_of_abstraction_point', function (req, res) {
  res.render('v3/a/int/online_licence/map_of_abstraction_point',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router
