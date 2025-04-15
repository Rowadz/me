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
        
        I’m an engineer focused on building and scaling APIs and infrastructure that serve billions of requests every day. 
         <br />
        I lead projects end-to-end, from discovery, system design and cross team collaboration to development and deployment, while staying hands-on with performance tuning, CDN optimization, caching strategies, and code improvements. 
         <br />
        I prioritize observability and reliability, ensuring our systems are resilient and efficient at scale. 
        
        <br />
        As part of the on-call team (available 24/7), I handle high-pressure incidents, lead response efforts, and drive long-term fixes through postmortems and system improvements.
        <br />
        Contact me here -> <b>rowadwo@gmail.com</b>
      </h5>
    </div>
  </div>
`
render(disaplyAbout(), aboutSection)

export default disaplyAbout
