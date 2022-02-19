const todayDisplay = document.querySelector('today');
const visitDisplay = document.querySelector('lastvisit');

let lastVisit = number(window.localStorage.getItem('visits-ls'));

if(lastVisit == 0) {
    visitDisplay.textContent = lastVisit;
} else {
    visitDisplay.textContent = Date.now-lastVisit;
}

lastVisit = Date.now;

localStorage.setItem('lastvisit-ls', 'lastVisit');

todayDisplay.textContent = Date.now();