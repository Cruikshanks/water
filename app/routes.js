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

router.get('/v4/int/online_licence', function (req, res) {
  res.render('v4/int/online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v4/int/online_licence/contact_details', function (req, res) {
  res.render('v4/int/online_licence/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v4/int/online_licence/terms', function (req, res) {
  res.render('v4/int/online_licence/terms',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v4/int/online_licence/map_of_abstraction_point', function (req, res) {
  res.render('v4/int/online_licence/map_of_abstraction_point',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v4/ext/online_licence', function (req, res) {
  res.render('v4/ext/online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v4/ext/online_licence/contact_details', function (req, res) {
  res.render('v4/ext/online_licence/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v4/ext/online_licence/terms', function (req, res) {
  res.render('v4/ext/online_licence/terms',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v4/ext/online_licence/map_of_abstraction_point', function (req, res) {
  res.render('v4/ext/online_licence/map_of_abstraction_point',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v4/int/accordion', function (req, res) {
  res.render('v4/int/accordion',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v5/online_licence', function (req, res) {
  res.render('v5/online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v5/online_licence/contact_details', function (req, res) {
  res.render('v5/online_licence/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v5/online_licence/terms', function (req, res) {
  res.render('v5/online_licence/terms',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v5/online_licence/map_of_abstraction_point', function (req, res) {
  res.render('v5/online_licence/map_of_abstraction_point',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v5/sketch1', function (req, res) {
  res.render('v5/sketch1',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v5/sketch2', function (req, res) {
  res.render('v5/sketch2',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v5/sketch3', function (req, res) {
  res.render('v5/sketch3',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v5/sketch4', function (req, res) {
  res.render('v5/sketch4',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v6/online_licence', function (req, res) {
  res.render('v6/online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v6/online_licence/contact_details', function (req, res) {
  res.render('v6/online_licence/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v6/online_licence/terms', function (req, res) {
  res.render('v6/online_licence/terms',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v6/online_licence/map_of_abstraction_point', function (req, res) {
  res.render('v6/online_licence/map_of_abstraction_point',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v6/complex_online_licence', function (req, res) {
  res.render('v6/complex_online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v6/online_licence/contact', function (req, res) {
  res.render('v6/online_licence/contact',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7/online_licence', function (req, res) {
  res.render('v7/online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7/online_licence/contact_details', function (req, res) {
  res.render('v7/online_licence/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7/online_licence/terms', function (req, res) {
  res.render('v7/online_licence/terms',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7/online_licence/map_of_abstraction_point', function (req, res) {
  res.render('v7/online_licence/map_of_abstraction_point',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7/complex_online_licence', function (req, res) {
  res.render('v7/complex_online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7/online_licence/contact', function (req, res) {
  res.render('v7/online_licence/contact',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7b/licences', function (req, res) {
  res.render('v7b/licences',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7b/online_licence', function (req, res) {
  res.render('v7b/online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7b/online_licence/contact_details', function (req, res) {
  res.render('v7b/online_licence/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7b/online_licence/terms', function (req, res) {
  res.render('v7b/online_licence/terms',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7b/online_licence/map_of_abstraction_point', function (req, res) {
  res.render('v7b/online_licence/map_of_abstraction_point',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7b/online_licence/map_of_abstraction_point_summary', function (req, res) {
  res.render('v7b/online_licence/map_of_abstraction_point_summary',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7/online_licence/map_of_abstraction_point_summary', function (req, res) {
  res.render('v7/online_licence/map_of_abstraction_point_summary',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7b/complex_online_licence', function (req, res) {
  res.render('v7b/complex_online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7b/online_licence/contact', function (req, res) {
  res.render('v7b/online_licence/contact',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7b/licences', function (req, res) {
  res.render('v7b/licences',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7b/licences', function (req, res) {
  res.render('v7b/licences',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7c/online_licence', function (req, res) {
  res.render('v7c/online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7c/online_licence/contact_details', function (req, res) {
  res.render('v7c/online_licence/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7c/online_licence/terms', function (req, res) {
  res.render('v7c/online_licence/terms',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7c/online_licence/map_of_abstraction_point', function (req, res) {
  res.render('v7c/online_licence/map_of_abstraction_point',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7c/complex_online_licence', function (req, res) {
  res.render('v7c/complex_online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7c/online_licence/contact', function (req, res) {
  res.render('v7c/online_licence/contact',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7c/licences', function (req, res) {
  res.render('v7c/licences',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7c/online_licence/conditions/cessation', function (req, res) {
  res.render('v7c/online_licence/conditions/cessation',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7c/online_licence/conditions/augmentation_compensation', function (req, res) {
  res.render('v7c/online_licence/conditions/augmentation_compensation',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7c/online_licence/conditions/eel_screening', function (req, res) {
  res.render('v7c/online_licence/conditions/eel_screening',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7c/online_licence/conditions/fish_passage', function (req, res) {
  res.render('v7c/online_licence/conditions/fish_passage',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v7c/online_licence/conditions/time_limiting', function (req, res) {
  res.render('v7c/online_licence/conditions/time_limiting',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router


router.get('/v8/online_licence', function (req, res) {
  res.render('v8/online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v8/online_licence/contact_details', function (req, res) {
  res.render('v8/online_licence/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v8/online_licence/terms', function (req, res) {
  res.render('v8/online_licence/terms',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v8/online_licence/map_of_abstraction_point', function (req, res) {
  res.render('v8/online_licence/map_of_abstraction_point',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v8/complex_online_licence', function (req, res) {
  res.render('v8/complex_online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v8/online_licence/contact', function (req, res) {
  res.render('v8/online_licence/contact',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v9/online_licence', function (req, res) {
  res.render('v9/online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v9/online_licence/contact_details', function (req, res) {
  res.render('v9/online_licence/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v9/online_licence/terms', function (req, res) {
  res.render('v9/online_licence/terms',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v9/online_licence/map_of_abstraction_point', function (req, res) {
  res.render('v9online_licence/map_of_abstraction_point',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v9/complex_online_licence', function (req, res) {
  res.render('v9/complex_online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v9/online_licence/contact', function (req, res) {
  res.render('v9/online_licence/contact',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router
