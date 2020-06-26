import { html, render } from 'lit-html'
import '@fortawesome/fontawesome-free/js/all'
const aboutSection = document.getElementById('about')

const disaplyAbout = () => html`
  <div class="row p">
    <h1 class="center">
      <i class="fas fa-address-card icon-header"></i>
      <span class="shadow">About</span>
      <i class="fas fa-address-card icon-header"></i>
    </h1>
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
