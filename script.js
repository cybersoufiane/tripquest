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
        navbar.style.boxShadow = '0 2px 20px rgba(255, 183, 107, 0.2)';
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
                    field.style.borderColor = '#ff6b6b';
                    field.focus();
                } else {
                    field.style.borderColor = '#e2e8f0';
                }
            });
            
            if (isValid) {
                // Show success message
                showNotification(successMessage, 'success');
                form.reset();
            } else {
                showNotification('🏝️ Please fill in all required fields to find your perfect hotel!', 'error');
            }
        });
    }
}

// Handle all form submissions
handleFormSubmission('.detailed-booking-form', '🏨 Your hotel search request has been submitted! We\'re finding the best island deals for you.');
handleFormSubmission('.newsletter-form', '🌺 Welcome to Paradise Club! You\'ll receive exclusive hotel deals soon.');

// Quick booking form
const quickBookingForm = document.querySelector('.quick-booking .booking-form');
if (quickBookingForm) {
    const searchBtn = quickBookingForm.querySelector('.search-btn');
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const destinationInput = quickBookingForm.querySelector('input[placeholder*="Where"]');
        const checkinInput = quickBookingForm.querySelector('input[type="date"]');
        
        if (destinationInput.value.trim() && checkinInput.value) {
            showNotification('🔍 Searching for amazing hotel deals...', 'info');
            // Scroll to detailed booking section
            document.querySelector('#booking').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            showNotification('🏖️ Please enter your destination and check-in date to start your hotel search!', 'error');
        }
    });
}

// Hotel deal booking buttons
document.querySelectorAll('.deal-card .book-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.deal-card');
        const hotelName = card.querySelector('h3').textContent;
        const location = card.querySelector('.location').textContent;
        const price = card.querySelector('.deal-price').textContent;
        
        // Scroll to booking section and pre-fill destination
        document.querySelector('#booking').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Pre-fill destination in active tab
        setTimeout(() => {
            const activeTab = document.querySelector('.tab-content.active');
            const destinationInput = activeTab.querySelector('input[placeholder*="Destination"], input[placeholder*="Where"], input[placeholder*="city"], input[placeholder*="location"]');
            if (destinationInput) {
                destinationInput.value = location;
                destinationInput.focus();
            }
        }, 500);
        
        showNotification(`🏨 Selected ${hotelName} at ${price}! Complete your booking details below.`, 'success');
    });
});

// Destination card booking buttons
document.querySelectorAll('.destination-card .book-btn').forEach(button => {
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
            const destinationInput = activeTab.querySelector('input[placeholder*="Destination"], input[placeholder*="Where"], input[placeholder*="city"], input[placeholder*="location"]');
            if (destinationInput) {
                destinationInput.value = destination.replace(/🇲🇻|🇮🇩|🇺🇸|🇫🇯/g, '').trim(); // Remove flag emojis
                destinationInput.focus();
            }
        }, 500);
        
        showNotification(`🏝️ ${destination} selected! Find your perfect hotel below.`, 'success');
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
    
    // Set icon based on type
    let icon = '🏝️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '⚠️';
    if (type === 'info') icon = '🔍';
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icon}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Determine background color
    let bgColor = '#4a90e2';
    if (type === 'success') bgColor = 'linear-gradient(135deg, #48bb78, #38a169)';
    if (type === 'error') bgColor = 'linear-gradient(135deg, #ff6b6b, #e53e3e)';
    if (type === 'info') bgColor = 'linear-gradient(135deg, #4a90e2, #357abd)';
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
        font-weight: 500;
    `;
    
    // Style the close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: 1rem;
        opacity: 0.8;
        transition: opacity 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 6 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 6000);
}

// Date Input Constraints
function setDateConstraints() {
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    
    dateInputs.forEach(input => {
        input.setAttribute('min', today);
        
        // If it's a check-out date, make sure it's after check-in
        if (input.parentElement.querySelector('label').textContent.toLowerCase().includes('check-out') ||
            input.parentElement.querySelector('label').textContent.includes('📅') && 
            input.parentElement.querySelector('label').textContent.toLowerCase().includes('check-out')) {
            
            const checkinInput = input.closest('form').querySelector('input[type="date"]');
            if (checkinInput && checkinInput !== input) {
                checkinInput.addEventListener('change', function() {
                    const checkinDate = new Date(this.value);
                    const nextDay = new Date(checkinDate);
                    nextDay.setDate(checkinDate.getDate() + 1);
                    
                    input.setAttribute('min', nextDay.toISOString().split('T')[0]);
                    if (input.value && input.value <= this.value) {
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
    const elements = document.querySelectorAll('.deal-card, .destination-card, .feature');
    
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
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });
}

// Initialize scroll animations
animateOnScroll();

// Enhanced hover effects for hotel cards
document.querySelectorAll('.deal-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        this.style.boxShadow = '0 25px 70px rgba(255, 107, 107, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
    });
});

// Enhanced hover effects for destination cards
document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.03)';
        this.style.boxShadow = '0 20px 50px rgba(255, 183, 107, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
    });
});

// Paradise mode - Add some fun interactions
function addParadiseEffects() {
    // Add floating animation to palm trees
    const palmTrees = document.querySelector('.palm-trees');
    if (palmTrees) {
        setInterval(() => {
            palmTrees.style.animation = 'none';
            setTimeout(() => {
                palmTrees.style.animation = 'float 6s ease-in-out infinite';
            }, 10);
        }, 6000);
    }
    
    // Add wave animation trigger on scroll
    window.addEventListener('scroll', () => {
        const waves = document.querySelectorAll('.wave');
        if (window.scrollY > 100) {
            waves.forEach((wave, index) => {
                wave.style.animationDuration = `${8 + index}s`;
            });
        }
    });
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-icon {
        font-size: 1.2rem;
    }
    
    .notification-close:hover {
        opacity: 1 !important;
    }
`;
document.head.appendChild(style);

