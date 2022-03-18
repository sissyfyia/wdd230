function lastVisit() {

let today = new Date();
let millisecondsToDays = 86400000;
let prior = localStorage.getItem('lastvisit');
let obj = new Date(prior);

if (!prior) {
    localStorage.setItem('lastvisit', today);
    let visit = "This is your first visit. Welcome!"
    document.querySelector('.lastV').innerHTML = visit;

} else {
    let visit = ((today - obj) / millisecondsToDays).toFixed(0) + 'days ago.';
    document.querySelector('lastV').innerHTML = visit;
}   

localStorage.setItem("lastVisit", today);

}
lastVisit();