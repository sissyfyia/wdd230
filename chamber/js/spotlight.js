const requestURL ='https://sissyfyia.github.io/wdd230/chamber/data/data.json';
const spotlights = document.querySelector('.spotlights');

fetch(requestURL)
    .then(function(response){
        if(!response.ok){
    } else {
        return response.json();
    }  
     })
     .then(function(JsonObject))