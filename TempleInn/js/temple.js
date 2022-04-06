const requestURL ='https://sissyfyia.github.io/wdd230/TempleInn/json/temples.json';
const templego = document.querySelector('.templego');

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
    temples.forEach(displaycards);
  })

  function displaycards(info) {
    let card = document.createElement('section');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');

    h1.innerHTML = `${info.name}`;
    h2.innerHTML = `${info.address}, ${info.phone}, ${info.email}`;
    p.innerHTML = `The ${info.name} was ${info.history}. Closing dates are ${info.closed}. Sessions are ${info.sessions} and services available are ${info.services}`;

    card.appendChild(h1);
    card.appendChild(h2);
    card.appendChild(p);

    templego.appendChild(card);
    
    return
  }
