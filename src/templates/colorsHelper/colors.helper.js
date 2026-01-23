export const sexyMainColor = '#6d5590'
// #a41304
export const sexyBlack = '#0e0e0e'

// Color definitions
const purple = { hex: '#6d5590', rgb: { r: 109, g: 85, b: 144 } }
const black = { hex: '#0e0e0e', rgb: { r: 14, g: 14, b: 14 } }
const red = { hex: '#a41304', rgb: { r: 164, g: 19, b: 4 } }
const cyan = { hex: '#00b4d8', rgb: { r: 0, g: 180, b: 216 } }

// Full cycle for particles: purple -> black -> red -> black -> cyan -> black
const particleColors = [purple, black, red, black, cyan, black]

// Icons/CSS cycle: purple -> red -> cyan (no black)
const iconColors = [purple, red, cyan]

// Text cycle: Rowadz -> رُوَّاد
const nameTexts = [
  { text: 'Rowadz', isArabic: false },
  { text: 'رُوَّاد', isArabic: true },
]

const CYCLE_DURATION = 5000 // 5 seconds for testing (change back to 30000)

let currentColorIndex = 0
let currentTextIndex = 0
let colorListeners = []
let textListeners = []
let tajawalFontLoaded = false

export const getCurrentAccentColor = () => particleColors[currentColorIndex]
export const getCurrentNameText = () => nameTexts[currentTextIndex]

export const onAccentColorChange = (callback) => {
  colorListeners.push(callback)
  return () => {
    colorListeners = colorListeners.filter((cb) => cb !== callback)
  }
}

export const onNameTextChange = (callback) => {
  textListeners.push(callback)
  return () => {
    textListeners = textListeners.filter((cb) => cb !== callback)
  }
}

// Lazy load Tajawal font only when needed
const loadTajawalFont = () => {
  if (tajawalFontLoaded) return Promise.resolve()

  return new Promise((resolve) => {
    const link = document.createElement('link')
    link.href =
      'https://fonts.googleapis.com/css2?family=Tajawal:wght@700&display=swap'
    link.rel = 'stylesheet'
    link.onload = () => {
      tajawalFontLoaded = true
      resolve()
    }
    document.head.appendChild(link)
  })
}

const updateCycle = async () => {
  // Update color
  currentColorIndex = (currentColorIndex + 1) % particleColors.length
  const particleColor = particleColors[currentColorIndex]

  if (particleColor.hex !== black.hex) {
    console.log('Icon color changed to:', particleColor.hex)
    document.documentElement.style.setProperty('--accent', particleColor.hex)
  }

  console.log('Particle color changed to:', particleColor.hex)
  colorListeners.forEach((cb) => cb(particleColor))

  // Update text (every other color change, since we have 6 colors and 2 texts)
  // Change text when going from last color back to first, or at midpoint
  if (currentColorIndex === 0 || currentColorIndex === 3) {
    const nextTextIndex = (currentTextIndex + 1) % nameTexts.length
    const nextText = nameTexts[nextTextIndex]

    // Load font before showing Arabic text
    if (nextText.isArabic) {
      await loadTajawalFont()
    }

    currentTextIndex = nextTextIndex
    console.log('Text changed to:', nextText.text)
    textListeners.forEach((cb) => cb(nextText))
  }
}

// Start the cycle
setInterval(updateCycle, CYCLE_DURATION)
