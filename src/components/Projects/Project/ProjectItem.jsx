import { useState } from 'react';
import './ProjectItem.css';

function ProjectItem({name, description, type, link}) {

  const [isTruncated, setIsTruncated] = useState(true)

  function truncate(str) {
    return str.length > 200 ? str.substring(0, 200) + "..." : str;
  }

  return (
    <div className="project-item">
      <h3 className="project-name"><a href={link}>{name}</a></h3>
      <div>
        <p onClick={() => setIsTruncated(!isTruncated)}>
          {isTruncated ? truncate(description) : description}
        </p>
      </div>
      <div className="project-type-container">
        <img className="project-type-icon" src={type.icon} alt="type-icon" />
      </div>
    </div>
  );
}

export default ProjectItem;