import './index.html'
import './scss/index.scss'
import 'skeleton-css/css/skeleton.css'
import './templates/main.template'
import './templates/p5/intro.p5'
import './templates/linksSection/links.template'
import displaySkills from  './templates/skillsSection/skills.template'
import './templates/githubSection/githubSection.template'
import './templates/selectedProject/selectedProject.template'
import './templates/about/about.template'
import './templates/videos/videos.template'

window.chartsz = []
window.onresize = () => {
    window.chartsz.forEach(chart => {
        chart.resize()
    });
    displaySkills()
}
