document.addEventListener('DOMContentLoaded', function() {
    const adviceElement = document.getElementById('advice');
    const countdownElement = document.getElementById('countdown');
    const counterElement = document.getElementById('counter');
    const refreshBtn = document.getElementById('refresh-btn');
    
    let countdownValue = 15;
    let countdownInterval;

    function fetchAdvice() {
        adviceElement.textContent = "Loading advice...";
        
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                adviceElement.textContent = `"${data.slip.advice}"`;
            })
            .catch(error => {
                adviceElement.textContent = "Failed to load advice. Please try again.";
                console.log("Error:", error);
            });
    }
    
    function startCountdown() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        
        countdownValue = 15;
        updateCountdownDisplay();
        
        countdownInterval = setInterval(function() {
            countdownValue--;
            updateCountdownDisplay();
            
            if (countdownValue <= 0) {
                fetchAdvice();
                startCountdown();
            }
        }, 1000);
    }
    
    function updateCountdownDisplay() {
        counterElement.textContent = countdownValue;
        countdownElement.textContent = countdownValue;
        
        if (countdownValue > 10) {
            countdownElement.parentElement.style.backgroundColor = "#d4edda";
        } else if (countdownValue > 5) {
            countdownElement.parentElement.style.backgroundColor = "#fff3cd";
        } else {
            countdownElement.parentElement.style.backgroundColor = "#f8d7da";
        }
    }
    
    refreshBtn.addEventListener('click', function() {
        fetchAdvice();
        startCountdown();
    });
    
    fetchAdvice();
    startCountdown();
});