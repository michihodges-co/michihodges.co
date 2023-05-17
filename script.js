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
const michihodges = document.createTextNode('Michael Hodges ');
homeLink.appendChild(michihodges);

// SPAN
const peekABoo = document.createElement('span');
homeLink.appendChild(peekABoo);
peekABoo.classList.add('peek-a-boo');
const hidden = document.createTextNode('| Frontend Developer');
peekABoo.appendChild(hidden);


// HEADER ////
const headerLanding = document.createElement('header');
bodyGlobal.appendChild(headerLanding);
headerLanding.classList.add('header--landing');

// P
const pLanding = document.createElement('p');
headerLanding.appendChild(pLanding);
pLanding.classList.add('p--landing');
const pLandingIntro = document.createTextNode('Hi there, I like making interactive things with code.');
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

// FOOTER ////
const footerGlobal = document.createElement('footer');
bodyGlobal.appendChild(footerGlobal);
footerGlobal.classList.add('footer--global');

// DYNAMIC YEAR
let year = new Date().getFullYear();
let date = `© ${year} Michael Hodges`;

// SPAN
const copyright = document.createElement('span');
footerGlobal.appendChild(copyright);
copyright.classList.add('copyright');
const copyrightContent = document.createTextNode(date);
copyright.appendChild(copyrightContent);

// SET AUTOMATIC REFRESH //
function refreshAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();

    if(now.getHours() > hours ||
       (now.getHours() == hours && now.getMinutes() > minutes) ||
        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
        console.log('refresh successful');
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
}

refreshAt(0,0,0); // refresh page at 00:00am
refreshAt(1,0,0); // refresh page at 01:00am
// refreshAt(6,0,0); // refresh page at 06:00am
refreshAt(9,0,0); // refresh page at 09:00am
// refreshAt(12,0,0); // refresh page at 12:00pm
refreshAt(18,0,0); // refresh page at 18:00pm
// refreshAt(21,0,0); // refresh page at 21:00pm

let today = new Date();
let hourNow = today.getHours();

if (hourNow >= 18) {
    document.querySelector('.nav--global').style.backgroundColor = '#677a81';
    document.querySelector('.header--landing').style.backgroundColor = '#677a81';
} else if (hourNow >= 9) {
    document.querySelector('.nav--global').style.backgroundColor = '#98A67B';
    document.querySelector('.header--landing').style.backgroundColor = '#98A67B';
} else if (hourNow >= 1) {
    document.querySelector('.nav--global').style.backgroundColor = '#677a81';
    document.querySelector('.header--landing').style.backgroundColor = '#677a81';
} else if (hourNow >= 0) {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.h1--logo').style.color = '#eee';
    document.querySelector('.a--logo').style.color = '#eee';
    document.querySelector('.a--logo:visited').style.color = '#eee';
} else {
    document.querySelector('body').style.backgroundColor = 'orange';
}
