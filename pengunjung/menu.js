const itemImages = {
    "Signature Wagyu Burger": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&h=80&fit=crop",
    "Grilled Salmon Bowl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=80&h=80&fit=crop",
    "Truffle Mushroom Pasta": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=80&h=80&fit=crop",
    "Crispy Korean Chicken": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=80&h=80&fit=crop",
    "Lava Cake": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=80&h=80&fit=crop",
    "Matcha Macarons": "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=80&h=80&fit=crop"
};

function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(itemName, price) {
    const cart = getCart();
    const existing = cart.find(item => item.name === itemName);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            name: itemName,
            price: price,
            qty: 1,
            note: '',
            img: itemImages[itemName] || ''
        });
    }
    saveCart(cart);
    updateCartUI();
}

function updateCartUI() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    const badge = document.querySelector('.cart-badge');
    const count = document.querySelector('.cart-items-count');
    const total = document.querySelector('.cart-total-price');
    if (badge) badge.innerText = totalItems;
    if (count) count.innerText = `${totalItems} Item${totalItems !== 1 ? 's' : ''}`;
    if (total) total.innerText = `Rp${totalPrice.toLocaleString('id-ID')}`;
}

function viewCart() {
    window.location.href = 'order.html';
}

document.addEventListener('DOMContentLoaded', function () {
    updateCartUI();

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    document.querySelector('.btn-view-cart')?.addEventListener('click', viewCart);

    document.querySelector('.profile-avatar img')?.addEventListener('click', function () {
        window.location.href = 'profile.html';
    });
});
