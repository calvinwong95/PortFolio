var hamburgerMenu = document.querySelector(".hamburger-menu");
var navbarList = document.getElementById("navbar-list");
var submitBtn = document.getElementById('submitBtn');
var skillLevel = document.querySelectorAll('.skill-level');
var i = 0;
let openBurger = false;

hamburgerMenu.addEventListener('click' ,() =>{
    if (!openBurger) {
        hamburgerMenu.classList.add('open');
        navbarList.classList.add('appear');
        openBurger = true;
        return;
    } else {
        hamburgerMenu.classList.remove('open');
        navbarList.classList.remove('appear');
        openBurger = false;
        return;
    }

    

})

function messageSent() {
    alert("Message has been sent!");
}

function closeMenu() {
    if (openBurger == true) {
        hamburgerMenu.classList.remove('open');
        navbarList.classList.remove('appear');
        openBurger = false;
    }
}

function fillUp() {

    skillLevel[0].classList.add('skill-animationHTML');
    skillLevel[1].classList.add('skill-animationCSS');
    skillLevel[2].classList.add('skill-animationJS');

    setTimeout(function() {
        skillLevel[0].classList.remove('skill-animationHTML');
        skillLevel[1].classList.remove('skill-animationCSS');
        skillLevel[2].classList.remove('skill-animationJS');
    }, 3000);
}