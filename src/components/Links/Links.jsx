import { profileLinks } from "../../utils/data";
import './Links.css';
import LinkItem from "./LinkItem/LinkItem";

function Links() {
  return (
    <div className="links-container">
      {profileLinks.map((profileLink) => <LinkItem key={profileLink.id} {...profileLink} />)}
    </div>
  )
}

export default Links;