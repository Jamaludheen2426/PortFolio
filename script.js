// =============================================
// PORTFOLIO WEBSITE JAVASCRIPT - FIXED VERSION
// Created by J. M. Jamal
// =============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // =============================================
    // THEME TOGGLE FUNCTIONALITY
    // =============================================
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to 'dark'
    const currentTheme = sessionStorage.getItem('theme') || 'dark';
    
    // Set initial theme
    if (currentTheme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            sessionStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            sessionStorage.setItem('theme', 'dark');
        }
    });

    // =============================================
    // MOBILE NAVIGATION TOGGLE
    // =============================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // =============================================
    // SMOOTH SCROLLING FOR NAVIGATION LINKS
    // =============================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =============================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // =============================================
    function updateActiveNav() {
        const sections = document.querySelectorAll('.section, .hero');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 50;
            const sectionHeight = section.offsetHeight;
            const scrollY = window.pageYOffset;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call

    // =============================================
    // SCROLL REVEAL ANIMATIONS
    // =============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Animate skill bars when about section is revealed
                if (entry.target.classList.contains('about')) {
                    setTimeout(() => {
                        animateSkillBars();
                    }, 300);
                }
                
                // Animate section titles
                const sectionTitle = entry.target.querySelector('.section-title');
                if (sectionTitle) {
                    sectionTitle.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe all sections for reveal animations
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });

    // =============================================
    // SKILL BARS ANIMATION
    // =============================================
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach((bar, index) => {
            const width = bar.getAttribute('data-width');
            if (width) {
                setTimeout(() => {
                    bar.style.width = width;
                }, index * 200);
            }
        });
    }

    // =============================================
    // HERO SCROLL FUNCTIONALITY
    // =============================================
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = aboutSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // =============================================
    // PROJECT FILTERING
    // =============================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    
                    // Animate in
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // =============================================
    // CONTACT FORM VALIDATION AND SUBMISSION
    // =============================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Clear previous errors
            clearFormErrors();
            
            let isValid = true;
            
            // Validate name
            if (!name || name.trim().length < 2) {
                showFormError('name', 'Please enter a valid name (at least 2 characters)');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                showFormError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate message
            if (!message || message.trim().length < 10) {
                showFormError('message', 'Please enter a message (at least 10 characters)');
                isValid = false;
            }
            
            if (isValid) {
                // Simulate form submission
                const submitButton = this.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitButton.disabled = true;
                
                setTimeout(() => {
                    submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    submitButton.style.background = '#2ecc71';
                    
                    // Reset form
                    this.reset();
                    
                    setTimeout(() => {
                        submitButton.innerHTML = originalText;
                        submitButton.disabled = false;
                        submitButton.style.background = '';
                    }, 3000);
                }, 2000);
            }
        });
    }

    function showFormError(fieldName, message) {
        const field = document.getElementById(fieldName);
        const errorElement = field.parentNode.querySelector('.form-error');
        
        if (errorElement) {
            errorElement.textContent = message;
            field.style.borderColor = '#ff4757';
        }
    }

    function clearFormErrors() {
        const errorElements = document.querySelectorAll('.form-error');
        const inputElements = document.querySelectorAll('.form-group input, .form-group textarea');
        
        errorElements.forEach(element => {
            element.textContent = '';
        });
        
        inputElements.forEach(input => {
            input.style.borderColor = '';
        });
    }

    // =============================================
    // NAVBAR BACKGROUND ON SCROLL
    // =============================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(18, 18, 26, 0.95)';
            if (body.classList.contains('light-theme')) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        } else {
            navbar.style.background = '';
        }
    });

    // =============================================
    // PARTICLE ANIMATION
    // =============================================
    function createFloatingParticles() {
        const particlesContainer = document.querySelector('.particles');
        
        if (particlesContainer) {
            // Create floating particles
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 4 + 1}px;
                    height: ${Math.random() * 4 + 1}px;
                    background: ${Math.random() > 0.5 ? 'var(--accent-primary)' : 'var(--accent-secondary)'};
                    border-radius: 50%;
                    opacity: ${Math.random() * 0.5 + 0.2};
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation: float ${Math.random() * 15 + 10}s infinite linear;
                    animation-delay: ${Math.random() * 5}s;
                    pointer-events: none;
                `;
                
                particlesContainer.appendChild(particle);
            }
        }
    }

    // Add CSS for float animation
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
            33% { transform: translate(30px, -30px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
            100% { transform: translate(0, 0) rotate(360deg); opacity: 1; }
        }
    `;
    document.head.appendChild(floatStyle);

    // Initialize floating particles
    createFloatingParticles();

    // =============================================
    // SCROLL TO TOP FUNCTIONALITY
    // =============================================
    const scrollToTop = document.createElement('button');
    scrollToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTop.className = 'scroll-to-top';
    
    document.body.appendChild(scrollToTop);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollToTop.classList.add('visible');
        } else {
            scrollToTop.classList.remove('visible');
        }
    });
    
    // Scroll to top functionality
    scrollToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // =============================================
    // TYPING EFFECT FOR HERO SECTION (OPTIONAL)
    // =============================================
    function createTypingEffect() {
        const typingText = document.querySelector('.typing-text');
        if (typingText) {
            const originalText = typingText.textContent;
            typingText.textContent = '';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < originalText.length) {
                    typingText.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 100);
        }
    }

    // Uncomment the line below to enable typing effect
    // createTypingEffect();

    // =============================================
    // PERFORMANCE MONITORING
    // =============================================
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    console.log(`⚡ Page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
                }
            }, 0);
        });
    }

    // =============================================
    // UTILITY FUNCTIONS
    // =============================================
    
    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll event handlers for better performance
    const debouncedUpdateNav = debounce(updateActiveNav, 100);
    window.removeEventListener('scroll', updateActiveNav);
    window.addEventListener('scroll', debouncedUpdateNav);

    // =============================================
    // EASTER EGG (KONAMI CODE)
    // =============================================
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];

    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode = konamiCode.slice(-konamiSequence.length);
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            // Activate rainbow mode
            document.body.style.animation = 'rainbow 2s infinite';
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
            
            setTimeout(() => {
                document.body.style.animation = '';
                style.remove();
            }, 10000);
            
            console.log('🌈 Rainbow mode activated! You found the easter egg!');
            alert('🎉 Congratulations! You found the secret easter egg!');
        }
    });

    // =============================================
    // CONSOLE GREETING MESSAGE
    // =============================================
    console.log(`
    🎨 Portfolio Website by J. M. Jamal
    
    👨‍💻 Node.js Developer & UI/UX Designer
    🚀 Creating seamless digital experiences
    
    📧 Contact: jamal@example.com
    🌐 GitHub: https://github.com/Jamaludheen2426
    
    Built with ❤️ using HTML, CSS, and Vanilla JavaScript
    `);

    // =============================================
    // INTERSECTION OBSERVER FOR BETTER ANIMATIONS
    // =============================================
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Animate elements on scroll
    document.querySelectorAll('.project-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        animateOnScroll.observe(el);
    });

    // =============================================
    // SMOOTH SCROLL POLYFILL FOR OLDER BROWSERS
    // =============================================
    if (!('scrollBehavior' in document.documentElement.style)) {
        const smoothScrollPolyfill = function(target, duration = 800) {
            const targetPosition = target.offsetTop - document.querySelector('.navbar').offsetHeight;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        };

        // Override smooth scroll for nav links if needed
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    smoothScrollPolyfill(target);
                }
            });
        });
    }

}); // End of DOMContentLoaded