import { html, render } from 'lit-html'
import '@fortawesome/fontawesome-free/js/all'
const selectedProjectsSection = document.getElementById('selected-projects')
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
    link: 'https://mohammedal-rowad.github.io/vexpest_V2/',
    about:
      'React app that creates a dashboard based on your GitHub public data',
    ul: [
      { name: 'React', link: 'https://reactjs.org/' },
      { name: 'Echarts', link: 'https://echarts.apache.org/' },
      { name: 'Wired Elements', link: 'https://wiredjs.com/' },
      {
        name: 'Video',
        link: 'https://youtu.be/NwS7zRBCdnA',
      },
    ],
  },
  {
    name: 'AReS',
    link: 'https://github.com/MohammedAl-Rowad/AReS',
    about: 'explorer tool utilizing Dublin Core and CG Core metadata schemas',
    ul: [
      { name: 'Angular', link: 'https://angular.io/' },
      { name: 'Highcharts', link: 'https://www.highcharts.com/' },
      { name: 'NGRX', link: 'https://ngrx.io/' },
      {
        name: 'Video',
        link: '#',
      },
    ],
  },
  {
    name: 'NestJs',
    link: 'https://github.com/MohammedAl-Rowad/NestJs-youtube',
    about: 'I created a videos (+7 hours) about Nestjs to teach people',
    ul: [
      { name: 'NestJs', link: 'https://nestjs.com/' },
      { name: 'postgresql', link: 'https://www.postgresql.org/' },
      { name: 'jwt', link: 'http://jwt.io/' },
      {
        name: 'Videos',
        link:
          'https://www.youtube.com/playlist?list=PLM0LBHjz37LVfT_McvhvKtRoVBk6riWEj',
      },
    ],
  },
]

const infoHTML = info.map(
  ({ name, link, about, ul }) => html`<div
    class="center selected-projects three columns"
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
)

const disaplySelectedProjects = () => html`
  <div class="row">
    <h1 class="center">
      <i class="far fa-sun icon-header"></i>
      <span class="shadow">Some Selected Projects</span>
      <i class="far fa-sun icon-header"></i>
    </h1>
    <div class="flex-container p">
      ${infoHTML}
    </div>
  </div>
`

render(disaplySelectedProjects(), selectedProjectsSection)

export default disaplySelectedProjects
