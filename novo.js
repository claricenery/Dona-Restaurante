document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value
});



const sliderImages = document.querySelectorAll('.home-slider img');
  let currentImage = 0;

  function nextImage() {
    sliderImages[currentImage].classList.remove('active');
    sliderImages[currentImage].classList.add('prev');

    currentImage = (currentImage + 1) % sliderImages.length;

    sliderImages[currentImage].classList.add('active');
    sliderImages[currentImage].classList.remove('prev', 'next');
  }

  function startSlide() {
    setInterval(() => {
      nextImage();
    }, 5000);
  }

  document.addEventListener('DOMContentLoaded', () => {
    startSlide();
  });