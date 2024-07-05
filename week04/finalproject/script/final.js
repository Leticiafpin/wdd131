// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Select an element and modify it
    const titleElement = document.querySelector('.hero-section-title');
    titleElement.textContent = 'Discover the World with Us!';

    // Event listener to react to clicks
    const button = document.querySelector('.scroll-down-icon');
    button.addEventListener('click', () => {
        alert('Scrolling down...');
    });

    // Conditional example
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
        console.log('We are on a mobile screen.');
    } else {
        console.log('We are on a larger screen.');
    }

    // Using objects and arrays
    const destinations = [
        { name: 'Paris', description: 'The city of love' },
        { name: 'Tokyo', description: 'Vibrant metropolis' },
        // Add more destinations here
    ];

    // Exclusively using template literals
    destinations.forEach((destination) => {
        console.log(`Destination: ${destination.name} - ${destination.description}`);
    });

    // Using localStorage
    localStorage.setItem('userVisited', 'true');
    const hasVisited = localStorage.getItem('userVisited');
    if (hasVisited) {
        console.log('The user has visited the site before.');
    } else {
        console.log('It is the user\'s first visit.');
    }
});

// Exemplo de código JavaScript (adapte conforme necessário)
const button = document.querySelector('button');
button.addEventListener('click', () => {
    alert('Obrigado por entrar em contato conosco!');
});