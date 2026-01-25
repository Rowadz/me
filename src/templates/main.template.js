import {
  getCurrentNameText,
  onNameTextChange,
} from './colorsHelper/colors.helper'

const mainSection = document.getElementById('main')
mainSection.style.flexDirection = 'column'

let isAnimating = false
let currentAnimation = null

// Create both h1 elements - one for English, one for Arabic
const h1English = document.createElement('h1')
h1English.id = 'name-english'
const strongEnglish = document.createElement('strong')
strongEnglish.textContent = 'Rowadz'
h1English.appendChild(strongEnglish)

const h1Arabic = document.createElement('h1')
h1Arabic.id = 'name-arabic'
h1Arabic.style.fontFamily = "'Tajawal', sans-serif"
h1Arabic.style.direction = 'rtl'
h1Arabic.style.fontSize = '5.6em' // Scale up to match English text visual size (h1 is 4em, Arabic needs ~1.4x)
h1Arabic.style.display = 'none'
const strongArabic = document.createElement('strong')
strongArabic.textContent = 'رُوَّاد'
h1Arabic.appendChild(strongArabic)

mainSection.appendChild(h1English)
mainSection.appendChild(h1Arabic)

const typeWriter = (element, text, speed = 80) => {
  return new Promise((resolve) => {
    let i = 0
    element.textContent = ''

    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
        currentAnimation = setTimeout(type, speed)
      } else {
        resolve()
      }
    }
    type()
  })
}

const eraseText = (element, speed = 50) => {
  return new Promise((resolve) => {
    const erase = () => {
      if (element.textContent.length > 0) {
        element.textContent = element.textContent.slice(0, -1)
        currentAnimation = setTimeout(erase, speed)
      } else {
        resolve()
      }
    }
    erase()
  })
}

const switchText = async (toArabic, animate = true) => {
  if (currentAnimation) {
    clearTimeout(currentAnimation)
    currentAnimation = null
  }

  const fromH1 = toArabic ? h1English : h1Arabic
  const toH1 = toArabic ? h1Arabic : h1English
  const fromStrong = toArabic ? strongEnglish : strongArabic
  const toStrong = toArabic ? strongArabic : strongEnglish
  const toText = toArabic ? 'رُوَّاد' : 'Rowadz'

  if (animate && !isAnimating) {
    isAnimating = true
    await eraseText(fromStrong)
    fromH1.style.display = 'none'
    toH1.style.display = ''
    await typeWriter(toStrong, toText)
    isAnimating = false
  } else if (!isAnimating) {
    fromH1.style.display = 'none'
    toH1.style.display = ''
    toStrong.textContent = toText
  }
}

// Set initial state based on current text
const initialText = getCurrentNameText()
if (initialText.isArabic) {
  h1English.style.display = 'none'
  h1Arabic.style.display = ''
}

// Switch text on change
onNameTextChange(({ isArabic }) => switchText(isArabic, true))

export default { switchText }
