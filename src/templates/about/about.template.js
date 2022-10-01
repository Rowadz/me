import { html, render } from 'lit-html'
import '@fortawesome/fontawesome-free/js/all'
import { mainBg, mainColor } from '../../scss/colors.scss'
const aboutSection = document.getElementById('about')

const disaplyAbout = () => html`
  <div class="row p">
    <h1 class="center">
      <i class="fas fa-address-card icon-header"></i>
      <span>About</span>
      <i class="fas fa-address-card icon-header"></i>
    </h1>
    <div class="flex-container p">
      <h5>
        A jack of all trades software engineer.
        <br />
        Contact me here -> <b>rowadwo@gmail.com</b>
      </h5>
    </div>
  </div>
`
render(disaplyAbout(), aboutSection)

export default disaplyAbout
