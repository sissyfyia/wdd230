function lastVisit() {

    let today = new Date();
    let millisecondsToDays = 86400000;
    let prior = localStorage.getItem('lastvisit');
    let obj = new Date(prior);
    console.log(obj);

    if (!prior) {
        localStorage.setItem('lastvisit', today);
        let visit = " This is your first visit. Welcome to Aberdeen Chamber of Commerce!"
        document.querySelector(".lastv").innerHTML = visit;
        console.log(visit);

    } else {
        let visit = ((today - obj) / millisecondsToDays).toFixed(0) + " days ago. Welcome Back!";
        document.querySelector(".lastv").innerHTML = visit;
        console.log(visit);
    }


    localStorage.setItem('lastvisit', today);
}
lastVisit();