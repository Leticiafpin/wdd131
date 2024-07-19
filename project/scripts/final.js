/// Get the current year
const currentYear = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("current-year").textContent = currentYear;
});

// script.js

document.addEventListener('DOMContentLoaded', function () {
   

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

//Contact form
// Your product array

const products = [
    { name: 'Portugal experience', description: 'Portugal' },
    { name: 'Weekend in Spain', description: 'Spain' },
    { name: 'USA, 15 Days', description: 'USA' },
    { name: 'Create a unique experience', description: 'create a unique experience' },
];

// Get the select element
document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('productSelect');
    // Populate options
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.description;
        selectElement.appendChild(option);
    });
});


