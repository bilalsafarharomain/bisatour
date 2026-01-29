const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Buka Tutup Menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// TUTUP MENU OTOMATIS SAAT LINK DIKLIK (PENTING BUAT HP)
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
// HILANGKAN PRELOADER SAAT WEB SELESAI DIMUAT
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('loaded');
    }, 2000); // Tahan 2 detik biar Bismillah terbaca
});

/* --- LOGIKA POP-UP MODAL --- */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex"; // Munculkan modal
    document.body.style.overflow = "hidden"; // Kunci scroll layar belakang
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none"; // Sembunyikan modal
    document.body.style.overflow = "auto"; // Buka kunci scroll
}

// Tutup modal kalau user klik di area gelap (luar kotak)
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}