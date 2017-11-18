import Velocity from 'velocity-animate';
//import createElementSVG from './lib/createBubble';
const $waveone = document.querySelector(`.wave-one-image`),
  $wavetwo = document.querySelector(`.wave-two-image`),
  $boat = document.querySelector(`.header-boat-image`),
  $buoy = document.querySelector(`.header-buoy-image`),
  $whale = document.querySelector(`.header-whale-image`),
  $bottle = document.querySelector(`.header-bottle`);

const init = () => {
  animateSea();
  createBubbles();
};

const createBubbles = () => {

};


const animateSea = () => {
  Velocity(
    $waveone,
    {
      translateY: `+=1vw`
    },
    {
      duration: 2000,
      loop: true,
      easing: `easeOutBounce`
    }
  );

  Velocity(
    $wavetwo,
    {
      translateY: `+=1vw`
    },
    {
      delay: 400,
      duration: 2000,
      loop: true,
      easing: `easeOutBounce`
    }
  );

  Velocity(
  $boat,
    {
      translateY: `+=1vw`,
      rotateZ: `-2`
    },
    {
      duration: 2100,
      loop: true,
      easing: `easing`
    }
  );

  Velocity(
  $buoy,
    {
      translateY: `+=2vw`,
      rotateZ: `+=20`
    },
    {
      duration: 4000,
      loop: true,
      easing: `easing`
    }
  );

  Velocity(
  $whale,
    {
      translateY: `+=1vw`
    },
    {
      delay: 100,
      duration: 2000,
      loop: true,
      easing: `easing`
    }
  );
  Velocity(
    $bottle,
    {
      translateY: `+=1vw`
    },
    {
      delay: 100,
      duration: 4000,
      loop: true,
      easing: `easing`
    }
    );

};

init();
