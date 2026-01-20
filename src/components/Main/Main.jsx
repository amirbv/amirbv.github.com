import './Main.css';
import Links from '../Links/Links';

function Main() {
  return (
    <div className="main-container">
        <div className="name">
          <strong className='name-text'>Amir Bastidas</strong>
          <div>
            <Links />
          </div>
        </div>
        <div className="title">
          Front-end developer
        </div>
        <div className="description">
          Frontend developer passionate about crafting performant, accessible UIs for complex data-heavy applications.
            <br />
          6+ years building production React apps, PWAs, and Web3 dApps with a focus on UX, Accesibility, security, and Core Web Vitals.
        </div>
    </div>
  )
}

export default Main;