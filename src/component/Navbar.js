import "../styles/navbar.css";
import MPY from "../assets/MPY.png";

function Navabar() {
  return (
    <div>
    <nav className="navBar">
      <img src={MPY}></img>
      <div className="nav-links">
        <ul>
          <li>
            <span>😊👌</span>
          </li>
          <li>
            <span>😊</span>
          </li>
          <li>
            <span>👌</span>
          </li>
        </ul>
      </div>
    </nav>
    <div>
    <header>
    </header>
    </div>
    </div>
  );
}

export default Navabar;
