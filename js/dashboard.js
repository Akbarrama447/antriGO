// ========== DUMMY DATA ==========
const dummyData = {
    menuItems: [
        { id: 1, name: 'Margherita Pizza', category: 'Makanan', price: 85000, desc: 'Pizza klasik dengan mozzarella segar, basil, dan tomat San Marzano.', available: true, orders: 89 },
        { id: 2, name: 'Smash Beef Burger', category: 'Makanan', price: 95000, desc: 'Beef patty double dengan smoked cheddar dan caramelized onion.', available: true, orders: 72 },
        { id: 3, name: 'Caesar Salad', category: 'Makanan', price: 65000, desc: 'Romaine lettuce segar dengan parmesan, croutons, dan dressing caesar.', available: true, orders: 45 },
        { id: 4, name: 'Matcha Latte', category: 'Minuman', price: 55000, desc: 'Matcha premium Jepang dengan steamed oat milk.', available: true, orders: 64 },
        { id: 5, name: 'Mixed Berry Smoothie', category: 'Minuman', price: 45000, desc: 'Blend stroberi, blueberry, dan yogurt segar.', available: true, orders: 38 },
        { id: 6, name: 'Espresso', category: 'Minuman', price: 35000, desc: 'Single origin arabica Toraja.', available: true, orders: 55 },
        { id: 7, name: 'Tiramisu', category: 'Dessert', price: 55000, desc: 'Tiramisu klasik Italia dengan mascarpone.', available: true, orders: 91 },
        { id: 8, name: 'Chocolate Lava Cake', category: 'Dessert', price: 60000, desc: 'Dark chocolate cake dengan molten center.', available: true, orders: 77 },
        { id: 9, name: 'Panna Cotta', category: 'Dessert', price: 50000, desc: 'Italian cream dessert dengan strawberry coulis.', available: false, orders: 33 },
    ],
    customers: [
        { id: 1, name: 'Budi Santoso', email: 'budi@gmail.com', phone: '0812-3456-7890', totalOrders: 12, lastVisit: '2026-06-20' },
        { id: 2, name: 'Siti Rahmawati', email: 'siti@yahoo.com', phone: '0813-9876-5432', totalOrders: 8, lastVisit: '2026-06-19' },
        { id: 3, name: 'Ahmad Hidayat', email: 'ahmad@gmail.com', phone: '0821-1122-3344', totalOrders: 5, lastVisit: '2026-06-18' },
        { id: 4, name: 'Dewi Lestari', email: 'dewi@outlook.com', phone: '0856-5566-7788', totalOrders: 15, lastVisit: '2026-06-20' },
        { id: 5, name: 'Rizky Pratama', email: 'rizky@gmail.com', phone: '0878-9012-3456', totalOrders: 3, lastVisit: '2026-06-17' },
        { id: 6, name: 'Nurul Azizah', email: 'nurul@gmail.com', phone: '0899-8877-6655', totalOrders: 20, lastVisit: '2026-06-20' },
        { id: 7, name: 'Hendra Gunawan', email: 'hendra@yahoo.com', phone: '0811-2233-4455', totalOrders: 7, lastVisit: '2026-06-16' },
        { id: 8, name: 'Rina Wijaya', email: 'rina@gmail.com', phone: '0822-3344-5566', totalOrders: 10, lastVisit: '2026-06-15' },
    ],
    transactions: [
        // Hari ini (25 Juni) — data untuk filter "Hari Ini"
        { id: 'TRX-001', customer: 'Dewi Lestari', items: ['Margherita Pizza', 'Matcha Latte', 'Tiramisu'], total: 195000, status: 'completed', date: '2026-06-25T08:15' },
        { id: 'TRX-002', customer: 'Budi Santoso', items: ['Smash Beef Burger', 'Mixed Berry Smoothie'], total: 140000, status: 'completed', date: '2026-06-25T09:00' },
        { id: 'TRX-003', customer: 'Nurul Azizah', items: ['Caesar Salad', 'Espresso'], total: 100000, status: 'completed', date: '2026-06-25T09:30' },
        { id: 'TRX-004', customer: 'Ahmad Hidayat', items: ['Chocolate Lava Cake', 'Matcha Latte'], total: 115000, status: 'pending', date: '2026-06-25T10:00' },
        // 24 Juni
        { id: 'TRX-005', customer: 'Siti Rahmawati', items: ['Margherita Pizza', 'Panna Cotta'], total: 135000, status: 'completed', date: '2026-06-24T11:30' },
        { id: 'TRX-006', customer: 'Rina Wijaya', items: ['Smash Beef Burger'], total: 95000, status: 'completed', date: '2026-06-24T12:00' },
        { id: 'TRX-007', customer: 'Hendra Gunawan', items: ['Tiramisu', 'Espresso', 'Caesar Salad'], total: 155000, status: 'cancelled', date: '2026-06-24T12:45' },
        { id: 'TRX-008', customer: 'Budi Santoso', items: ['Mixed Berry Smoothie'], total: 45000, status: 'completed', date: '2026-06-24T14:00' },
        // 23 Juni
        { id: 'TRX-009', customer: 'Nurul Azizah', items: ['Margherita Pizza', 'Chocolate Lava Cake', 'Matcha Latte'], total: 200000, status: 'completed', date: '2026-06-23T10:15' },
        { id: 'TRX-010', customer: 'Dewi Lestari', items: ['Smash Beef Burger', 'Espresso'], total: 130000, status: 'completed', date: '2026-06-23T11:30' },
        { id: 'TRX-011', customer: 'Rizky Pratama', items: ['Caesar Salad'], total: 65000, status: 'pending', date: '2026-06-23T12:00' },
        // 22 Juni
        { id: 'TRX-012', customer: 'Ahmad Hidayat', items: ['Tiramisu', 'Mixed Berry Smoothie'], total: 100000, status: 'completed', date: '2026-06-22T13:00' },
        { id: 'TRX-013', customer: 'Siti Rahmawati', items: ['Margherita Pizza'], total: 85000, status: 'completed', date: '2026-06-22T14:30' },
        { id: 'TRX-014', customer: 'Hendra Gunawan', items: ['Chocolate Lava Cake', 'Espresso', 'Panna Cotta'], total: 145000, status: 'completed', date: '2026-06-22T15:00' },
        // 21 Juni
        { id: 'TRX-015', customer: 'Nurul Azizah', items: ['Smash Beef Burger', 'Matcha Latte'], total: 150000, status: 'completed', date: '2026-06-21T10:00' },
        { id: 'TRX-016', customer: 'Rina Wijaya', items: ['Caesar Salad', 'Tiramisu'], total: 120000, status: 'cancelled', date: '2026-06-21T11:15' },
        { id: 'TRX-017', customer: 'Budi Santoso', items: ['Mixed Berry Smoothie', 'Chocolate Lava Cake'], total: 105000, status: 'completed', date: '2026-06-21T12:30' },
        // 20 Juni
        { id: 'TRX-018', customer: 'Dewi Lestari', items: ['Margherita Pizza', 'Matcha Latte'], total: 140000, status: 'completed', date: '2026-06-20T12:30' },
        { id: 'TRX-019', customer: 'Nurul Azizah', items: ['Margherita Pizza', 'Tiramisu', 'Matcha Latte'], total: 195000, status: 'completed', date: '2026-06-20T14:00' },
        { id: 'TRX-020', customer: 'Rizky Pratama', items: ['Smash Beef Burger', 'Panna Cotta'], total: 145000, status: 'pending', date: '2026-06-20T18:00' },
        // 19 Juni
        { id: 'TRX-021', customer: 'Rina Wijaya', items: ['Panna Cotta', 'Mixed Berry Smoothie'], total: 95000, status: 'completed', date: '2026-06-19T18:00' },
        { id: 'TRX-022', customer: 'Budi Santoso', items: ['Espresso'], total: 35000, status: 'completed', date: '2026-06-19T18:30' },
        { id: 'TRX-023', customer: 'Nurul Azizah', items: ['Chocolate Lava Cake', 'Matcha Latte'], total: 115000, status: 'completed', date: '2026-06-19T19:00' },
    ],
    expenses: [
        { id: 1, category: 'Bahan Baku', desc: 'Pembelian bahan segar (sayur, daging, ikan)', amount: 12500000, date: '2026-06-20', icon: 'bahan' },
        { id: 2, category: 'Gaji Karyawan', desc: 'Gaji 8 staff dapur & pelayan', amount: 28000000, date: '2026-06-18', icon: 'gaji' },
        { id: 3, category: 'Sewa Tempat', desc: 'Sewa gedung bulan Juni', amount: 15000000, date: '2026-06-15', icon: 'sewa' },
        { id: 4, category: 'Listrik & Air', desc: 'Tagihan listrik dan PDAM', amount: 3200000, date: '2026-06-12', icon: 'util' },
        { id: 5, category: 'Lain-lain', desc: 'Kebersihan, perlengkapan, dll', amount: 1800000, date: '2026-06-10', icon: 'lain' },
        { id: 6, category: 'Bahan Baku', desc: 'Pembelian minuman & bahan kering', amount: 8500000, date: '2026-06-08', icon: 'bahan' },
        { id: 7, category: 'Gaji Karyawan', desc: 'Gaji staff tambahan (freelance)', amount: 4500000, date: '2026-06-05', icon: 'gaji' },
        { id: 8, category: 'Lain-lain', desc: 'Biaya marketing & promosi', amount: 2500000, date: '2026-06-03', icon: 'lain' },
    ],
    tables: [
        { id: 'T-01', name: 'Meja 1', capacity: 2, active: false },
        { id: 'T-02', name: 'Meja 2', capacity: 4, active: true },
        { id: 'T-03', name: 'Meja 3', capacity: 4, active: true },
        { id: 'T-04', name: 'Meja 4', capacity: 6, active: false },
        { id: 'T-05', name: 'Meja 5', capacity: 2, active: true },
        { id: 'T-06', name: 'Meja 6', capacity: 4, active: false },
        { id: 'T-07', name: 'Meja 7', capacity: 8, active: true },
        { id: 'T-08', name: 'Meja 8', capacity: 4, active: false },
        { id: 'T-09', name: 'Meja 9', capacity: 2, active: true },
        { id: 'T-10', name: 'Meja 10', capacity: 6, active: false },
        { id: 'T-11', name: 'Meja 11', capacity: 4, active: true },
        { id: 'T-12', name: 'Meja 12', capacity: 4, active: true },
    ]
};

