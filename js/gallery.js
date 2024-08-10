
const images = [
    "js/images/gallery_1.jpg",
    "js/images/gallery_2.jpg",
    "js/images/gallery_3.jpg",
    "js/images/gallery_4.jpg",
    "js/images/gallery_5.jpg",
    "js/images/gallery_6.jpg",
    "js/images/gallery_7.jpg",
    "js/images/gallery_8.jpg"
];

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
});

prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentIndex];
});
