// Array to store cart items
let cart = [];
let totalPrice = 0;
let isLoggedIn = false;
let address = {};

// Function to handle login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        isLoggedIn = true;
        document.getElementById('loginStatus').textContent = 'Logged in successfully!';
        alert('Login successful!');
    } else {
        alert('Please enter valid login credentials.');
    }
    return false; // Prevent form submission
}

// Function to save address
function saveAddress() {
    const addressLine = document.getElementById('addressLine').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zipCode').value;

    if (addressLine && city && zipCode) {
        address = { addressLine, city, zipCode };
        document.getElementById('addressStatus').textContent = 'Address saved successfully!';
        alert('Address saved!');
    } else {
        alert('Please fill out all address fields.');
    }
    return false; // Prevent form submission
}

// Function to add items to the cart
function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item at index
    updateCart(); // Update cart display
}

// Function to update cart display and calculate total price
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear previous items
    totalPrice = 0;

    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.item} - $${product.price.toFixed(2)} `;
        
        // Create a button to remove the item from the cart
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        
        li.appendChild(removeButton);
        cartItems.appendChild(li);
        totalPrice += product.price;
    });

    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

// Function for online payment
function payOnline() {
    if (!isLoggedIn) {
        alert('Please log in to proceed with payment.');
        return;
    }
    if (!address.addressLine) {
        alert('Please enter your delivery address.');
        return;
    }
    if (cart.length === 0) {
        alert('Your cart is empty. Add some items to proceed with payment.');
        return;
    }

    // Simulating payment options
    const paymentMethod = prompt("Choose payment method: \n1. PhonePe \n2. Google Pay (GPay) \nType 'PhonePe' or 'GPay'");

    if (paymentMethod === 'PhonePe') {
        alert(`Processing payment of $${totalPrice.toFixed(2)} via PhonePe...`);
        // Here you would integrate the PhonePe payment API logic
        setTimeout(() => {
            alert('Payment successful! Your order has been placed.');
            cart = []; // Clear cart after successful payment
            updateCart();
        }, 2000);
    } else if (paymentMethod === 'GPay') {
        alert(`Processing payment of $${totalPrice.toFixed(2)} via Google Pay...`);
        // Here you would integrate the GPay payment API logic
        setTimeout(() => {
            alert('Payment successful! Your order has been placed.');
            cart = []; // Clear cart after successful payment
            updateCart();
        }, 2000);
    } else {
        alert('Invalid payment method selected. Please try again.');
    }
}

// Function for offline payment (Cash on Delivery)
function payOffline() {
    if (!isLoggedIn) {
        alert('Please log in to proceed with payment.');
        return;
    }
    if (!address.addressLine) {
        alert('Please enter your delivery address.');
        return;
    }
    if (cart.length === 0) {
        alert('Your cart is empty. Add some items to proceed with payment.');
        return;
    }
    alert('Cash on Delivery selected. Your order will be placed!');
    // Additional logic for order confirmation can be added here
}