// ========== HELPERS ==========
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', { style: 'decimal', minimumFractionDigits: 0 }).format(price);
}

function statusBadge(status) {
    const map = { completed: 'badge-success', pending: 'badge-pending', cancelled: 'badge-danger' };
    const label = { completed: 'Selesai', pending: 'Pending', cancelled: 'Batal' };
    return `<span class="badge ${map[status]}">${label[status]}</span>`;
}

function availabilityBadge(available) {
    return available
        ? '<span class="badge badge-success">Tersedia</span>'
        : '<span class="badge badge-danger">Habis</span>';
}

// ========== RENDER FUNCTIONS ==========
function renderStats() {
    const today = new Date().toISOString().split('T')[0];
    const todayOrders = dummyData.transactions.filter(t => t.date.startsWith(today) && t.status !== 'cancelled');
    const todayRevenue = todayOrders.reduce((sum, t) => sum + t.total, 0);
    const activeTables = dummyData.tables.filter(t => t.active).length;

    document.getElementById('statRevenue').textContent = `Rp ${formatPrice(todayRevenue)}`;
    document.getElementById('statOrders').textContent = todayOrders.length;
    document.getElementById('statCustomers').textContent = dummyData.customers.length;
    document.getElementById('statTables').innerHTML = `${activeTables}<span id="statTotalTables">${dummyData.tables.length}</span>`;
    document.getElementById('statRevenueChange').textContent = '+12.5% dari kemarin';
    document.getElementById('statOrdersChange').textContent = '+8.2% dari kemarin';
    document.getElementById('statCustomersChange').textContent = '+15.3% dari kemarin';
    document.getElementById('statTablesStatus').textContent = activeTables > 0
        ? `🔴 ${activeTables} meja terisi`
        : '○ Semua tersedia';
    document.getElementById('statTablesStatus').style.color = activeTables > 0 ? '#ef4444' : '#16a34a';
}

