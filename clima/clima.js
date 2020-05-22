const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7501b6ef3a17927017d229d2c0b6138c&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}