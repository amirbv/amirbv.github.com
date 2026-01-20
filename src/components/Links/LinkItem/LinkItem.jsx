import "./LinkItem.css";

function LinkItem({ name, iconSrc, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" title={name}>
      <span className="link-item">
        <img className="link-img" src={iconSrc} alt="icon" />
      </span>
    </a>
  );
}

export default LinkItem;
