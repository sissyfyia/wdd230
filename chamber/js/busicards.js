
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
    bcards.forEach(displayBcards);  // temporary checking for valid response and data parsing
    
    const gridBtn = document.querySelector(".gridBtn");
    const listBtn = document.querySelector(".listBtn");

    gridBtn.addEventListener("click", () => {
       bcards.innerHTML = ''; 
       bcards.forEach(displayBcards);
  });

    listBtn.addEventListener("click", () => {
       bcards.innerHTML = '';
       bcards.forEach(displayLcards);
  });
  
  function displayBcards(bcard) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let h4 = document.createElement('h4');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.innerHTML = `${bcard.name}`;
    h4.innerHTML =`<span>${bcard.address} </span><br><span> ${bcard.phone} </span><br><span> ${bcard.website}</span>`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', bcard.imageurl);
    logo.setAttribute('alt', `${bcard.name}`);
    logo.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(h4);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    busicards.appendChild(card);
  }

  function displayLcards(bcard) {
    let card = document.createElement('section');
    let line= document.createElement('p');

    line.innerHTML = `${bcard.name}, ${bcard.phone}, ${bcard.website}`;

    card.appendChild(line);

    //line.appendChild('p1');
    };
})
