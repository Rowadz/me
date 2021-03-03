import { html, render } from 'lit-html'
import '@fortawesome/fontawesome-free/js/all'
import { mainBg, mainColor } from '../../scss/colors.scss'
const aboutSection = document.getElementById('about')

const disaplyAbout = () => html`
  <div class="row p">
    <h1 class="center">
      <i class="fas fa-address-card icon-header"></i>
      <span class="shadow">About</span>
      <i class="fas fa-address-card icon-header"></i>
    </h1>
    
      <div class="LI-profile-badge center"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="mohammed-al-rowad"><a class="LI-simple-link" href='https://jo.linkedin.com/in/mohammed-al-rowad?trk=profile-badge'>Mohammed Rowad</a></div>
    <div class="flex-container p">
      <h5>
        A full-stack software engineer who is located in Jordan and very
        enthusiastic about open source software.
        <br />
        This page is my personal website where you can find links about me &
        some of my projects.
        <br />
        Contact me here -> <b>rowadwo@gmail.com</b>
      </h5>
    </div>
  </div>
`
render(disaplyAbout(), aboutSection)

export default disaplyAbout
