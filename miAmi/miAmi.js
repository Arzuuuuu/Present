const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
const audio = document.getElementById('background-music');

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Ti amo anche io <3';
    gif.src = "./cat-excited.gif";

    // Hide the existing buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';

    // Create a new "Avanti" button
    const avantiBtn = document.createElement('button');
    avantiBtn.textContent = 'Avanti';
    avantiBtn.classList.add('avanti-btn');

    // Add an event listener to the new button to link to another page
    avantiBtn.addEventListener('click', () => {
        window.location.href = '../puzzle/puzzle.html'; // Replace with your desired URL
    });

    // Append the new button to the wrapper
    wrapper.appendChild(avantiBtn);

    // Attempt to play the background music
    if (audio) {
        // Set volume (optional)
        audio.volume = 0.1;

        // Play audio
        audio.play()
    }
});


noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});