const submitButton = document.getElementById("submitBtn");
const envelope = document.querySelector('.envelope');
const displayAlert = document.querySelector('.display-msg');

submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevents the form from submitting
  
  // Add class to animate the envelope
  envelope.classList.add('active');
  
  // Add animation for envelope to fly away
  setTimeout(() => {
    envelope.style.transition = 'all 2s ease-in-out';
    envelope.style.transform = 'translateY(-1000px)';

    // Show "I love you" message after the envelope flies away
    setTimeout(() => {
      displayAlert.style.display = 'block';
    }, 2000);
  }, 1500);
});
