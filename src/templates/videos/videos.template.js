import { html, render } from 'lit-html'
import '@fortawesome/fontawesome-free/js/all'
import * as lazyload from 'lazyload'
const videosSection = document.getElementById('videos')
const info = [
  {
    name: 'createAsyncThunk',
    animation: 'hvr-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/in-depth-create-async-thunk/main/thumb.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LW_Wz3DPoT5-bm1btrBD1bu',
  },
  {
    name: 'Django',
    animation: 'hvr-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/django-react-yt/main/new-thumb.png',
    link:
      'https://youtube.com/playlist?list=PLM0LBHjz37LU_XA4TX_H0chJ1OgEOHpJ3',
  },
  {
    name: 'RxDB',
    animation: 'hvr-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/RxDB-real-time-node-yt/master/thumb.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LUrdnzOyJLci-ojYAGYvQdh',
  },
]
const info2 = [
  {
    name: 'TypeORM',
    animation: 'hvr-rotate',
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
    animation: 'hvr-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/sequelize-youtube/master/sequelize.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LWu38VSaB2Ubz8AHfo8q6uM',
  },
]

const info3 = [
  {
    name: 'Hapi',
    animation: 'hvr-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/hapi_yt/master/Hapi.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LVV3AjmeX0oTdKYOcmDTnog',
  },
  {
    name: 'redux toolkit',
    animation: 'hvr-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/react-redux-toolkit-yt/main/thumb.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LXSASzEv81f3tGptAsEGQUM',
  },
  {
    name: 'Gulp 4',
    animation: 'hvr-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/gulp-4-yt/master/thumb.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LVNapdMeupY-SevP4TrgVxZ',
  },
]
const info4 = [
  {
    name: 'createEntityAdapter',
    animation: 'hvr-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/redux-toolkit-adapters-and-thunks/main/thumb.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LW0zVaEjpeCmw-WgglfXWnI',
  },
  {
    name: 'Nestjs',
    animation: 'hvr-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/NestJs-youtube/master/Nest_js.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LVfT_McvhvKtRoVBk6riWEj',
  },
  {
    name: 'react & redux',
    animation: 'hvr-rotate',
    img:
      'https://raw.githubusercontent.com/MohammedAl-Rowad/react-redux-yt/master/thumb.png',
    link:
      'https://www.youtube.com/playlist?list=PLM0LBHjz37LU1l5XXp5oxF6khA5kwRHg_',
  },
]

const mapper = (data) =>
  data.map(
    ({ link, name, img, animation }) => html`<div
      class="center selected-projects three columns"
    >
      <h3>${name}</h3>
      <a href="${link}" target="_blank" rel="noopener noreferrer">
        <img width="300" class="lazyload ${animation}" data-src="${img}" />
      </a>
    </div>`
  )

const infoHTML = mapper(info)
const infoHTML2 = mapper(info2)
const infoHTML3 = mapper(info3)
const infoHTML4 = mapper(info4)

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
    <div class="flex-container p">${infoHTML4}</div>
  </div>
`

render(displayCideosSection(), videosSection)
new lazyload(document.querySelectorAll('.lazyload'))
export default displayCideosSection