function renderRecentOrders() {
    const tbody = document.getElementById('recentOrdersBody');
    const recent = [...dummyData.transactions].slice(-5).reverse();
    tbody.innerHTML = recent.map(t => `
        <tr>
            <td><strong>${t.customer}</strong></td>
            <td>${t.items.join(', ')}</td>
            <td><strong>Rp ${formatPrice(t.total)}</strong></td>
            <td>${statusBadge(t.status)}</td>
        </tr>
    `).join('');
}

function renderPopularItems() {
    const list = document.getElementById('popularList');
    const sorted = [...dummyData.menuItems].sort((a, b) => b.orders - a.orders).slice(0, 5);
    list.innerHTML = sorted.map((item, i) => `
        <div class="popular-item">
            <div class="popular-rank ${i < 3 ? 'rank-' + (i + 1) : ''}">${i + 1}</div>
            <div class="popular-info">
                <strong>${item.name}</strong>
                <span>${item.category} · Rp ${formatPrice(item.price)}</span>
            </div>
            <span class="popular-orders">${item.orders} pesanan</span>
        </div>
    `).join('');
}

function renderMenuTable(filter = 'all', search = '') {
    const tbody = document.getElementById('menuTableBody');
    let items = dummyData.menuItems;
    if (filter !== 'all') items = items.filter(i => i.category === filter);
    if (search) items = items.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));

    tbody.innerHTML = items.map(item => `
        <tr>
            <td><strong>${item.name}</strong></td>
            <td><span class="badge badge-info">${item.category}</span></td>
            <td><strong>Rp ${formatPrice(item.price)}</strong></td>
            <td>${availabilityBadge(item.available)}</td>
            <td>
                <button class="btn-icon" onclick="editMenuItem(${item.id})" title="Edit"><i class="fa-solid fa-pen"></i></button>
                <button class="btn-icon" onclick="toggleMenuAvailability(${item.id})" title="Toggle status"><i class="fa-solid fa-${item.available ? 'ban' : 'check'}"></i></button>
                <button class="btn-icon" style="color:#ef4444" onclick="deleteMenuItem(${item.id})" title="Hapus"><i class="fa-solid fa-trash-can"></i></button>
            </td>
        </tr>
    `).join('');
}

