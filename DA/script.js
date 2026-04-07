// API configuration
const API_KEY = 'f738f4f71aebad731e49a4220203338f'; // Using the API key from your previous example
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const cityDropdown = document.getElementById('cityDropdown');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const weatherResults = document.getElementById('weatherResults');
const errorMessage = document.getElementById('errorMessage');

// Weather data elements
const cityName = document.getElementById('cityName');
const date = document.getElementById('date');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const maxTemp = document.getElementById('maxTemp');
const minTemp = document.getElementById('minTemp');
const clouds = document.getElementById('clouds');
const uvi = document.getElementById('uvi');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');

// Initialize AOS animation library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: false
});

// Event listeners
searchBtn.addEventListener('click', searchWeather);
cityDropdown.addEventListener('change', function() {
    if (this.value) {
        getWeatherByCity(this.value);
    }
});

// Allow Enter key to trigg+er search
cityInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchWeather();
    }
});

// Function to search weather by city name
function searchWeather() {
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }
    
    getWeatherByCity(city);
}

// Function to get weather data by city name
function getWeatherByCity(cityName) {
    // Show loading indicator
    showLoading();
    
    // Build the API URL with parameters
    const url = `${BASE_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`;
    
    // Fetch weather data from OpenWeatherMap API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Weather data not found for "${cityName}"`);
            }
            return response.json();
        })
        .then(data => {
            // Hide loading indicator
            hideLoading();
            
            // Process and display the weather data
            displayWeatherData(data);
        })
        .catch(error => {
            // Hide loading indicator
            hideLoading();
            
            // Show error message
            showError(error.message);
        });
}

// Function to display weather data
function displayWeatherData(data) {
    // Set city name and date
    cityName.textContent = data.name + ', ' + data.sys.country;
    date.textContent = formatDate(new Date());
    
    // Set temperature information
    temperature.textContent = Math.round(data.main.temp) + '°C';
    feelsLike.textContent = Math.round(data.main.feels_like) + '°C';
    
    // Set weather description and icon
    description.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    setWeatherIcon(data.weather[0].id, data.weather[0].icon);
    
    // Set humidity
    humidity.textContent = data.main.humidity + '%';
    
    // Set wind speed (convert from m/s to km/h)
    const windKmh = Math.round(data.wind.speed * 3.6);
    windSpeed.textContent = windKmh + ' km/h';
    
    // Set max and min temperatures
    maxTemp.textContent = Math.round(data.main.temp_max) + '°C';
    minTemp.textContent = Math.round(data.main.temp_min) + '°C';
    
    // Set cloudiness
    clouds.textContent = data.clouds.all + '%';
    
    // Set pressure
    pressure.textContent = data.main.pressure + ' hPa';
    
    // Set visibility (convert from meters to kilometers)
    const visibilityKm = data.visibility ? (data.visibility / 1000).toFixed(1) + ' km' : 'N/A';
    visibility.textContent = visibilityKm;
    
    // Set sunrise and sunset times
    const sunriseTime = new Date(data.sys.sunrise * 1000);
    const sunsetTime = new Date(data.sys.sunset * 1000);
    sunrise.textContent = formatTime(sunriseTime);
    sunset.textContent = formatTime(sunsetTime);
    
    // For UV index, we'll use a mock value since OpenWeatherMap's current API doesn't include it in the main response
    // In a real application, you would need to call the UV index API separately
    uvi.textContent = calculateUVIndex(data.main.temp, data.main.humidity, data.clouds.all);
    
    // Hide error message and show weather results
    hideError();
    showWeatherResults();
}

// Function to set weather icon based on weather condition
function setWeatherIcon(weatherId, iconCode) {
    // Clear previous icon
    weatherIcon.innerHTML = '';
    
    // Create a mapping of weather conditions to Bootstrap icons
    let iconClass = 'bi ';
    
    // Determine icon based on weather ID
    if (weatherId >= 200 && weatherId < 300) {
        // Thunderstorm
        iconClass += 'bi-cloud-lightning-rain text-warning';
    } else if (weatherId >= 300 && weatherId < 400) {
        // Drizzle
        iconClass += 'bi-cloud-drizzle text-info';
    } else if (weatherId >= 500 && weatherId < 600) {
        // Rain
        iconClass += 'bi-cloud-rain text-primary';
    } else if (weatherId >= 600 && weatherId < 700) {
        // Snow
        iconClass += 'bi-cloud-snow text-light';
    } else if (weatherId >= 700 && weatherId < 800) {
        // Atmosphere (fog, haze, etc.)
        iconClass += 'bi-cloud-fog text-secondary';
    } else if (weatherId === 800) {
        // Clear sky
        iconClass += 'bi-sun text-warning';
    } else if (weatherId > 800) {
        // Clouds
        iconClass += 'bi-cloud text-secondary';
    } else {
        // Default icon
        iconClass += 'bi-cloud text-secondary';
    }
    
    // Create and add the icon element
    const iconElement = document.createElement('i');
    iconElement.className = iconClass;
    iconElement.style.fontSize = '3rem';
    weatherIcon.appendChild(iconElement);
}

// Function to calculate approximate UV index
function calculateUVIndex(temp, humidity, cloudiness) {
    // This is a simplified calculation for demonstration purposes
    // In a real application, you would call the UV index API separately
    let uvIndex = 0;
    
    // Base UV index on temperature and cloudiness
    if (temp > 25) uvIndex += 2;
    if (temp > 30) uvIndex += 2;
    if (cloudiness < 30) uvIndex += 3; // Less clouds = more UV
    if (cloudiness < 10) uvIndex += 2; // Clear skies = even more UV
    if (humidity < 40) uvIndex += 1; // Low humidity = more UV
    
    // Cap the UV index at 11 (highest possible)
    uvIndex = Math.min(Math.round(uvIndex), 11);
    
    return uvIndex;
}

// Function to format date as "Day, Month Date, Year"
function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

// Function to format time as "HH:MM AM/PM"
function formatTime(date) {
    return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
    });
}

// Function to show loading indicator
function showLoading() {
    loading.classList.remove('d-none');
    weatherResults.classList.add('d-none');
    error.classList.add('d-none');
}

// Function to hide loading indicator
function hideLoading() {
    loading.classList.add('d-none');
}

// Function to show error message
function showError(message) {
    errorMessage.textContent = message;
    error.classList.remove('d-none');
    weatherResults.classList.add('d-none');
}

// Function to hide error message
function hideError() {
    error.classList.add('d-none');
}

// Function to show weather results
function showWeatherResults() {
    weatherResults.classList.remove('d-none');
    
    // Reinitialize AOS animations after showing results
    AOS.refresh();
}

// Function to get weather for a default city on page load
function initializePage() {
    // Get weather for a default city (e.g., London) when the page loads
    getWeatherByCity('London');
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);