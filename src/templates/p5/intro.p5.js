import * as p5 from 'p5';
import { Vector } from 'p5';
import { Particle } from './Particle.p5';

let s = (sk) => {
  const scl = 10;
  let cols,
    rows,
    zoff = 0,
    flowfield = [],
    inc = 0.1,
    particles = [];
  sk.setup = () => {
    const { innerHeight, innerWidth } = window;
    const canves = sk.createCanvas(innerWidth, innerHeight);
    sk.background('#0e0e0e');
    canves.position(0, 0);
    // canves.style('z-index', '-1');
    cols = sk.floor(innerWidth / scl);
    rows = sk.floor(innerHeight / scl);
    flowfield = new Array(cols * rows);
    particles = [];
    for (let i = 0; i < 300; i++) {
      particles[i] = new Particle(P5, scl, cols);
    }
  };

  sk.draw = () => {
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        var index = x + y * cols;
        var angle = sk.noise(xoff, yoff, zoff) * P5.TWO_PI * 4;
        var v = Vector.fromAngle(angle);
        v.setMag(1);
        flowfield[index] = v;
        xoff += inc;
        sk.stroke(2, 50);
        // sk.push();
        // sk.translate(x * scl, y * scl);
        // sk.rotate(v.heading());
        // sk.strokeWeight(1);
        // sk.line(0, 0, scl, 0);
        // sk.pop();
      }
      yoff += inc;

      zoff += 0.0003;
    }
    for (var i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }
  };
};

const P5 = new p5(s);
