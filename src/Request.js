const axios = require("axios");

const getWeather = async(location)=>{
    const {data} = await axios.get("http://api.weatherstack.com/current",{
        params:{
            access_key:"673d7c2be9a3ca8a7450a1077fab7bd9",
            query:location
        } 
    })
    return data;
}

module.exports = getWeather;