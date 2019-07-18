const axios = require('axios');


const getClima = async (lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=8a5bfb74ffc807d07e02f1265f2e0a50`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}
