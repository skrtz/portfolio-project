var bioLink = document.getElementById('about-link');
var workLink = document.getElementById('work-link');
var contactLink = document.getElementById('contact-link');

var homePage = document.getElementById('home');
var bioPage = document.getElementById('about-me');
var workPage = document.getElementById('my-work')
var contactPage = document.getElementById('contact-info');


    bioLink.addEventListener('click', function(){
        bioPage.style.display = 'flex';
        // homePage.style.display = 'none';
        workPage.style.display = 'none';
        contactPage.style.display = 'none';
    });
    workLink.addEventListener('click', function(){
        workPage.style.display = 'flex';
        homePage.style.display = 'none';
        bioPage.style.display = 'none';
        contactPage.style.display = 'none';
    });
    contactLink.addEventListener('click', function(){
        contactPage.style.display = 'flex';
        homePage.style.display = 'none';
        workPage.style.display = 'none';
        bioPage.style.display = 'none';
    });


    var box = document.getElementById('box');
    box.addEventListener('click', function(){
        box.style.transform = 'rotateX(180deg) translate(9px, 6px)';
    })
    