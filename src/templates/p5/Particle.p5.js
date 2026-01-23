import {
  getCurrentAccentColor,
  onAccentColorChange,
  getCurrentNameText,
  onNameTextChange,
} from '../colorsHelper/colors.helper'

// Shared accent color state for all particles
let currentAccent = getCurrentAccentColor()
onAccentColorChange((color) => {
  currentAccent = color
})

// Track if current text is Arabic
let isArabicText = getCurrentNameText().isArabic
onNameTextChange(({ isArabic }) => {
  isArabicText = isArabic
})

// Circular text mask zone - particles fade out as they approach
let textMask = null
const FADE_ZONE = 50
const MOBILE_BREAKPOINT = 768
// Desktop sizes
const FIXED_RADIUS_ENGLISH = 120
const FIXED_RADIUS_ARABIC = 80
// Mobile sizes (smaller to match 2.5em font)
const FIXED_RADIUS_ENGLISH_MOBILE = 75
const FIXED_RADIUS_ARABIC_MOBILE = 50

const getRadius = () => {
  const isMobile = window.innerWidth <= MOBILE_BREAKPOINT
  if (isArabicText) {
    return isMobile ? FIXED_RADIUS_ARABIC_MOBILE : FIXED_RADIUS_ARABIC
  }
  return isMobile ? FIXED_RADIUS_ENGLISH_MOBILE : FIXED_RADIUS_ENGLISH
}

const updateTextMask = () => {
  const h1 = document.querySelector('#main h1')
  if (h1) {
    const rect = h1.getBoundingClientRect()
    // Add scroll offset to convert viewport coords to page coords
    const scrollX = window.scrollX || window.pageXOffset
    const scrollY = window.scrollY || window.pageYOffset
    // Calculate center for circular mask
    const centerX = rect.left + scrollX + rect.width / 2
    const centerY = rect.top + scrollY + rect.height / 2
    textMask = {
      centerX,
      centerY,
      radius: getRadius(),
    }
  }
}
// Update on load and resize
if (typeof window !== 'undefined') {
  window.addEventListener('load', updateTextMask)
  window.addEventListener('resize', updateTextMask)
  // Initial update after a short delay to ensure DOM is ready
  setTimeout(updateTextMask, 100)
}

// Returns 0 if inside circular mask, 1 if fully outside fade zone, or a value between for fading
const getTextMaskOpacity = (x, y) => {
  if (!textMask) return 1

  // Calculate distance from point to center of circle
  const dx = x - textMask.centerX
  const dy = y - textMask.centerY
  const distanceFromCenter = Math.sqrt(dx * dx + dy * dy)

  // Inside the circular mask
  if (distanceFromCenter <= textMask.radius) {
    return 0
  }

  // Distance from the circle edge
  const distanceFromEdge = distanceFromCenter - textMask.radius

  // In the fade zone
  if (distanceFromEdge < FADE_ZONE) {
    return distanceFromEdge / FADE_ZONE
  }

  // Fully outside
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
    // Get opacity based on distance to text mask (0 = inside, 1 = fully outside)
    const opacity = Math.min(
      getTextMaskOpacity(this.pos.x, this.pos.y),
      getTextMaskOpacity(this.prevPos.x, this.prevPos.y)
    )

    // Skip drawing if fully inside the mask
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

    // Use current accent color, scaled by h for the fade effect
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

    // Apply fade based on proximity to text
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
