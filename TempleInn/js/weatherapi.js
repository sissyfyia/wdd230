
const apiURL= `https://api.openweathermap.org/data/2.5/onecall?lat=39&lon=-105&exclude=minutely&units=imperial&appid=66df575ecb5b3b5511f996e4aaa99495`;


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);

  const currentTemp = document.querySelector('#current-temp');
  const weathericon = document.querySelector('#weathericon');
  const humid = document.querySelector('#humidity');
  const desc = document.querySelector('#desc');

  currentTemp.textContent = jsObject.current.temp.toFixed(0);
 // let imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
 // let imgalt = jsObject.weather[0].description;

  currentTemp.textContent = jsObject.current.temp.toFixed(0);
 // weathericon.setAttribute('src', imgsrc);
  //weathericon.setAttribute('alt', imgalt);
  desc.textContent = jsObject.current.weather[0].description;
  humid.textContent = jsObject.current.humidity.toFixed(0);

  })