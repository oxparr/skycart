// Create a constant for storing ratings data
const RATINGS_STORAGE_KEY = 'productRatings';

// Initialize or get stored ratings
function initializeProductRatings() {
    let ratings = JSON.parse(localStorage.getItem(RATINGS_STORAGE_KEY));
    
    if (!ratings) {
        ratings = {};
        products.forEach(product => {
            ratings[product.id] = {
                averageRating: (3 + Math.random() * 2).toFixed(1), // Random rating between 3-5
                ratingCount: Math.floor(Math.random() * 100) + 10 // Random count between 10-110
            };
        });
        localStorage.setItem(RATINGS_STORAGE_KEY, JSON.stringify(ratings));
    }
    
    return ratings;
}

// Ürün listesi
// Örnek ürün verileri - sabit rating değerleri ile
const products = [
    {
        id: 1,
        name: "iPhone 16 Pro Max",
        price: 1119.99,
        description: "The iPhone 16 Pro Max offers advanced features with powerful performance and sleek design.",
        image: "https://www.technolife.ir/image/small_product-TLP-55555_a847f34c-7262-48ca-bf51-d2410f4da078.png",
        rating: 4.8,
        ratingCount: 245,
        category: "electronics"
    },
    {
        id: 2,
        name: "Stainless Steel Patio Bistro Table",
        price: 149.99,
        description: "This is a stylish and durable outdoor patio bistro table made of stainless steel.",
        image: "https://cb2.scene7.com/is/image/CB2/WatermarkBistroTableSHS16_1x1/$web_pdp_main_carousel_md$/190905021022/watermark-bistro-table.jpg",
        rating: 3.7,
        ratingCount: 89,
        category: "furniture"
    },
    {
        id: 3,
        name: "Altın Yıldız Classic Fit Suit",
        price: 449.99,
        description: "An elegant golden suit with starry details for a classy look.",
        image: "https://ty-store.net/wp-content/uploads/2024/04/10-4-e1712046708844-1200x1200.webp",
        rating: 4.2,
        ratingCount: 156,
        category: "clothing"
    },
    {
        id: 4,
        name: "College Skirt",
        price: 149.99,
        description: "A fashionable college skirt perfect for both casual and semi-formal wear.",
        image: "https://sneakerdaily.vn/wp-content/uploads/2022/11/cach-phoi-do-voi-chan-vay-ngan-mua-dong-9.jpg",
        rating: 1.9,
        ratingCount: 34,
        category: "clothing"
    },
    {
        id: 5,
        name: "Air Pods",
        price: 149.99,
        description: "Wireless Air Pods with excellent sound quality and long battery life.",
        image: "https://iliketradein.ru/wp-content/uploads/2021/10/65.png",
        rating: 4.6,
        ratingCount: 178,
        category: "electronics"
    },
    {
        id: 6,
        name: "Pear Armchair",
        price: 249.99,
        description: "A comfortable armchair with a modern and elegant pear-shaped design.",
        image: "https://cdn.cimri.io/image/1200x1200/armutparkarmutkoltukfiyatlar_70537329.jpg",
        rating: 3.5,
        ratingCount: 92,
        category: "furniture"
    },
    {
        id: 7,
        name: "IMICE AK-600",
        price: 229.99,
        description: "A gaming keyboard with 104 keys and RGB lighting.",
        image: "https://alexnld.com/wp-content/uploads/2021/12/bc8f7a9e-957c-4432-9804-d14c5074d8d5.jpg",
        rating: 4.4,
        ratingCount: 145,
        category: "electronics"
    },
    {
        id: 8,
        name: "BRADLEY Sweatshirt",
        price: 89.99,
        description: "A stylish green hoodie sweatshirt perfect for casual wear.",
        image: "https://floimages.mncdn.com/media/catalog/product/20-10/21/2966.jpg",
        rating: 3.8,
        ratingCount: 67,
        category: "clothing"
    },
    {
        id: 9,
        name: "Double Bed",
        price: 499.99,
        description: "A spacious and comfortable double bed with modern design.",
        image: "https://cdn.cimri.io/image/1200x1200/yatayatakfiyatlar_282415692.jpg",
        rating: 4.3,
        ratingCount: 112,
        category: "furniture"
    },
    {
        id: 10,
        name: "HyperX Cloud 2",
        price: 249.99,
        description: "A premium wireless gaming headset with surround sound.",
        image: "https://i.ebayimg.com/images/g/s5QAAOSw00RiKuKF/s-l1600.jpg",
        rating: 4.7,
        ratingCount: 234,
        category: "electronics"
    },
    {
        id: 11,
        name: "Coal Farm Style Kitchen Table",
        price: 549.99,
        description: "A rustic kitchen table with a vintage farm style design.",
        image: "https://i5.walmartimages.com/asr/bf7dc475-5dda-4cad-be0c-e78287ca8be0.34001c63475a0eac3a1e4691ecdfcf39.jpeg",
        rating: 3.9,
        ratingCount: 78,
        category: "furniture"
    },
    {
        id: 12,
        name: "Minnie Mouse",
        price: 19.99,
        description: "A cute pair of Minnie Mouse themed hairpins.",
        image: "https://bebekya.com/wp-content/uploads/2022/09/fiyonk-kistirma-toka-pens-toka-metal-toka-pembe-1-cift-35600-1200x1200.jpg",
        rating: 2.9,
        ratingCount: 45,
        category: "accessories"
    },
    {
        id: 13,
        name: "MSI 240 Hz Monitor",
        price: 149.99,
        description: "A high-performance 240 Hz gaming monitor for smooth gameplay.",
        image: "https://img.overclockers.co.uk/images/MON-MSI-00930/c181d8807b6ba334cf7ed7e989f75d90.jpg",
        rating: 4.5,
        ratingCount: 167,
        category: "electronics"
    },
    {
        id: 14,
        name: "Kinetix KALEN TX W",
        price: 169.99,
        description: "Comfortable and stylish unisex sports shoes.",
        image: "https://n11scdn.akamaized.net/a1/org/spor-outdoor/gunluk-spor-ayakkabi/kinetix-kalen-pu-ortopedik-kadin-erkek-cocuk-spor-ayakkabi-36-40__1546757766524050.jpg",
        rating: 3.4,
        ratingCount: 89,
        category: "shoes"
    },
    {
        id: 15,
        name: "LG 48 OLED",
        price: 1149.99,
        description: "A stunning 48-inch OLED TV with vibrant colors and sharp details.",
        image: "https://www.sathobby.com/wp-content/uploads/2020/06/lg-front.png",
        rating: 4.9,
        ratingCount: 289,
        category: "electronics"
    },
    {
        id: 16,
        name: "Dress Floral",
        price: 149.99,
        description: "A beautiful floral dress perfect for spring and summer.",
        image: "https://img.shein.com/images/shein.com/201704/dress170411301_sq.jpg",
        rating: 3.6,
        ratingCount: 123,
        category: "clothing"
    },
    {
        id: 17,
        name: "Real Madrid T-shirt",
        price: 229.99,
        description: "A stylish Real Madrid branded t-shirt.",
        image: "https://www.futbolemotion.com/imagesarticulos/198089/grandes/camiseta-adidas-real-madrid-training-2023-2024-white-0.jpg",
        rating: 1.8,
        ratingCount: 56,
        category: "clothing"
    },
    {
        id: 18,
        name: "Gaming Chair",
        price: 249.99,
        description: "A comfortable gaming chair with ergonomic support and adjustable features.",
        image: "https://static.ticimax.cloud/45265/uploads/urunresimleri/buyuk/rampage-styles-kl-r61-kirmizi-siyah-ga-0908a5.png",
        rating: 4.1,
        ratingCount: 145,
        category: "furniture"
    },
    {
        id: 19,
        name: "L-shaped Corner Sofa",
        price: 649.99,
        description: "A spacious and comfortable L-shaped corner sofa for your living room.",
        image: "https://img-s1.onedio.com/id-64f6cc77ecbcead45f1f3586/rev-0/w-1200/h-1200/f-jpg/s-79645e705e5895812539adda2d2b8f40019a07f5.jpg",
        rating: 4.0,
        ratingCount: 178,
        category: "furniture"
    },
    {
        id: 20,
        name: "Brown Curtain",
        price: 379.99,
        description: "A high-quality brown curtain to add elegance to any room.",
        image: "https://i.pinimg.com/originals/5b/54/71/5b5471be1d277ede3a0bbcf79b7eae2d.jpg",
        rating: 3.2,
        ratingCount: 67,
        category: "home"
    }
];

