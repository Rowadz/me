import { html, render } from 'lit-html';
import '@fortawesome/fontawesome-free/js/all';
const selectedProjectsSection = document.getElementById('selected-projects');

const disaplySelectedProjects = () => html`
  <div class="row p">
    <h1 class="center">
      <i class="fas fa-hands icon-header"></i>
      Some Personal Selected Projects
      <i class="fas fa-hands icon-header"></i>
    </h1>
  </div>
`;

render(disaplySelectedProjects(), selectedProjectsSection);

export default disaplySelectedProjects;
