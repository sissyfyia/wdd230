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
    let p1 = document.createElement('p1');
    let p2 = document.createElement('p2');

    h1.innerHTML = `${info.name}`;
    h2.innerHTML = `Address: ${info.address} <br> Phone: ${info.phone} <br> ${info.email}`;
    p1.innerHTML = `${info.announced} <br> ${info.gb} <br> ${info.dedic} <br> The closing dates are ${info.closed} <br> Sessions are ${info.sessions}`;
    p2.innerHTML = `${info.services}`;

    card.appendChild(h1);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2)

    templego.appendChild(card); 
  }