function renderCustomers(search = '') {
    const tbody = document.getElementById('customerTableBody');
    let customers = dummyData.customers;
    if (search) customers = customers.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase())
    );

    tbody.innerHTML = customers.map(c => `
        <tr>
            <td><strong>${c.name}</strong></td>
            <td>${c.email}</td>
            <td>${c.phone}</td>
            <td>${c.totalOrders}</td>
            <td>${c.lastVisit}</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="viewCustomerOrders('${c.name}')">Riwayat</button>
            </td>
        </tr>
    `).join('');
}

function renderTransactions(filter = 'all', search = '') {
    const tbody = document.getElementById('transactionTableBody');
    let transactions = [...dummyData.transactions].reverse();
    if (filter !== 'all') transactions = transactions.filter(t => t.status === filter);
    if (search) transactions = transactions.filter(t =>
        t.id.toLowerCase().includes(search.toLowerCase()) ||
        t.customer.toLowerCase().includes(search.toLowerCase())
    );

    tbody.innerHTML = transactions.map(t => `
        <tr>
            <td style="font-weight:600;color:#2563eb">${t.id}</td>
            <td>${t.customer}</td>
            <td>${t.items.join(', ')}</td>
            <td><strong>Rp ${formatPrice(t.total)}</strong></td>
            <td style="color:#64748b">${t.date}</td>
            <td>${statusBadge(t.status)}</td>
        </tr>
    `).join('');
}

