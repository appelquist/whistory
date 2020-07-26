async function getStations() {
  const url =
    "https://opendata-download-metobs.smhi.se/api/version/latest/parameter/4.json";
  const response = await fetch(url);
  const data = await response.json();
  const stations = data.station.filter((station) => station.active === true);
  return stations;
}

async function getTemperatureData(station, days) {
  const url = `https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1/station/${station.key}/period/latest-months/data.json`;
  const response = await fetch(url);
  const data = await response.json();

  const epochValues = data.value;
  const timesAndValues = epochValues.map((value) => {
    const date = new Date(value.date);
    return { time: date, value: value.value };
  });
  const latestTimesAndValues = getLatestTimesAndValues(days, timesAndValues);
  const valuesByDay = groupBy(latestTimesAndValues, "day");
  const averagesByDay = getAverageTemperature(Object.values(valuesByDay));
  return averagesByDay;
}

function getLatestTimesAndValues(days, timesAndValues) {
  const currentDate = new Date();
  const firstTime = new Date(currentDate.setDate(currentDate.getDate() - days));
  firstTime.setHours(0);
  firstTime.setMinutes(0);
  firstTime.setSeconds(0);
  return timesAndValues
    .filter((val) => val.time.getTime() > firstTime)
    .map((val) => {
      let day = new Date(val.time);
      day.setHours(0);
      return { ...val, day: day };
    });
}

function groupBy(array, property) {
  return array.reduce((acc, obj) => {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

function getAverageTemperature(days) {
  return days.map((day) => {
    let sum = day.reduce((acc, curr) => {
      return parseFloat(acc) + parseFloat(curr.value);
    }, 0);;
    let average = ((sum / day.length).toFixed(1));
    let singleDay = day[0].time;
    singleDay = `${singleDay.getDate()}/${singleDay.getMonth() + 1}`
    return ({  x: singleDay , y: Number(average) });
  });
}

export { getStations, getTemperatureData };
