// Ribio Platform - Main JavaScript File

// Global Variables
let cart = [];
let quizData = [];
let currentQuizQuestion = 0;
let quizAnswers = {};

// Quiz Questions Data
const quizQuestions = [
    {
        id: 1,
        question: "ما هو هدفك الرئيسي من استخدام المنتجات الطبيعية؟",
        options: [
            { id: 'skincare', text: 'تحسين مظهر البشرة والعناية بالبشرة' },
            { id: 'haircare', text: 'تقوية الشعر ومنع تساقطه' },
            { id: 'immunity', text: 'رفع المناعة والصحة العامة' },
            { id: 'wellness', text: 'العافية العامة والاسترخاء' }
        ]
    },
    {
        id: 2,
        question: "ما نوع بشرتك؟",
        options: [
            { id: 'oily', text: 'بشرة دهنية' },
            { id: 'dry', text: 'بشرة جافة' },
            { id: 'combination', text: 'بشرة مختلطة' },
            { id: 'sensitive', text: 'بشرة حساسة' }
        ]
    },
    {
        id: 3,
        question: "هل تعاني من أي مشاكل صحية معينة؟",
        options: [
            { id: 'stress', text: 'التوتر والإجهاد' },
            { id: 'digestion', text: 'مشاكل الهضم' },
            { id: 'sleep', text: 'اضطرابات النوم' },
            { id: 'none', text: 'لا أعاني من مشاكل' }
        ]
    },
    {
        id: 4,
        question: "ما هو مستوى خبرتك مع المنتجات الطبيعية؟",
        options: [
            { id: 'beginner', text: 'مبتدئ - أحتاج إلى guidance' },
            { id: 'intermediate', text: 'متوسط - لدي بعض الخبرة' },
            { id: 'advanced', text: 'متقدم - أستخدمها بانتظام' },
            { id: 'expert', text: 'خبير - أصنع بعض المنتجات بنفسي' }
        ]
    },
    {
        id: 5,
        question: "ما هو ميزانيتك الشهرية للمنتجات الطبيعية؟",
        options: [
            { id: 'budget', text: 'أقل من 2000 دج' },
            { id: 'moderate', text: '2000 - 5000 دج' },
            { id: 'premium', text: '5000 - 10000 دج' },
            { id: 'luxury', text: 'أكثر من 10000 دج' }
        ]
    },
    {
        id: 6,
        question: "ما هو الوقت الذي يمكنك تخصيصه للعناية اليومية؟",
        options: [
            { id: 'minimal', text: '5-10 دقائق فقط' },
            { id: 'moderate', text: '15-30 دقيقة' },
            { id: 'extensive', text: '30-60 دقيقة' },
            { id: 'unlimited', text: 'أكثر من ساعة' }
        ]
    }
];

// Product Recommendations based on quiz results
const productRecommendations = {
    skincare: {
        title: 'روتين العناية بالبشرة',
        products: ['oils-set', 'herbal-soap', 'aloe-vera-gel'],
        description: 'منتجات طبيعية لتنظيف وتغذية بشرتك بأفضل المكونات العضوية'
    },
    haircare: {
        title: 'العناية بالشعر الطبيعية',
        products: ['argan-oil', 'rosemary-shampoo', 'hair-mask'],
        description: 'زيوت وأعشاب لتقوية الشعر وتحفيز نموه بشكل طبيعي'
    },
    immunity: {
        title: 'تقوية المناعة',
        products: ['raw-honey', 'herbs-collection', 'vitamin-c'],
        description: 'مكملات طبيعية لرفع المناعة وتحسين الصحة العامة'
    },
    wellness: {
        title: 'العافية العامة',
        products: ['essential-oils', 'herbal-tea', 'magnesium'],
        description: 'منتجات للاسترخاء والتوازن النفسي والجسدي'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize animations
    initializeAnimations();
    
    // Initialize carousel
    initializeCarousel();
    
    // Initialize particles
    initializeParticles();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Initialize typewriter effect
    initializeTypewriter();
    
    // Load cart from localStorage
    loadCart();
    
    console.log('Ribio Platform initialized successfully');
}

// Animation Initialization
function initializeAnimations() {
    // Animate elements on page load
    anime({
        targets: '.fade-in',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(200),
        duration: 800,
        easing: 'easeOutQuart'
    });
    
    // Animate category icons
    anime({
        targets: '.category-icon',
        scale: [0.8, 1],
        rotate: [0, 360],
        delay: anime.stagger(100),
        duration: 1000,
        easing: 'easeOutElastic(1, .8)'
    });
}

// Carousel Initialization
function initializeCarousel() {
    if (document.getElementById('product-carousel')) {
        new Splide('#product-carousel', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            breakpoints: {
                768: {
                    perPage: 1,
                },
                1024: {
                    perPage: 2,
                }
            }
        }).mount();
    }
}

