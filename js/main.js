document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            const targetTab = e.target.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => {
                content.classList.remove('active');
                // Fade out animation
                content.animate([
                    { opacity: 1 },
                    { opacity: 0 }
                ], {
                    duration: 300, // Duration in milliseconds
                    fill: 'forwards' // Ensures the animation effect remains after completion
                });
            });

            // Add active class to clicked button and corresponding content
            e.target.classList.add('active');
            const activeContent = document.getElementById(targetTab);
            activeContent.classList.add('active');
            // Fade in animation
            activeContent.animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: 300,
                fill: 'forwards'
            });
        });
    });
    const heroCoreParts = document.querySelectorAll('.hero__core-part');
    
    heroCoreParts.forEach(part => {
        part.addEventListener('animationend', (e) => {
            if (e.animationName === 'parts') {
                part.style.animation = 'partsI 30s ease-in-out infinite';
            }
        });
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    document.querySelector('.toggle').addEventListener('click', function(event) {
        event.stopPropagation();
    
        // Toggle 'on' class for '.header__mobile'
        var headerMobile = document.querySelector('.header__mobile');
        if (headerMobile.classList.contains('on')) {
            headerMobile.classList.remove('on');
        } else {
            headerMobile.classList.add('on');
        }
    
        // Toggle 'stopper' class for 'body'
        var body = document.querySelector('body');
        if (body.classList.contains('stopper')) {
            body.classList.remove('stopper');
        } else {
            body.classList.add('stopper');
        }
    });
});
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      spaceBetween: 150,
      slidesPerView: "auto",
      slideToClickedSlide: true,
      initialSlide: 1,
    //   loop: true,
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
var swiper2 = new Swiper(".mySwiperTwo", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 7,
  slideToClickedSlide: true,
  loop: true,
})
var swiper3 = new Swiper(".mySwiperThree", {
    effect: "cards",
    // slideToClickedSlide: true,
    initialSlide: 5,
    cardsEffect:{
        perSlideOffset: 14,
        perSlideRotate: 4,
        rotate: true,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})

var delay = 300; // 0.5 seconds
var timer;
var elements = document.querySelectorAll('.education__book');
var bookOne = document.querySelector('.education__book-one');
var bookTwo = document.querySelector('.education__book-two');
var blocks = document.querySelectorAll('.education__block');

function resetAnimations() {
    bookOne.style.animation = '';
    bookTwo.style.animation = '';
}

elements.forEach(function(elem) {
    elem.addEventListener('mouseenter', function() {
        clearTimeout(timer); // Clear any existing timer

        if (!elem.classList.contains('education__book-active')) {
            bookOne.style.animation = 'book-left 0.6s ease-in-out forwards';
            bookTwo.style.animation = 'book-right 0.6s ease-in-out forwards';

            setTimeout(function() {
                resetAnimations();
            }, 600);
        }

        // Define the currently hovered element for reference in the timeout function
        var hoveredElem = this;

        timer = setTimeout(function() {
            // Remove active class from all elements
            elements.forEach(function(innerElem) {
                innerElem.classList.remove('education__book-active');
            });

            // Add active class to the hovered element
            hoveredElem.classList.add('education__book-active');
        }, delay);
    });

    elem.addEventListener('mouseleave', function() {
        // When the mouse leaves, just clear the timer
        // Don't reset animations immediately; let the process complete
        clearTimeout(timer);
    });
});
bookOne.addEventListener('mouseenter', function() {
  // Remove active class from all blocks
  blocks.forEach(function(block) {
      block.classList.remove('education__block-active');
  });
  
  // Add active class to the first block
  blocks[0].classList.add('education__block-active');
});

bookTwo.addEventListener('mouseenter', function() {
  // Remove active class from all blocks
  blocks.forEach(function(block) {
      block.classList.remove('education__block-active');
  });
  
  // Add active class to the second block
  blocks[1].classList.add('education__block-active');
});

const heroVideo = document.querySelector('.hero__video');
const heroPopup = document.getElementById('hero__popup');

heroVideo.addEventListener('click', function() {
    heroPopup.style.display = 'flex';  // Display the popup
    setTimeout(() => heroPopup.style.opacity = '1', 50);  // Fade in the popup with a slight delay
});

heroPopup.addEventListener('click', function(event) {
    // If the clicked target is the popup wrapper (not the content inside), close the popup
    if(event.target === heroPopup) {
        heroPopup.style.opacity = '0';  // Fade out the popup
        setTimeout(() => heroPopup.style.display = 'none', 500);  // Hide the popup after fade out transition
    }
});
const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', function() {
    heroPopup.style.opacity = '0';  // Fade out the popup
    setTimeout(() => heroPopup.style.display = 'none', 500);  // Hide the popup after fade out transition
});


