const gridBtn = document.querySelector(".gridBtn");
const listBtn = document.querySelector(".listBtn");

gridBtn.addEventListener("click", () => {
        bcard.innerHTML = ''; 
        directory.forEach(displayGridDirectory);

})

listBtn.addEventListener("click", () => {
    bcard.innerHTML = '';
    directory.forEach(displayListDirectory)
});
/*
function listView() {
  
}

*/