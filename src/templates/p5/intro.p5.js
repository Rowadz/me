import * as p5 from 'p5';

let s = (sk) => {
  sk.setup = () => {
    const { innerHeight, innerWidth } = window;
    const canves = sk.createCanvas(innerWidth, innerHeight);
    sk.background('#0e0e0e');
    canves.position(0, 0);
    canves.style('z-index', '-1');
  };

  sk.draw = () => {};
};

const P5 = new p5(s);
