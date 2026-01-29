const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgFull");
const closeBtn = document.querySelector(".close");

document.querySelectorAll('.zoomable').forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
    });
});

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });
}

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
