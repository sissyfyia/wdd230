function toggleMenu() {
    document.getElementById("navBar").classList.toggle("open");
    document.getElementById("hamBtn").classList.toggle("open");
}

const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;
