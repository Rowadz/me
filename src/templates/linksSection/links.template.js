import { html, render } from 'lit-html';
import '@fortawesome/fontawesome-free/js/all';
const linksSection = document.getElementById('links');
const icons = [
  'linkedin',
  'github',
  'youtube',
  'stack-overflow',
  'medium',
  'hackerrank',
];
const links = icons.map(
  (icon) => html`<div class="two columns center">
    <i class="fab fa-${icon} fa-10x"></i>
  </div>`
);

const disaplyLinks = () => html`
  <div class="row p">
    <h1 class="center">Links</h1>
    ${links}
  </div>
`;
render(disaplyLinks(), linksSection);

export default disaplyLinks;
