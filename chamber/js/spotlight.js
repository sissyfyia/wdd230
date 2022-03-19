const requestURL ='https://sissyfyia.github.io/wdd230/chamber/data/data.json';
const spotlights = document.querySelector('.spotlights');

fetch(requestURL)
    .then(function(response){
        if(!response.ok){
    } else {
        return response.json();
    }  
     })
     .then(function(jsonObject){
         console.table(jsonObject);
         const scards = jsonObject['scards'];
         scards.forEach(displayScards);
     })

    function displayScards(spots);
     let card = document.creatElement('section');
     let h2 = document.createElement('h2');
     let h4 = document.createElement('h4');

     h2.innerHTML = `${spots.name}`;
     h4.innerHTML = `${spots.address}, ${spots.phone}`;

     card.appendChild(h2);
     card.appendChild(h4);

     spotlights.appendChild(card);