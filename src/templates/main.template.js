import { html, render } from 'lit-html';
const mainSection = document.getElementById('main');
const test = (name) => html` <h1>Rowad</h1> `;
render(test('World'), mainSection);

export default { init: test };
