const greetingElement = document.getElementById('greeting');
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            greetingElement.textContent = 'Good Morning!';
        } else if (currentHour < 18) {
            greetingElement.textContent = 'Good Afternoon!';
        } else {
            greetingElement.textContent = 'Good Night!';
        }
const quotes = ["Whatever the destination is, you should choose the right way to achieve it. Don’t watch the clock, do what it does. Keep doing.",
                "The future belongs to those who believe in the beauty of their dreams.",
                "The best way to predict the future is to create it.",
                "Success usually comes to those who are too busy to be looking for it.",
                "Don’t be afraid to give up the good to go for the great.",
                "I find that the harder I work, the more luck I seem to have.",
                "Success is not in what you have, but who you are.",
                "The only place where success comes before work is in the dictionary.",
                "The way to get started is to quit talking and begin doing.",
                "The future depends on what you do today.",
                "Don’t watch the clock; do what it does. Keep going.",
                "You can’t build a reputation on what you are going to do.",
                "The secret of success is to be ready when your opportunity comes.",
                "Opportunities don’t happen. You create them.",
                "Success is walking from failure to failure with no loss of enthusiasm.",
                "The only limit to our realization of tomorrow will be our doubts of today.",
                "The only way to do great work is to love what you do.",
                "Success is not just about what you accomplish in your life, it’s about what you inspire others to do.",
                "The best revenge is massive success.",
                "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
                "Success is not in never failing, but rising every time we fall.",
                "Success is not the absence of failure; it’s the persistence through failure.",
                "Success is not a destination, but the road that you’re on.",
                "Success is not about how much money you make, but the difference you make in people’s lives.",
                "Success is not about being the best. It’s about always getting better.",
                "Success is not about what you have, but who you are.",];
const quoteElement = document.getElementById('quote');
const button = document.getElementById('generate-quote');
button.addEventListener('click', function generateQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});