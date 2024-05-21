document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll('.footer__mobileViewBtn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const icon = event.currentTarget.querySelector('i');
            const targetId = icon.getAttribute('data-toggle');
            const targetElement = document.querySelector(`#${targetId}`);

            if (targetElement.style.display === "block") {
                icon.classList.add('footer-top');
                icon.classList.remove('footer-bottom');
                targetElement.style.display = "none";
            } else {
                icon.classList.add('footer-bottom');
                icon.classList.remove('footer-top');
                targetElement.style.display = "block";
            }
        });
    });
});










