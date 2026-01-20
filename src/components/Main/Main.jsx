import './Main.css';
import Links from '../Links/Links';

function Main() {
  return (
    <div className="main-container">
        <div className="name">
          <strong>Jose Gutierrez</strong>
          <div>
            <Links />
          </div>
        </div>
        <div className="title">
          Front-end & hybrid mobile developer
        </div>
        <div className="description">
          I build web front-end  and mobile apps solutions.
        </div>
    </div>
  )
}

export default Main;