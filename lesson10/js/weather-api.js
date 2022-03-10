const apiURL = "http://api.openweathermap.org/geo/1.0/direct?q={Fairbanks}{99709},{1}&units={imperial}&limit={5}&appid={66df575ecb5b3b5511f996e4aaa99495};"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });