function selectOrder(type) {
    if (type === 'Dine-In') {
        window.location.href = 'dinein.html';
    } else if (type === 'Takeaway') {
        alert('Kamu memilih Takeaway. Silakan tunggu nomor antrianmu.');
    }
}
