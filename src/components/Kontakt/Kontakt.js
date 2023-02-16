import { Link } from "react-router-dom";
import "./Kontakt.css";

const Kontakt = () => {
  return (
    <div className="kontakt-container">
      <h1>Dane teleadresowe:</h1>
      <ul>
        <li>
          <b>InTech Serwis</b>
        </li>
        <li>Andrzej Wojnarowski</li>
        <li>ul. Dworcowa 52, Żukowo</li>
        <li>tel: 797-779-867</li>
        <li>
          <a href="mailto:biuro@intechserwis.pl">biuro@intechserwis.pl</a> lub <a href="mailto:its@onet.eu">its@onet.eu</a>
        </li>
      </ul>
      <Link to="/realizacje">
        <button>Zobacz oferte</button>
      </Link>
    </div>
  );
};

export default Kontakt;
