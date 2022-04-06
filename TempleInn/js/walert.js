
const apiURL= `https://api.openweathermap.org/data/2.5/onecall?lat=39&lon=-105&exclude=daily,hourly,minutely&units=imperial&appid=66df575ecb5b3b5511f996e4aaa99495`;


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  //console.log(jsObject);

  const alerts = document.querySelector('#alerts');

  alerts.textContent = jsObject.alerts.description;

  })