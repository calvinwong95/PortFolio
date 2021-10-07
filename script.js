
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTdTkrP2ucckgEzjDvMmmByKyYO5PecI0",
    authDomain: "contact-details---portfolio.firebaseapp.com",
    databaseURL: "https://contact-details---portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "contact-details---portfolio",
    storageBucket: "contact-details---portfolio.appspot.com",
    messagingSenderId: "1054679086013",
    appId: "1:1054679086013:web:a92698029b15c97c2998d4"
  };

  // Initialize Firebase//
firebase.initializeApp(firebaseConfig);

//set variables//
function save() {
    var database = firebase.database();
    var contactName = document.getElementById('contact-name').value;
    var contactMail = document.getElementById('contact-email').value;
    var contactMsg = document.getElementById('contact-message').value;

    database.ref('users/' + contactName).set({
        contactName: contactName,
        contactMail: contactMail,
        contactMsg: contactMsg
    });
}






var hamburgerMenu = document.querySelector(".hamburger-menu");
var navbarList = document.getElementById("navbar-list");
var submitBtn = document.getElementById('submitBtn');
var skillLevel = document.querySelectorAll('.skill-level');
var wheel = document.getElementById('wheel');
var firstMsg = document.getElementById('first-message')
var secondMsg = document.getElementById('second-message')
var thirdMsg = document.getElementById('third-message')
var skills = document.getElementById('skills');
var projects = document.getElementById('projects');
var getintouch = document.getElementById('getintouch');
var homepageBtn = document.getElementById('homepage-button');
var contactmeBtn = document.getElementById('contact-me-btn');
var buttonHolderAboutMe = document.getElementById('button-holder-aboutme');
var i = 0;
let openBurger = false;
let spinning = false;

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
    }, 2500);
}

function spin() {

    if (spinning == false) {
        wheel.classList.add('spin');
        spinning = true;
        firstMsg.style.display='none';
        secondMsg.classList.add('fadeInOut');

        setTimeout(function() {
            secondMsg.classList.remove('fadeInOut');
            thirdMsg.classList.add('fadeInOut');
            skills.style.display="flex";
            projects.style.display="flex";
            getintouch.style.display='flex';
            wheel.classList.add('spin-faster');
            navbarList.style.opacity= '1';
            contactmeBtn.style.display='flex';
            homepageBtn.style.justifyContent='space-between';
            buttonHolderAboutMe.style.opacity='1';
        },3000)
    } else {
        wheel.classList.remove('spin-faster');
        wheel.classList.remove('spin');
        firstMsg.style.display='block';
        thirdMsg.classList.remove('fadeInOut');
        skills.style.display='none';
            projects.style.display='none';
            getintouch.style.display='none';
        spinning = false;
    }
    


}