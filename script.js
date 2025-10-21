        // scroll
        const revealElements = document.querySelectorAll('.anim-entrada');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visivel');
                }
            });
        }, { threshold: 0.1 });
        revealElements.forEach(el => observer.observe(el));

        // carousel
        document.addEventListener('DOMContentLoaded', () => {
            const carousel = document.querySelector('#award-carousel');
            if (carousel) {
                const container = carousel.querySelector('.carrossel-container');
                const nextButton = carousel.querySelector('.next');
                const prevButton = carousel.querySelector('.prev');
                let currentIndex = 0;
                let slides = Array.from(container.children);

                function goToSlide(index) {
                    if (index < 0) index = slides.length - 1;
                    if (index >= slides.length) index = 0;
                    container.style.transform = `translateX(-${index * 100}%)`;
                    currentIndex = index;
                }
                nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));
                prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
            }
        });