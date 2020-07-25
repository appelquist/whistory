

async function getStations() {
    const url = "https://opendata-download-metobs.smhi.se/api/version/latest/parameter/4.json";
    const response =  await fetch(url);
    const data = await response.json();
    const stations = data.station.filter(station => (
        station.active === true
    ));
    return stations;
}

async function getTemperatureData(station) {
    console.log(station.key);
    const url = `https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1/station/${station.key}/period/latest-months/data.json`
    const response = await fetch(url);
    const data = await response.json();

    const epochValues = data.value;
    const timesAndValues = epochValues.map(value => {
        const date = new Date(value.date);
        return {time: date, value: value.value}
    })
    console.log(getLatestTimesAndValues(7, timesAndValues));
}

function getLatestTimesAndValues(days, timesAndValues) {
    const currentDate = new Date();
    const firstTime = new Date(currentDate.setDate(currentDate.getDate() - days));
    firstTime.setHours(0);
    firstTime.setMinutes(0);
    firstTime.setSeconds(0);
    return timesAndValues.filter(val => val.time.getTime() > firstTime);

}


export { getStations, getTemperatureData };
