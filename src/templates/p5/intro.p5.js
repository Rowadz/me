import * as p5 from 'p5'
import { Vector } from 'p5'
import { Particle } from './Particle.p5'
import { sexyBlack } from '../colorsHelper/colors.helper'
window.p5 = p5
let s = (sk) => {
  const scl = 10
  let cols,
    rows,
    zoff = 0,
    flowfield = [],
    inc = 0.1,
    particles = []
  sk.setup = () => {
    const { innerHeight, innerWidth } = window
    const canves = sk.createCanvas(innerWidth, innerHeight)
    // Resolve CSS variable for background so p5 matches theme
    const rootStyles = getComputedStyle(document.documentElement)
    const mainBg = rootStyles.getPropertyValue('--main-bg').trim() || sexyBlack
    sk.background(mainBg)
    canves.position(0, 0)
    // canves.style('z-index', '-1');

    // Dynamically update background on theme change (guard to avoid duplicates)
    if (!sk._themeListenerAdded) {
      const applyThemeBg = () => {
        const rs = getComputedStyle(document.documentElement)
        const bg = rs.getPropertyValue('--main-bg').trim() || sexyBlack
        sk.clear()
        sk.background(bg)
      }
      const mql =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
      if (mql) {
        if (mql.addEventListener) {
          mql.addEventListener('change', applyThemeBg)
        } else if (mql.addListener) {
          mql.addListener(applyThemeBg)
        }
      }
      sk._themeListenerAdded = true
    }

    cols = sk.floor(innerWidth / scl)
    rows = sk.floor(innerHeight / scl)
    flowfield = new Array(cols * rows)
    particles = []
    for (let i = 0; i < 300; i++) {
      particles[i] = new Particle(P5, scl, cols)
    }
  }

  sk.draw = () => {
    var yoff = 0
    for (var y = 0; y < rows; y++) {
      var xoff = 0
      for (var x = 0; x < cols; x++) {
        var index = x + y * cols
        var angle = sk.noise(xoff, yoff, zoff) * P5.TWO_PI * 4
        var v = Vector.fromAngle(angle)
        v.setMag(1)
        flowfield[index] = v
        xoff += inc
        sk.stroke(2, 50)
        // sk.push();
        // sk.translate(x * scl, y * scl);
        // sk.rotate(v.heading());
        // sk.strokeWeight(1);
        // sk.line(0, 0, scl, 0);
        // sk.pop();
      }
      yoff += inc

      zoff += 0.0003
    }
    for (var i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield)
      particles[i].update()
      particles[i].edges()
      particles[i].show()
    }
  }
  sk.windowResized = () => {
    try {
      const { windowHeight, windowWidth } = sk
      // sk.resizeCanvas(windowWidth, windowHeight, false)
      sk.setup()
    } catch (error) {
      console.log(error)
    }
  }
}

const P5 = new p5(s)
