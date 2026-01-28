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