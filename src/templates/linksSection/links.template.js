import { html, render } from 'lit-html'
import '@fortawesome/fontawesome-free/js/all'
import { checkIfMobile } from '../../helpers/helper'
const linksSection = document.getElementById('links')
const icons = [
  { icon: 'linkedin', link: 'https://www.linkedin.com/in/mohammed-al-rowad/' },
  { icon: 'github', link: 'https://github.com/MohammedAl-Rowad' },
  {
    icon: 'youtube',
    link: 'https://www.youtube.com/channel/UC1Uw_GN4sodGisimwZNzMoA?view_as=subscriber',
  },
  {
    icon: 'stack-overflow',
    link: 'https://stackoverflow.com/users/10368302/rowad',
  },
  { icon: 'medium', link: 'https://medium.com/@mohammedalrowad' },
  { icon: 'code', link: 'https://leetcode.com/rowadz/', preFix: 'fas' },
  { icon: 'hackerrank', link: 'https://www.hackerrank.com/rowadz' },
]
let links = []
if (checkIfMobile()) {
  for (let i = 0; i < icons.length; i += 2) {
    const { icon, link, preFix } = icons[i]

    const linkToDisplay = html`<div class="two columns rm-margin-left center">
      <a href="${link}" target="_blank" class="hvr-bounce-out">
        <i class="${preFix ? preFix : 'fab'} fa-${icon} custom-icon-size-2"></i>
      </a>
      ${icons[i + 1]
        ? html`<a
            href="${icons[i + 1].link}"
            target="_blank"
            class="hvr-bounce-out"
          >
            <i
              class="${icons[i + 1].preFix
                ? icons[i + 1].preFix
                : 'fab'} fa-${icons[i + 1].icon} custom-icon-size-2"
            ></i>
          </a>`
        : ''}
    </div>`
    links.push(linkToDisplay)
  }
} else {
  links = icons.map(
    ({ icon, link, preFix }) => html`<div
      class="two columns rm-margin-left center"
    >
      <a href="${link}" target="_blank" class="hvr-bounce-out">
        <i class="${preFix ? preFix : 'fab'} fa-${icon} fa-7x"></i>
      </a>
    </div>`
  )
}

const disaplyLinks = () => html`
  <div class="row p">
    <h1 class="center">
      <i class="fas fa-link icon-header"></i>
      <span>Links</span>
      <i class="fas fa-link icon-header"></i>
    </h1>
    <div class="flex-container p">${links}</div>
  </div>
`
render(disaplyLinks(), linksSection)

export default disaplyLinks
