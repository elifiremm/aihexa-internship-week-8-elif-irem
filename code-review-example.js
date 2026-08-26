// BEFORE CODE REVIEW

function calc(a, b) {
    return a * b;
}


// AFTER CODE REVIEW

function calculateTotalPrice(price, quantity) {

    if (price < 0 || quantity < 0) {
        throw new Error("Price and quantity cannot be negative");
    }

    return price * quantity;
}

console.log(calculateTotalPrice(500, 3));
