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
  // Update mask after typewriter animation completes
  // "Rowadz" = 6 chars * 80ms + erase time + buffer = ~1500ms
  // Arabic text is shorter, but we use the same delay for consistency
  setTimeout(updateTextMask, 1500)
})

// Circular text mask zone - particles fade out as they approach
let textMask = null
const FADE_ZONE_NORMAL = 60
const FADE_ZONE_ARABIC = 30
const updateTextMask = () => {
  const h1 = document.querySelector('#main h1')
  if (h1) {
    const rect = h1.getBoundingClientRect()
    // Add scroll offset to convert viewport coords to page coords
    const scrollX = window.scrollX || window.pageXOffset
    const scrollY = window.scrollY || window.pageYOffset
    // Calculate center and radius for circular mask
    const centerX = rect.left + scrollX + rect.width / 2
    const centerY = rect.top + scrollY + rect.height / 2
    // For English text (wider), use diagonal distance to ensure corners are covered
    // For Arabic text (more square), use larger dimension
    const padding = isArabicText ? 25 : 50
    const radius = isArabicText
      ? Math.max(rect.width, rect.height) / 2 + padding
      : Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2 + padding
    textMask = {
      centerX,
      centerY,
      radius,
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

  // Use smaller fade zone for Arabic text
  const fadeZone = isArabicText ? FADE_ZONE_ARABIC : FADE_ZONE_NORMAL

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
  if (distanceFromEdge < fadeZone) {
    return distanceFromEdge / fadeZone
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
