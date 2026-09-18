javascript
// Get the total price
let total = document.querySelector(".total");

// Get all product containers
let products = document.querySelectorAll(".list-products > .card-body");


// Go through every product
products.forEach(function(product) {

    // Get the buttons/elements inside this product
    let plus = product.querySelector(".fa-plus-circle");
    let minus = product.querySelector(".fa-minus-circle");
    let trash = product.querySelector(".fa-trash-alt");
    let heart = product.querySelector(".fa-heart");
    let quantity = product.querySelector(".quantity");

    // PLUS
    plus.addEventListener("click", function() {

        quantity.textContent++;

        calculateTotal();
    });


    // MINUS
    minus.addEventListener("click", function() {

        if (quantity.textContent > 0) {
            quantity.textContent--;
        }

        calculateTotal();
    });


    // DELETE
    trash.addEventListener("click", function() {

        product.remove();

        calculateTotal();
    });


    // HEART
    heart.addEventListener("click", function() {

        if (heart.style.color === "red") {
            heart.style.color = "black";
        } else {
            heart.style.color = "red";
        }

    });

});


// FUNCTION TO CALCULATE TOTAL
function calculateTotal() {

    let sum = 0;

    // Get the products that are still in the cart
    let products = document.querySelectorAll(".list-products > .card-body");

    products.forEach(function(product) {

        let price = parseInt(
            product.querySelector(".unit-price").textContent
        );

        let quantity = parseInt(
            product.querySelector(".quantity").textContent
        );

        sum = sum + price * quantity;

    });

    total.textContent = sum + " $";
}

