import './Projects.css';
import { projects } from '../../utils/data';
import ProjectItem from './Project/ProjectItem';

function Projects() {
  return (
    <div>
        <h3>Projects</h3>
        
        <div className="projects-container">
            {projects.map((project) => <ProjectItem key={project.id} {...project} />)}
        </div>
    </div>
  )
}

export default Projects