// Particles Background
function initializeParticles() {
    if (document.getElementById('particles-container')) {
        new p5((p) => {
            let particles = [];
            
            p.setup = function() {
                let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                canvas.parent('particles-container');
                
                // Create particles
                for (let i = 0; i < 50; i++) {
                    particles.push({
                        x: p.random(p.width),
                        y: p.random(p.height),
                        size: p.random(2, 6),
                        speedX: p.random(-0.5, 0.5),
                        speedY: p.random(-0.5, 0.5),
                        opacity: p.random(0.1, 0.3)
                    });
                }
            };
            
            p.draw = function() {
                p.clear();
                
                // Update and draw particles
                particles.forEach(particle => {
                    particle.x += particle.speedX;
                    particle.y += particle.speedY;
                    
                    // Wrap around edges
                    if (particle.x < 0) particle.x = p.width;
                    if (particle.x > p.width) particle.x = 0;
                    if (particle.y < 0) particle.y = p.height;
                    if (particle.y > p.height) particle.y = 0;
                    
                    // Draw particle
                    p.fill(135, 169, 107, particle.opacity * 255);
                    p.noStroke();
                    p.ellipse(particle.x, particle.y, particle.size);
                });
            };
            
            p.windowResized = function() {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };
        });
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate the element
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 800,
                    easing: 'easeOutQuart'
                });
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Typewriter Effect
function initializeTypewriter() {
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['والجمال', 'والصحة', 'والعافية'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
}

// Quiz Functions
function startQuiz() {
    currentQuizQuestion = 0;
    quizAnswers = {};
    document.getElementById('quiz-modal').classList.remove('hidden');
    document.getElementById('quiz-modal').classList.add('flex');
    document.getElementById('quiz-results').classList.add('hidden');
    showQuizQuestion();
}

function closeQuiz() {
    document.getElementById('quiz-modal').classList.add('hidden');
    document.getElementById('quiz-modal').classList.remove('flex');
}

function showQuizQuestion() {
    const question = quizQuestions[currentQuizQuestion];
    const progress = ((currentQuizQuestion + 1) / quizQuestions.length) * 100;
    
    // Update progress
    document.getElementById('quiz-progress-text').textContent = `${currentQuizQuestion + 1} من ${quizQuestions.length}`;
    document.getElementById('quiz-progress-bar').style.width = `${progress}%`;
    
    // Show question
    const content = document.getElementById('quiz-content');
    content.innerHTML = `
        <div class="mb-8">
            <h3 class="font-display text-2xl font-bold text-forest-green mb-6">${question.question}</h3>
            <div class="space-y-4">
                ${question.options.map(option => `
                    <button onclick="selectQuizAnswer('${question.id}', '${option.id}')" 
                            class="w-full text-right p-4 rounded-2xl border-2 border-sage-green/20 hover:border-sage-green hover:bg-sage-green/10 transition-all duration-300">
                        ${option.text}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    // Animate question appearance
    anime({
        targets: '#quiz-content',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: 'easeOutQuart'
    });
}

function selectQuizAnswer(questionId, answerId) {
    quizAnswers[questionId] = answerId;
    
    // Animate selection
    anime({
        targets: event.target,
        scale: [1, 0.95, 1],
        backgroundColor: ['rgba(135, 169, 107, 0.1)', 'rgba(135, 169, 107, 0.3)', 'rgba(135, 169, 107, 0.1)'],
        duration: 300,
        easing: 'easeOutQuart',
        complete: () => {
            setTimeout(() => {
                nextQuizQuestion();
            }, 500);
        }
    });
}

function nextQuizQuestion() {
    currentQuizQuestion++;
    
    if (currentQuizQuestion < quizQuestions.length) {
        showQuizQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    // Hide quiz content
    document.getElementById('quiz-content').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');
    
    // Calculate primary goal
    const primaryGoal = quizAnswers['1'] || 'wellness';
    const recommendation = productRecommendations[primaryGoal];
    
    // Show results
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = `
        <div class="bg-soft-mint rounded-2xl p-6 mb-6">
            <h4 class="font-display text-xl font-bold text-forest-green mb-3">${recommendation.title}</h4>
            <p class="text-charcoal-gray mb-4">${recommendation.description}</p>
            <div class="grid grid-cols-2 gap-4">
                ${recommendation.products.slice(0, 4).map(productId => {
                    const product = getProductById(productId);
                    return `
                        <div class="bg-white rounded-xl p-4 text-center">
                            <div class="w-12 h-12 bg-sage-green rounded-full flex items-center justify-center mx-auto mb-2">
                                🌿
                            </div>
                            <h5 class="font-bold text-forest-green text-sm">${product.name}</h5>
                            <p class="text-xs text-charcoal-gray">${product.price} دج</p>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        
        <div class="bg-white rounded-2xl p-6">
            <h4 class="font-display text-lg font-bold text-forest-green mb-3">نصائح مخصصة لك:</h4>
            <ul class="space-y-2 text-charcoal-gray">
                <li>• ابدأ بمنتج واحد واختبر فعاليته قبل إضافة منتجات أخرى</li>
                <li>• كون روتيناً يومياً بسيطاً يمكنك الالتزام به</li>
                <li>• راقب نتائجك وعدّل روتينك حسب الحاجة</li>
                <li>• تواصل مع خبرائنا للحصول على استشارات إضافية</li>
            </ul>
        </div>
    `;
    
    // Animate results
    anime({
        targets: '#quiz-results',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutQuart'
    });
}

function viewRecommendations() {
    closeQuiz();
    window.location.href = 'products.html';
}

// Category Selection
function selectCategory(category) {
    // Animate selection
    anime({
        targets: event.currentTarget,
        scale: [1, 1.1, 1],
        rotate: [0, 5, 0],
        duration: 600,
        easing: 'easeOutElastic(1, .8)',
        complete: () => {
            // Store selection and redirect
            localStorage.setItem('selectedCategory', category);
            window.location.href = `products.html?category=${category}`;
        }
    });
}

// Shopping Cart Functions
function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        });
    }
    
    // Update cart UI
    updateCartUI();
    saveCart();
    
    // Show success animation
    anime({
        targets: event.target,
        scale: [1, 1.2, 1],
        backgroundColor: ['#2D5016', '#87A96B', '#2D5016'],
        duration: 600,
        easing: 'easeOutElastic(1, .8)'
    });
    
    // Show notification
    showNotification(`${product.name} تمت إضافته إلى السلة!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCart();
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            updateCartUI();
            saveCart();
        }
    }
}

