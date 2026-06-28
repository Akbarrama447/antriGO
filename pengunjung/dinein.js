const tableData = {
    1: { table: 'Table 5', desc: 'A cozy single seat at the counter, perfect for solo dining.', rating: '4.6', label: 'Quick & Cozy' },
    2: { table: 'Table 8', desc: 'An intimate two-seater by the window with a garden view.', rating: '4.7', label: 'Romantic Spot' },
    3: { table: 'Table 10', desc: 'A comfortable booth seating, great for small gatherings.', rating: '4.7', label: 'Popular Choice' },
    4: { table: 'Table 12', desc: 'A cozy corner spot near the window, perfect for 4 people.', rating: '4.8', label: 'Popular choice for families' },
    5: { table: 'Table 15', desc: 'A spacious table near the entrance, ideal for groups of 5.', rating: '4.5', label: 'Group Friendly' },
};

function selectPeople(el) {
    document.querySelectorAll('.num-box').forEach(b => b.classList.remove('active'));
    el.classList.add('active');

    const people = el.textContent.trim();
    const data = tableData[people] || tableData[4];

    document.querySelector('.table-title').textContent = data.table;
    document.querySelector('.table-desc').textContent = data.desc;
    document.querySelector('.rating-badge').textContent = data.rating;
    document.querySelector('.rating-text').textContent = data.label;
    document.querySelector('.active-table-box span').textContent = data.table.replace('Table ', 'T');
}

document.querySelector('.btn-view-menu').addEventListener('click', function () {
    localStorage.setItem('orderType', 'dine-in');
    localStorage.removeItem('customerName');
    window.location.href = 'menu.html';
});

document.querySelector('.back-btn').addEventListener('click', function () {
    window.location.href = 'index.html';
});

document.querySelector('.profile-pic img').addEventListener('click', function () {
    window.location.href = 'profile.html';
});
