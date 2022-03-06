
const requestURL ='https://sissyfyia.github.io/wdd230/chamber/data/data.json';
const busicards = document.querySelector('.busicards');

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
    bcards.forEach(displayCards);  // temporary checking for valid response and data parsing
  });
  
  function displayCards(bcards) {
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
    logo.setAttribute('alt', `${bcards.name}`);//
    logo.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(h4);
    //bcards.appendChild(logo);//
  
    // Add/append the existing HTML div with the cards class with the section(card)
    card.appendChild(busicards);
  }