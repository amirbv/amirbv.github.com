import './ProjectItem.css';

function ProjectItem({name, description, type}) {

  function truncate(str) {
    return str.length > 25 ? str.substring(0, 25) + "..." : str;
  }

  return (
    <div className="project-item">
      <h3 className="project-name">{name}</h3>
      <div>
        <p>
          {truncate(description)}
        </p>
      </div>
      <div className="project-type-container">
        <img className="project-type-icon" src={type.icon} alt="type-icon" />
      </div>
    </div>
  );
}

export default ProjectItem;