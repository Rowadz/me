import { html, render } from 'lit-html';
const mainSection = document.getElementById('main');
const name = (name) =>
  html`
    <h1 style="text-shadow: 2px 2px 8px #E9F1F2"><strong>${name}</strong></h1>
  `;
render(name('Rowad'), mainSection);

export default { displayName: name };
