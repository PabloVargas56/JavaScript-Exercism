// Array of arrays containing product names and prices
const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];

// Destructure the second product
const [[x, y], [secondProductName, secondProductPrice]] = products;

// Print the second product details
console.log(`First product: ${x}`);
console.log(`First product price: ${y}`);