function updateCartUI() {
    const cartBadge = document.getElementById('cart-badge');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Update badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems > 0) {
        cartBadge.textContent = totalItems;
        cartBadge.classList.remove('hidden');
    } else {
        cartBadge.classList.add('hidden');
    }
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-charcoal-gray text-center">سلة التسوق فارغة</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="flex items-center justify-between mb-4 p-4 bg-gray-50 rounded-xl">
                <div class="flex items-center">
                    <div class="w-12 h-12 bg-sage-green rounded-lg flex items-center justify-center text-white mr-3">
                        🌿
                    </div>
                    <div>
                        <h4 class="font-bold text-forest-green text-sm">${item.name}</h4>
                        <p class="text-charcoal-gray text-xs">${item.price} دج</p>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <button onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})" 
                            class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-charcoal-gray hover:bg-sage-green hover:text-white">
                        -
                    </button>
                    <span class="font-bold text-forest-green">${item.quantity}</span>
                    <button onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})" 
                            class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-charcoal-gray hover:bg-sage-green hover:text-white">
                        +
                    </button>
                    <button onclick="removeFromCart('${item.id}')" 
                            class="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white">
                        ×
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `${total} دج`;
}

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('-translate-x-full');
}

function saveCart() {
    localStorage.setItem('ribio-cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('ribio-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Product Data
function getProductById(id) {
    const products = {
        'oils-set': {
            name: 'مجموعة الزيوت الأساسية',
            price: 2500,
            image: 'resources/product-oils.jpg',
            category: 'skincare'
        },
        'herbal-soap': {
            name: 'صابون الأعشاب الطبيعي',
            price: 450,
            image: 'resources/product-soap.jpg',
            category: 'skincare'
        },
        'raw-honey': {
            name: 'عسل طبيعي خام',
            price: 1800,
            image: 'resources/product-honey.jpg',
            category: 'immunity'
        },
        'herbs-collection': {
            name: 'مجموعة الأعشاب الطبية',
            price: 1200,
            image: 'resources/product-herbs.jpg',
            category: 'immunity'
        },
        'argan-oil': {
            name: 'زيت الأركان النقي',
            price: 1500,
            image: 'resources/product-oils.jpg',
            category: 'haircare'
        },
        'rosemary-shampoo': {
            name: 'شامبو إكليل الجبل',
            price: 800,
            image: 'resources/product-soap.jpg',
            category: 'haircare'
        }
    };
    
    return products[id];
}

// Notification System
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-xl shadow-lg transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-sage-green text-white' : 'bg-red-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('ar-DZ', {
        style: 'currency',
        currency: 'DZD'
    }).format(price);
}

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

// Mobile Menu Toggle (if needed)
function toggleMobileMenu() {
    // Implementation for mobile menu
    console.log('Mobile menu toggled');
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.querySelector('input[type="search"]');
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value;
            if (query.length > 2) {
                performSearch(query);
            }
        }, 300));
    }
}

