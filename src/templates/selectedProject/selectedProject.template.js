import { html, render } from 'lit-html';
import '@fortawesome/fontawesome-free/js/all';
const selectedProjectsSection = document.getElementById('selected-projects');

const disaplySelectedProjects = () => html`
  <div class="row p">
    <h1 class="center">
      <i class="fas fa-hands"></i>
      some of the things that I worked with & "font awesome" have icons for :)
      <i class="fas fa-hands"></i>
    </h1>
    ${skills}
  </div>
`;

render(disaplySelectedProjects(), selectedProjectsSection);

export default disaplySelectedProjects;
