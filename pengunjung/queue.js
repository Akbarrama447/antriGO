const statusSteps = [
    { label: 'Received', alert: 'Your order has been received! We\'ll start cooking shortly.' },
    { label: 'Preparing', alert: 'Your order is being prepared. Fresh ingredients being selected!' },
    { label: 'Cooking', alert: 'Your order is now being cooked! Almost there.' },
    { label: 'Ready', alert: 'Your order is ready! Please pick it up at the counter.' },
    { label: 'Completed', alert: 'Order completed! Thank you for dining with us.' }
];

function formatPrice(price) {
    return 'Rp' + price.toLocaleString('id-ID');
}

function loadOrder() {
    const orderData = JSON.parse(localStorage.getItem('activeOrder'));
    const emptyState = document.getElementById('emptyState');
    const mainCard = document.getElementById('orderMainCard');
    const alertBanner = document.getElementById('alertBanner');
    const receiptBtn = document.querySelector('.btn-receipt');
    const ecoBanner = document.querySelector('.eco-banner');

    if (!orderData) {
        emptyState.style.display = 'flex';
        mainCard.style.display = 'none';
        alertBanner.style.display = 'none';
        receiptBtn.style.display = 'none';
        ecoBanner.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    mainCard.style.display = 'block';
    alertBanner.style.display = 'flex';
    receiptBtn.style.display = 'flex';
    ecoBanner.style.display = 'flex';

    document.getElementById('orderNumber').textContent = `Order #${orderData.orderNumber}`;
    document.getElementById('orderTime').innerHTML = `Ordered ${orderData.timestamp}`;
    document.getElementById('totalPrice').textContent = formatPrice(orderData.total);

    const step = orderData.status || 1;
    updateStepper(step);

    const alertText = document.getElementById('alertText');
    alertText.textContent = statusSteps[step - 1]?.alert || statusSteps[0].alert;

    const itemsContainer = document.getElementById('orderItems');
    itemsContainer.innerHTML = (orderData.items || []).map(item => `
        <div class="detail-item">
            <div class="item-qty-name">
                <span class="qty-badge">${item.qty}x</span>
                <span class="item-name">${item.name}</span>
            </div>
            <span class="item-price">${formatPrice(item.price * item.qty)}</span>
        </div>
    `).join('') || '<div class="detail-item">No items</div>';
}

function updateStepper(stepNumber) {
    const nodes = document.querySelectorAll('.step-node');
    const fill = document.getElementById('progressFill');
    const percentages = [0, 20, 40, 60, 80, 100];

    fill.style.width = `${percentages[stepNumber - 1] || 0}%`;

    nodes.forEach((node, index) => {
        node.classList.remove('active', 'completed');
        if (index + 1 < stepNumber) {
            node.classList.add('completed');
        } else if (index + 1 === stepNumber) {
            node.classList.add('active');
        }
    });
}

function simulateProgress() {
    const orderData = JSON.parse(localStorage.getItem('activeOrder'));
    if (!orderData || orderData.status >= 5) return;

    const results = [
        { delay: 10000, step: 2, label: 'Preparing' },
        { delay: 25000, step: 3, label: 'Cooking' },
        { delay: 45000, step: 4, label: 'Ready' },
        { delay: 60000, step: 5, label: 'Completed' }
    ];

    results.forEach(({ delay, step, label }) => {
        setTimeout(() => {
            const data = JSON.parse(localStorage.getItem('activeOrder'));
            if (data && data.status < step) {
                data.status = step;
                data.statusLabel = label;
                data.alertMessage = statusSteps[step - 1].alert;
                localStorage.setItem('activeOrder', JSON.stringify(data));

                const alertText = document.getElementById('alertText');
                if (alertText) alertText.textContent = statusSteps[step - 1].alert;

                updateStepper(step);
            }
        }, delay);
    });
}

function viewReceipt() {
    const orderData = JSON.parse(localStorage.getItem('activeOrder'));
    if (!orderData) return;

    const itemsHtml = (orderData.items || []).map(item => `
        <div class="receipt-item">
            <div class="receipt-item-left">
                <span class="receipt-item-qty">${item.qty}x</span>
                <span>${item.name}</span>
            </div>
            <span>${formatPrice(item.price * item.qty)}</span>
        </div>
    `).join('');

    const paymentLabel = orderData.paymentMethod === 'qris' ? 'QRIS' : 'Cash';
    let paymentCode = '';
    if (orderData.paymentMethod === 'qris') {
        paymentCode = `<div class="receipt-qr"><img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('ANTRIGO:' + orderData.orderNumber + ':' + orderData.total)}" alt="QR"><div class="receipt-qr-label">QRIS Payment</div></div>`;
    } else {
        paymentCode = `<div class="receipt-qr"><img src="https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent('ANTRIGO-' + orderData.orderNumber)}&scale=3&height=12&includetext=true&textyoffset=8" alt="Barcode"><div class="receipt-qr-label">Cash Barcode</div></div>`;
    }

    document.getElementById('receiptContent').innerHTML = `
        <div class="receipt-header">
            <div class="receipt-brand">ANTRI<span style="color:#ff8c00">GO</span></div>
            <div class="receipt-title">Digital Receipt</div>
        </div>
        <div style="font-size:12px;color:#888;margin-bottom:12px;text-align:center;">
            <div>${orderData.orderNumber}</div>
            <div>${orderData.timestamp}</div>
            <div style="margin-top:4px;"><span class="receipt-payment-badge" style="display:inline-flex;align-items:center;gap:6px;background:#e6f4ea;color:#006837;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700;">${paymentLabel}</span></div>
        </div>
        ${paymentCode}
        <div class="receipt-items">
            ${itemsHtml}
            <div class="receipt-item"><span>Tax (10%)</span><span>${formatPrice(orderData.tax || 0)}</span></div>
            <div class="receipt-total-line"><span>Total</span><span class="receipt-value">${formatPrice(orderData.total)}</span></div>
        </div>
        <div class="receipt-footer">Thank you for dining with us!</div>
    `;

    document.getElementById('receiptModal').classList.add('show');
}

function closeReceiptModal() {
    document.getElementById('receiptModal').classList.remove('show');
}

document.querySelector('.profile-pic img')?.addEventListener('click', function () {
    window.location.href = 'profile.html';
});

document.addEventListener('DOMContentLoaded', () => {
    loadOrder();
    simulateProgress();
});
