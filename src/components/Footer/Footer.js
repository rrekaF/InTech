import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="container-footer-upper">
        <div className="container-footer-kontakt">
          <h1>Kontakt</h1>
          <p>
            <b>InTech Serwis</b>
            <br /> Andrzej Wojnarowski
            <br /> ul. Dworcowa 52, Żukowo
            <br /> tel.: 797-779-867
            <br /> mail: biuro@intechserwis.pl / its@onet.eu
          </p>
        </div>
        <div className="container-footer-onas">
          <h1>O Nas</h1>
          <p>Prowadzimy działalność od 2011 r. Świadczymy usługi dla małych i średnich firm oraz dla klientów indywidualnych. w zakresie wykonawstwa robót elektroenergetycznych oraz kontrolno - pomiarowych...</p>
          <Link to="/about">Czytaj dalej</Link>
        </div>
        <div className="container-footer-klienci">
          <h1>Nasi klienci</h1>
          <p>
            Kąpielisko Morskie Sopot w Sopocie
            <br /> BmB Santech w Gdańsku <br />
            Water Cut w Gdańsku <br />
            WM „Osiedle Koziorożca” Gdańsk Osowa <br />
            AIUT Gliwice
          </p>
          <Link to="/realizacje">Wiecej</Link>
        </div>
      </div>
      <p> ©2015 InTechSerwis.pl</p>
    </div>
  );
};

export default Footer;
