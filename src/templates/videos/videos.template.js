import { html, render } from 'lit-html'
import '@fortawesome/fontawesome-free/js/all'
const videosSection = document.getElementById('videos')
const info = [
  {
    name: 'Gulp 4',
    animation: 'hvr-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/gulp-4-yt/master/thumb.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LVNapdMeupY-SevP4TrgVxZ',
  },
  {
    name: 'RxDB',
    animation: 'hvr-grow-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/RxDB-real-time-node-yt/master/thumb.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LUrdnzOyJLci-ojYAGYvQdh',
  },
  {
    name: 'Nestjs',
    animation: 'hvr-wobble-top',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/NestJs-youtube/master/Nest_js.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LVfT_McvhvKtRoVBk6riWEj',
  },
]
const info2 = [
  {
    name: 'TypeORM',
    animation: 'hvr-wobble-top',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/typeorm_yt/master/typeorm.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LVtZY-DG0OrZzZkkRtWGR6B',
  },
  {
    name: 'Koa',
    animation: 'hvr-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/koa-ts-yt/master/koa.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LV8imdUyP2uo-Ep54uIt-V0',
  },
  {
    name: 'Sequelize',
    animation: 'hvr-grow-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/sequelize-youtube/master/sequelize.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LWu38VSaB2Ubz8AHfo8q6uM',
  },
]

const info3 = [
  {
    name: 'Hapi',
    animation: 'hvr-wobble-top',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/hapi_yt/master/Hapi.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LVV3AjmeX0oTdKYOcmDTnog',
  },
  {
    name: 'PonyORM',
    animation: 'hvr-grow-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/PonyORM_yt/master/PonyORM.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LXPeEjSuumB4g4JFCsTwNgn',
  },
  {
    name: 'Underscore',
    animation: 'hvr-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/underscore_simple_copy_yt/master/underscore.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LUcrtIbit0rBETRWHNvE7Nf',
  },
]

const mapper = (data) =>
  data.map(
    ({ link, name, img, animation }) => html`<div
      class="center selected-projects three columns"
    >
      <h3>${name}</h3>
      <a href="${link}" target="_blank" rel="noopener noreferrer">
        <img src="${img}" width="300" class="${animation}" />
      </a>
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
