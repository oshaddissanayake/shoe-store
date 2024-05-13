document.addEventListener('DOMContentLoaded', function() {
    // Your code here
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const itemCard = this.parentNode;
        const price = parseInt(itemCard.getAttribute('data-price'));
        const name = itemCard.getAttribute('data-name');
        addToCart(name, price);
    });
});

function addToCart(name, price) {
    console.log('Adding to cart:', name, price); // Debugging line
    const cartItems = document.getElementById('cartItems');
    console.log('Cart Items Element:', cartItems); // Check if this is null

    const newItem = document.createElement('li');
    newItem.textContent = `${name} - $${price}`;
    cartItems.appendChild(newItem); // The error points to this line

    updateTotal(price);
}

function updateTotal(price) {
    const totalElement = document.getElementById('total');
    const currentTotal = parseInt(totalElement.textContent.replace('Total: $', ''));
    const newTotal = currentTotal + price;
    totalElement.textContent = `Total: $${newTotal}`;
}
