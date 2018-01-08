var express = require('express')
var router = express.Router()


// Auth code redirect for user testing
router.get('/auth', function(req, res) {
  res.redirect('/v12_2/online_licence/registrations/8_complete_account');
});

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
  res.render('v9/online_licence/map_of_abstraction_point',{
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

router.get('/v9/signin', function (req, res) {
  if(req.query.incorrectLogin){
    res.render('v9/signin',{
       "incorrectLogin":"1"
    })
  } else {
    res.render('v9/signin',{})

  }
})

router.post('/v9/check_email', function (req, res) {
  res.render('v9/check_email',{
     "user_id":req.body.user_id
  })
})

router.post('/v9/licences', function (req, res) {

  if (req.body.password=='test12345!'){
    // password supplied and correct
    res.render('v9/licences',{})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v9/signin?incorrectLogin=1');
  }
})

module.exports = router

router.get('/v10/online_licence', function (req, res) {
  res.render('v10/online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v10/online_licence/contact_details', function (req, res) {
  res.render('v10/online_licence/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v10/online_licence/terms', function (req, res) {
  res.render('v10/online_licence/terms',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v10/online_licence/map_of_abstraction_point', function (req, res) {
  res.render('v10/online_licence/map_of_abstraction_point',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v10/complex_online_licence', function (req, res) {
  res.render('v10/complex_online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v10/online_licence/contact', function (req, res) {
  res.render('v10/online_licence/contact',{
     "chosenPermitID":req.query['wid']
  })
})

router.get('/v10/signin', function (req, res) {
  if(req.query.incorrectLogin){
    res.render('v10/signin',{
       "incorrectLogin":"1"
    })
  } else {
    res.render('v10/signin',{})

  }
})

router.post('/v10/check_email', function (req, res) {
  res.render('v10/check_email',{
     "user_id":req.body.user_id
  })
})

router.post('/v10/licences', function (req, res) {

  if (req.body.password=='test12345!'){
    // password supplied and correct
    res.render('v10/licences',{})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v10/signin?incorrectLogin=1');
  }
})

module.exports = router

router.get('/v10/online_licence/registrations/2_licence_number', function (req, res) {
  if(req.query.incorrectLicenceNo){
    res.render('v10/online_licence/registrations/2_licence_number',{
       "incorrectLicenceNo":"1"
    })
  } else {
    res.render('v10/online_licence/registrations/2_licence_number',{})

  }
})

router.post('/v10/online_licence/registrations/2_licence_number', function (req, res) {

  if (req.body.password=='test12345!'){
    // password supplied and correct
    res.render('v10/online_licence/registrations/3_select_licences',{})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v10/online_licence/registrations/2_licence_number?incorrectLicenceNo=1');
  }
})



router.get('/v11/pages/online_licence', function (req, res) {
  res.render('v11/pages/online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v11/online_licence/rename/online_licence_rename', function (req, res) {
  res.render('v11/online_licence/rename/online_licence_rename',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v11/online_licence/rename/online_licence_renamed', function (req, res) {
  res.render('v11/online_licence/rename/online_licence_renamed',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v11/online_licence_renaming', function (req, res) {
  res.render('v11/online_licence_renaming',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v11/pages/contact_details', function (req, res) {
  res.render('v11/pages/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v11/pages/terms', function (req, res) {
  res.render('v11/pages/terms',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v11/pages/map_of_abstraction_point', function (req, res) {
  res.render('v11/pages/map_of_abstraction_point',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v11/complex_online_licence', function (req, res) {
  res.render('v11/complex_online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v11/online_licence/contact', function (req, res) {
  res.render('v11/online_licence/contact',{
     "chosenPermitID":req.query['wid']
  })
})

router.get('/v11/signin', function (req, res) {
  if(req.query.incorrectLogin){
    res.render('v11/signin',{
       "incorrectLogin":"1"
    })
  } else {
    res.render('v11/signin',{})

  }
})

router.get('/v11/online_licence/registrations/8_complete_account', function (req, res) {
  if(req.query.incorrectLogin){
    res.render('v11/online_licence/registrations/8_complete_account',{
       "incorrectLogin":"1"
    })
  } else {
    res.render('v11/online_licence/registrations/8_complete_account',{})

  }
})

router.post('/v11/check_email', function (req, res) {
  res.render('v11/check_email',{
     "user_id":req.body.user_id
  })
})

router.post('/v11/online_licence/licences_list/licences', function (req, res) {

  if (req.body.password=='Test12345!'){
    // password supplied and correct
    res.render('v11/online_licence/licences_list/licences',{})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v11/signin?incorrectLogin=1');
  }
})

router.post('/v11/online_licence/licences_list/licences', function (req, res) {

  if (req.body.password=='test12345!'){
    // password supplied and correct
    res.render('v11/online_licence/licences_list/licences',{})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v11/online_licence/registrations/auth_code?incorrectLogin=1');
  }
})

router.post('/v11/online_licence/registrations/auth_code', function (req, res) {

  if (req.body.password=='Test12345!'){
    // password supplied and correct
    res.render('v11/online_licence/registrations/auth_code',{})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v11/online_licence/registrations/8_complete_account?incorrectLogin=1');
  }
})

router.get('/v11/online_licence/registrations/2_licence_number', function (req, res) {
  data=req.query;
    res.render('v11/online_licence/registrations/2_licence_number',{
       "data":data
    })

})

router.get('/v11/online_licence/wendy_reg/2_licence_number', function (req, res) {
  data=req.query;
    res.render('v11/online_licence/wendy_reg/2_licence_number',{
       "data":data
    })

})

router.get('/v11/online_licence/new_wendy_reg/licence_number', function (req, res) {
  data=req.query;
    res.render('v11/online_licence/new_wendy_reg/licence_number',{
       "data":data
    })

})

router.post('/v11/online_licence/registrations/3_select_licences', function (req, res) {
  data=req.query;
  console.log(data)
  console.log(req.body)
  var data_valid=1;
  //03/28/60/0001
  console.log('check licence no')
  if(req.body.licence_no && req.body.licence_no.substr(0,9) != '03/28/60/'){
    console.log('not valid')
    data_valid=0;
  } else {
    console.log('valid')
  }
  if(req.body.postcode && req.body.postcode.length < 6){
    data_valid=0;
    console.log('not valid')
  } else {
    console.log('valid')
  }

  if (data_valid==1){
    // licence_no and postcode valid
    res.render('v11/online_licence/registrations/3_select_licences',{data:data})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v11/online_licence/registrations/2_licence_number?incorrectLicenceNo=1&licence_no='+req.body.licence_no+'&postcode='+req.body.postcode);
  }
})

router.post('/v11/online_licence/wendy_reg/3_select_licences', function (req, res) {
  data=req.query;
  console.log(data)
  console.log(req.body)
  var data_valid=1;
  //03/28/60/0001
  console.log('check licence no')
  if(req.body.licence_no && req.body.licence_no.substr(0,9) != '03/28/60/'){
    console.log('not valid')
    data_valid=0;
  } else {
    console.log('valid')
  }
  if(req.body.postcode && req.body.postcode.length < 6){
    data_valid=0;
    console.log('not valid')
  } else {
    console.log('valid')
  }

  if (data_valid==1){
    // licence_no and postcode valid
    res.render('v11/online_licence/wendy_reg/3_select_licences',{data:data})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v11/online_licence/wendy_reg/2_licence_number?incorrectLicenceNo=1&licence_no='+req.body.licence_no+'&postcode='+req.body.postcode);
  }
})


router.post('/v11/online_licence/new_wendy_reg/select_licences', function (req, res) {
  data=req.query;
  console.log(data)
  console.log(req.body)
  var data_valid=1;
  //03/28/60/0001
  console.log('check licence no')
  if(req.body.licence_no && req.body.licence_no.substr(0,9) != '03/28/60/'){
    console.log('not valid')
    data_valid=0;
  } else {
    console.log('valid')
  }
  if(req.body.postcode && req.body.postcode.length < 6){
    data_valid=0;
    console.log('not valid')
  } else {
    console.log('valid')
  }

  if (data_valid==1){
    // licence_no and postcode valid
    res.render('v11/online_licence/new_wendy_reg/select_licences',{data:data})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v11/online_licence/new_wendy_reg/licence_number?incorrectLicenceNo=1&licence_no='+req.body.licence_no+'&postcode='+req.body.postcode);
  }
})


router.post('/v11/online_licence/john_reg/4_give_email', function (req, res) {
  console.log('4_give_email')
  data=req.query;
  console.log(req.body)
    if(req.body['waste-types']=='_unchecked'){
      data.noneselected=1;
      res.render('v11/online_licence/john_reg/3_select_licences',{
         "data":data
      })
    } else {
      res.render('v11/online_licence/john_reg/4_give_email',{
         "data":data
      })

    }
})

router.post('/v11/online_licence/registrations/4_give_email', function (req, res) {
  console.log('4_give_email')
  data=req.query;
  console.log(req.body)
    if(req.body['waste-types']=='_unchecked'){
      data.noneselected=1;
      res.render('v11/online_licence/registrations/3_select_licences',{
         "data":data
      })
    } else {
      res.render('v11/online_licence/registrations/4_give_email',{
         "data":data
      })

    }

})


router.post('/v11/online_licence/registrations/create_password', function (req, res) {
  console.log('create_password')
  data=req.query;
  console.log(req.body)
  if(req.body['contact-email']== '' &&
    req.body['contact-phone']=='' &&
    req.body['contact-text-message']=='' ){
      data.noneselected=1;
      res.render('v11/online_licence/registrations/5_contact_details',{
         "data":data
      })
    } else {
      res.render('v11/online_licence/registrations/create_password',{
         "data":data
      })

    }
})

router.post('/v11/online_licence/registrations/7-2-2_by_post_confirm', function (req, res) {
  console.log('7-2-2_by_post_confirm')
  data=req.query;
  console.log(req.body)
  if(req.body['contact-email']== '' &&
    req.body['contact-phone']=='' &&
    req.body['contact-text-message']=='' ){
      data.noneselected=1;
      res.render('v11/online_licence/registrations/7-3_by_post2',{
         "data":data
      })
    } else {
      res.render('v11/online_licence/registrations/7-2-2_by_post_confirm',{
         "data":data
      })

    }
})

router.post('/v11/online_licence/wendy_reg/create_password', function (req, res) {
  console.log('create_password')
  data=req.query;
  console.log(req.body)
  if(req.body['contact-email']== '' &&
    req.body['contact-phone']=='' &&
    req.body['contact-text-message']=='' ){
      data.noneselected=1;
      res.render('v11/online_licence/wendy_reg/5_contact_details',{
         "data":data
      })
    } else {
      res.render('v11/online_licence/wendy_reg/create_password',{
         "data":data
      })

    }
})

router.post('/v11/online_licence/registrations/7', function (req, res) {
  console.log('7_')
  data=req.query;
  console.log(req.body)
  if(req.body.contact == 'by-post'){
    res.render('v11/online_licence/registrations/7-2_by_post',{
           "data":data
        })
  } else if (req.body.contact == 'by-phone'){
  res.render('v11/online_licence/registrations/7-1_by_phone',{
         "data":data
      })
} else {
  data.noneselected=1
  res.render('v11/online_licence/registrations/6_security_options',{
         "data":data
      })

}
})



router.post('/v11/wendy_reg/registrations/7', function (req, res) {
  console.log('7_')
  data=req.query;
  console.log(req.body)
  if(req.body.contact == 'by-post'){
    res.render('v11/wendy_reg/registrations/7-2_by_post',{
           "data":data
        })
  } else if (req.body.contact == 'by-phone'){
  res.render('v11/wendy_reg/registrations/7-1_by_phone',{
         "data":data
      })
} else {
  data.noneselected=1
  res.render('v11/online_licence/wendy_reg/6_security_options',{
         "data":data
      })

}
})

router.post('/v11/online_licence/wendy_reg/7', function (req, res) {
  console.log('7_')
  data=req.query;
  console.log(req.body)
  if(req.body.contact == 'by-post'){
    res.render('v11/online_licence/wendy_reg/7-2_by_post',{
           "data":data
        })
  } else if (req.body.contact == 'by-phone'){
  res.render('v11/online_licence/wendy_reg/7-1_by_phone',{
         "data":data
      })
} else {
  data.noneselected=1
  res.render('v11/online_licence/wendy_reg/6_security_options',{
         "data":data
      })

}
})

module.exports = router

router.get('/v12/pages/online_licence', function (req, res) {
  res.render('v12/pages/online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12/online_licence/rename/online_licence_rename', function (req, res) {
  res.render('v12/online_licence/rename/online_licence_rename',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12/online_licence/rename/online_licence_renamed', function (req, res) {
  res.render('v12/online_licence/rename/online_licence_renamed',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12/online_licence_renaming', function (req, res) {
  res.render('v12/online_licence_renaming',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12/pages/contact_details', function (req, res) {
  res.render('v12/pages/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12/pages/terms', function (req, res) {
  res.render('v12/pages/terms',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12/pages/map_of_abstraction_point', function (req, res) {
  res.render('v12/pages/map_of_abstraction_point',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12/complex_online_licence', function (req, res) {
  res.render('v12/complex_online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12/online_licence/contact', function (req, res) {
  res.render('v12/online_licence/contact',{
     "chosenPermitID":req.query['wid']
  })
})

router.get('/v12/signin', function (req, res) {
  if(req.query.incorrectLogin){
    res.render('v12/signin',{
       "incorrectLogin":"1"
    })
  } else {
    res.render('v12/signin',{})

  }
})

router.get('/v12/online_licence/registrations/8_complete_account', function (req, res) {
  if(req.query.incorrectLogin){
    res.render('v12/online_licence/registrations/8_complete_account',{
       "incorrectLogin":"1"
    })
  } else {
    res.render('v12/online_licence/registrations/8_complete_account',{})

  }
})

router.post('/v12/check_email', function (req, res) {
  res.render('v12/check_email',{
     "user_id":req.body.user_id
  })
})

router.post('/v12/online_licence/licences_list/licences', function (req, res) {

  if (req.body.password=='Test12345!'){
    // password supplied and correct
    res.render('v12/online_licence/licences_list/licences',{})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v12/signin?incorrectLogin=1');
  }
})

router.post('/v12/online_licence/licences_list/licences', function (req, res) {

  if (req.body.password=='test12345!'){
    // password supplied and correct
    res.render('v12/online_licence/licences_list/licences',{})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v12/online_licence/registrations/auth_code?incorrectLogin=1');
  }
})

router.post('/v12/online_licence/registrations/auth_code', function (req, res) {

  if (req.body.password=='Test12345!'){
    // password supplied and correct
    res.render('v12/online_licence/registrations/auth_code',{})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v12/online_licence/registrations/8_complete_account?incorrectLogin=1');
  }
})

router.get('/v12/online_licence/registrations/2_licence_number', function (req, res) {
  data=req.query;
    res.render('v12/online_licence/registrations/2_licence_number',{
       "data":data
    })

})

router.get('/v12/online_licence/wendy_reg/2_licence_number', function (req, res) {
  data=req.query;
    res.render('v12/online_licence/wendy_reg/2_licence_number',{
       "data":data
    })

})

router.get('/v12/online_licence/new_wendy_reg/licence_number', function (req, res) {
  data=req.query;
    res.render('v12/online_licence/new_wendy_reg/licence_number',{
       "data":data
    })

})

router.post('/v12/online_licence/registrations/3_select_licences', function (req, res) {
  data=req.query;
  console.log(data)
  console.log(req.body)
  var data_valid=1;
  //03/28/60/0001
  console.log('check licence no')
  if(req.body.licence_no && req.body.licence_no.substr(0,9) != '03/28/60/'){
    console.log('not valid')
    data_valid=0;
  } else {
    console.log('valid')
  }
  if(req.body.postcode && req.body.postcode.length < 6){
    data_valid=0;
    console.log('not valid')
  } else {
    console.log('valid')
  }

  if (data_valid==1){
    // licence_no and postcode valid
    res.render('v12/online_licence/registrations/3_select_licences',{data:data})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v12/online_licence/registrations/2_licence_number?incorrectLicenceNo=1&licence_no='+req.body.licence_no+'&postcode='+req.body.postcode);
  }
})

router.post('/v12/online_licence/wendy_reg/3_select_licences', function (req, res) {
  data=req.query;
  console.log(data)
  console.log(req.body)
  var data_valid=1;
  //03/28/60/0001
  console.log('check licence no')
  if(req.body.licence_no && req.body.licence_no.substr(0,9) != '03/28/60/'){
    console.log('not valid')
    data_valid=0;
  } else {
    console.log('valid')
  }
  if(req.body.postcode && req.body.postcode.length < 6){
    data_valid=0;
    console.log('not valid')
  } else {
    console.log('valid')
  }

  if (data_valid==1){
    // licence_no and postcode valid
    res.render('v12/online_licence/wendy_reg/3_select_licences',{data:data})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v12/online_licence/wendy_reg/2_licence_number?incorrectLicenceNo=1&licence_no='+req.body.licence_no+'&postcode='+req.body.postcode);
  }
})


router.post('/v12/online_licence/new_wendy_reg/select_licences', function (req, res) {
  data=req.query;
  console.log(data)
  console.log(req.body)
  var data_valid=1;
  //03/28/60/0001
  console.log('check licence no')
  if(req.body.licence_no && req.body.licence_no.substr(0,9) != '03/28/60/'){
    console.log('not valid')
    data_valid=0;
  } else {
    console.log('valid')
  }
  if(req.body.postcode && req.body.postcode.length < 6){
    data_valid=0;
    console.log('not valid')
  } else {
    console.log('valid')
  }

  if (data_valid==1){
    // licence_no and postcode valid
    res.render('v12/online_licence/new_wendy_reg/select_licences',{data:data})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v12/online_licence/new_wendy_reg/licence_number?incorrectLicenceNo=1&licence_no='+req.body.licence_no+'&postcode='+req.body.postcode);
  }
})


router.post('/v12/online_licence/john_reg/4_give_email', function (req, res) {
  console.log('4_give_email')
  data=req.query;
  console.log(req.body)
    if(req.body['waste-types']=='_unchecked'){
      data.noneselected=1;
      res.render('v12/online_licence/john_reg/3_select_licences',{
         "data":data
      })
    } else {
      res.render('v12/online_licence/john_reg/4_give_email',{
         "data":data
      })

    }
})

router.post('/v12/online_licence/registrations/4_give_email', function (req, res) {
  console.log('4_give_email')
  data=req.query;
  console.log(req.body)
    if(req.body['waste-types']=='_unchecked'){
      data.noneselected=1;
      res.render('v12/online_licence/registrations/3_select_licences',{
         "data":data
      })
    } else {
      res.render('v12/online_licence/registrations/4_give_email',{
         "data":data
      })

    }

})


router.post('/v12/online_licence/registrations/create_password', function (req, res) {
  console.log('create_password')
  data=req.query;
  console.log(req.body)
  if(req.body['contact-email']== '' &&
    req.body['contact-phone']=='' &&
    req.body['contact-text-message']=='' ){
      data.noneselected=1;
      res.render('v12/online_licence/registrations/5_contact_details',{
         "data":data
      })
    } else {
      res.render('v12/online_licence/registrations/create_password',{
         "data":data
      })

    }
})

router.post('/v12/online_licence/registrations/7-2-2_by_post_confirm', function (req, res) {
  console.log('7-2-2_by_post_confirm')
  data=req.query;
  console.log(req.body)
  if(req.body['contact-email']== '' &&
    req.body['contact-phone']=='' &&
    req.body['contact-text-message']=='' ){
      data.noneselected=1;
      res.render('v12/online_licence/registrations/7-3_by_post2',{
         "data":data
      })
    } else {
      res.render('v12/online_licence/registrations/7-2-2_by_post_confirm',{
         "data":data
      })

    }
})

router.post('/v12/online_licence/wendy_reg/create_password', function (req, res) {
  console.log('create_password')
  data=req.query;
  console.log(req.body)
  if(req.body['contact-email']== '' &&
    req.body['contact-phone']=='' &&
    req.body['contact-text-message']=='' ){
      data.noneselected=1;
      res.render('v12/online_licence/wendy_reg/5_contact_details',{
         "data":data
      })
    } else {
      res.render('v12/online_licence/wendy_reg/create_password',{
         "data":data
      })

    }
})

router.post('/v12/contact_details/confirm', function (req, res) {
  console.log('create_password')
  data=req.query;
  console.log(req.body)
  if(req.body['contact-email']== '' &&
    req.body['contact-phone']=='' &&
    req.body['contact-text-message']=='' ){
      data.noneselected=1;
      res.render('v12/contact_details/why',{
         "data":data
      })
    } else {
      res.render('v12/contact_details/confirm',{
         "data":data
      })

    }
})


router.post('/v12/online_licence/registrations/7', function (req, res) {
  console.log('7_')
  data=req.query;
  console.log(req.body)
  if(req.body.contact == 'by-post'){
    res.render('v12/online_licence/registrations/7-2_by_post',{
           "data":data
        })
  } else if (req.body.contact == 'by-phone'){
  res.render('v12/online_licence/registrations/7-1_by_phone',{
         "data":data
      })
} else {
  data.noneselected=1
  res.render('v12/online_licence/registrations/6_security_options',{
         "data":data
      })

}
})



router.post('/v12/wendy_reg/registrations/7', function (req, res) {
  console.log('7_')
  data=req.query;
  console.log(req.body)
  if(req.body.contact == 'by-post'){
    res.render('v12/wendy_reg/registrations/7-2_by_post',{
           "data":data
        })
  } else if (req.body.contact == 'by-phone'){
  res.render('v12/wendy_reg/registrations/7-1_by_phone',{
         "data":data
      })
} else {
  data.noneselected=1
  res.render('v12/online_licence/wendy_reg/6_security_options',{
         "data":data
      })

}
})

router.post('/v12/online_licence/wendy_reg/7', function (req, res) {
  console.log('7_')
  data=req.query;
  console.log(req.body)
  if(req.body.contact == 'by-post'){
    res.render('v12/online_licence/wendy_reg/7-2_by_post',{
           "data":data
        })
  } else if (req.body.contact == 'by-phone'){
  res.render('v12/online_licence/wendy_reg/7-1_by_phone',{
         "data":data
      })
} else {
  data.noneselected=1
  res.render('v12/online_licence/wendy_reg/6_security_options',{
         "data":data
      })

}
})

module.exports = router

router.get('/v12/pages/contact_details', function (req, res) {
  res.render('v12/pages/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12/conditions/cessation', function (req, res) {
  res.render('v12/conditions/cessation',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12/conditions/augmentation_compensation', function (req, res) {
  res.render('v12/conditions/augmentation_compensation',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12/conditions/eel_screening', function (req, res) {
  res.render('v12/conditions/eel_screening',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12/conditions/fish_passage', function (req, res) {
  res.render('v12/conditions/fish_passage',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12/conditions/time_limiting', function (req, res) {
  res.render('v12/conditions/time_limiting',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/pages/online_licence', function (req, res) {
  res.render('v12_2/pages/online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/online_licence/rename/online_licence_rename', function (req, res) {
  res.render('v12_2/online_licence/rename/online_licence_rename',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/online_licence/rename/online_licence_renamed', function (req, res) {
  res.render('v12_2/online_licence/rename/online_licence_renamed',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/online_licence_renaming', function (req, res) {
  res.render('v12_2/online_licence_renaming',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/pages/contact_details', function (req, res) {
  res.render('v12_2/pages/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/pages/terms', function (req, res) {
  res.render('v12_2/pages/terms',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/pages/map_of_abstraction_point', function (req, res) {
  res.render('v12_2/pages/map_of_abstraction_point',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/complex_online_licence', function (req, res) {
  res.render('v12_2/complex_online_licence',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/online_licence/contact', function (req, res) {
  res.render('v12_2/online_licence/contact',{
     "chosenPermitID":req.query['wid']
  })
})

router.get('/v12_2/signin', function (req, res) {
  if(req.query.incorrectLogin){
    res.render('v12_2/signin',{
       "incorrectLogin":"1"
    })
  } else {
    res.render('v12_2/signin',{})

  }
})

router.get('/v12_2/online_licence/registrations/8_complete_account', function (req, res) {
  if(req.query.incorrectLogin){
    res.render('v12_2/online_licence/registrations/8_complete_account',{
       "incorrectLogin":"1"
    })
  } else {
    res.render('v12_2/online_licence/registrations/8_complete_account',{})

  }
})

router.post('/v12_2/check_email', function (req, res) {
  res.render('v12_2/check_email',{
     "user_id":req.body.user_id
  })
})

router.post('/v12_2/online_licence/licences_list/licences', function (req, res) {

  if (req.body.password=='Test12345!'){
    // password supplied and correct
    res.render('v12_2/online_licence/licences_list/licences',{})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v12_2/signin?incorrectLogin=1');
  }
})

router.post('/v12_2/online_licence/licences_list/licences', function (req, res) {

  if (req.body.password=='test12345!'){
    // password supplied and correct
    res.render('v12_2/online_licence/licences_list/licences',{})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v12_2/online_licence/registrations/auth_code?incorrectLogin=1');
  }
})

router.post('/v12_2/online_licence/registrations/auth_code', function (req, res) {

  if (req.body.password=='Test12345!'){
    // password supplied and correct
    res.render('v12_2/online_licence/registrations/auth_code',{})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v12_2/online_licence/registrations/8_complete_account?incorrectLogin=1');
  }
})

router.get('/v12_2/online_licence/registrations/2_licence_number', function (req, res) {
  data=req.query;
    res.render('v12_2/online_licence/registrations/2_licence_number',{
       "data":data
    })

})

router.get('/v12_2/online_licence/wendy_reg/2_licence_number', function (req, res) {
  data=req.query;
    res.render('v12_2/online_licence/wendy_reg/2_licence_number',{
       "data":data
    })

})

router.get('/v12_2/online_licence/new_wendy_reg/licence_number', function (req, res) {
  data=req.query;
    res.render('v12_2/online_licence/new_wendy_reg/licence_number',{
       "data":data
    })

})

router.post('/v12_2/online_licence/registrations/3_select_licences', function (req, res) {
  data=req.query;
  console.log(data)
  console.log(req.body)
  var data_valid=1;
  //03/28/60/0001
  console.log('check licence no')
  if(req.body.licence_no && req.body.licence_no.substr(0,9) != '03/28/60/'){
    console.log('not valid')
    data_valid=0;
  } else {
    console.log('valid')
  }
  if(req.body.postcode && req.body.postcode.length < 6){
    data_valid=0;
    console.log('not valid')
  } else {
    console.log('valid')
  }

  if (data_valid==1){
    // licence_no and postcode valid
    res.render('v12_2/online_licence/registrations/3_select_licences',{data:data})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v12_2/online_licence/registrations/2_licence_number?incorrectLicenceNo=1&licence_no='+req.body.licence_no+'&postcode='+req.body.postcode);
  }
})

router.post('/v12_2/online_licence/wendy_reg/3_select_licences', function (req, res) {
  data=req.query;
  console.log(data)
  console.log(req.body)
  var data_valid=1;
  //03/28/60/0001
  console.log('check licence no')
  if(req.body.licence_no && req.body.licence_no.substr(0,9) != '03/28/60/'){
    console.log('not valid')
    data_valid=0;
  } else {
    console.log('valid')
  }
  if(req.body.postcode && req.body.postcode.length < 6){
    data_valid=0;
    console.log('not valid')
  } else {
    console.log('valid')
  }

  if (data_valid==1){
    // licence_no and postcode valid
    res.render('v12_2/online_licence/wendy_reg/3_select_licences',{data:data})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v12_2/online_licence/wendy_reg/2_licence_number?incorrectLicenceNo=1&licence_no='+req.body.licence_no+'&postcode='+req.body.postcode);
  }
})


router.post('/v12_2/online_licence/new_wendy_reg/select_licences', function (req, res) {
  data=req.query;
  console.log(data)
  console.log(req.body)
  var data_valid=1;
  //03/28/60/0001
  console.log('check licence no')
  if(req.body.licence_no && req.body.licence_no.substr(0,9) != '03/28/60/'){
    console.log('not valid')
    data_valid=0;
  } else {
    console.log('valid')
  }
  if(req.body.postcode && req.body.postcode.length < 6){
    data_valid=0;
    console.log('not valid')
  } else {
    console.log('valid')
  }

  if (data_valid==1){
    // licence_no and postcode valid
    res.render('v12_2/online_licence/new_wendy_reg/select_licences',{data:data})
  } else {
    //password not correct')
    //redirect to signin page
    return res.redirect(301, '/v12_2/online_licence/new_wendy_reg/licence_number?incorrectLicenceNo=1&licence_no='+req.body.licence_no+'&postcode='+req.body.postcode);
  }
})


router.post('/v12_2/online_licence/john_reg/4_give_email', function (req, res) {
  console.log('4_give_email')
  data=req.query;
  console.log(req.body)
    if(req.body['waste-types']=='_unchecked'){
      data.noneselected=1;
      res.render('v12_2/online_licence/john_reg/3_select_licences',{
         "data":data
      })
    } else {
      res.render('v12_2/online_licence/john_reg/4_give_email',{
         "data":data
      })

    }
})

router.post('/v12_2/online_licence/registrations/4_give_email', function (req, res) {
  console.log('4_give_email')
  data=req.query;
  console.log(req.body)
    if(req.body['waste-types']=='_unchecked'){
      data.noneselected=1;
      res.render('v12_2/online_licence/registrations/3_select_licences',{
         "data":data
      })
    } else {
      res.render('v12_2/online_licence/registrations/4_give_email',{
         "data":data
      })

    }

})


router.post('/v12_2/online_licence/registrations/create_password', function (req, res) {
  console.log('create_password')
  data=req.query;
  console.log(req.body)
  if(req.body['contact-email']== '' &&
    req.body['contact-phone']=='' &&
    req.body['contact-text-message']=='' ){
      data.noneselected=1;
      res.render('v12_2/online_licence/registrations/5_contact_details',{
         "data":data
      })
    } else {
      res.render('v12_2/online_licence/registrations/create_password',{
         "data":data
      })

    }
})

router.post('/v12_2/online_licence/registrations/7-2-2_by_post_confirm', function (req, res) {
  console.log('7-2-2_by_post_confirm')
  data=req.query;
  console.log(req.body)
  if(req.body['contact-email']== '' &&
    req.body['contact-phone']=='' &&
    req.body['contact-text-message']=='' ){
      data.noneselected=1;
      res.render('v12_2/online_licence/registrations/7-3_by_post2',{
         "data":data
      })
    } else {
      res.render('v12_2/online_licence/registrations/7-2-2_by_post_confirm',{
         "data":data
      })

    }
})

router.post('/v12_2/online_licence/wendy_reg/create_password', function (req, res) {
  console.log('create_password')
  data=req.query;
  console.log(req.body)
  if(req.body['contact-email']== '' &&
    req.body['contact-phone']=='' &&
    req.body['contact-text-message']=='' ){
      data.noneselected=1;
      res.render('v12_2/online_licence/wendy_reg/5_contact_details',{
         "data":data
      })
    } else {
      res.render('v12_2/online_licence/wendy_reg/create_password',{
         "data":data
      })

    }
})

router.post('/v12_2/contact_details/confirm', function (req, res) {
  console.log('create_password')
  data=req.query;
  console.log(req.body)
  if(req.body['contact-email']== '' &&
    req.body['contact-phone']=='' &&
    req.body['contact-text-message']=='' ){
      data.noneselected=1;
      res.render('v12_2/contact_details/why',{
         "data":data
      })
    } else {
      res.render('v12_2/contact_details/confirm',{
         "data":data
      })

    }
})


router.post('/v12_2/online_licence/registrations/7', function (req, res) {
  console.log('7_')
  data=req.query;
  console.log(req.body)
  if(req.body.contact == 'by-post'){
    res.render('v12_2/online_licence/registrations/7-2_by_post',{
           "data":data
        })
  } else if (req.body.contact == 'by-phone'){
  res.render('v12_2/online_licence/registrations/7-1_by_phone',{
         "data":data
      })
} else {
  data.noneselected=1
  res.render('v12_2/online_licence/registrations/6_security_options',{
         "data":data
      })

}
})



router.post('/v12_2/wendy_reg/registrations/7', function (req, res) {
  console.log('7_')
  data=req.query;
  console.log(req.body)
  if(req.body.contact == 'by-post'){
    res.render('v12_2/wendy_reg/registrations/7-2_by_post',{
           "data":data
        })
  } else if (req.body.contact == 'by-phone'){
  res.render('v12_2/wendy_reg/registrations/7-1_by_phone',{
         "data":data
      })
} else {
  data.noneselected=1
  res.render('v12_2/online_licence/wendy_reg/6_security_options',{
         "data":data
      })

}
})

router.post('/v12_2/online_licence/wendy_reg/7', function (req, res) {
  console.log('7_')
  data=req.query;
  console.log(req.body)
  if(req.body.contact == 'by-post'){
    res.render('v12_2/online_licence/wendy_reg/7-2_by_post',{
           "data":data
        })
  } else if (req.body.contact == 'by-phone'){
  res.render('v12_2/online_licence/wendy_reg/7-1_by_phone',{
         "data":data
      })
} else {
  data.noneselected=1
  res.render('v12_2/online_licence/wendy_reg/6_security_options',{
         "data":data
      })

}
})

module.exports = router

router.get('/v12_2/pages/contact_details', function (req, res) {
  res.render('v12_2/pages/contact_details',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/conditions/cessation', function (req, res) {
  res.render('v12_2/conditions/cessation',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/conditions/1_con', function (req, res) {
  res.render('v12_2/conditions/1_con',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/conditions/2_con', function (req, res) {
  res.render('v12_2/conditions/2_con',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/conditions/no_con', function (req, res) {
  res.render('v12_2/conditions/no_con',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/conditions/augmentation_compensation', function (req, res) {
  res.render('v12_2/conditions/augmentation_compensation',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/conditions/eel_screening', function (req, res) {
  res.render('v12_2/conditions/eel_screening',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/conditions/fish_passage', function (req, res) {
  res.render('v12_2/conditions/fish_passage',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router

router.get('/v12_2/conditions/time_limiting', function (req, res) {
  res.render('v12_2/conditions/time_limiting',{
     "chosenPermitID":req.query['wid']
  })
})

module.exports = router
