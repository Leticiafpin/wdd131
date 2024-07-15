// Your product array (replace with actual data)
const productArray = [
    { name: 'Product A', value: 'productA' },
    { name: 'Product B', value: 'productB' },
    { name: 'Product C', value: 'productC' },
    { name: 'Product D', value: 'productD' },
];

// Get the select element
const selectElement = document.getElementById('productSelect');

// Populate options
productArray.forEach((product) => {
    const option = document.createElement('option');
    option.value = product.value;
    option.textContent = product.name;
    selectElement.appendChild(option);
});
