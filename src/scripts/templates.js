import { html, render } from 'lit-html';
const mainSection = document.getElementById('main');
const test = (name) => html`
  <h1>Hello World</h1>
  <button class="button-primary">Button element</button>
`;
render(test('World'), mainSection);

export default { init: test };
