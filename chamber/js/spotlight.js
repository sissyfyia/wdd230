const requestURL ='https://sissyfyia.github.io/wdd230/chamber/data/data.json';
const spotlights = document.querySelector('.spotlights');

fetch(requestURL)
  .then(function (response){
    if (!response.ok) {
    } else {
      return response.json();
    }
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const bcards = jsonObject['bcards'];
    bcards.forEach(displayScards);  // temporary checking for valid response and data parsing
  }) 

    function displayScards(spots){
     let card = document.createElement('section');
     let h2 = document.createElement('h2');
     let h4 = document.createElement('h4');

     h2.innerHTML = `${spots.name}`;
     h4.innerHTML = `<span>${spots.address}</span><span> ${spots.phone}</span>`;

     card.appendChild(h2);
     card.appendChild(h4);

     spotlights.appendChild(card);
    }