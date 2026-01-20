import './SkillItem.css';

function SkillItem({title, iconSrc}) {
  return (
    <div className="skill-item">
        <strong>{title}</strong>
        <img className="skill-icon" src={iconSrc} alt="icon" />
    </div>
  );
}

export default SkillItem;