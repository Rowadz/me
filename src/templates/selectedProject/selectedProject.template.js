import { html, render } from 'lit-html';
import '@fortawesome/fontawesome-free/js/all';
const selectedProjectsSection = document.getElementById('selected-projects');

const disaplySelectedProjects = () => html`
  <div class="row p">
    <h1 class="center">
      <i class="far fa-sun icon-header"></i>
      Some Personal Selected Projects
      <i class="far fa-sun icon-header"></i>
    </h1>
  </div>
`;

render(disaplySelectedProjects(), selectedProjectsSection);

export default disaplySelectedProjects;
