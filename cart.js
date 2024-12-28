// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let cartTotal = 0;

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.getAttribute('data-name');
            const productPrice = parseFloat(product.getAttribute('data-price'));

            addItemToCart(productName, productPrice);
        });
    });

    function addItemToCart(name, price) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.textContent = `${name} - $${price.toFixed(2)}`;

        cartItemsContainer.appendChild(cartItem);
        updateCartTotal(price);
    }

    function updateCartTotal(price) {
        cartTotal += price;
        cartTotalElement.textContent = cartTotal.toFixed(2);
    }

    document.getElementById('checkout-btn').addEventListener('click', () => {
        const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
        const selectedDeliveryRegion = document.getElementById('delivery-region').value;
        alert(`Total amount to be paid: $${cartTotal.toFixed(2)} using ${selectedPaymentMethod}, Delivery Region: ${selectedDeliveryRegion}`);
        cartItemsContainer.innerHTML = '';
        cartTotal = 0;
        cartTotalElement.textContent = cartTotal.toFixed(2);
    });
});