// ========== FINANCE ==========
function renderFinance(period = 'today') {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const thisMonth = today.slice(0, 7);
    const thisYear = today.slice(0, 4);

    // Filter transaksi berdasarkan periode (hanya completed)
    let filteredTransactions = dummyData.transactions.filter(t => t.status === 'completed');
    if (period === 'today') {
        filteredTransactions = filteredTransactions.filter(t => t.date.startsWith(today));
    } else if (period === 'week') {
        const weekAgo = new Date(now);
        weekAgo.setDate(weekAgo.getDate() - 7);
        const weekAgoStr = weekAgo.toISOString().split('T')[0];
        filteredTransactions = filteredTransactions.filter(t => {
            const txDate = t.date.split('T')[0];
            return txDate >= weekAgoStr && txDate <= today;
        });
    } else if (period === 'month') {
        filteredTransactions = filteredTransactions.filter(t => t.date.startsWith(thisMonth));
    }

    const totalRevenue = filteredTransactions.reduce((sum, t) => sum + t.total, 0);
    const totalExpenses = dummyData.expenses
        .filter(e => period === 'today' ? e.date === today : period === 'week' ? true : period === 'month' ? e.date.startsWith(thisMonth) : e.date.startsWith(thisYear))
        .reduce((sum, e) => sum + e.amount, 0);
    const netProfit = totalRevenue - totalExpenses;
    const avgTransaction = filteredTransactions.length > 0 ? Math.round(totalRevenue / filteredTransactions.length) : 0;
    const completedCount = filteredTransactions.filter(t => t.status === 'completed').length;

    document.getElementById('financeRevenue').textContent = `Rp ${formatPrice(totalRevenue)}`;
    document.getElementById('financeExpense').textContent = `Rp ${formatPrice(totalExpenses)}`;
    document.getElementById('financeProfit').textContent = `Rp ${formatPrice(Math.max(0, netProfit))}`;
    document.getElementById('financeAvg').textContent = `Rp ${formatPrice(avgTransaction)}`;

    document.getElementById('financeRevenueChange').textContent = `Dari ${filteredTransactions.length} transaksi`;
    document.getElementById('financeExpenseChange').textContent = `${dummyData.expenses.length} item pengeluaran`;
    document.getElementById('financeProfitChange').textContent = netProfit >= 0 ? '🟢 Untung' : '🔴 Rugi';
    document.getElementById('financeProfitChange').style.color = netProfit >= 0 ? '#16a34a' : '#ef4444';
    document.getElementById('financeAvgChange').textContent = `${completedCount} transaksi selesai`;

    // Revenue Chart
    renderRevenueChart(filteredTransactions);

    // Expense List
    renderExpenseList(period);

    // Finance History Table
    renderFinanceTable(filteredTransactions);
}

