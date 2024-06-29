document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("container-menu-modal");
    const btn = document.getElementById("button-config");
    const close = document.getElementById("btn-close-modal");
    const overlay = document.getElementById("modal-overlay-bg");
    const contentConfig = document.getElementById("modal-content-config");

    // Função para fechar o modal
    const closeModal = () => {
        modal.classList.remove("show", "fade-in");
        contentConfig.classList.remove("fade-in");
        overlay.classList.remove("fade-in");

        modal.classList.add("fade-out");
        contentConfig.classList.add("fade-out");
        overlay.classList.add("fade-out");
    };

    // Manter um ouvinte para o fim da animação
    const handleAnimationEnd = () => {
        if (!modal.classList.contains("fade-in")) {
            modal.style.display = 'none';
            overlay.style.display = 'none';
        }
    };

    overlay.addEventListener('animationend', handleAnimationEnd);

    // Abrir modal ao clicar no button-config
    btn.addEventListener("click", () => {
        modal.style.display = "block";
        overlay.style.display = "block";

        modal.classList.remove("fade-out");
        contentConfig.classList.remove("fade-out");
        overlay.classList.remove("fade-out");

        modal.classList.add("fade-in");
        contentConfig.classList.add("fade-in");
        overlay.classList.add("fade-in");
    });

    // Fechar modal ao clicar no button-close
    close.addEventListener("click", closeModal);

    // Fechar modal se clicar fora dele
    window.addEventListener("click", (event) => {
        if (event.target === overlay) {
            closeModal();
        }
    });
});
