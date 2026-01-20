import './LinkItem.css';

function LinkItem({ name, iconSrc }) {
  return (
    <div className="link-item">
      <img className="link-img" src={iconSrc} alt="icon" />
    </div>
  )
}

export default LinkItem;