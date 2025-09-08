// Generate floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Scroll progress indicator
function updateScrollIndicator() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (!scrollIndicator) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollIndicator.style.width = scrollPercent + '%';
}

// Fade in animation on scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// UPDATED: Contact form handling for a better UX
function setupContactForm() {
    const form = document.querySelector('.contact-form');
    const successMessage = document.getElementById('form-success-message');
    
    if (!form || !successMessage) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Hide the form and show the success message
        form.style.display = 'none';
        successMessage.style.display = 'block';

        // Optional: Reset form and show it again after a delay
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            successMessage.style.display = 'none';
        }, 5000); // Re-shows the form after 5 seconds
    });
}

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    setupSmoothScrolling();
    setupContactForm();
    handleScrollAnimations(); // Initial check
});

// Handle scroll events
window.addEventListener('scroll', function() {
    updateScrollIndicator();
    handleScrollAnimations();
});

// Handle resize events
window.addEventListener('resize', function() {
    handleScrollAnimations();
});
