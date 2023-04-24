import barba from '@barba/core';
import { gsap } from 'gsap';

const pageTransition = () => {
  const timeline = gsap.timeline();

  timeline.to('.page-transition', {
    duration: 1,
    top: '0%',
    height: '100%',
  });

  timeline.to('.page-transition', {
    duration: 0.8,
    height: '100%',
    top: '100%',
    delay: 0.3,
  });

  timeline.set('.page-transition', {
    top: '-100%',
  });
};

const delay = (n) => {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

const mainAnimation = () => {
  const timeline = gsap.timeline();

  timeline.from('.main-container', {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: {
      amount: 0.4,
    },
    delay: 0.8,
  });
};

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1500);
        done();
      },

      async enter(data) {
        mainAnimation();
      },

      async once(data) {
        mainAnimation();
      },
    },
  ],
});
