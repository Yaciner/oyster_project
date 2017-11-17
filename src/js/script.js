import Velocity from 'velocity-animate';
const $waveone = document.querySelector(`.wave-one-image`);
const $wavetwo = document.querySelector(`.wave-two-image`);
const $boat = document.querySelector(`.header-boat-image`);
const $buoy = document.querySelector(`.header-buoy-image`);
// const $whale = document.querySelector(`.header-whale-image`);
// const $bottle = document.querySelector(`.header-bottle`);

const init = () => {
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
      translateY: `+=1vw`
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
      translateY: `+=3vw`,
      rotateZ: `+=30`
    },
    {
      duration: 4000,
      loop: true,
      easing: `easing`
    }
  );

};


init();