function renderRevenueChart(filteredTransactions) {
    const container = document.getElementById('revenueChart');

    if (filteredTransactions.length === 0) {
        container.innerHTML = '<div style="color:#94a3b8;font-size:13px;text-align:center;width:100%;padding:40px 0">Belum ada data transaksi untuk periode ini</div>';
        return;
    }

    const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
    const dayData = days.map((label, i) => {
        const dayIndex = (i + 1) % 7;
        const dayTxs = filteredTransactions.filter(t => new Date(t.date).getDay() === dayIndex);
        const total = dayTxs.reduce((s, t) => s + t.total, 0);
        return { label, value: total, count: dayTxs.length };
    });

    const maxVal = Math.max(...dayData.map(d => d.value), 1);

    container.innerHTML = dayData.map(d => {
        const heightPct = Math.max((d.value / maxVal) * 100, 4);
        return `
            <div class="chart-bar-wrapper">
                <div class="chart-bar" style="height: ${heightPct}%">
                    <span class="bar-tooltip">Rp ${formatPrice(d.value)}</span>
                </div>
                <span class="chart-label">${d.label}</span>
            </div>
        `;
    }).join('');
}

function renderExpenseList(period) {
    const container = document.getElementById('expenseList');
    const now = new Date().toISOString().split('T')[0];
    const thisMonth = now.slice(0, 7);

    // Filter expenses by period
    let filtered = dummyData.expenses;
    if (period === 'today') {
        filtered = filtered.filter(e => e.date === now);
    } else if (period === 'month') {
        filtered = filtered.filter(e => e.date.startsWith(thisMonth));
    }
    // week & year: tampilkan semua (data dummy terbatas)

    const sorted = [...filtered].sort((a, b) => b.amount - a.amount);
    
    if (sorted.length === 0) {
        container.innerHTML = '<div style="color:#94a3b8;font-size:13px;text-align:center;padding:20px 0">Tidak ada pengeluaran untuk periode ini</div>';
        document.getElementById('expenseTotalAmount').textContent = 'Rp 0';
        return;
    }

    container.innerHTML = sorted.slice(0, 5).map(e => `
        <div class="expense-item">
            <div class="expense-icon ${e.icon}">
                <i class="fa-solid fa-${e.icon === 'gaji' ? 'users' : e.icon === 'bahan' ? 'basket-shopping' : e.icon === 'sewa' ? 'building' : e.icon === 'util' ? 'bolt' : 'ellipsis'}"></i>
            </div>
            <div class="expense-info">
                <strong>${e.category}</strong>
                <span>${e.desc}</span>
            </div>
            <span class="expense-amount">-Rp ${formatPrice(e.amount)}</span>
        </div>
    `).join('');

    const totalExpense = filtered.reduce((s, e) => s + e.amount, 0);
    document.getElementById('expenseTotalAmount').textContent = `Rp ${formatPrice(totalExpense)}`;
}

function renderFinanceTable(filteredTransactions) {
    const tbody = document.getElementById('financeTableBody');
    const rows = [];

    // Add transactions as income (filtered by period already)
    filteredTransactions.forEach(t => {
        rows.push({
            date: t.date,
            category: 'Pendapatan',
            desc: `${t.customer} — ${t.items.join(', ')}`,
            type: 'income',
            amount: t.total
        });
    });

    // Add expenses (all expenses for demo, top limit by slice)
    dummyData.expenses.forEach(e => {
        rows.push({
            date: e.date,
            category: e.category,
            desc: e.desc,
            type: 'expense',
            amount: -e.amount
        });
    });

    // Sort by date descending
    rows.sort((a, b) => b.date.localeCompare(a.date));

    if (rows.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#94a3b8;padding:30px">Belum ada data keuangan</td></tr>';
        return;
    }

    tbody.innerHTML = rows.slice(0, 15).map(r => `
        <tr>
            <td style="color:#64748b">${r.date}</td>
            <td><span class="badge ${r.type === 'income' ? 'badge-success' : 'badge-danger'}">${r.category}</span></td>
            <td>${r.desc}</td>
            <td>${r.type === 'income' ? '<span style="color:#16a34a">Pemasukan</span>' : '<span style="color:#ef4444">Pengeluaran</span>'}</td>
            <td style="font-weight:600;color:${r.type === 'income' ? '#16a34a' : '#ef4444'}">
                ${r.type === 'income' ? '+' : '-'} Rp ${formatPrice(Math.abs(r.amount))}
            </td>
        </tr>
    `).join('');
}