// Add a function to get product with ratings
function getProductWithRatings(product) {
    const ratings = initializeProductRatings();
    return {
        ...product,
        ...ratings[product.id]
    };
}

// Ürünleri görüntüleme fonksiyonu
function displayProducts(productList = products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = productList.map(product => {
        const productWithRatings = getProductWithRatings(product);
        
        // Generate star HTML based on rating
        const fullStars = Math.floor(productWithRatings.rating);
        const hasHalfStar = productWithRatings.rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        const starHTML = `
            ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
            ${hasHalfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
            ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
        `;

        return `
            <div class="product-card">
                <img src="${productWithRatings.image}" alt="${productWithRatings.name}">
                <h3>${productWithRatings.name}</h3>
                <p class="price">$${productWithRatings.price.toFixed(2)}</p>
                <p class="description">${productWithRatings.description.substring(0, 100)}...</p>
                <div class="product-rating">
                    <div class="stars">
                        ${starHTML}
                    </div>
                    <span class="rating-text">(${productWithRatings.ratingCount} reviews)</span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${productWithRatings.id})">Add to Cart</button>
                <a href="product-detail.html?id=${productWithRatings.id}" class="view-details">View Details</a>
            </div>
        `;
    }).join('');
}

// Add a new function for displaying featured products
function displayFeaturedProducts() {
    const featuredProductsGrid = document.querySelector('.featured-products .products-grid');
    if (!featuredProductsGrid) return;

    const featuredProducts = getFeaturedProducts();
    
    featuredProductsGrid.innerHTML = featuredProducts.map(product => {
        const productWithRatings = getProductWithRatings(product);
        
        // Generate star HTML based on rating
        const fullStars = Math.floor(productWithRatings.rating);
        const hasHalfStar = productWithRatings.rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        const starHTML = `
            ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
            ${hasHalfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
            ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
        `;

        return `
            <div class="product-card">
                <img src="${productWithRatings.image}" alt="${productWithRatings.name}">
                <h3>${productWithRatings.name}</h3>
                <p class="price">$${productWithRatings.price.toFixed(2)}</p>
                <p class="description">${productWithRatings.description.substring(0, 100)}...</p>
                <div class="product-rating">
                    <div class="stars">
                        ${starHTML}
                    </div>
                    <span class="rating-text">(${productWithRatings.ratingCount} reviews)</span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${productWithRatings.id})">Add to Cart</button>
                <a href="product-detail.html?id=${productWithRatings.id}" class="view-details">View Details</a>
            </div>
        `;
    }).join('');
}

