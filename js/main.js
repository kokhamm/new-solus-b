document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            const targetTab = e.target.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.animate([
                    { opacity: 1 },
                    { opacity: 0 }
                ], {
                    duration: 300,
                    fill: 'forwards'
                });
            });

            e.target.classList.add('active');
            const activeContent = document.getElementById(targetTab);
            activeContent.classList.add('active');
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
    const heroCenter = document.querySelector('.hero__core-center');
    heroCoreParts.forEach(part => {
        part.addEventListener('animationend', (e) => {
            if (e.animationName === 'parts') {
                part.style.animation = 'partsI 30s ease-in-out infinite';
            }
        });
    });
    heroCenter.addEventListener('animationend', (e) => {
        if (e.animationName === 'core') {
            console.log(1);
            heroCenter.style.animation = 'centerI 60s linear infinite';
        }
    });
    document.querySelector('.kols__body').addEventListener('mousemove', function(event) {
        const tooltip = document.querySelector('.kols__tooltip');
        const hoverBlock = document.querySelector('.kols__body');
        const hoverBlockRect = hoverBlock.getBoundingClientRect();
      
        let x = event.clientX - hoverBlockRect.left;
        let y = event.clientY - hoverBlockRect.top;
      
        // Adjust the tooltip position if it goes outside the hoverBlock
        if (x + tooltip.offsetWidth > hoverBlock.offsetWidth) {
          x = hoverBlock.offsetWidth - tooltip.offsetWidth;
        }
      
        if (y + tooltip.offsetHeight > hoverBlock.offsetHeight) {
          y = hoverBlock.offsetHeight - tooltip.offsetHeight;
        }
      
        tooltip.style.left = x + 20 + "px";
        tooltip.style.top = y + "px";
    });
        let kolBody = document.querySelector('.kols__body');
        let koltooltip = document.querySelector('.kols__tooltip');
        let kolCheck = false;
        kolBody.addEventListener('mouseover', function() {
            if(!kolCheck){
                koltooltip.classList.add('kols__tooltip-active');
                kolCheck = true;

                setTimeout(() => {
                    koltooltip.classList.remove('kols__tooltip-active');
                }, 3000);
            }
        });
        // kolBody.addEventListener('mouseleave', function() {
        //     kolCheck = false;
        // });
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
    
        var headerMobile = document.querySelector('.header__mobile');
        if (headerMobile.classList.contains('on')) {
            headerMobile.classList.remove('on');
        } else {
            headerMobile.classList.add('on');
        }
    
        var body = document.querySelector('body');
        if (body.classList.contains('stopper')) {
            body.classList.remove('stopper');
        } else {
            body.classList.add('stopper');
        }
    });
    var anchorLinks = document.querySelectorAll('.anchor__link-mob');
    anchorLinks.forEach(function(anchorLink) {
        anchorLink.addEventListener('click', function() {
            var headerMobile = document.querySelector('.header__mobile');
            var body = document.querySelector('body');
            var checkbox = document.querySelector('#checkbox');

            if (headerMobile) {
                headerMobile.classList.remove('on');
            }

            if (body) {
                body.classList.remove('stopper');
            }

            if (checkbox) {
                checkbox.checked = false;
            }
        });
    });
});
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      spaceBetween: 150,
      slidesPerView: "auto",
      slideToClickedSlide: true,
      mousewheel:{
        forceToAxis: true,
      },
      initialSlide: 1,
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
});
var swiper3 = new Swiper(".mySwiperThree", {
    effect: "cards",
    initialSlide: 5,
    mousewheel:{
        forceToAxis: true,
      },
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
});
var swiper4 = new Swiper(".mySwiperFour", {
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper5 = new Swiper(".mySwiperFive", {
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper6 = new Swiper(".mySwiperSix", {
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper7 = new Swiper(".mySwiperSeven", {
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})

var delay = 300;
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
            bookOne.style.animation = 'book-left 0.8s ease-in-out forwards';
            bookTwo.style.animation = 'book-right 0.8s ease-in-out forwards';

            setTimeout(function() {
                resetAnimations();
            }, 800);
        }

        var hoveredElem = this;

        timer = setTimeout(function() {
            elements.forEach(function(innerElem) {
                innerElem.classList.remove('education__book-active');
            });

            hoveredElem.classList.add('education__book-active');
        }, delay);
    });

    elem.addEventListener('mouseleave', function() {
        clearTimeout(timer);
    });
});
bookOne.addEventListener('mouseenter', function() {
  // Remove active class from all blocks
  blocks.forEach(function(block) {
      block.classList.remove('education__block-active');
  });
  
  blocks[0].classList.add('education__block-active');
});

bookTwo.addEventListener('mouseenter', function() {
  // Remove active class from all blocks
  blocks.forEach(function(block) {
      block.classList.remove('education__block-active');
  });
  
  blocks[1].classList.add('education__block-active');
});

const heroVideo = document.querySelector('.hero__video');
const heroPopup = document.getElementById('hero__popup');
const heroMedia = document.getElementById('heroMedia');

heroVideo.addEventListener('click', function() {
    var body = document.querySelector('body');
    heroPopup.style.display = 'flex'; // Display the popup
    setTimeout(() => heroPopup.style.opacity = '1', 50);
    body.classList.add('stopper');
});

heroPopup.addEventListener('click', function(event) {
    if(event.target === heroPopup) {
        var body = document.querySelector('body');
        heroPopup.style.opacity = '0'; // Fade out the popup
        setTimeout(() => heroPopup.style.display = 'none', 500);
        heroMedia.pause();
        heroMedia.currentTime = 0;
        body.classList.remove('stopper');
    }
});
const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', function() {
    var body = document.querySelector('body');
    heroPopup.style.opacity = '0';  // Fade out the popup
    setTimeout(() => heroPopup.style.display = 'none', 500);
    heroMedia.pause();
    heroMedia.currentTime = 0;
    body.classList.remove('stopper');
});


