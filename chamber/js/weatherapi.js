const apiURL= 'https://api.openweathermap.org/data/2.5/weather?lat=37&lon=-105&units=imperial&appid=66df575ecb5b3b5511f996e4aaa99495'

const currentTemp = document.querySelector('#current-temp');
const speed = document.querySelector('#speed');
const weathericon = document.querySelector('#icon-src');
const caption = document.querySelector('figcaption');
const windChill = document.querySelector('#windChill');

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);

speed.textContent = jsObject.wind.speed.toFixed(0);
currentTemp.textContent = jsObject.main.temp.toFixed(0);
let imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
let imgalt = jsObject.weather[0].description;

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
//document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;


windChill.textContent= jsObject.main.feels_like.toFixed(0);
//currentTemp.textContent = jsObject.main.temp.toFixed(0);

  });

function getChill(currentTemp, speed) {

    let chill= 35.74 + 0.6215 * currentTemp - 35.75 * (speed ** 0.16) + 0.46275 * currentTemp * (speed ** 0.16);
    chill = Math.floor(chill);
    //console.log(chill);

    return chill;
  
}

if (currentTemp <= 50 && speed >= 3) {
    let finalChill = getChill(currentTemp, speed);
    windChill.innerHTML = finalChill;
} else {
    let windChill = 'N/A';
}
