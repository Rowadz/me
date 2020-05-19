import { html, render } from 'lit-html';
import '@fortawesome/fontawesome-free/js/all';
const linksSection = document.getElementById('skills');
const icons = [
  {
    icon: 'js',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  { icon: 'node', link: 'https://nodejs.org/en/' },
  { icon: 'npm', link: 'https://www.npmjs.com/' },
  { icon: 'python', link: 'https://www.python.org/' },
  { icon: 'php', link: 'https://www.php.net/' },
  { icon: 'laravel', link: 'https://laravel.com/' },
  { icon: 'angular', link: 'https://angular.io/' },
  { icon: 'vuejs', link: 'https://vuejs.org/' },
  { icon: 'react', link: 'https://reactjs.org/' },
  { icon: 'aws', link: 'https://aws.amazon.com/' },
  { icon: 'docker', link: 'https://www.docker.com/' },
  { icon: 'git-alt', link: 'https://git-scm.com/' },
  { icon: 'gitkraken', link: 'https://www.gitkraken.com/' },
  { icon: 'bitbucket', link: 'https://bitbucket.org/product' },
  // {icon: 'ember', link: ''},
  { icon: 'github-alt', link: 'http://github.com/' },
  // { 'gulp', link: ''},
  //{ 'grunt', link: ''},
  {
    icon: 'html5',
    link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  { icon: 'css3', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { icon: 'jenkins', link: 'https://www.jenkins.io/' },
  { icon: 'jira', link: 'https://www.atlassian.com/software/jira' },
  // { icon: 'less', link: 'http://lesscss.org/' },
  { icon: 'sass', link: 'https://sass-lang.com/documentation/syntax' },
  { icon: 'linux', link: 'https://www.linux.org/' },
  { icon: 'ubuntu', link: 'https://ubuntu.com/' },
  { icon: 'windows', link: 'https://www.microsoft.com/en-us/windows' },
  { icon: 'slack', link: 'https://slack.com/' },
  // { icon: 'skype', link: 'https://www.skype.com/en/' },
  { icon: 'facebook-square', link: 'https://developers.facebook.com/' },
  { icon: 'google-plus-g', link: 'https://developers.google.com/' },
];
const skills = icons.map(
  ({ icon, link }) => html`<div class="one columns center">
    <a href="${link}" target="_blank" class="hvr-bounce-out"
      ><i class="fab fa-${icon} fa-5x"></i
    ></a>
  </div>`
);

const disaplySkills = () => html`
  <div class="row p">
    <h1 class="center">
      <i class="fas fa-hands"></i>
      some of the things that I worked with & "font awesome" have icons for :)
      <i class="fas fa-hands"></i>
    </h1>
    ${skills}
  </div>
`;
render(disaplySkills(), linksSection);

export default disaplySkills;