// Ürün detaylarını yükleme
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (product) {
        const productWithRatings = getProductWithRatings(product);
        document.getElementById('mainImage').src = productWithRatings.image;
        document.getElementById('productName').textContent = productWithRatings.name;
        document.getElementById('productPrice').textContent = `$${productWithRatings.price.toFixed(2)}`;
        document.getElementById('productDescription').textContent = productWithRatings.description;
        
        // Update rating display
        const ratingStars = document.getElementById('ratingStars');
        ratingStars.style.setProperty('--rating', productWithRatings.averageRating);
        ratingStars.innerHTML = '★'.repeat(5);
        document.getElementById('ratingCount').textContent = 
            `${productWithRatings.averageRating} (${productWithRatings.ratingCount} reviews)`;
    }
}

// Sepet işlemleri
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        updateCartCount();
        showNotification('Product added to cart!');
    }
}

// Add user authentication functions
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

function initializeAuth() {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const registerBtn = document.getElementById('registerBtn');
    
    if (loginBtn && logoutBtn) {
        if (currentUser) {
            loginBtn.innerHTML = `<i class="fas fa-user"></i> Hi, ${currentUser.name}`;
            loginBtn.setAttribute('data-logged-in', 'true');
            logoutBtn.classList.add('visible');
        } else {
            loginBtn.innerHTML = `<i class="fas fa-user"></i> Login`;
            loginBtn.removeAttribute('data-logged-in');
            logoutBtn.classList.remove('visible');
        }
        
        loginBtn.onclick = currentUser ? null : showLoginModal;
        logoutBtn.onclick = logout;
    }

    if (registerBtn) {
        registerBtn.onclick = () => {
            window.location.href = 'register.html';
        };
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    initializeAuth();
    showNotification('Successfully logged out!');
    
    // Eğer cart sayfasındaysak ve çıkış yapıldıysa ana sayfaya yönlendir
    if (window.location.pathname.includes('cart.html')) {
        window.location.href = 'index.html';
    }
}

function showLoginModal() {
    window.location.href = 'login.html';
}

function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === formData.get('email') && 
                                u.password === formData.get('password'));
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        document.querySelector('.auth-modal').remove();
        initializeAuth();
        showNotification('Successfully logged in!');
    } else {
        showNotification('Invalid credentials', 'error');
    }
}

