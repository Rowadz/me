import { html, render } from 'lit-html';
import '@fortawesome/fontawesome-free/js/all';
const gitHubSection = document.getElementById('github-data');

const displayGitHubSection = () => html`
  <div class="row p">
    <h1 class="center">
      <i class="fab fa-github-alt"></i>
      GitHub Summary Data
      <i class="fab fa-github-alt"></i>
    </h1>
  </div>
`;
render(displayGitHubSection(), gitHubSection);

export default displayGitHubSection;
