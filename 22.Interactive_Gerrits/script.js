const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

let currentIndex = 0;

const imageContainer = document.getElementById('image-container');

// Set the initial image
imageContainer.style.backgroundImage = `url(${images[currentIndex]})`;

imageContainer.addEventListener('click', () => {
    // Increment the index and reset if it goes beyond the image array length
    currentIndex = (currentIndex + 1) % images.length;
    
    // Update the background image
    imageContainer.style.backgroundImage = `url(${images[currentIndex]})`;
});
