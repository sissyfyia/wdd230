
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let d = current_date;
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
document.getElementById("current_date").innerHTML = month + "/" + day + "/" + year;

//const d = new Date();
//let month = months[d.getMonth()];

//document.getElementById("#today").innerHTML = month;