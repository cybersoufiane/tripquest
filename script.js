// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Booking Tabs Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        this.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Form Validation and Submission
function handleFormSubmission(formSelector, successMessage) {
    const form = document.querySelector(formSelector);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ef4444';
                    field.focus();
                } else {
                    field.style.borderColor = '#e5e7eb';
                }
            });
            
            if (isValid) {
                // Show success message
                showNotification(successMessage, 'success');
                form.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    }
}

// Handle all form submissions
handleFormSubmission('.detailed-booking-form', 'Your search request has been submitted! We\'ll find the best options for you.');
handleFormSubmission('.newsletter-form', 'Thank you for subscribing to our newsletter!');

// Quick booking form
const quickBookingForm = document.querySelector('.quick-booking .booking-form');
if (quickBookingForm) {
    const searchBtn = quickBookingForm.querySelector('.search-btn');
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const fromInput = quickBookingForm.querySelector('input[placeholder="Departure city"]');
        const toInput = quickBookingForm.querySelector('input[placeholder="Destination"]');
        
        if (fromInput.value.trim() && toInput.value.trim()) {
            showNotification('Searching for flights...', 'success');
            // Scroll to detailed booking section
            document.querySelector('#booking').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            showNotification('Please enter departure and destination cities.', 'error');
        }
    });
}

// Destination card booking buttons
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.destination-card');
        const destination = card.querySelector('h3').textContent;
        
        // Scroll to booking section and pre-fill destination
        document.querySelector('#booking').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Pre-fill destination in active tab
        setTimeout(() => {
            const activeTab = document.querySelector('.tab-content.active');
            const destinationInput = activeTab.querySelector('input[placeholder*="Destination"], input[placeholder*="Where"], input[placeholder*="going"]');
            if (destinationInput) {
                destinationInput.value = destination.split(',')[0]; // Get city name only
                destinationInput.focus();
            }
        }, 500);
        
        showNotification(`Selected ${destination}. Please complete your booking details.`, 'success');
    });
});

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}
            </span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Date Input Constraints
function setDateConstraints() {
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    
    dateInputs.forEach(input => {
        input.setAttribute('min', today);
        
        // If it's a return date, make sure it's after departure
        if (input.parentElement.querySelector('label').textContent.toLowerCase().includes('return') ||
            input.parentElement.querySelector('label').textContent.toLowerCase().includes('check-out')) {
            
            const departureInput = input.closest('form').querySelector('input[type="date"]');
            if (departureInput && departureInput !== input) {
                departureInput.addEventListener('change', function() {
                    input.setAttribute('min', this.value);
                    if (input.value && input.value < this.value) {
                        input.value = '';
                    }
                });
            }
        }
    });
}

// Initialize date constraints
setDateConstraints();

// Scroll Animation for Elements
function animateOnScroll() {
    const elements = document.querySelectorAll('.destination-card, .feature');
    
    const observer = new IntersectionObserver((entries) => {
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
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize scroll animations
animateOnScroll();

// Search functionality (placeholder for real implementation)
function performSearch(searchType, formData) {
    // This would typically connect to a real booking API
    console.log(`Performing ${searchType} search with data:`, formData);
    
    // Simulate loading
    showNotification('Searching for the best options...', 'info');
    
    setTimeout(() => {
        showNotification('Search completed! In a real application, results would be displayed here.', 'success');
    }, 2000);
}

// Add some interactive hover effects
document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console welcome message
console.log('🌍 Welcome to Wanderlust Travel! Ready for your next adventure?');
console.log('💡 This is a demo travel booking website. In a real application, forms would connect to actual booking APIs.');

// Add mobile responsive behavior
function handleMobileResponsive() {
    const bookingForm = document.querySelector('.booking-form');
    const newsletterForm = document.querySelector('.newsletter-form');
    
    function updateFormLayout() {
        if (window.innerWidth <= 768) {
            if (bookingForm) {
                bookingForm.style.gridTemplateColumns = '1fr';
            }
            if (newsletterForm) {
                newsletterForm.style.flexDirection = 'column';
            }
        } else {
            if (bookingForm) {
                bookingForm.style.gridTemplateColumns = 'repeat(auto-fit, minmax(180px, 1fr))';
            }
            if (newsletterForm) {
                newsletterForm.style.flexDirection = 'row';
            }
        }
    }
    
    updateFormLayout();
    window.addEventListener('resize', updateFormLayout);
}

// Initialize mobile responsive behavior
handleMobileResponsive();