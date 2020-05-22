const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '129d16f7d5msh03eb581fd2ae9eap129636jsnfb5f389377ab' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${ dir }`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lng = data.lon;
    const lat = data.lat;

    return {
        direccion,
        lat,
        lng
    }


}


module.exports = {
    getLugarLatLng
}