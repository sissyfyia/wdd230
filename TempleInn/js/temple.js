const requestURL ='https://sissyfyia.github.io/wdd230/TempleInn/json/temples.json';
const tempinfo = document.querySelector('.tempinfo');

fetch(requestURL)
  .then(function (response){
      if (!response.ok) {
      } else {
        return response.json();
      }
    })
      .then(function (jsonObject) {
      console.table(jsonObject);
      const temples = jsonObject['temples'];
      temples.forEach(displaycards);  // temporary checking for valid response and data parsing
  })

  function displaycards(info) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let picture = document.createElement('img');
    let h4 = document.createElement('h4');

    h2.innerHTML = `${info.name}`;
    h4.innerHTML = `${info.address}, ${info.phone}`

    picture.setAttribute('src', info.image);
    picture.setAttribute('alt', `Photo of ${info.name} Dedicated ${info.dedicated}`);
    picture.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(h4);
    card.appendChild(picture);

    cards.appendChild(card);



  }
 
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(h4);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }