


// Your product array
const products = [
    {
        id: 'fc-1888',
        name: 'flux capacitor',
        avgRating: 4.5
    },
    {
        id: 'fc-2050',
        name: 'power laces',
        avgRating: 4.7
    },
    {
        id: 'fs-1987',
        name: 'time circuits',
        avgRating: 3.5
    },
    {
        id: 'ac-2000',
        name: 'low voltage reactor',
        avgRating: 3.9
    },
    {
        id: 'jj-1969',
        name: 'warp equalizer',
        avgRating: 5.0
    }
];


// Get the select element
document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('productSelect');
// Populate options
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the current review count from local storage
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;

    // Increment the review count
    reviewCount++;

    // Save the updated count back to local storage
    localStorage.setItem('reviewCount', reviewCount);

    // Display the review count (you can customize this part)
    document.getElementById('reviewCount').textContent = reviewCount;
});