// TEST ////
console.log('js working');

function clickOnce() {
    console.log('The page was clicked');
}
document.addEventListener('click', clickOnce, {once: true});


// DYNAMIC YEAR ////
let year = new Date().getFullYear();

// FOOTER
const footerGlobal = document.querySelector('.footer--global');

// SPAN
const currentYear = document.querySelector('#currentYear');
const insertYear = document.createTextNode(year);
currentYear.appendChild(insertYear);


// SET AUTOMATIC REFRESH ////
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
    document.querySelector('.header--global').style.backgroundColor = '#677a81';
    document.querySelector('.main--landing').style.backgroundColor = '#677a81';
} else if (hourNow >= 9) {
    document.querySelector('.header--global').style.backgroundColor = '#98A67B';
    document.querySelector('.main--landing').style.backgroundColor = '#98A67B';
} else if (hourNow >= 1) {
    document.querySelector('.header--global').style.backgroundColor = '#677a81';
    document.querySelector('.main--landing').style.backgroundColor = '#677a81';
} else if (hourNow >= 0) {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.h1--name').style.color = '#eee';
    document.querySelector('.a--name').style.color = '#eee';
    document.querySelector('.a--name:visited').style.color = '#eee';
} else {
    document.querySelector('body').style.backgroundColor = 'orange';
}
