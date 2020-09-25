import { html, render } from 'lit-html'
import '@fortawesome/fontawesome-free/js/all'
const videosSection = document.getElementById('videos')
const info = [
  {
    name: 'Gulp 4',
    link:
      'https://www.youtube.com/embed/videoseries?list=PLM0LBHjz37LVNapdMeupY-SevP4TrgVxZ',
  },
  {
    name: 'RxBD',
    link:
      'https://www.youtube.com/embed/videoseries?list=PLM0LBHjz37LUrdnzOyJLci-ojYAGYvQdh',
  },
  {
    name: 'Nestjs',
    link:
      'https://www.youtube.com/embed/videoseries?list=PLM0LBHjz37LVfT_McvhvKtRoVBk6riWEj',
  },
]
const info2 = [
  {
    name: 'TypeORM',
    link:
      'https://www.youtube.com/embed/videoseries?list=PLM0LBHjz37LVtZY-DG0OrZzZkkRtWGR6B',
  },
  {
    name: 'Koa',
    link:
      'https://www.youtube.com/embed/videoseries?list=PLM0LBHjz37LV8imdUyP2uo-Ep54uIt-V0',
  },
  {
    name: 'Sequelize',
    link:
      'https://www.youtube.com/embed/videoseries?list=PLM0LBHjz37LWu38VSaB2Ubz8AHfo8q6uM',
  },
]

const info3 = [
    {
      name: 'Hapi',
      link:
        'https://www.youtube.com/embed/videoseries?list=PLM0LBHjz37LVV3AjmeX0oTdKYOcmDTnog',
    },
    {
      name: 'PonyORM',
      link:
        'https://www.youtube.com/embed/videoseries?list=PLM0LBHjz37LXPeEjSuumB4g4JFCsTwNgn',
    },
    {
      name: 'JS notes',
      link:
        'https://www.youtube.com/embed/videoseries?list=PLM0LBHjz37LWHEM4qbjV9oLM4WDUuqs7r',
    },
  ]

const mapper = (data) =>
  data.map(
    ({ link, name }) => html`<div
      class="center selected-projects three columns"
    >
      <h3>${name}</h3>
      <iframe
        src="${link}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>`
  )

const infoHTML = mapper(info)
const infoHTML2 = mapper(info2)
const infoHTML3 = mapper(info3)

const displayCideosSection = () => html`
  <div class="row">
    <h1 class="center">
      <i class="fab fa-youtube"></i>
      <span class="shadow">Playlists I created on youtube</span>
      <i class="fab fa-youtube"></i>
    </h1>
    <div class="flex-container p">${infoHTML}</div>
    <div class="flex-container p">${infoHTML2}</div>
    <div class="flex-container p">${infoHTML3}</div>
  </div>
`

render(displayCideosSection(), videosSection)

export default displayCideosSection
