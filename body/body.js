// let flippedBoxes = 0;
// const totalBoxes = 6;

// document.querySelectorAll('.box').forEach(box => {
//     box.addEventListener('click', () => {
//         if (!box.classList.contains('flipped')) {
//             box.classList.add('flipped');
//             flippedBoxes++;
//             checkAllFlipped();
//         }
//     });
// });

// function checkAllFlipped() {
//     if (flippedBoxes === totalBoxes) {
//         document.getElementById('nextButton').style.display = 'block';
//     }
// }


const boxes = document.querySelectorAll('.box');
const totalBoxes = boxes.length;
let flippedStatus = Array(totalBoxes).fill(false); // Track if each box has been flipped at least once

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        // Flip the box
        box.classList.toggle('flipped');

        // Update flipped status
        flippedStatus[index] = box.classList.contains('flipped');

        // Check if all boxes have been flipped at least once
        checkAllFlipped();
    });
});

function checkAllFlipped() {
    if (flippedStatus.every(status => status)) {
        document.getElementById('nextButton').style.display = 'block';
    }    
}

document.getElementById('nextButton').addEventListener('click', function() {
    window.location.href = '../capitoli/capitoli.html';  // Adjust the path if needed
});