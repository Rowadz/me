import { html, render } from 'lit-html';
import '@fortawesome/fontawesome-free/js/all';
const gitHubSection = document.getElementById('github-data');
import { createActiveReposCharts } from './activeRepos.chart';
import { createReposByYears } from './reposByYear.chart';
const displayGitHubSection = () => html`
  <div class="row p">
    <h1 class="center">
      <i class="fab fa-github-alt"></i>
      GitHub Summary Data
      <i class="fab fa-github-alt"></i>
    </h1>
    <div class="twelve columns center">
      <div id="active-repos-chart" class="chart"></div>
    </div>
    <div class="twelve columns center">
      <div id="repos-by-years" class="chart"></div>
    </div>
  </div>
`;
render(displayGitHubSection(), gitHubSection);
createActiveReposCharts();
createReposByYears();
export default displayGitHubSection;
