// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (for smaller screens)
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.setAttribute('tabindex', '0');
    mobileMenuToggle.setAttribute('aria-label', 'Open navigation menu');
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.header-container').prepend(mobileMenuToggle);

    // Toggle navigation for mobile
    mobileMenuToggle.addEventListener('click', function() {
        document.querySelector('.main-nav').classList.toggle('active');
        this.classList.toggle('open');
        document.body.classList.toggle('nav-open');
    });
    // Support keyboard navigation
    mobileMenuToggle.addEventListener('keydown', function(e) {
        if (e.key === "Enter" || e.key === " "){
            this.click();
        }
    });

    // Close nav on outside click for mobile
    document.addEventListener('click', function(e) {
        if (
            document.querySelector('.main-nav.active') &&
            !document.querySelector('.main-nav').contains(e.target) &&
            !mobileMenuToggle.contains(e.target)
        ) {
            document.querySelector('.main-nav').classList.remove('active');
            mobileMenuToggle.classList.remove('open');
            document.body.classList.remove('nav-open');
        }
    });

    // Scroll animation for product cards
    const animateOnScroll = () => {
        const productCards = document.querySelectorAll('.product-card');
        const windowHeight = window.innerHeight;
        productCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const scrollPosition = windowHeight - 100;
            if (cardPosition < scrollPosition) {
                card.classList.add('show');
            }
        });
    };

    // Initial check
    animateOnScroll();

    // Check on scroll and window resize
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('resize', animateOnScroll);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !document.querySelector(targetId)) return;
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Sign in form submitted!');
            signinForm.reset();
        });
    }
});
