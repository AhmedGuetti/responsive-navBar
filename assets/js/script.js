
const menu = document.querySelector(".menu");
const navBar = document.querySelector(".navBar");
menu.addEventListener('click', function(){
    // Make responsive menu button moving
    this.classList.toggle("is-active");
    //Make nav bar move forward
    navBar.classList.toggle("active");
});



