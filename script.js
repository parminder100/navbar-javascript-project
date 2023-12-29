const navbarToggleBtnElement = document.querySelector(".navbar-toggle-btn");
const mobileNavList = document.querySelector(".mobile-nav-list");
const barsIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-close");

navbarToggleBtnElement.addEventListener('click', function(){
    mobileNavList.classList.toggle("active");
    navbarToggleBtnElement.classList.toggle('rotate-btn')
    barsIcon.classList.toggle("active-bars-icon");
    closeIcon.classList.toggle("active-close-icon");
})