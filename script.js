console.log("js working");

// BODY ////
const bodyGlobal = document.querySelector('body');
bodyGlobal.classList.add('body--global');


// NAV ////
const navbar = document.createElement('nav');
bodyGlobal.appendChild(navbar);
navbar.classList.add('nav--global');

// H1
const logo = document.createElement('h1');
navbar.appendChild(logo);
logo.classList.add('h1--global');

// A
const homeLink = document.createElement('a');
logo.appendChild(homeLink);
homeLink.classList.add('a--global');
homeLink.setAttribute('href', 'https://michihodges.co/');
const michihodges = document.createTextNode('michihodges ');
homeLink.appendChild(michihodges);

// SPAN
const peekABoo = document.createElement('span');
homeLink.appendChild(peekABoo);
peekABoo.classList.add('peek-a-boo');
const hidden = document.createTextNode('| Frontend JavaScript Web Developer');
peekABoo.appendChild(hidden);


// HEADER ////
const headerLanding = document.createElement('header');
bodyGlobal.appendChild(headerLanding);
headerLanding.classList.add('header--landing');

// H2
const h2Landing = document.createElement('h2');
headerLanding.appendChild(h2Landing);
h2Landing.classList.add('h2--landing');
const h2LandingName = document.createTextNode('Michael Hodges');
h2Landing.appendChild(h2LandingName);
const brGlobal = document.createElement('br');
h2Landing.appendChild(brGlobal);
const h2LandingTitle = document.createTextNode('Frontend JavaScript Web Developer');
h2Landing.appendChild(h2LandingTitle);

// P
const pLanding = document.createElement('p');
headerLanding.appendChild(pLanding);
pLanding.classList.add('p--landing');
const pLandingIntro = document.createTextNode('I like to tinker about with frontend code on a cosy farm in the Brecon Beacons listening to ambient music.');
pLanding.appendChild(pLandingIntro);


// FOOTER ////
const footerGlobal = document.createElement('footer');
bodyGlobal.appendChild(footerGlobal);
footerGlobal.classList.add('footer--global');

// SPAN
const copyright = document.createElement('span');
footerGlobal.appendChild(copyright);
copyright.classList.add('copyright');
const copyrightContent = document.createTextNode('michihodges © 2021');
copyright.appendChild(copyrightContent);
