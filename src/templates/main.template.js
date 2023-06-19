import { html, render } from 'lit-html'

import imgSrc2 from '../me.webp'

const mainSection = document.getElementById('main')
mainSection.style.flexDirection = 'column'
const name = (name) => html`<h1><strong>${name}</strong></h1> `
render(
  html`
    <img
      loading="lazy"
      class="lazyload"
      src="${imgSrc2}"
      alt="Alt Text!"
      style="width: 200px; z-index: 200; clip-path: circle(); height: 300px;"
    />

    ${name('Rowadz')}
  `,
  mainSection
)

export default { displayName: name }
