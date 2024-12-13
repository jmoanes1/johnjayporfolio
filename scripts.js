// JavaScript Function for Personalized Greeting with Toggle Behavior
function displayGreeting() {
    const greetingMessage = document.getElementById('greetingMessage');
    
    // Check if the message is currently visible
    if (greetingMessage.style.display === "none") {
        // Show the message
        greetingMessage.textContent = "Hello and welcome to my portfolio! I'm glad you're here.";
        greetingMessage.style.display = "block";
    } else {
        // Hide the message
        greetingMessage.style.display = "none";
    }
}


// Scroll Reveal using IntersectionObserver
const revealElements = document.querySelectorAll('.hidden');

const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.2, // trigger when 20% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach(element => {
    observer.observe(element);
});

console.log('Welcome to my portfolio!');