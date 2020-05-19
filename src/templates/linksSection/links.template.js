import { html, render } from 'lit-html';
import '@fortawesome/fontawesome-free/js/all';
const linksSection = document.getElementById('links');
const icons = [
  { icon: 'linkedin', link: 'https://www.linkedin.com/in/mohammed-al-rowad/' },
  { icon: 'github', link: 'https://github.com/MohammedAl-Rowad' },
  {
    icon: 'youtube',
    link:
      'https://www.youtube.com/channel/UC1Uw_GN4sodGisimwZNzMoA?view_as=subscriber',
  },
  {
    icon: 'stack-overflow',
    link: 'https://stackoverflow.com/users/10368302/rowad',
  },
  { icon: 'medium', link: 'https://medium.com/@mohammedalrowad' },
  { icon: 'lemon', link: 'https://leetcode.com/rowadwo/', preFix: 'fas' },
  { icon: 'hackerrank', link: 'https://www.hackerrank.com/rowad' },
];
const links = icons.map(
  ({ icon, link, preFix }) => html`<div class="two columns center">
    <a href="${link}" target="_blank" class="hvr-bounce-out">
      <i class="${preFix ? preFix : 'fab'} fa-${icon} fa-10x"></i>
    </a>
  </div>`
);

const disaplyLinks = () => html`
  <div class="row p">
    <h1 class="center">
      <i class="fas fa-link icon-header"></i>
      Links
      <i class="fas fa-link icon-header"></i>
    </h1>
    ${links}
  </div>
`;
render(disaplyLinks(), linksSection);

export default disaplyLinks;
