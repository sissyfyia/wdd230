const bannerDate = new Date()
const bannerDay = bannerDate.getDay();

let banners = document.querySelector(".banner");

if (bannerDay === 1 || bannerDay === 2) {
    banners.classList.toggle("show");
} else {
    banners.remove();
}

