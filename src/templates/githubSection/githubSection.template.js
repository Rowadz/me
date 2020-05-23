import { html, render } from 'lit-html';
import '@fortawesome/fontawesome-free/js/all';
const gitHubSection = document.getElementById('github-data');
// import { createActiveReposCharts } from './activeRepos.chart';
import { createReposByYears } from './reposByYear.chart';
import { createStarsByRepChart } from './stars.chart';
const displayGitHubSection = () => html`
  <div class="row p">
    <h1 class="center">
      <i class="fab fa-github-alt icon-header"></i>
      <span class="shadow">GitHub Summary Data</span>
      <i class="fab fa-github-alt icon-header"></i>
    </h1>
    <!--<div class="twelve columns center">
      <div id="active-repos-chart" class="chart"></div>
    </div>-->
    <div class="twelve columns center">
      <div id="repos-by-years" class="chart"></div>
    </div>
    <div class="twelve columns center">
      <div id="stars-by-repos" class="chart"></div>
    </div>
  </div>
`;
render(displayGitHubSection(), gitHubSection);
(async () => {
  const data = await fetch(
    'https://api.github.com/users/MohammedAl-rowad/repos?per_page=1000'
  ).then((res) => res.json());
  // createActiveReposCharts(data);
  createReposByYears(data);
  createStarsByRepChart(data);
})();

export default displayGitHubSection;
