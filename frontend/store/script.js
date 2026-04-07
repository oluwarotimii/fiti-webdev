// DOM elements
const productsContainer = document.getElementById('products-container');
const loadingElement = document.getElementById('loading');


async function fetchProducts() {
    try {
        console.log('Fetching products from API...');
        
        const response = await fetch('https://fakestoreapi.com/products');
        
        console.log('Response received:', response);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        
        const products = await response.json();
        console.log('Products received:', products);
        
       
        loadingElement.style.display = 'none';
        
        
        displayProducts(products);
        
    } catch (error) {
        
        console.error('Error fetching products:', error);
        
       
        loadingElement.style.display = 'none';
        
    
        productsContainer.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger text-center">
                    <h4>Error Loading Products</h4>
                    <p>Could not load products. Please try again later.</p>
                    <p>Error: ${error.message}</p>
                </div>
            </div>
        `;
    }
}


function displayProducts(products) {
   
    productsContainer.innerHTML = '';
    
  
    products.forEach(product => {
       
        const productCard = document.createElement('div');
        productCard.className = 'col';
        productCard.setAttribute('data-aos', 'fade-up');
        productCard.setAttribute('data-aos-duration', '800');
        productCard.setAttribute('data-aos-delay', '100');
        
        // Calculate star rating display
        let stars = '';
        const rating = Math.round(product.rating.rate);
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars += '★'; 
            } else {
                stars += '☆'; 
            }
        }
        
        productCard.innerHTML = `
            <div class="product-card card h-100">
                <img src="${product.image}" class="product-image card-img-top" alt="${product.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="product-title card-title">${product.title}</h5>
                    <p class="product-description card-text">${product.description}</p>
                    <div class="mt-auto">
                        <p class="product-price card-text">$${product.price.toFixed(2)}</p>
                        <div class="product-rating">${stars} (${product.rating.count})</div>
                        <div class="d-grid gap-2 d-md-block mt-2">
                            <button class="btn btn-outline-dark btn-sm me-md-2 mb-2 mb-md-0" onclick="addToCart(${product.id}, '${product.title.replace(/'/g, "\\'")}', ${product.price})">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                            <button class="btn btn-orange btn-sm" onclick="viewProduct(${product.id})">View Product</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add the product card to the container
        productsContainer.appendChild(productCard);
    });
   
    setTimeout(() => {
        AOS.refresh();
    }, 100);
}

// Function to add product to cart
function addToCart(productId, productName, productPrice) {
    // Create a cart item object
    const cartItem = {
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    

    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex > -1) {
        
        cart[existingItemIndex].quantity += 1;
    } else {
      
        cart.push(cartItem);
    }
    

    localStorage.setItem('cart', JSON.stringify(cart));
    
   
    alert(`${productName} added to cart!`);
    
    console.log('Cart contents:', cart);
}


function viewProduct(productId) {
    alert(`Product ID: ${productId} - This would take you to the product page in a real application!`);
}


async function filterProductsByCategory(category) {
    try {
        let url = 'https://fakestoreapi.com/products';
        
        
        if (category) {
            url += `/category/${category}`;
        }
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const products = await response.json();
        

        loadingElement.style.display = 'none';
        
       
        displayProducts(products);
        
    } catch (error) {
        console.error('Error filtering products:', error);
        
   
        loadingElement.style.display = 'none';
        
        productsContainer.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger text-center">
                    <h4>Error Loading Products</h4>
                    <p>Could not load products. Please try again later.</p>
                </div>
            </div>
        `;
    }
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing page...');
    

    fetchProducts();
    
    // Initialize AOS 
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
        console.log('AOS initialized');
    }, 500);
    
  