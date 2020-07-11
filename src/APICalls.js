const url = "https://opendata-download-metobs.smhi.se/api/version/latest/parameter/4.json";

async function getStations() {
    let response =  await fetch(url);
    let data = await response.json();
    let stations = data.station.filter(station => (
        station.active === true
    ));
    return stations;
}

async function getTemperatureData(station) {
    
}

export { getStations };