// Initialize paradise effects
addParadiseEffects();

// Search functionality simulation
function simulateHotelSearch(searchType, formData) {
    console.log(`🏨 Performing ${searchType} search with data:`, formData);
    
    const searchMessages = [
        '🔍 Scanning 1000+ luxury resorts...',
        '🏝️ Finding exclusive island deals...',
        '💎 Checking overwater villa availability...',
        '🌺 Comparing beachfront hotel prices...',
        '✨ Finalizing your perfect paradise match...'
    ];
    
    let currentMessage = 0;
    showNotification(searchMessages[currentMessage], 'info');
    
    const searchInterval = setInterval(() => {
        currentMessage++;
        if (currentMessage < searchMessages.length) {
            showNotification(searchMessages[currentMessage], 'info');
        } else {
            clearInterval(searchInterval);
            setTimeout(() => {
                showNotification('🏖️ Search completed! In a real booking system, amazing hotel deals would be displayed here. Welcome to your TripQuest.cc preview!', 'success');
            }, 1000);
        }
    }, 1500);
}

// Console welcome message
console.log('🏖️ Welcome to TripQuest.cc - Your Paradise Hotel Portal! 🌺');
console.log('🏨 This is a demo hotel booking website focused on island getaways and luxury resorts.');
console.log('💡 In a real application, forms would connect to actual hotel booking APIs and payment systems.');
console.log('🌴 Enjoy exploring your slice of digital paradise!');

// Mobile responsive enhancements
function enhanceMobileExperience() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Adjust form layouts for mobile
        const bookingForm = document.querySelector('.booking-form');
        const newsletterForm = document.querySelector('.newsletter-form');
        
        if (bookingForm) {
            bookingForm.style.gridTemplateColumns = '1fr';
            bookingForm.style.gap = '1rem';
        }
        
        if (newsletterForm) {
            newsletterForm.style.flexDirection = 'column';
            newsletterForm.style.gap = '1rem';
        }
        
        // Adjust notification positioning for mobile
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => {
            notification.style.right = '10px';
            notification.style.left = '10px';
            notification.style.maxWidth = 'calc(100% - 20px)';
        });
    }
}

// Call mobile enhancements on load and resize
enhanceMobileExperience();
window.addEventListener('resize', enhanceMobileExperience);

// Add island vibes Easter egg
let clickCount = 0;
document.addEventListener('click', function(e) {
    if (e.target.closest('.nav-logo')) {
        clickCount++;
        if (clickCount === 5) {
            showNotification('🌴 You found the secret paradise mode! Extra island vibes activated! 🏝️', 'success');
            document.body.style.background = 'linear-gradient(45deg, #ff9068, #fd746c, #ff5722)';
            document.body.style.backgroundSize = '400% 400%';
            document.body.style.animation = 'paradiseGradient 15s ease infinite';
            
            // Add paradise gradient animation
            const paradiseStyle = document.createElement('style');
            paradiseStyle.textContent = `
                @keyframes paradiseGradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `;
            document.head.appendChild(paradiseStyle);
            
            clickCount = 0;
        }
    }
});
