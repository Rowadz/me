import { html, render } from 'lit-html'

const mainSection = document.getElementById('main')
mainSection.style.flexDirection = 'column'
const name = (name) => html`<h1><strong>${name}</strong></h1> `
render(html` ${name('Rowadz')} `, mainSection)

export default { displayName: name }
