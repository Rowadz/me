import { html, render } from 'lit-html';
import '@fortawesome/fontawesome-free/js/all';
const linksSection = document.getElementById('skills');
const icons = [
  'js',
  'node',
  'npm',
  'python',
  'php',
  'angular',
  'vuejs',
  'react',
  'aws',
  'docker',
  'git-alt',
  'gitkraken',
  'bitbucket',
  'ember',
  'github-alt',
  // 'gulp',
  // 'grunt',
  'html5',
  'jenkins',
  'jira',
  'less',
  'sass',
  'linux',
  'ubuntu',
  'windows',
  'slack',
  'skype',
];
const skills = icons.map(
  (icon) => html`<div class="one columns center">
    <a href="#"><i class="fab fa-${icon} fa-5x"></i></a>
  </div>`
);

const disaplySkills = () => html`
  <div class="row p">
    <p class="center">
      some of the things that I worked with & "font awesome" have icons for :)
    </p>
    ${skills}
  </div>
`;
render(disaplySkills(), linksSection);

export default disaplySkills;
