import { html, render } from 'lit-html';
const mainSection = document.getElementById('main');
const name = (name) => html` <h1>${name}</h1> `;
render(name('Rowad'), mainSection);

export default { displayName: name };
