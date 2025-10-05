const lightbox = document.querySelector('.lightbox');
const pic = document.querySelectorAll('.gallery-item');
const close = document.querySelector('#close-btn');
const photo = document.getElementById('lightbox-image');

// Loop through each gallery item and replace thumbnail pics with full version
pic.forEach((image) => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    photo.src = image.src.replace("-thumbnail", "");

  });
});

// Close lightbox functionality
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close button functionality
close.addEventListener("click", () => {
  lightbox.style.display = "none";
})