document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.certificate');
    const slideLeftBtn = document.getElementById('slide-left');
    const slideRightBtn = document.getElementById('slide-right');
    let currentIndex = 0;

    function updateSliderPosition() {
        const slideWidth = slides[0].clientWidth;
        sliderWrapper.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    slideLeftBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    slideRightBtn.addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    window.addEventListener('resize', updateSliderPosition);
});
