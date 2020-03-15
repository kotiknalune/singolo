// MENU ACTIVE COLOR
const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('colored'));
  event.target.classList.add('colored');
});

// ANCHOR LINK FIX
window.addEventListener('hashchange', function () {
  window.scrollTo(window.scrollX, window.scrollY - 90);
});

// iPHONE SCREEN ON/OFF 
function show(elem) {
  elem.nextElementSibling.classList.toggle('hide');
};

// SLIDER
const PREVIOUS = document.querySelector('.previous');
const NEXT = document.querySelector('.next');
let slider = document.getElementsByClassName('slider');


function slideChanger() {
  if(document.querySelector('.slider__slide1').matches('#shown')) {
    document.getElementById('shown').id = 'hidden';
  } else {
    document.getElementById('hidden').id = 'shown';
  }
};

function bgChanger() {
  if(document.querySelector('.showcase').matches('#red')) {
    document.getElementById('red').id = 'blue';
  } else {
    document.getElementById('blue').id = 'red';
  }
};

PREVIOUS.addEventListener('click', (e) => {
  bgChanger();
  slideChanger();
});

NEXT.addEventListener('click', (e) => {
  bgChanger();
  slideChanger();
});

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
const TAG_ALL = document.querySelector("#tags > span:nth-child(1)");
const TAG_WEB = document.querySelector("#tags > span:nth-child(2)");
const TAG_DESIGN = document.querySelector("#tags > span:nth-child(3)");
const TAG_ART = document.querySelector("#tags > span:nth-child(4)");

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
const BUTTON = document.querySelector("#button");
const FORM = document.querySelector("#form-submit");
const CLOSE_BUTTON = document.querySelector("#close-button");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const errorElement = document.querySelector('#error');

FORM.addEventListener('submit', (e) => {
  e.preventDefault(); 
  document.querySelector('#name').blur();
});

BUTTON.addEventListener('click', (e) => {
/*
  let messages = [];
  if(name.value === '' || name.value == null) {
    messages.push('Name is required');
  }
  if(email.value === '' || email.value == null) {
    messages.push('Email is required');
  }
  errorElement.innerText = messages.join(', '); 

*/

  if (document.getElementById('name').checkValidity() && document.getElementById('email').checkValidity()) {
    e.preventDefault();
    const subject = document.getElementById('subject').value.toString();
    const project = document.getElementById('text').value.toString();
    document.getElementById('message-title').innerText = 'The letter was sent';

    if (subject !== '') {
        document.getElementById('message-subject').innerText = 'Subject: ' + subject;
    }
    else { document.getElementById('message-subject').innerText = 'Without subject'; }

    if (project !== '') {
        document.getElementById('message-content').innerText = 'Description: ' + project;
    }
    else { document.getElementById('message-content').innerText = 'Without description'; }

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
  document.querySelector("form").reset();
};


CLOSE_BUTTON.addEventListener('click', () => {
  resetMessage();
});
