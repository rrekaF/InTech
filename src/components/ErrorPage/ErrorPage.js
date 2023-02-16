import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="container">
      <h1 className="">Niespodziewany błąd:</h1>
      <div className="error-desc">
        <p>
          <em>{error.statusText || error.message}</em>
        </p>
      </div>
      <h4>
        <Link to="/"> Powróć na stronę główną</Link>
      </h4>
    </div>
  );
};

export default ErrorPage;