function performSearch(query) {
    // Implementation for search functionality
    console.log('Searching for:', query);
}

// Newsletter Subscription
function subscribeNewsletter(email) {
    // Implementation for newsletter subscription
    console.log('Subscribing email:', email);
    showNotification('تم الاشتراك بنجاح! شكراً لك.', 'success');
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    showNotification('عذراً، حدث خطأ ما. الرجاء المحاولة مرة أخرى.', 'error');
});

// Performance Monitoring
window.addEventListener('load', function() {
    // Log performance metrics
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
    }
});

// Export functions for global access
window.startQuiz = startQuiz;
window.closeQuiz = closeQuiz;
window.selectQuizAnswer = selectQuizAnswer;
window.viewRecommendations = viewRecommendations;
window.selectCategory = selectCategory;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.toggleCart = toggleCart;
window.subscribeNewsletter = subscribeNewsletter;
// Mobile Menu Functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    
    if (mobileMenu.classList.contains('-translate-x-full')) {
        mobileMenu.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// إغلاق القائمة عند النقر على الروابط
document.addEventListener('DOMContentLoaded', function() {
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            const overlay = document.getElementById('mobile-menu-overlay');
            mobileMenu.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
            document.body.style.overflow = '';
        });
    });
});

window.toggleMobileMenu = toggleMobileMenu;