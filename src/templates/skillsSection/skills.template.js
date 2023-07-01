import { html, render } from 'lit-html'
import '@fortawesome/fontawesome-free/js/all'
import { checkIfMobile } from '../../helpers/helper'
const linksSection = document.getElementById('skills')
const icons = [
  {
    icon: 'js',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  { icon: 'node', link: 'https://nodejs.org/en/' },
  { icon: 'python', link: 'https://www.python.org/' },
  { icon: 'dyalog', link: 'https://www.djangoproject.com/' },
  { icon: 'php', link: 'https://www.php.net/' },
  { icon: 'laravel', link: 'https://laravel.com/' },
  { icon: 'angular', link: 'https://angular.io/' },
  { icon: 'vuejs', link: 'https://vuejs.org/' },
  { icon: 'react', link: 'https://reactjs.org/' },
  { icon: 'aws', link: 'https://aws.amazon.com/' },
  { icon: 'docker', link: 'https://www.docker.com/' },
  { icon: 'git-alt', link: 'https://git-scm.com/' },
  // { icon: 'gitkraken', link: 'https://www.gitkraken.com/' },
  { icon: 'bitbucket', link: 'https://bitbucket.org/product' },
  { icon: 'figma', link: 'https://www.figma.com/' },
  // { icon: 'ember', link: 'https://emberjs.com/' },
  { icon: 'github-alt', link: 'http://github.com/' },
  { icon: 'gulp', link: 'https://gulpjs.com/' },
  //{ 'grunt', link: ''},
  // { icon: 'firefox', link: 'https://www.mozilla.org/en-US/exp/firefox/new/' },
  // { icon: 'chrome', link: 'https://www.google.com/chrome/' },
  // { icon: 'trello', link: 'https://trello.com/' },
  // { icon: 'css3', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { icon: 'jenkins', link: 'https://www.jenkins.io/' },
  { icon: 'jira', link: 'https://www.atlassian.com/software/jira' },
  // { icon: 'less', link: 'http://lesscss.org/' },
  { icon: 'sass', link: 'https://sass-lang.com/documentation/syntax' },
  { icon: 'linux', link: 'https://www.linux.org/' },
  { icon: 'ubuntu', link: 'https://ubuntu.com/' },
  // { icon: 'windows', link: 'https://www.microsoft.com/en-us/windows' },
  // { icon: 'slack', link: 'https://slack.com/' },
  // { icon: 'skype', link: 'https://www.skype.com/en/' },
  // { icon: 'facebook-square', link: 'https://developers.facebook.com/' },
  // { icon: 'google-plus-g', link: 'https://developers.google.com/' },
]

let skills = []

if (checkIfMobile()) {
  for (let i = 0; i < icons.length; i += 3) {
    const { icon, link } = icons[i]
    const skill = html`<div class="twelve columns center">
      <a
        aria-label="Icon = '${icon}'"
        href="${link}"
        target="_blank"
        class="hvr-bounce-out"
        ><i class="fab fa-${icon} custom-icon-size"></i
      ></a>
      <a
        aria-label="Icon = '${icon}'"
        href="${icons[i + 1]?.link}"
        target="_blank"
        class="hvr-bounce-out"
        ><i class="fab fa-${icons[i + 1]?.icon} custom-icon-size"></i
      ></a>
      <a
        aria-label="Icon = '${icon}'"
        href="${icons[i + 2]?.link}"
        target="_blank"
        class="hvr-bounce-out"
      >
        <i class="fab fa-${icons[i + 2]?.icon} custom-icon-size"></i
      ></a>
    </div>`
    skills.push(skill)
  }
} else {
  skills = icons.map(
    ({ icon, link }) => html`<div class="one columns center">
      <a
        href="${link}"
        target="_blank"
        class="hvr-bounce-out"
        aria-label="Icon = '${icon}'"
      >
        <i class="fab fa-${icon} fa-5x"></i
      ></a>
    </div>`
  )
}

const displaySkills = () => html`
  <div class="row p">
    <h1 class="center">
      <!-- <i class="fas fa-hands icon-header"></i> !-->
      <span>Some of the things that I worked with</span>
      <!-- <i class="fas fa-hands icon-header"></i> !-->
    </h1>
    ${skills}
  </div>
`
render(displaySkills(), linksSection)

export default displaySkills
