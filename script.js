// change nav color on click
const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

//change nav color on scroll
document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const currentPosition = window.scrollY;
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.menu__item a');

    sections.forEach( segment => {
        if(segment.offsetTop - 120 <= currentPosition && 
          (segment.offsetTop + segment.offsetHeight - 100) > currentPosition) {
            links.forEach( link => {
                link.classList.remove('active');
                if(segment.getAttribute('id') == link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            })
        }
    });
}

// anchor links scrolling
const navLinks = document.querySelectorAll('nav a');

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

document.querySelector('#top').onclick = e => {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

//slider button action
let isEnabled = true;
document.querySelector('.slider__btn_left').addEventListener('click', () => changeSlide('left'));
document.querySelector('.slider__btn_right').addEventListener('click', () => changeSlide('right'));

//action by pressing phone button
document.querySelectorAll('.phone__btn').forEach( element => {
    element.addEventListener('click', () => {
        let screen = element.parentElement.querySelector('.phone__screen');
        if (screen.matches('.hidden')) {
            screen.classList.remove('hidden');
        } else {
          screen.classList.add('hidden');
        }
    });
});

function changeSlide (direction) {
    if(!isEnabled) return;
    isEnabled = false;

    const activeSlide = document.querySelector('.slider__slide.active');
    const slide = document.querySelector('.slide-2');
    const slider = document.querySelector('.slider');
    let nextSlide = null;
    let activeSlideX = activeSlide.offsetLeft;
    let nextSlideX = activeSlide.offsetWidth;
    let slideSpeed = 25;

 function slideBackground() {
  if(slider.matches('.blue')){
    slider.classList.remove('blue');
    slide.classList.add('hidden');
  } else {
    slider.classList.add('blue');
    slide.classList.remove('hidden');
  } 
 }
    if (direction === 'right') {
        slideBackground();  
        nextSlide = activeSlide.nextElementSibling || activeSlide.parentElement.firstElementChild;
        nextSlide.style.left = `${activeSlide.clientWidth}px`;
        activeSlideX = activeSlide.offsetLeft;
        nextSlideX = activeSlide.offsetWidth;
        slideSpeed *= -1;

    } else if (direction === 'left'){
        slideBackground();  
        nextSlide = activeSlide.previousElementSibling || activeSlide.parentElement.lastElementChild;
        nextSlide.style.right = `-${activeSlide.clientWidth}px`;
        activeSlideX = activeSlide.offsetLeft;
        nextSlideX = -activeSlide.offsetWidth;
    }
            
    let moveSlides = setInterval( () => {
        activeSlideX += slideSpeed;
        nextSlideX += slideSpeed;
        activeSlide.style.left = `${activeSlideX}px`;
        nextSlide.style.left = `${nextSlideX}px`;

        if (Math.abs(nextSlide.offsetLeft) < Math.abs(slideSpeed)) {
            activeSlide.style.left = `${activeSlideX - nextSlide.offsetLeft}px`;
            nextSlide.style.left = `${nextSlideX - nextSlide.offsetLeft}px`;
            clearInterval(moveSlides);
            isEnabled = true;
        }
    }, 1000/60);

    nextSlide.classList.add('active');
    activeSlide.classList.remove('active');
}


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


// HAMBURGER

function darkenContent(node, onClickCallback = false){
  if(node.querySelector(".dark-background") === null) {
    let background = document.createElement("div");
    background.classList.add("dark-background");
    node.append(background);
    if (onClickCallback) {
      node.querySelector(".dark-background").addEventListener("click", onClickCallback);
    }
  }
  return node;
}


const burger = document.querySelector(".header__burger");
const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const nav = header.querySelector("nav");
let menuOpened = false;
darkenContent(header);
const headerBackground = header.querySelector(".dark-background");
hideDarkBackground();

function drawMenu() {
  if (document.documentElement.clientWidth >= 768) {
    menuOpened = true;
  }
  if(menuOpened) {
    hideDarkBackground();
    burger.classList.remove("rotated90");
    h1.classList.remove("to-left");
    nav.classList.remove("to-right");
  } else {
    showDarkBackground();
    burger.classList.add("rotated90");
    h1.classList.add("to-left");
    nav.classList.add("to-right");
  }
  menuOpened = !menuOpened;
}

function hideDarkBackground(){
  if(!headerBackground.classList.contains("transparent")) {
    headerBackground.classList.add("transparent");
  }
}

function showDarkBackground(){
  if(headerBackground.classList.contains("transparent")) {
    headerBackground.classList.remove("transparent");
  }
}

burger.addEventListener("click", drawMenu);
headerBackground.addEventListener("click", drawMenu);

window.addEventListener("resize", () => {
  if(document.documentElement.clientWidth >= 768) {
    drawMenu();
  }
});

navLinks.forEach(link => link.addEventListener("click", e => {
  if(document.documentElement.clientWidth < 768) {
    setTimeout(drawMenu, 100);
  }
}));

