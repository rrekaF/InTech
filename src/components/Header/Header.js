import "./Header.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
const header = () => {
  return (
    <div className="container-header">
      <div>
        <Link to="/">
          <img src={Logo}/>
        </Link>
      </div>
      <div className="container-header-lower">
        <Link to="/" className="m-2">
          Strona główna
        </Link>
        <Link to="/about" className="m-2">
          O nas
        </Link>
        <Link to="/realizacje" className="m-2">
          Realizacje
        </Link>
        <Link to="/pomiary" className="m-2">
          Pomiary
        </Link>
        <Link to="/kontakt" className="m-2">
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default header;
