import { Link } from "react-router-dom";
import "./ONas.css";
const ONas = () => {
  return (
    <div className="onas-container">
      <h1>Nasza historia:</h1>
      <p>Prowadzimy działalność od 2011 r. Świadczymy usługi dla małych i średnich firm oraz dla klientów indywidualnych. w zakresie wykonawstwa robót elektroenergetycznych oraz kontrolno - pomiarowych. Zatrudniamy kadrę posiadającą wysokie kwalifikacje, kilkunastoletnie doświadczenie zawodowe, wymagane uprawnienia dozoru nad eksploatacją, uprawnienia eksploatacyjno-pomiarowe. Na wykonaną pracę udzielamy 24 miesięcznej gwarancji. Świadczymy usługi w zakresie wykonawstwa robót elektroenergetycznych oraz kontrolno - pomiarowych. Posiadamy odpowiednie kwalifikacje oraz kilkunastoletnie doświadczenie zawodowe potwierdzone uprawnieniami na stanowisku eksploatacji, dozoru oraz pomiarowymi. Posiadamy własne zaplecze warsztatowo - magazynowe, transport oraz wszystkie niezbędne elektronarzędzia oraz urządzenia podnoszące jakość wykonanej pracy. Stosujemy technologie zgodne z aktualnym stanem wiedzy technicznej oraz aktualnie obowiązującymi przepisami.</p>
      <Link to="/realizacje">
        <button>Zobacz oferte</button>
      </Link>
    </div>
  );
};

export default ONas;
