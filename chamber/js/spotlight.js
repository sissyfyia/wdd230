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
    const goldcards = bcards.filter(jsonObject => (jsonObject.membership === 'Gold'));
    goldcards.forEach(displayScards);
  });


  function displayScards(bcard) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h4 = document.createElement('h4');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.innerHTML = `${bcard.name}`;
    h4.innerHTML =`<span>${bcard.address} </span><br><span> ${bcard.phone} </span><br><span> ${bcard.website}</span>`;
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(h4);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    spotlights.appendChild(card);
  }
