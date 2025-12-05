// Dishes Data
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value
const tax = 1.20;

// Task 1–8: Implement getPrices()
function getPrices(taxBoolean) {

    // Paso 3: recorrer dishData
    for (let dish of dishData) {

        // Paso 4: declarar finalPrice
        let finalPrice;

        // Paso 5: si taxBoolean es true
        if (taxBoolean === true) {
            finalPrice = dish.price * tax;

        // Paso 6: si taxBoolean es false
        } else if (taxBoolean === false) {
            finalPrice = dish.price;

        // Paso 7: entrada inválida
        } else {
            console.log("¡Necesita pasar un booleano a la llamada getPrices!");
            return;
        }

        // Paso 8: registrar los detalles del plato
        console.log("Dish: " + dish.name + " Price: $" + finalPrice);
    }
}

// Task 9–12: Implement getDiscount()
function getDiscount(taxBoolean, guests) {

    // Paso 10: llamar getPrices()
    getPrices(taxBoolean);

    // Paso 11: validación defensiva
    if (typeof guests === "number" && guests > 0 && guests < 30) {

        // Paso 12: calcular descuento
        let discount = 0;

        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }

        console.log("El descuento es: $" + discount);

    } else {
        console.log("Número de invitados no válido.");
    }
}

getDiscount(true, 2);
getDiscount(false, 10);