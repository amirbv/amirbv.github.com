import './Skills.css';
import { skills } from "../../utils/data";
import SkillItem from "./Skill/SkillItem";

function Skills() {
  return (
    <div>
        <h3>Skills</h3>
        <div className="skills-container">
          {skills.map((skill) => <SkillItem key={skill.id} {...skill} />)}
        </div>
    </div>
  )
}

export default Skills