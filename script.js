//  PART 2: Functions, Parameters, Return Values 
let globalVar = "I am global!";

function calculateSpeed(distance, time) {
    const localVar = "I am local!";
    console.log(globalVar); // Demonstrate scope usage
    console.log(localVar);
    return distance / time;
}

// Event: Calculate coding speed
document.getElementById('calcBtn').addEventListener('click', () => {
    const distance = parseFloat(document.getElementById('distance').value);
    const time = parseFloat(document.getElementById('time').value);
    if (time <= 0) {
        alert("Time must be greater than zero.");
        return;
    }
    const speed = calculateSpeed(distance, time);
    document.getElementById('result').textContent =
        `Coding Speed: ${speed.toFixed(2)} LOC/hr 🚀`;
});

//  PART 3: Modal + Animation 
const modal = document.getElementById('modal');
const showModalBtn = document.getElementById('showModalBtn');
const closeModal = document.getElementById('closeModal');
const jokeBtn = document.getElementById('jokeBtn');
const joke = document.getElementById('joke');

// Developer tips
const tips = [
    "Commit early, commit often. 💾",
    "Rubber duck debugging works wonders. 🦆",
    "Console.log is your friend. 🐞",
    "Take breaks — your brain needs rest. 🧘"
];

showModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modal.classList.add('show');
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.classList.remove('show');
});

window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }
});

jokeBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    joke.textContent = tips[randomIndex];

    // Trigger spin animation on joke button for fun
    jokeBtn.classList.remove('animate');
    void jokeBtn.offsetWidth; // reset
    jokeBtn.classList.add('animate');
});
