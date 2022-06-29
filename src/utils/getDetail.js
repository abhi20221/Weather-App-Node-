const getDetail = (res)=>{
    return{
        temp:`${res.current.temperature}°C`,
        forecast:`Atmosphere is ${res.current.weather_descriptions[0]}.Humidity is ${res.current.humidity}!! `,
        location:`${res.location.name},${res.location.region},${res.location.country}`
    }
}

module.exports = getDetail;