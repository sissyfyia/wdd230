const apiURL= 'https://api.openweathermap.org/data/2.5/weather?lat=37&lon=-105&units=imperial&appid=66df575ecb5b3b5511f996e4aaa99495'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);
    
const currentTemp = document.querySelector('#current-temp');
const weathericon = document.querySelector('#icon-src');
const caption = document.querySelector('figcaption');

currentTemp.textContent = jsObject.main.temp.toFixed(0);
let imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
let imgalt = jsObject.weather[0].description;

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
//document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;

const speed = document.querySelector('#speed');
const windChill = document.querySelector("#windChill");

speed.textContent = jsObject.wind.speed.toFixed(0);
windChill.textContent= jsObject.main.feels_like.toFixed(0);
//currentTemp.textContent = jsObject.main.temp.toFixed(0);

//function getChill(temperature, speed) {

    //let chill= 35.74 + 0.6215 * temperature - 35.75 * (speed ** 0.16) + 0.46275 * temperature * (speed ** 0.16);
    //chill = Math.floor(chill);
    //console.log(chill);

    //return chill;
  
//}

//if (temperature <= 50 && speed.innerHTML >= 3) {
  //  let finalChill = getChill(temperature, speed);
  //  windChill.innerHTML = finalChill;
//} else {
//    let windChill = 'N/A';
//}
});