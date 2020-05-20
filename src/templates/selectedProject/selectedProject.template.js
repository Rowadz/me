import { html, render } from 'lit-html';
import '@fortawesome/fontawesome-free/js/all';
const selectedProjectsSection = document.getElementById('selected-projects');
const info = [
  {
    name: 'Yedua',
    link: 'https://mohammedal-rowad.github.io/Yedua/',
    about: 'A recursive web scraper that visualizes the DOM',
    ul: [
      { name: 'Express', link: 'https://expressjs.com/' },
      { name: 'Cheeriojs', link: 'https://github.com/cheeriojs/cheerio' },
      { name: 'Angular', link: 'https://angular.io/' },
      { name: 'Video', link: 'https://www.youtube.com/watch?v=gd95R18BwJw' },
    ],
  },
  {
    name: 'Vexpest',
    link: 'https://mohammedal-rowad.github.io/vexpest/',
    about:
      'React app that creates a dashboard based on your GitHub public data',
    ul: [
      { name: 'React', link: 'https://reactjs.org/' },
      { name: 'Highcharts', link: 'https://www.highcharts.com/' },
      { name: 'Wired Elements', link: 'https://wiredjs.com/' },
      {
        name: 'Video',
        link: 'https://www.youtube.com/watch?v=ouSJj9peV8c&t=6s',
      },
    ],
  },
];

const infoHTML = info.map(
  ({ name, link, about, ul }) => html`<div
    class="five columns center selected-projects"
  >
    <h3>
      <a href="${link}" target="_blank">${name}</a>
    </h3>
    <p>${about}</p>
    <ul>
      ${ul.map(
        ({ link, name }) =>
          html`<li><a href="${link}" target="_blank">${name}</a></li>`
      )}
    </ul>
  </div>`
);

const disaplySelectedProjects = () => html`
  <div class="row">
    <h1 class="center">
      <i class="far fa-sun icon-header"></i>
      Some Personal Selected Projects
      <i class="far fa-sun icon-header"></i>
    </h1>
    ${infoHTML}
  </div>
`;

render(disaplySelectedProjects(), selectedProjectsSection);

export default disaplySelectedProjects;
