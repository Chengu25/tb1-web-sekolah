// JavaScript for Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);

// Login Modal
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeModal');

loginBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form submissions
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login functionality would be implemented here!');
    modal.style.display = 'none';
});

document.querySelector('.registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pendaftaran berhasil dikirim! Tim kami akan menghubungi Anda segera.');
    this.reset();
});