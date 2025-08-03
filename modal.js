document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const contactLink = document.getElementById("contactLink");
    const closeBtn = document.getElementById("modalClose");
    const modalContent = modal.querySelector(".modal-content");

    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
        
        modalContent.style.opacity = "0";
        modalContent.style.transform = "scale(0.8)";
        requestAnimationFrame(() => {
            modalContent.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            modalContent.style.opacity = "1";
            modalContent.style.transform = "scale(1)";
        });
    });

    function closeModal() {
        modalContent.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        modalContent.style.opacity = "0";
        modalContent.style.transform = "scale(0.8)";
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
