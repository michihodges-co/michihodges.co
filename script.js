console.log('js working');

function clickOnce() {
    console.log('The page was clicked');
}
document.addEventListener('click', clickOnce, {once: true});

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
logo.classList.add('h1--logo');

// A
const homeLink = document.createElement('a');
logo.appendChild(homeLink);
homeLink.classList.add('a--logo');
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
const pLandingIntro = document.createTextNode('Hi there, I\'m a frontend javascript web developer based near Stuttgart. I like making interactive things with code.');
pLanding.appendChild(pLandingIntro);

// H3 GITHUB
const h3GitHub = document.createElement('h3');
headerLanding.appendChild(h3GitHub);
h3GitHub.classList.add('h3--landing');

// A GITHUB
const gitHubLink = document.createElement('a');
h3GitHub.appendChild(gitHubLink);
gitHubLink.classList.add('a--social');
gitHubLink.setAttribute('href', 'https://github.com/michihodges');
const gitHub = document.createTextNode('GitHub');
gitHubLink.appendChild(gitHub);

// H3 LINKEDIN
const h3LinkedIn = document.createElement('h3');
headerLanding.appendChild(h3LinkedIn);
h3LinkedIn.classList.add('h3--landing');

// A LINKEDIN
const linkedInLink = document.createElement('a');
h3LinkedIn.appendChild(linkedInLink);
linkedInLink.classList.add('a--social');
linkedInLink.setAttribute('href', 'https://www.linkedin.com/in/michihodges/');
const linkedIn = document.createTextNode('LinkedIn');
linkedInLink.appendChild(linkedIn);

// H3 TWITTER
const h3Twitter = document.createElement('h3');
headerLanding.appendChild(h3Twitter);
h3Twitter.classList.add('h3--landing');

// A TWITTER
const twitterLink = document.createElement('a');
h3Twitter.appendChild(twitterLink);
twitterLink.classList.add('a--social');
twitterLink.setAttribute('href', 'https://twitter.com/michihodges');
const twitter = document.createTextNode('Twitter');
twitterLink.appendChild(twitter);

/*
const h3CodePen = document.createElement('h3');
headerLanding.appendChild(h3CodePen);
h3CodePen.classList.add('h2--landing');
const h3CodePenLink = document.createTextNode('CodePen');
h3CodePen.appendChild(h3CodePenLink);

const h3Behance = document.createElement('h3');
headerLanding.appendChild(h3Behance);
h3Behance.classList.add('h2--landing');
const h3BehanceLink = document.createTextNode('Behance');
h3Behance.appendChild(h3BehanceLink);

const h3Medium = document.createElement('h3');
headerLanding.appendChild(h3Medium);
h3Medium.classList.add('h2--landing');
const h3MediumLink = document.createTextNode('Medium');
h3Medium.appendChild(h3MediumLink);

const h3StackOverflow = document.createElement('h3');
headerLanding.appendChild(h3StackOverflow);
h3StackOverflow.classList.add('h2--landing');
const h3StackOverflowLink = document.createTextNode('Stack Overflow');
h3StackOverflow.appendChild(h3StackOverflowLink);

const h3Instagram = document.createElement('h3');
headerLanding.appendChild(h3Instagram);
h3Instagram.classList.add('h2--landing');
const h3InstagramLink = document.createTextNode('Instagram');
h3Instagram.appendChild(h3InstagramLink);
*/

// FOOTER ////
const footerGlobal = document.createElement('footer');
bodyGlobal.appendChild(footerGlobal);
footerGlobal.classList.add('footer--global');

// SPAN
const copyright = document.createElement('span');
footerGlobal.appendChild(copyright);
copyright.classList.add('copyright');
const copyrightContent = document.createTextNode('michihodges © 2022');
copyright.appendChild(copyrightContent);
