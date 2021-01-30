const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'

generateImages(3)


/* Triggers the generateImages function after scrolling past a certain point */

window.addEventListener("scroll", function() { 
    let triggerPoint = 100
    if(window.scrollY > triggerPoint) {
        generateImages(1)
    }   
    
 });

/* Takes a number of rows as an argument and generates 3 random images from Unsplash per row */

function generateImages(rows) {
    for(let i = 0; i < rows * 3; i++) {
        const img = document.createElement('img')
        img.src = `${unsplashURL}${generateSize()}`
        container.appendChild(img)
    }
}

/* Generates a random image size based on the result of the getRandomNr function */

function generateSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

/* Creates a random number between 300 and 310 for the generateSize function */

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}