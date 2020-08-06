async function getStations() {
  const url =
    "https://opendata-download-metobs.smhi.se/api/version/latest/parameter/4.json";
  const response = await fetch(url);
  const data = await response.json();
  const stations = data.station.filter((station) => station.active === true);
  return stations;
}

async function getWeatherData(station, days) {
  const temperatureUrl = `https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1/station/${station.key}/period/latest-months/data.json`;
  const pressureUrl = `https://opendata-download-metobs.smhi.se/api/version/latest/parameter/9/station/${station.key}/period/latest-months/data.json`;
  const velocityUrl = `https://opendata-download-metobs.smhi.se/api/version/latest/parameter/4/station/${station.key}/period/latest-months/data.json`;
  const directionUrl = `https://opendata-download-metobs.smhi.se/api/version/latest/parameter/3/station/${station.key}/period/latest-months/data.json`;

  const temperatureResponse = await fetch(temperatureUrl);
  const pressureResponse = await fetch(pressureUrl);
  const velocityResponse = await fetch(velocityUrl);
  const directionResponse = await fetch(directionUrl);

  const temperatureData = await temperatureResponse.json();
  const pressureData = await pressureResponse.json();
  const velocityData = await velocityResponse.json();
  const directionData = await directionResponse.json();

  const temperature = getAveragesPerDayAndGroup(temperatureData, days);
  const pressure = getAveragesPerDayAndGroup(pressureData, days);
  const velocity = getAveragesPerDayAndGroup(velocityData, days);
  const direction = getAveragesPerDayAndGroup(directionData, days);

  return temperature.map((val, i) => ({
    date: val.date,
    temperature: val.value,
    pressure: pressure[i].value,
    velocity: velocity[i].value,
    direction: direction[i].value,
    hours: getHoursData(val, pressure[i], velocity[i], direction[i]),
  }));
}

function getHoursData(temperature, pressure, velocity, direction) {
  return temperature.hours.map((val, i) => ({
    hour: val.time,
    temperature: val.value,
    pressure: pressure.hours[i].value,
    velocity: velocity.hours[i].value,
    direction: direction.hours[i].value,
  }));
}

function getAveragesPerDayAndGroup(data, days) {
  const values = data.value;
  const timesAndValues = values.map((value) => {
    const date = new Date(value.date);
    return { time: date, value: value.value };
  });
  const latestTimesAndValues = getLatestTimesAndValues(days, timesAndValues);
  const valuesByDay = groupBy(latestTimesAndValues, "date");
  const averagesByDay = getAverageValue(Object.values(valuesByDay));
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
      return { ...val, date: day };
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

function getAverageValue(days) {
  return days.map((day) => {
    let sum = day.reduce((acc, curr) => {
      return parseFloat(acc) + parseFloat(curr.value);
    }, 0);
    let average = (sum / day.length).toFixed(1);
    let singleDay = new Date(day[0].time);
    singleDay.setHours(0);
    return { date: singleDay, value: Number(average), hours: day };
  });
}

export { getStations, getWeatherData };
