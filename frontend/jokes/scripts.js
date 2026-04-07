// Initialize AOS animation
AOS.init();

// DOM elements
const setupElement = document.getElementById('setup');
const punchlineElement = document.getElementById('punchline');
const newJokeBtn = document.getElementById('new-joke-btn');

// Function to fetch a new joke from the API
async function fetchNewJoke() {
    try {
        // Add animation class for fade effect
        document.getElementById('joke-container').classList.add('joke-changing');
        
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const joke = await response.json();
        
        // Wait for animation to complete before updating text
        setTimeout(() => {
            setupElement.textContent = joke.setup;
            punchlineElement.textContent = joke.punchline || '';
            
            // Remove animation class and reset opacity
            document.getElementById('joke-container').classList.remove('joke-changing');
        }, 300);
    } catch (error) {
        console.error('Error fetching joke:', error);
        setupElement.textContent = 'Oops! Could not load joke. Try again!';
        punchlineElement.textContent = '';
    }
}

// Function to automatically change jokes every 7 seconds
function startAutoJokes() {
    setInterval(fetchNewJoke, 7000);
}


newJokeBtn.addEventListener('click', fetchNewJoke);

// Initial joke load
fetchNewJoke();


startAutoJokes();