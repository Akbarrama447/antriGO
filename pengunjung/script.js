localStorage.removeItem('orderType');
localStorage.removeItem('customerName');

function selectOrder(type) {
    if (type === 'Dine-In') {
        window.location.href = 'dinein.html';
    } else if (type === 'Takeaway') {
        window.location.href = 'takeaway.html';
    }
}
