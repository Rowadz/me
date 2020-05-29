export class Particle {
  constructor(p5, scl, cols) {
    const { innerHeight, innerWidth } = window
    this.width = innerWidth
    this.height = innerHeight
    this.scl = scl
    this.cols = cols
    this.p5 = p5
    this.pos = this.p5.createVector(
      this.p5.random(innerWidth),
      this.p5.random(innerHeight)
    )
    this.vel = this.p5.createVector(0, 0)
    this.acc = this.p5.createVector(0, 0)
    this.maxspeed = 4
    this.h = 0
    this.prevPos = this.pos.copy()
  }
  update() {
    this.vel.add(this.acc)
    this.vel.limit(this.maxspeed)
    this.pos.add(this.vel)
    this.acc.mult(0)
  }
  follow(vectors) {
    var x = this.p5.floor(this.pos.x / this.scl)
    var y = this.p5.floor(this.pos.y / this.scl)
    var index = x + y * this.cols
    var force = vectors[index]
    this.applyForce(force)
  }
  applyForce(force) {
    this.acc.add(force)
  }
  show() {
    this.p5.stroke(this.h / 1.5, this.h / 3, this.h, 255)
    // rgb(109, 85, 144)
    // this.p5.stroke(26, 147, 200, 255);
    this.h++
    if (this.h > 255) {
      this.h = 0
    }
    this.p5.strokeWeight(1)
    this.p5.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
    this.updatePrev()
  }
  updatePrev() {
    this.prevPos.x = this.pos.x
    this.prevPos.y = this.pos.y
  }
  edges() {
    if (this.pos.x > this.width) {
      this.pos.x = 0
      this.updatePrev()
    }
    if (this.pos.x < 0) {
      this.pos.x = this.width
      this.updatePrev()
    }
    if (this.pos.y > this.height) {
      this.pos.y = 0
      this.updatePrev()
    }
    if (this.pos.y < 0) {
      this.pos.y = this.height
      this.updatePrev()
    }
  }
}
