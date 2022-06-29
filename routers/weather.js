const express = require("express");
const router = new express.Router();
const getWeather = require("../src/Request.js");
const getDetail = require("../src/utils/getDetail.js");

router.get("/",(req,res)=>{
    res.render('index');
})

router.get("/help",(req,res)=>{
    res.render('help',{msg:"Help Page"});
})
router.get("/weather",async(req,res)=>{
    const id = req.query.id;
    if(!id){
        return res.send({
            err:"Please enter the appropriate address!!!"
        })
    }
    try{
        const data = await getWeather(id);
        const weather = getDetail(data);
        res.send(weather);
    }catch(e){
        res.status(400).send({err:"Failed To fetch Data"});
    }
})
router.get("/about",async(req,res)=>{
    res.render('about');
})
//404 page
router.get("*",(req,res)=>{
    res.render('help',{msg:"404 Page"});
})
module.exports = router;