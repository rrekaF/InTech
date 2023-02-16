import { Link } from "react-router-dom";
import "./Realizacje.css";
const Realizacje = () => {
  return (
    <div className="realizacje-container">
      <div className="realizacje-container-row">
        <div className="realizajce-container-left">
          <h1>Oferujemy Państwu:</h1>
          <ul>
            <li>montaż i produkcja rozdzielnic (złącza kablowo-pomiarowe, rozdzielnice przemysłowe i sterownicze, rozdzielnice główne, rozdzielnice dla budownictwa mieszkaniowego)</li>
            <li>montaż instalacji elektrycznych</li>
            <li>montaż instalacji automatyki przemysłowej</li>
            <li>badania i pomiary instalacji elektrycznych</li>
            <li>pomiary natężenia oświetlenia</li>
            <li>serwis instalacji telemetrycznych</li>
          </ul>
        </div>
        <div>
          <h1>W gronie naszych klientów znajdują się m.in.:</h1>
          <ul>
            <li>Kąpielisko Morskie Sopot w Sopocie</li>
            <li>BmB Santech w Gdańsku</li>
            <li>Water Cut w Gdańsku</li>
            <li>WM „Osiedle Koziorożca” Gdańsk Osowa</li>
            <li>AIUT Gliwice</li>
          </ul>
        </div>
      </div>
      <Link to="/kontakt">
        <button>Kontakt</button>
      </Link>
    </div>
  );
};

export default Realizacje;