function renderQRCodes() {
    const grid = document.getElementById('qrGrid');
    grid.innerHTML = dummyData.tables.map((table, index) => `
        <div class="qr-card">
            <div class="qr-card-icon">
                <i class="fa-solid fa-qrcode"></i>
            </div>
            <h3>${table.name}</h3>
            <p>Kapasitas: ${table.capacity} orang</p>
            <div class="cctv-status">
                <i class="fa-solid fa-video"></i>
                <span class="status-text ${table.active ? 'occupied' : 'empty'}">
                    ${table.active ? 'Terisi' : 'Kosong'}
                </span>
                <span class="cctv-dot"></span>
            </div>
        </div>
    `).join('');
}

// ========== ACTIONS ==========
let editingMenuId = null;

function openModal(menuId = null) {
    editingMenuId = menuId;
    document.getElementById('modalOverlay').classList.add('open');
    document.getElementById('modalTitle').textContent = menuId ? 'Edit Menu' : 'Tambah Menu';

    if (menuId) {
        const item = dummyData.menuItems.find(i => i.id === menuId);
        document.getElementById('menuName').value = item.name;
        document.getElementById('menuCategory').value = item.category;
        document.getElementById('menuPrice').value = item.price;
        document.getElementById('menuDesc').value = item.desc;
        document.getElementById('menuAvailable').checked = item.available;
    } else {
        document.getElementById('menuName').value = '';
        document.getElementById('menuCategory').value = 'Makanan';
        document.getElementById('menuPrice').value = '';
        document.getElementById('menuDesc').value = '';
        document.getElementById('menuAvailable').checked = true;
    }
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    editingMenuId = null;
}

function saveMenu() {
    const name = document.getElementById('menuName').value.trim();
    const category = document.getElementById('menuCategory').value;
    const price = parseInt(document.getElementById('menuPrice').value);
    const desc = document.getElementById('menuDesc').value.trim();
    const available = document.getElementById('menuAvailable').checked;

    if (!name || !price) {
        alert('Nama dan harga harus diisi!');
        return;
    }

    if (editingMenuId) {
        const item = dummyData.menuItems.find(i => i.id === editingMenuId);
        item.name = name;
        item.category = category;
        item.price = price;
        item.desc = desc;
        item.available = available;
    } else {
        const newId = Math.max(...dummyData.menuItems.map(i => i.id)) + 1;
        dummyData.menuItems.push({ id: newId, name, category, price, desc, available, orders: 0 });
    }

    closeModal();
    renderMenuTable(document.querySelector('.toolbar-tab.active')?.dataset?.filter || 'all');
    renderPopularItems();
}

function deleteMenuItem(id) {
    if (!confirm('Hapus menu ini?')) return;
    dummyData.menuItems = dummyData.menuItems.filter(i => i.id !== id);
    renderMenuTable(document.querySelector('.toolbar-tab.active')?.dataset?.filter || 'all');
    renderPopularItems();
}

function toggleMenuAvailability(id) {
    const item = dummyData.menuItems.find(i => i.id === id);
    if (item) {
        item.available = !item.available;
        renderMenuTable(document.querySelector('.toolbar-tab.active')?.dataset?.filter || 'all');
    }
}

function editMenuItem(id) {
    openModal(id);
}

function viewCustomerOrders(name) {
    const orders = dummyData.transactions.filter(t => t.customer === name);
    const total = orders.reduce((sum, t) => sum + t.total, 0);
    alert(`📋 Riwayat Pesanan ${name}\n\nTotal Transaksi: ${orders.length}\nTotal Belanja: Rp ${formatPrice(total)}\n\nPesanan:\n${orders.map(t => `  • ${t.date} — ${t.items.join(', ')} — Rp ${formatPrice(t.total)}`).join('\n')}`);
}

