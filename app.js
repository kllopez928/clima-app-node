const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccionde la ciudad para obtener el clima',
        demand: true
    }

}).argv;




const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion} es de ${ temp}.`
    } catch (e) {
        return `No se puedo determinar el clima de ${ direccion }`
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);