var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/home', (req,res)=>{
    let url = 'http://openexchangerates.org/api/currencies.json';
    let curr;
    request(url, (error, resposne, body)=>{
        // console.log(body);
         let curr = JSON.parse(body); 
         res.render('dashboard',{curr: curr});
    })
});

module.exports = router;