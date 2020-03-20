// MENU ACTIVE COLOR on CLICK
const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('colored'));
  event.target.classList.add('colored');
});

// MENU ACTIVE COLOR on SCROLL

window.onscroll = function() {
  if (window.pageYOffset < 570) {
    document.querySelector('#menu > li:nth-child(1) > a').classList.add('colored');
  } else {
    document.querySelector('#menu > li:nth-child(1) > a').classList.remove('colored');
  }
  if (window.pageYOffset < 1080 && window.pageYOffset > 570) {
    document.querySelector('#menu > li:nth-child(2) > a').classList.add('colored');
  } else {
    document.querySelector('#menu > li:nth-child(2) > a').classList.remove('colored');
  }
  if (window.pageYOffset < 1970 && window.pageYOffset > 1080) {
    document.querySelector('#menu > li:nth-child(3) > a').classList.add('colored');
  } else {
    document.querySelector('#menu > li:nth-child(3) > a').classList.remove('colored');
  }
  if (window.pageYOffset < 2600 && window.pageYOffset > 1970) {
    document.querySelector('#menu > li:nth-child(4) > a').classList.add('colored');
  } else {
    document.querySelector('#menu > li:nth-child(4) > a').classList.remove('colored');
  }
  if (window.pageYOffset > 2600 ) {
    document.querySelector('#menu > li:nth-child(5) > a').classList.add('colored');
  } else {
    document.querySelector('#menu > li:nth-child(5) > a').classList.remove('colored');
  }
};

// ANCHOR LINKS
const navLinks = document.querySelectorAll(
  'nav a'
);

Array.from(navLinks).forEach(navLink => {
  const href = navLink.getAttribute('href');
  const section = document.querySelector(href);
  const offset = 50 + 20; // nav and offset
  
  navLink.onclick = e => {
    // get body position
    const bodyRect = document.body.getBoundingClientRect().top; 
    // get section position relative
    const sectionRect = section.getBoundingClientRect().top; 
    // subtract the section from body
    const sectionPosition = sectionRect - bodyRect; 
    // subtract offset
    const offsetPosition = sectionPosition - offset; 
    
    e.preventDefault();
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
})

// To Top
document.querySelector('#top').onclick = e => {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// iPHONE SCREEN ON/OFF 
function show(elem) {
  elem.nextElementSibling.classList.toggle('hide');
};

// SLIDER
const PREVIOUS = document.getElementById('previous');
const NEXT = document.getElementById('next');
let slider = document.getElementById('slider');

//PORTFOLIO TAGS
const TAG_MENU = document.getElementById('tags');

TAG_MENU.addEventListener('click', (event) => {
  TAG_MENU.querySelectorAll('span').forEach(el => el.classList.remove('tag_selected'));
  event.target.classList.add('tag_selected');
});

// PORTFOLIO BORDER
const PORTFOLIO = document.getElementById('blocks');

PORTFOLIO.addEventListener('click', (event) => {
  PORTFOLIO.querySelectorAll('.blocks__block').forEach(el => el.classList.remove('bordered'));
  event.target.classList.add('bordered');
});

//PORTFOLIO BLOCK ORDER
const TAG_ALL = document.querySelector('#tags > span:nth-child(1)');
const TAG_WEB = document.querySelector('#tags > span:nth-child(2)');
const TAG_DESIGN = document.querySelector('#tags > span:nth-child(3)');
const TAG_ART = document.querySelector('#tags > span:nth-child(4)');

TAG_ALL.addEventListener('click', (event) => {
  document.querySelectorAll('.o1').forEach(e => e.classList.remove('o1'));
  console.log('test passed');
});

TAG_WEB.addEventListener('click', (event) => {
  document.querySelectorAll('.o1').forEach(e => e.classList.remove('o1'));
  document.querySelectorAll('.web').forEach(e => e.classList.add('o1'));
});

TAG_DESIGN.addEventListener('click', (event) => {
  document.querySelectorAll('.o1').forEach(e => e.classList.remove('o1'));
  document.querySelectorAll('.design').forEach(e => e.classList.add('o1'));
});

TAG_ART.addEventListener('click', (event) => {
  document.querySelectorAll('.o1').forEach(e => e.classList.remove('o1'));
  document.querySelectorAll('.art').forEach(e => e.classList.add('o1'));
});

// FORM SUBMIT
const BUTTON = document.querySelector('#button');
const FORM = document.querySelector('#form-submit');
const CLOSE_BUTTON = document.querySelector('#close-button');

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const errorElement = document.querySelector('#error');

FORM.addEventListener('submit', (e) => {
  e.preventDefault(); 
  document.querySelector('#name').blur();
});

BUTTON.addEventListener('click', (e) => {

  if (document.getElementById('name').checkValidity() && document.getElementById('email').checkValidity()) {
    e.preventDefault();
    const subject = document.getElementById('subject').value.toString();
    const project = document.getElementById('text').value.toString();
    document.getElementById('message-title').innerText = 'The letter was sent';

    if (subject !== '') {
      document.getElementById('message-subject').innerText = 'Subject: ' + subject;
    } else { 
      document.getElementById('message-subject').innerText = 'Without subject'; 
    }
    if (project !== '') {
      document.getElementById('message-content').innerText = 'Description: ' + project;
    } else { 
      document.getElementById('message-content').innerText = 'Without description'; 
    }
    document.getElementById('message-block').classList.remove('hidden');
    document.getElementById('message').classList.remove('hidden');
  }
});

function resetMessage() {
  document.getElementById('message-title').innerText = '';
  document.getElementById('message-subject').innerText = '';
  document.getElementById('message-content').innerText = '';
  document.getElementById('message-block').classList.add('hidden');
  document.getElementById('message').classList.add('hidden');
  document.querySelector('form').reset();
};

CLOSE_BUTTON.addEventListener('click', () => {
  resetMessage();
});
