document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Slide Navigation Engine (Controlled via Prev, Next, Dots, Nav, Keys & Wheel)
       ========================================================================== */
    const slidesWrapper = document.getElementById('slides-wrapper');
    const slides = document.querySelectorAll('.slide-page');
    const slideDotsContainer = document.getElementById('slide-dots');
    const slideCounter = document.getElementById('slide-counter');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const totalSlides = slides.length;
    let currentSlideIndex = 0;
    let isTransitioning = false;

    // Dynamically build slide dots
    if (slideDotsContainer) {
        slideDotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = `slide-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                goToSlide(i);
            });
            slideDotsContainer.appendChild(dot);
        }
    }

    window.goToSlide = function(index) {
        if (index < 0 || index >= totalSlides || isTransitioning) return;
        
        isTransitioning = true;
        currentSlideIndex = index;

        // Slide transform
        slidesWrapper.style.transform = `translateX(-${currentSlideIndex * 100}vw)`;

        // Update active slide class
        slides.forEach((slide, idx) => {
            if (idx === currentSlideIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update navigation dots
        const dots = document.querySelectorAll('.slide-dot');
        dots.forEach((dot, idx) => {
            if (idx === currentSlideIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Update navbar active state
        navLinks.forEach((link, idx) => {
            if (idx === currentSlideIndex) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Update counter badge text
        if (slideCounter) {
            const pageNum = String(currentSlideIndex + 1).padStart(2, '0');
            const totalNum = String(totalSlides).padStart(2, '0');
            slideCounter.textContent = `Page ${pageNum} / ${totalNum}`;
        }

        setTimeout(() => {
            isTransitioning = false;
        }, 800);
    };

    window.nextSlide = function() {
        if (currentSlideIndex < totalSlides - 1) {
            goToSlide(currentSlideIndex + 1);
        } else {
            goToSlide(0); // Loop back to start
        }
    };

    window.prevSlide = function() {
        if (currentSlideIndex > 0) {
            goToSlide(currentSlideIndex - 1);
        }
    };

    /* Keyboard Navigation (Left & Right Arrow Keys ONLY) */
    document.addEventListener('keydown', (e) => {
        // Prevent interfering with input fields if any
        if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;

        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    /* Mouse wheel event listener completely removed so user can freely scroll up/down inside any slide without switching pages */

    /* ==========================================================================
       2. Theme Toggle (Dark / Light Mode)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('portfolio-theme', newTheme);
        });
    }
});
