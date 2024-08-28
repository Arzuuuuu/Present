const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
const audio = document.getElementById('background-music');

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I Love You Too <3';
    gif.src = "https://media1.tenor.com/m/aKFaZBrZFYcAAAAC/excited-spin.gif";

    // Hide the existing buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';

    // Create a new "Avanti" button
    const avantiBtn = document.createElement('button');
    avantiBtn.textContent = 'Avanti';
    avantiBtn.classList.add('avanti-btn');

    // Add an event listener to the new button to link to another page
    avantiBtn.addEventListener('click', () => {
        window.location.href = 'nextpage.html'; // Replace with your desired URL
    });

    // Append the new button to the wrapper
    wrapper.appendChild(avantiBtn);

    // Attempt to play the background music
    audio.play()
});


noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});