// ========== NAVIGATION ==========
document.addEventListener('DOMContentLoaded', () => {

    // Sidebar navigation
    document.querySelectorAll('.nav-item[data-section]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
            document.getElementById(`section-${section}`).classList.add('active');

            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('open');
            }
        });
    });

    // Card action navigation
    document.querySelectorAll('.card-action[data-nav]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.nav;
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            document.querySelector(`.nav-item[data-section="${section}"]`).classList.add('active');
            document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
            document.getElementById(`section-${section}`).classList.add('active');
        });
    });

    // Sidebar toggle (mobile)
    document.getElementById('sidebarToggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });

    // Toolbar tabs (menu, transactions, finance)
    document.querySelectorAll('.toolbar-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const parent = tab.closest('.toolbar');
            parent.querySelectorAll('.toolbar-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const section = tab.closest('.content-section');

            if (section?.id === 'section-menu') {
                renderMenuTable(tab.dataset.filter, document.getElementById('searchMenu')?.value || '');
            } else if (section?.id === 'section-transactions') {
                renderTransactions(tab.dataset.filter, document.getElementById('searchTransaction')?.value || '');
            } else if (section?.id === 'section-finance') {
                renderFinance(tab.dataset.period || 'today');
            }
        });
    });

    // Search inputs
    document.getElementById('searchMenu')?.addEventListener('input', (e) => {
        const filter = document.querySelector('#section-menu .toolbar-tab.active')?.dataset?.filter || 'all';
        renderMenuTable(filter, e.target.value);
    });

    document.getElementById('searchCustomer')?.addEventListener('input', (e) => {
        renderCustomers(e.target.value);
    });

    document.getElementById('searchTransaction')?.addEventListener('input', (e) => {
        const filter = document.querySelector('#section-transactions .toolbar-tab.active')?.dataset?.filter || 'all';
        renderTransactions(filter, e.target.value);
    });

    // Modal
    document.getElementById('btnAddMenu').addEventListener('click', () => openModal());
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalCancel').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.getElementById('modalSave').addEventListener('click', saveMenu);
    document.getElementById('menuForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveMenu();
    });

    // Add table
    document.getElementById('btnAddTable').addEventListener('click', () => {
        const nextId = dummyData.tables.length + 1;
        dummyData.tables.push({ id: `T-${String(nextId).padStart(2, '0')}`, name: `Meja ${nextId}`, capacity: 4, active: false });
        renderQRCodes();
    });

    // Settings form
    document.getElementById('settingsForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✅ Pengaturan berhasil disimpan!');
    });

    // Global search
    document.getElementById('globalSearch').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const q = e.target.value.trim().toLowerCase();
            // Search in menu
            const menuMatch = dummyData.menuItems.find(i => i.name.toLowerCase().includes(q));
            if (menuMatch) {
                // Navigate to menu section
                document.querySelector('.nav-item[data-section="menu"]').click();
                document.getElementById('searchMenu').value = q;
                renderMenuTable('all', q);
                return;
            }
            // Search in customers
            const custMatch = dummyData.customers.find(c => c.name.toLowerCase().includes(q));
            if (custMatch) {
                document.querySelector('.nav-item[data-section="customers"]').click();
                document.getElementById('searchCustomer').value = q;
                renderCustomers(q);
                return;
            }
            alert('🔍 Tidak ditemukan hasil untuk: ' + e.target.value);
        }
    });

    // Notification button
    document.getElementById('notifBtn').addEventListener('click', () => {
        const pending = dummyData.transactions.filter(t => t.status === 'pending').length;
        alert(`🔔 Ada ${pending} pesanan pending yang perlu diproses.`);
    });

    // INITIAL RENDER
    renderStats();
    renderRecentOrders();
    renderPopularItems();
    renderMenuTable();
    renderCustomers();
    renderTransactions();
    renderFinance();
    renderQRCodes();
});
