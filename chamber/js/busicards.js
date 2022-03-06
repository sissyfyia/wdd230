
const requestURL ='https://sissyfyiawdd30.github.io/chamber/data/data.json';
const cards = document.querySelector('.bcards');

fetch(requestURL)
  .then(function (response){
    if (!response.ok) {
    } else {
      return response.json();
    }
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const cards = jsonObject['busicards'];
    prophets.forEach(displayCards);  // temporary checking for valid response and data parsing
  });
  
  function displayCards(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let h4 = document.createElement('h4');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.innerHTML = `$${bcards.name}`;
    h4.innerHTML =`<span>${bcards.address} </span><br><span> ${bcards.website}</span>`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', bcards.imageurl);
    //logo.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} ${prophet.order} Latter-day President: ${prophet.order}`);//
    logo.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    bcards.appendChild(h2);
    bcards.appendChild(h4);
    bcards.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    bcards.appendChild(bcards);
  }