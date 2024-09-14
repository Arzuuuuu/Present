window.onload = function () {
  const dot = document.getElementById('expanding-dot');
  const video = document.getElementById('intro-video');
  const audio = document.getElementById('intro-audio');
  const nextButton = document.getElementById('next-button');

  // Add click event listener to the dot
  dot.addEventListener('click', () => {
    dot.classList.add('expand');  // Trigger the expansion
  });

  // Start video and audio after the dot expands
  dot.addEventListener('transitionend', () => {
    if (dot.classList.contains('expand')) {
      video.style.display = 'block'; // Show video after the dot expands
      video.play();                  // Start video playback
      audio.play();                  // Start audio playback

      // Show the next button after video starts playing
      setTimeout(() => {
        nextButton.style.display = 'block'; // Show next button after 3 seconds
      }, 3000);
    }
  });
};

// Function to handle the "Next" button click
function goToNextPage() {
  window.location.href = "next-page.html"; // Change this to your desired next page URL
}
