import { Link } from "react-router-dom";
import "./Pomiary.css";
const Pomiary = () => {
  return (
    <div className="pomiary-container">
      <h1>Oferujemy Państwu:</h1>
			<ul>
				<li>pomiary napięć i obciążeń</li>
				<li>pomiary natężenia oświetlenia: ogólnego, stanowiskowego</li>
				<li>badania i pomiary skuteczności działania środków ochrony przeciwporażeniowej</li>
				<li>pomiary rezystancji uziemień roboczych i ochronnych</li>
				<li>pomiary rezystancji izolacji przewodów</li>
				<li>badania i pomiary instalacji odgromowej</li>
				<li>przeglądy i konserwacja rozdzielnic NN 0,4 KV, elektrycznych</li>
				<li>kompleksowe kontrole okresowe - roczne i pięcioletnie obiektów budowlanych zgodnie z wymogami prawa budowlanego</li>
			</ul>
      <Link to="/realizacje">
        <button>Zobacz oferte</button>
      </Link>
    </div>
  );
};

export default Pomiary;
