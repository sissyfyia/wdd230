const requestURL ='https://sissyfyia.github.io/wdd230/TempleInn/json/temples.json';
let templego = document.querySelector('.templego');

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
    temples.forEach(display);
  });

  function display(info) {
    let card = document.createElement('section');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');

    h1.innerHTML = `${info.name}`;
    h2.innerHTML = `Address: ${info.address} <br> Phone: ${info.phone} <br> ${info.email}`;
    p.innerHTML = `${info.announced}. <br> ${info.gb} <br> ${info.dedic} <br> Closing dates are ${info.closed}. <br> Sessions are ${info.sessions} and services available are ${info.services}`;

    card.appendChild(h1);
    card.appendChild(h2);
    card.appendChild(p);

    templego.appendChild(card); 
  }
