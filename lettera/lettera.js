let t1 = gsap.timeline({ paused: true });
let flap = CSSRulePlugin.getRule(".envelope:before");

t1.to(flap, {
  duration: 0.5,
  cssRule: {
    rotateX: 180
  }
})
.set(flap, {
  cssRule: {
    zIndex: 10
  }
})
.to('.letter', {
  translateY: -200,
  duration: 0.9,
  ease: "back.inOut(1.5)"
})
.set('.letter', {
  zIndex: 40
})
.to('.letter', {
  duration: 0.7,
  ease: "back.out(0.4)",
  translateY: -5,
  translateZ: 250
})
.to('.letter', {
  duration: 0.5,
  width: '100vw',  // Transition to fullscreen width
  height: '100vh', // Transition to fullscreen height
  borderRadius: 0 // Remove border-radius for fullscreen effect
}, "-=0.5"); // Sync with the previous animation

let t2 = gsap.timeline({ paused: true });
t2.to('.shadow', {
  delay: 1.4,
  width: 450,
  boxShadow: "-75px 150px 10px 5px #eeeef3",
  ease: "back.out(0.2)",
  duration: 0.7
});

function openCard(e) {
  t1.play();
  t2.play();

  // Add fullscreen class after animation
  setTimeout(() => {
    document.querySelector('.letter').classList.add('fullscreen');
  }, 1600); // Wait until the previous animations complete
}

function closeCard(e) {
  document.querySelector('.letter').classList.remove('fullscreen'); // Remove fullscreen class

  t1.reverse();
  t2.reverse();
}
