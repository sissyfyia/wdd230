
const apiURL= `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=39&lon=104&appid=66df575ecb5b3b5511f996e4aaa99495`

const currentTemp = document.querySelector('#current-temp');
const weathericon = document.querySelector('#icon-src');
const caption = document.querySelector('figcaption');

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);


currentTemp.textContent = jsObject.main.temp.toFixed(0);
let imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
let imgalt = jsObject.weather[0].description;

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
//document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;


  });
