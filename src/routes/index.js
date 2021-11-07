const express = require('express');
const router = express.Router();


router.get("/", (req,res)=>{
    res.render('index.html', {title:'Melissa Vela'});
});

router.get("/contact", (req,res)=>{
    res.render('contact.html', {title:'Melissa Vela'});
});

router.get("/list-items", (req,res)=>{
    res.render('list-items.html', {title:'Challenge'});
});
 
module.exports = router;