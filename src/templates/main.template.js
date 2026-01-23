import {
  getCurrentNameText,
  onNameTextChange,
} from './colorsHelper/colors.helper'

const mainSection = document.getElementById('main')
mainSection.style.flexDirection = 'column'

let isAnimating = false
let currentAnimation = null

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

const renderName = async ({ text, isArabic }, animate = true) => {
  // Cancel any ongoing animation
  if (currentAnimation) {
    clearTimeout(currentAnimation)
    currentAnimation = null
  }

  let h1 = document.querySelector('#main h1')
  let strong = h1 ? h1.querySelector('strong') : null

  if (!h1) {
    h1 = document.createElement('h1')
    strong = document.createElement('strong')
    h1.appendChild(strong)
    mainSection.appendChild(h1)
  }

  if (animate && !isAnimating && strong.textContent.length > 0) {
    isAnimating = true
    await eraseText(strong)
    // Apply font/direction styles after erasing, before typing new text
    h1.style.fontFamily = isArabic ? "'Tajawal', sans-serif" : ''
    h1.style.direction = isArabic ? 'rtl' : 'ltr'
    await typeWriter(strong, text)
    isAnimating = false
  } else if (!isAnimating) {
    h1.style.fontFamily = isArabic ? "'Tajawal', sans-serif" : ''
    h1.style.direction = isArabic ? 'rtl' : 'ltr'
    strong.textContent = text
  }
}

// Initial render (with animation)
renderName(getCurrentNameText(), true)

// Update on text change (with animation)
onNameTextChange((nameData) => renderName(nameData, true))

export default { renderName }
