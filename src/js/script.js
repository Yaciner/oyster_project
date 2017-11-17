const startTime = Date.now();

const myDiv = document.querySelector(`.wave-two-image`);

const init = () => {

  console.log(`Hello, oyster_code`);
  animate();

};

const easeOutBounce = (t, b, c, d) => {
  if ((t /= d) < (1 / 2.75)) {
    return c * (7.5625 * t * t) + b;
  } else if (t < (2 / 2.75)) {
    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
  } else if (t < (2.5 / 2.75)) {
    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
  } else {
    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
  }
};

const animate = () => {
  const now = Date.now(),
    current = now - startTime,
    position = easeOutBounce(current, 0, 500, 2000);

  if (current > 2000) {
    myDiv.style.left = `500px`;
    return;
  }

  myDiv.style.left = `${position  }px`;

  window.requestAnimationFrame(animate);
};

init();
