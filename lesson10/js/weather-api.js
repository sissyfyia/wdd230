const apiURL = "http://api.openweathermap.org/geo/1.0/direct?q=Fairbanks,99703&units=imperial&appid=16dbfa7d56b9b24bac70020f1713a9ad"


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    
  const currentTemp = document.querySelector('#current-temp').textContent = jsObject.main.temp;
  const weathericon = document.querySelector('icon-src');

  currentTemp.textContent=jsObject.main.temp.toFixed(0);

  let imgsrc=`https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  let imgalt=jsObject.weather[0].description;
  let capimgalt='';
  for(let i = 0; i < imgalt.length; i++)
  if(chartAt(i) === 0) {
    capimgalt += imgalt.charAt(i).toUpperCase();
  } else {
  }
  }
  });


const iconsrc= 
const desc = jsObject.weather[0].description;

    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', icon-src);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
