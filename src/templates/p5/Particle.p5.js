import {
  getCurrentAccentColor,
  onAccentColorChange,
  onNameTextChange,
} from '../colorsHelper/colors.helper'

// Shared accent color state for all particles
let currentAccent = getCurrentAccentColor()
onAccentColorChange((color) => {
  currentAccent = color
})

// Single mask for text - both English and Arabic use same size now
let mask = null
const FADE_ZONE = 50
const MOBILE_BREAKPOINT = 768
const RADIUS = 120
const RADIUS_MOBILE = 75

const updateMask = () => {
  const h1English = document.querySelector('#name-english')
  const h1Arabic = document.querySelector('#name-arabic')
  const visibleH1 = (h1English && h1English.style.display !== 'none') ? h1English : h1Arabic

  if (visibleH1) {
    const rect = visibleH1.getBoundingClientRect()
    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT

    mask = {
      centerX: rect.left + rect.width / 2,
      centerY: rect.top + rect.height / 2,
      radius: isMobile ? RADIUS_MOBILE : RADIUS,
    }
  }
}

// Update mask on load, resize, and text change
if (typeof window !== 'undefined') {
  window.addEventListener('load', updateMask)
  window.addEventListener('resize', updateMask)
  onNameTextChange(() => setTimeout(updateMask, 50)) // Small delay to let DOM update
  setTimeout(updateMask, 100)
}

// Returns 0 if inside mask, 1 if fully outside, or fade value in between
const getTextMaskOpacity = (x, y) => {
  if (!mask) return 1

  const dx = x - mask.centerX
  const dy = y - mask.centerY
  const distanceFromCenter = Math.sqrt(dx * dx + dy * dy)

  if (distanceFromCenter <= mask.radius) {
    return 0
  }

  const distanceFromEdge = distanceFromCenter - mask.radius

  if (distanceFromEdge < FADE_ZONE) {
    return distanceFromEdge / FADE_ZONE
  }

  return 1
}

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
    const opacity = Math.min(
      getTextMaskOpacity(this.pos.x, this.pos.y),
      getTextMaskOpacity(this.prevPos.x, this.prevPos.y)
    )

    if (opacity === 0) {
      this.h++
      if (this.h > 255) {
        this.h = 0
      }
      this.updatePrev()
      return
    }

    const isDark =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    const { rgb } = currentAccent
    const scale = this.h / 255
    let r = rgb.r * scale
    let g = rgb.g * scale
    let b = rgb.b * scale

    if (!isDark) {
      const minChannel = 50
      r = Math.max(r, minChannel)
      g = Math.max(g, minChannel)
      b = Math.max(b, minChannel)
    }

    const alpha = 255 * opacity
    this.p5.stroke(r, g, b, alpha)
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
