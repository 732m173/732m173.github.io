// Custom cursor
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursorTrail');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
    }, 80);
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 120);
        }
    });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Modal
function openModal(src, alt) {
    const modal = document.getElementById('imageModal');
    document.getElementById('imgFull').src = src;
    document.getElementById('imgFull').alt = alt;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('imageModal').classList.remove('active');
}

window.addEventListener('click', e => {
    const modal = document.getElementById('imageModal');
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});
