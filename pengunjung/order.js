let selectedPayment = null;
let orderPlaced = false;

function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function formatPrice(price) {
    return 'Rp' + price.toLocaleString('id-ID');
}

function renderCart() {
    const cart = getCart();
    const container = document.getElementById('cartItems');
    const emptyState = document.getElementById('emptyState');
    const summary = document.getElementById('orderSummary');
    const footer = document.getElementById('appFooter');

    const totalQty = cart.reduce((s, i) => s + i.qty, 0);

    if (cart.length === 0 || totalQty === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'flex';
        summary.style.display = 'none';
        footer.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    summary.style.display = 'block';
    footer.style.display = 'block';

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item" data-index="${index}">
            <img src="${item.img || 'https://via.placeholder.com/80'}" alt="${item.name}" class="item-img">
            <div class="item-details">
                <h3 class="item-name">${item.name}</h3>
                <input class="item-note-input" type="text" placeholder="Add note (e.g. no spicy, extra sauce...)" value="${item.note || ''}" data-index="${index}">
                <div class="item-price-row">
                    <span class="item-price">${formatPrice(item.price)}</span>
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
                        <span class="qty-num">${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.item-note-input').forEach(input => {
        input.addEventListener('input', function () {
            const idx = parseInt(this.dataset.index);
            const cart = getCart();
            if (cart[idx]) {
                cart[idx].note = this.value;
                saveCart(cart);
            }
        });
    });

    calculateBill();
}

function updateQty(index, change) {
    let cart = getCart();
    if (!cart[index]) return;

    cart[index].qty += change;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    saveCart(cart);
    renderCart();
}

function calculateBill() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = Math.round(subtotal * 0.1);
    const total = subtotal + tax;

    document.getElementById('billSubtotal').innerText = formatPrice(subtotal);
    document.getElementById('billTax').innerText = formatPrice(tax);
    document.getElementById('billTotal').innerText = formatPrice(total);
}

function selectPayment(element, method) {
    document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('active'));
    element.classList.add('active');
    selectedPayment = method;

    const qrisBox = document.getElementById('qrisBox');
    const cashBox = document.getElementById('cashBox');
    const qrImg = document.getElementById('qrCodeImg');
    const barcodeImg = document.getElementById('barcodeImg');
    const orderNum = generateOrderNumber();

    qrisBox.style.display = 'none';
    cashBox.style.display = 'none';

    if (method === 'qris') {
        const cart = getCart();
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        const total = subtotal + Math.round(subtotal * 0.1);
        const qrData = `ANTRIGO:${orderNum}:${total}`;
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}`;
        qrisBox.style.display = 'block';
    } else {
        const barcodeData = `ANTRIGO-${orderNum}`;
        barcodeImg.src = `https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(barcodeData)}&scale=3&height=12&includetext=true&textyoffset=8`;
        cashBox.style.display = 'block';
    }
}

function generateOrderNumber() {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const mi = String(date.getMinutes()).padStart(2, '0');
    const rand = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
    return `ORD-${dd}${mm}-${hh}${mi}-${rand}`;
}

function formatDate() {
    const d = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

function placeOrder() {
    if (!selectedPayment || orderPlaced) return;
    orderPlaced = true;

    const cart = getCart();
    const note = document.getElementById('kitchenNote')?.value || '';
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = Math.round(subtotal * 0.1);
    const total = subtotal + tax;
    const orderNumber = generateOrderNumber();
    const dateStr = formatDate();
    const paymentLabel = selectedPayment === 'qris' ? 'QRIS' : 'Cash';

    let paymentCodeSection = '';
    if (selectedPayment === 'qris') {
        const qrData = `ANTRIGO:${orderNumber}:${total}`;
        paymentCodeSection = `
            <div class="receipt-qr">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}" alt="QRIS QR Code">
                <div class="receipt-qr-label">Scan to pay with QRIS</div>
            </div>
        `;
    } else {
        const barcodeData = `ANTRIGO-${orderNumber}`;
        paymentCodeSection = `
            <div class="receipt-qr">
                <img src="https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(barcodeData)}&scale=3&height=12&includetext=true&textyoffset=8" alt="Barcode">
                <div class="receipt-qr-label">Show barcode to cashier</div>
            </div>
        `;
    }

    const itemsHtml = cart.map(item => `
        <div class="receipt-item">
            <div class="receipt-item-left">
                <span class="receipt-item-qty">${item.qty}x</span>
                <span>${item.name}</span>
            </div>
            <span>${formatPrice(item.price * item.qty)}</span>
        </div>
    `).join('');

    document.getElementById('receiptContent').innerHTML = `
        <div class="receipt-header">
            <div class="receipt-brand">ANTRI<span style="color:#ff8c00">GO</span></div>
            <div class="receipt-title">Order Receipt</div>
        </div>
        <div class="receipt-payment">
            <span class="receipt-payment-badge">${paymentLabel}</span>
        </div>
        ${paymentCodeSection}
        <div style="font-size:12px;color:#888;margin-bottom:12px;text-align:center;">
            <div>${orderNumber}</div>
            <div>${dateStr}</div>
        </div>
        <div class="receipt-items">
            ${itemsHtml}
            <div class="receipt-item">
                <span>Tax (10%)</span>
                <span>${formatPrice(tax)}</span>
            </div>
            ${note ? `<div class="receipt-item"><span>Note:</span><span style="color:#888;font-size:12px;">${note}</span></div>` : ''}
            <div class="receipt-total-line">
                <span>Total</span>
                <span class="receipt-value">${formatPrice(total)}</span>
            </div>
        </div>
        <div class="receipt-footer">
            Thank you for dining with us!<br>
            Please show this receipt to the cashier.
        </div>
    `;

    const statusMessages = ['Received', 'Preparing', 'Cooking', 'Ready', 'Completed'];
    const orderType = localStorage.getItem('orderType') || 'dine-in';
    const customerName = localStorage.getItem('customerName') || '';
    const orderData = {
        orderNumber: orderNumber,
        items: cart,
        subtotal: subtotal,
        tax: tax,
        total: total,
        paymentMethod: selectedPayment,
        note: note,
        timestamp: dateStr,
        status: 1,
        statusLabel: statusMessages[0],
        alertMessage: 'Your order has been received! We\'ll start cooking shortly.',
        orderType: orderType,
        customerName: customerName
    };

    localStorage.setItem('activeOrder', JSON.stringify(orderData));
    localStorage.removeItem('cart');

    document.getElementById('receiptModal').classList.add('show');
}

function closeReceipt() {
    document.getElementById('receiptModal').classList.remove('show');
    window.location.href = 'queue.html';
}

document.querySelector('.profile-pic img')?.addEventListener('click', function () {
    window.location.href = 'profile.html';
});

document.addEventListener('DOMContentLoaded', renderCart);
