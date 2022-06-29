const axios = require("axios");
require('dotenv').config();

const getWeather = async(location)=>{
    const {data} = await axios.get("http://api.weatherstack.com/current",{
        params:{
            access_key:process.env.SECRET_KEY,
            query:location
        } 
    })
    return data;
}

module.exports = getWeather;