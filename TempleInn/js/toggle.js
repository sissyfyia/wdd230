function toggleMenu() {
    document.getElementById("navBar").classList.toggle("open");
    document.getElementById("dropBtn").classList.toggle("open");
}

const x = document.getElementById('dropBtn');
x.onclick = toggleMenu;
