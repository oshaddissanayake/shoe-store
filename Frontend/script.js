document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.property-item button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const propertyDetails = this.parentNode;
            showModal(propertyDetails);
        });
    });
});

function showModal(details) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '5px';
    modalContent.style.minWidth = '300px';
    modalContent.innerHTML = `
        <h2>${details.querySelector('h3').textContent}</h2>
        <p>${details.querySelector('.price').textContent}</p>
        <p>${details.querySelector('.location').textContent}</p>
        <p>${details.querySelector('p:last-child').textContent}</p>
        <button onclick="closeModal(this)">Close</button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

function closeModal(button) {
    const modal = button.parentNode.parentNode;
    document.body.removeChild(modal);
}
let cart = [];

function addToCart(name, price, size) {
    const property = { name, price, size };
    cart.push(property);
    updateCartUI();
    showCart();
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkoutButton');
    cartItems.innerHTML = ''; // Clear existing cart items
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} AUD - ${item.size}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remove';
        deleteBtn.onclick = function() { removeFromCart(item); };
        li.appendChild(deleteBtn);
        cartItems.appendChild(li);
        total += item.price;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)} AUD`;

    if (cart.length > 0) {
        checkoutButton.style.display = 'block';
    } else {
        checkoutButton.style.display = 'none';
    }
}

function removeFromCart(itemToRemove) {
    cart = cart.filter(item => item !== itemToRemove);
    updateCartUI();
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function showCart() {
    const cartElement = document.getElementById('cart');
    cartElement.classList.remove('cart-hidden');
    cartElement.classList.add('cart-shown');
}
function checkout() {
    alert('Proceeding to checkout!');
    // Here you would likely redirect to a checkout page or handle the logic to complete the purchase.
}


