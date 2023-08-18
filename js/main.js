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