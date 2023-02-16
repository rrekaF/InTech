import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-container">
      <h1>Wykonujemy instalacje elektryczne:</h1>
      <p>doradztwo, projekt, montaż, pomiary, odbiór instalacji elektrycznych, certyfikaty energetyczne.</p>
      <Link to="/realizacje">
        <button>Zobacz oferte</button>
      </Link>
    </div>
  );
};

export default Home;
