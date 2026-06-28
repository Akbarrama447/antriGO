function formatPrice(price) {
    return 'Rp' + price.toLocaleString('id-ID');
}

function loadProfile() {
    const profile = JSON.parse(localStorage.getItem('userProfile')) || {
        name: 'Guest User',
        email: 'guest@antrigo.com',
        phone: '+62 812-3456-7890'
    };

    document.getElementById('profileName').textContent = profile.name;
    document.getElementById('profileEmail').textContent = profile.email;
    document.getElementById('profilePhone').textContent = profile.phone;

    const activeOrder = JSON.parse(localStorage.getItem('activeOrder'));
    const history = JSON.parse(localStorage.getItem('orderHistory')) || [];

    const totalOrders = history.length + (activeOrder ? 1 : 0);
    document.getElementById('totalOrders').textContent = totalOrders;
    document.getElementById('activeOrder').textContent = activeOrder ? 1 : 0;

    const totalSpent = history.reduce((sum, o) => sum + (o.total || 0), 0) + (activeOrder ? (activeOrder.total || 0) : 0);
    document.getElementById('totalSpent').textContent = formatPrice(totalSpent);

    const container = document.getElementById('orderHistory');
    const allOrders = [];

    if (activeOrder) {
        allOrders.push({ ...activeOrder, status: 'active' });
    }
    allOrders.push(...history);

    if (allOrders.length === 0) {
        container.innerHTML = '<div class="empty-history">No orders yet</div>';
        return;
    }

    container.innerHTML = allOrders.map(order => `
        <div class="history-item" onclick="viewOrder('${order.orderNumber}')">
            <div class="history-left">
                <span class="history-order">#${order.orderNumber}</span>
                <span class="history-date">${order.timestamp || ''} • ${order.items ? order.items.reduce((s, i) => s + i.qty, 0) + ' items' : ''}</span>
            </div>
            <span class="history-status ${order.status === 'active' ? 'active' : 'completed'}">${order.status === 'active' ? 'In Progress' : 'Completed'}</span>
        </div>
    `).join('');
}

function viewOrder(orderNumber) {
    const activeOrder = JSON.parse(localStorage.getItem('activeOrder'));
    if (activeOrder && activeOrder.orderNumber === orderNumber) {
        window.location.href = 'queue.html';
    } else {
        alert(`Order #${orderNumber}\nView details coming soon!`);
    }
}

function editProfile() {
    const profile = JSON.parse(localStorage.getItem('userProfile')) || {
        name: 'Guest User',
        email: 'guest@antrigo.com',
        phone: '+62 812-3456-7890'
    };

    const name = prompt('Name:', profile.name);
    if (name && name.trim()) profile.name = name.trim();

    const email = prompt('Email:', profile.email);
    if (email && email.trim()) profile.email = email.trim();

    const phone = prompt('Phone:', profile.phone);
    if (phone && phone.trim()) profile.phone = phone.trim();

    localStorage.setItem('userProfile', JSON.stringify(profile));
    loadProfile();
}

function editPhoto() {
    alert('Change profile photo coming soon!');
}

function toggleNotif(el) {
    console.log('Notifications:', el.checked ? 'ON' : 'OFF');
}

function clearData() {
    if (confirm('Clear all data? This will remove your profile, order history, and active orders.')) {
        localStorage.removeItem('userProfile');
        localStorage.removeItem('activeOrder');
        localStorage.removeItem('orderHistory');
        localStorage.removeItem('cart');
        localStorage.removeItem('orderType');
        localStorage.removeItem('customerName');
        loadProfile();
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.clear();
        window.location.href = 'index.html';
    }
}

document.addEventListener('DOMContentLoaded', loadProfile);
