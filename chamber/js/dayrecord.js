function lastVisit() {

let today = Date.now();
let millisecondsToDays = 86400000;
let prior = localStorage.getItem('lastvisit');
let obj = Date.now(prior);

if (prior != '') {
    visit = ((today - obj) / millisecondsToDays).toFixed(0);
}else {
    visit = today + " This is your first visit. Welcome!"
}

document.getElementById("lastv").innerHTML = visit + " days ago. Welcome!";
localStorage.setItem('lastvisit', today);
}
return lastVisit();