// Update cart functions
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;

    let total = 0;
    cartItems.innerHTML = cart.map(item => {
        total += item.price * item.quantity;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button onclick="removeFromCart(${item.id})" class="remove-item">×</button>
            </div>
        `;
    }).join('');

    const subtotalAmount = document.getElementById('subtotalAmount');
    if (subtotalAmount) {
        subtotalAmount.textContent = `$${total.toFixed(2)}`;
    }

    // Show empty cart message if needed
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
            updateCartCount();
        }
    }
}

function removeFromCart(productId) {
    const itemToRemove = cart.find(item => item.id === productId);
    if (itemToRemove) {
        // Remove the item completely, regardless of quantity
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        updateCartCount();
        showNotification('Product removed from cart!');
    }
}

// Add wishlist functionality
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index === -1) {
        wishlist.push(productId);
        showNotification('Added to wishlist!');
    } else {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist!');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.pathname.split('/').pop();
    
    switch(page) {
        case 'index.html':
        case '':
            const featuredProductsGrid = document.getElementById('featuredProducts');
            if (featuredProductsGrid) {
                const featuredProducts = getFeaturedProducts();
                featuredProductsGrid.innerHTML = featuredProducts.map(product => {
                    const productWithRatings = getProductWithRatings(product);
                    return `
                        <div class="product-card">
                            <img src="${productWithRatings.image}" alt="${productWithRatings.name}">
                            <h3>${productWithRatings.name}</h3>
                            <p class="price">$${productWithRatings.price.toFixed(2)}</p>
                            <p class="description">${productWithRatings.description.substring(0, 100)}...</p>
                            <div class="product-rating">
                                <div class="stars" style="--rating: ${productWithRatings.averageRating}">
                                    ${'★'.repeat(5)}
                                </div>
                                <span>${productWithRatings.averageRating} (${productWithRatings.ratingCount} reviews)</span>
                            </div>
                            <button class="add-to-cart" onclick="addToCart(${productWithRatings.id})">Add to Cart</button>
                            <a href="product-detail.html?id=${productWithRatings.id}" class="view-details">View Details</a>
                        </div>
                    `;
                }).join('');
            }
            break;
        case 'shop.html':
            displayProducts();
            initializeFilters();
            break;
        case 'product-detail.html':
            loadProductDetail();
            loadRelatedProducts();
            break;
        case 'cart.html':
            updateCartDisplay();
            initializeCheckout();
            break;
        case 'about-us.html':
            initializeContactForm();
            break;
        case 'register.html':
            initializeRegistrationForm();
            break;
    }
    
    // Initialize common elements
    initializeAuth();
    initializeNavigation();
    
    // Add scroll event listener for navbar
    window.addEventListener('scroll', handleScroll);

    // Add cart icon click handler
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });
    }

    // Initialize login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Close button handlers
    const closeLoginBtn = document.getElementById('closeLoginModal');
    if (closeLoginBtn) {
        closeLoginBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    const closeRegisterBtn = document.getElementById('closeRegisterModal');
    if (closeRegisterBtn) {
        closeRegisterBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Rating radio butonlarına event listener ekle
    document.querySelectorAll('.rating-filters input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', () => {
            filterProducts();
            
            // Seçili rating option'ı görsel olarak vurgula
            document.querySelectorAll('.rating-option').forEach(option => {
                option.classList.remove('selected');
            });
            radio.closest('.rating-option').classList.add('selected');
        });
    });

    // Clear Filters butonunu güncelle
    const clearFiltersBtn = document.getElementById('clearFilters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }

    // Display products based on current page
    if (document.querySelector('.featured-products')) {
        displayFeaturedProducts();
    } else if (document.getElementById('productsGrid')) {
        displayProducts();
    }


});

// Arama fonksiyonu
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
        displayProducts(filteredProducts);
    });
}

function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const message = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            date: new Date().toISOString()
        };

        // Store message in localStorage
        const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        messages.push(message);
        localStorage.setItem('contactMessages', JSON.stringify(messages));

        // Show success message
        showNotification('Message sent successfully!');
        form.reset();
    });
}

function showRegisterModal() {
    const modal = document.createElement('div');
    modal.className = 'auth-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Create Account</h2>
            <form id="registerForm">
                <input type="text" name="name" placeholder="Full Name" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" required>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <a href="#" id="showLogin">Login</a></p>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('registerForm').addEventListener('submit', handleRegister);
    document.getElementById('showLogin').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.auth-modal').remove();
        showLoginModal();
    });
}

function handleRegister(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword')
    };

    // Basic validation
    if (userData.password !== userData.confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }

    // Get existing users or initialize empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    if (users.some(user => user.email === userData.email)) {
        showNotification('Email already registered!', 'error');
        return;
    }

    // Add new user
    users.push({
        name: userData.name,
        email: userData.email,
        password: userData.password // In a real app, this should be hashed
    });

    // Save updated users array
    localStorage.setItem('users', JSON.stringify(users));

    // Show success message
    showNotification('Registration successful! Please login.', 'success');

    // Redirect to login page
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

// Notification container'ı oluştur
let notificationContainer;

function createNotificationContainer() {
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
    }
}

function showNotification(message, type = 'success') {
    createNotificationContainer();
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notificationContainer.appendChild(notification);
    
    // Animasyon için setTimeout kullan
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // 3 saniye sonra notification'ı kaldır
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Add a function to update product rating (for future use)
function updateProductRating(productId, newRating) {
    const ratings = initializeProductRatings();
    const productRating = ratings[productId];
    
    // Update the average rating and count
    const newCount = productRating.ratingCount + 1;
    const newAverage = (((productRating.averageRating * productRating.ratingCount) + newRating) / newCount).toFixed(1);
    
    ratings[productId] = {
        averageRating: newAverage,
        ratingCount: newCount
    };
    
    localStorage.setItem(RATINGS_STORAGE_KEY, JSON.stringify(ratings));
    return ratings[productId];
}

function initializeFilters() {
    // Add existing category filter listeners
    const categoryCheckboxes = document.querySelectorAll('.category-filters input');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    // Add price filter listener
    const applyPriceBtn = document.getElementById('applyPrice');
    if (applyPriceBtn) {
        applyPriceBtn.addEventListener('click', filterProducts);
    }
}

function filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll('.category-filters input:checked'))
        .map(checkbox => checkbox.value);
    
    // Get min and max price values
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;

    // Get selected rating
    const selectedRating = document.querySelector('.rating-filters input[type="radio"]:checked');
    const ratingValue = selectedRating ? parseFloat(selectedRating.value) : 0;

    let filteredProducts = products;

    // Category filter
    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedCategories.includes(product.category)
        );
    }

    // Price filter
    filteredProducts = filteredProducts.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );

    // Rating filter
    if (ratingValue > 0) {
        filteredProducts = filteredProducts.filter(product => {
            if (ratingValue === 4) return product.rating >= 4.0;
            if (ratingValue === 3) return product.rating >= 3.0 && product.rating < 4.0;
            if (ratingValue === 2) return product.rating >= 2.0 && product.rating < 3.0;
            if (ratingValue === 1) return product.rating >= 0.0 && product.rating < 2.0;
            return true;
        });
    }

    displayProducts(filteredProducts);
}

function loadRelatedProducts() {
    const currentProduct = getCurrentProduct();
    if (!currentProduct) return;

    const relatedProducts = products
        .filter(product => 
            product.category === currentProduct.category && 
            product.id !== currentProduct.id
        )
        .slice(0, 4);

    const relatedProductsContainer = document.getElementById('relatedProducts');
    if (relatedProductsContainer) {
        relatedProductsContainer.innerHTML = relatedProducts.map(product => {
            const productWithRatings = getProductWithRatings(product);
            return `
                <div class="product-card">
                    <img src="${productWithRatings.image}" alt="${productWithRatings.name}">
                    <h3>${productWithRatings.name}</h3>
                    <p class="price">$${productWithRatings.price.toFixed(2)}</p>
                    <button class="add-to-cart" onclick="addToCart(${productWithRatings.id})">Add to Cart</button>
                    <a href="product-detail.html?id=${productWithRatings.id}" class="view-details">View Details</a>
                </div>
            `;
        }).join('');
    }
}

function getCurrentProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    return products.find(p => p.id === productId);
}

function initializeCheckout() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (!currentUser) {
                showNotification('Please login to checkout', 'error');
                showLoginModal();
                return;
            }
            if (cart.length === 0) {
                showNotification('Your cart is empty', 'error');
                return;
            }
            // Here you would typically redirect to a checkout page
            showNotification('Proceeding to checkout...', 'success');
        });
    }
}

function initializeNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('active');
        });
    }
}

function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

function initializeRegistrationForm() {
    const form = document.getElementById('registerForm');
    if (form) {
        form.addEventListener('submit', handleRegister);
    }
}

function getFeaturedProducts() {
    // Create a copy of the products array
    const shuffled = [...products];
    // Shuffle the array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Return first 4 products
    return shuffled.slice(0, 4);
}

// Add function to update cart count
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
        // Show/hide cart count based on total
        element.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

// Rating filtreleme fonksiyonu
function filterByRating(minRating) {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productRating = parseFloat(product.dataset.rating);
        if (productRating >= minRating) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
}

// Rating filtre event listener'ı
document.querySelectorAll('.rating-option input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const minRating = parseFloat(e.target.value);
        filterByRating(minRating);
        
        // Seçili rating option'ı görsel olarak vurgula
        document.querySelectorAll('.rating-option').forEach(option => {
            option.classList.remove('selected');
        });
        e.target.parentElement.classList.add('selected');
    });
});

// Ürün kartı oluşturma fonksiyonunu güncelle
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.dataset.rating = product.rating; // Rating değerini data attribute olarak ekle
    
    // Yıldız rating sistemini oluştur
    const ratingStars = document.createElement('div');
    ratingStars.className = 'product-rating';
    
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        star.className = `${i <= product.rating ? 'fas' : 'far'} fa-star`;
        starsContainer.appendChild(star);
    }
    
    const ratingCount = document.createElement('span');
    ratingCount.className = 'rating-count';
    ratingCount.textContent = `(${product.ratingCount} reviews)`;
    
    ratingStars.appendChild(starsContainer);
    ratingStars.appendChild(ratingCount);
    
    // ... diğer ürün kartı içeriği ...
    productCard.appendChild(ratingStars);
    
    return productCard;
}

// Clear Filters butonuna rating temizleme özelliği ekle
document.getElementById('clearFilters').addEventListener('click', () => {
    // Diğer filtre temizleme işlemleri ...
    
    // Rating filtrelerini temizle
    document.querySelectorAll('.rating-option input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
    document.querySelectorAll('.rating-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Tüm ürünleri göster
    document.querySelectorAll('.product-card').forEach(product => {
        product.style.display = 'flex';
    });
});

function clearAllFilters() {
    // Rating filtrelerini temizle
    document.querySelectorAll('.rating-filters input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
    document.querySelectorAll('.rating-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Kategori filtrelerini temizle
    document.querySelectorAll('.category-filters input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Fiyat filtrelerini temizle
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    if (minPrice) minPrice.value = '';
    if (maxPrice) maxPrice.value = '';
    
    // Arama kutusunu temizle
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    
    // Tüm ürünleri göster
    displayProducts(products);
}
