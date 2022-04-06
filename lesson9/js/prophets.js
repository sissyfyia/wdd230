
const requestURL ='https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
var cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response){
    if (!response.ok) {
    } else {
      return response.json();
    }
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);  // temporary checking for valid response and data parsing
  });
  
  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let h4 = document.createElement('h4');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
    h4.innerHTML =`<span>Birthplace: ${prophet.birthdate} </span><br><span> Birthdate: ${prophet.birthplace}</span>`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} ${prophet.order} Latter-day President: ${prophet.order}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(h4);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }