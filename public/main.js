let number = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
let suit = ["♥", "♦", "♠", "♣"];
let deck = []

const randomCard = () => {
    let numbers = number[Math.floor(Math.random() * number.length)];
    let suits = suit[Math.floor(Math.random() * suit.length)];
    document.querySelector("#face").textContent = numbers + suits;
} 

document.addEventListener('DOMContentLoaded', main)

