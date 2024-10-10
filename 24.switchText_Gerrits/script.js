const sentences = [
    "This is Anakin Skywalker and Darth Vader.",
    "Anakin was, and still is my favorite character in Star Wars because I can relate to him. I care too much and my rage gets the best of me when betrayed.",
    "Me being used and manipulated to show the worst of me",
    "Don't let the dark side rule you.",
    "Confronting fear is the destiny of a Jedi."
];

let currentIndex = 0;

document.getElementById('image').onclick = function() {
    currentIndex = (currentIndex + 1) % sentences.length;
    document.getElementById('textBox').textContent = sentences[currentIndex];
};
