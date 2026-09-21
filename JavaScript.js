let price = 100;
let quantity = 3;

let subtotal = price * quantity;
let vat = subtotal * 0.07;
let total = subtotal + vat;

console.log("=== 1. Order Calculator ===");
console.log("Subtotal:", subtotal, "THB");
console.log("VAT (7%):", vat, "THB");
console.log("Total:", total, "THB");


let orderTotal = 600;
let member = true;
let delivery;

if (orderTotal > 500) {
    delivery = 0;
} else if (member) {
    delivery = 30;
} else {
    delivery = 50;
}

console.log("=== 2. Delivery Rule ===");
console.log("Delivery charge:", delivery, "THB");


let cart = [60, 45, 70, 100];
let cartTotal = 0;

for (let i = 0; i < cart.length; i++) {
    cartTotal = cartTotal + cart[i];
}

console.log("=== 3. Cart Total ===");
console.log("Cart total:", cartTotal, "THB");


function calculateDiscount(amount, percentage) {
    let discount = amount * (percentage / 100);
    return amount - discount;
}

let priceAfterDiscount1 = calculateDiscount(1000, 10);
let priceAfterDiscount2 = calculateDiscount(500, 20);

console.log("=== 4. Discount Function ===");
console.log("1000 THB after 10% discount:", priceAfterDiscount1, "THB");
console.log("500 THB after 20% discount:", priceAfterDiscount2, "THB");


let products = [
    {
        name: "Latte",
        price: 60
    },
    {
        name: "Americano",
        price: 50
    },
    {
        name: "Cappuccino",
        price: 70
    }
];

console.log("=== 5. Product Object ===");

for (let i = 0; i < products.length; i++) {
    console.log(
        "Product:", products[i].name,
        "| Price:", products[i].price, "THB"
    );
}