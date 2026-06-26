document.addEventListener('DOMContentLoaded', () => {
    // Scroll dari Hero ke Form Register
    const btnGetStarted = document.getElementById('btnGetStarted');
    if (btnGetStarted) {
        btnGetStarted.addEventListener('click', () => {
            const registerSection = document.getElementById('register-section');
            if (registerSection) {
                registerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    const monthlyPlan = document.getElementById('plan-monthly');
    const annualPlan = document.getElementById('plan-annual');
    const registerForm = document.getElementById('registerForm');

    // Berfungsi mengalihkan style active saat plan di-klik
    function selectPlan(selected, unselected) {
        selected.classList.add('active');
        unselected.classList.remove('active');
        
        // Update visual radio button tiruan
        selected.querySelector('.radio-custom').classList.add('checked');
        unselected.querySelector('.radio-custom').classList.remove('checked');
    }

    monthlyPlan.addEventListener('click', () => {
        selectPlan(monthlyPlan, annualPlan);
    });

    annualPlan.addEventListener('click', () => {
        selectPlan(annualPlan, monthlyPlan);
    });

    // Simulasi Submit Form
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Ambil plan yang sedang aktif
        const activePlan = document.querySelector('.plan-card.active .plan-title').innerText;
        
        const formData = {
            businessName: document.getElementById('businessName').value,
            workEmail: document.getElementById('workEmail').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            plan: activePlan
        };

        console.log('Form Submitted Data:', formData);
        
        // Simulasi registrasi sukses → redirect ke dashboard
        alert(`✅ Selamat datang di AntriGo! Akun bisnis "${formData.businessName}" berhasil dibuat dengan paket ${formData.plan}.`);
        window.location.href = 'dashboard.html';
    });
});