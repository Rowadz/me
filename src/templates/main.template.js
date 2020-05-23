import { html, render } from 'lit-html';
const mainSection = document.getElementById('main');
const name = (name) => html` <h1 class="shadow"><strong>${name}</strong></h1> `;
render(name('Rowad'), mainSection);

export default { displayName: name };
