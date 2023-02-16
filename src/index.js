import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import ONas from "./components/ONas/ONas";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Realizacje from "./components/Realizacje/Realizacje";
import Pomiary from "./components/Pomiary/Pomiary";
import Kontakt from "./components/Kontakt/Kontakt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <ONas /> },
      { path: "/realizacje", element: <Realizacje /> },
      { path: "/pomiary", element: <Pomiary /> },
      { path: "/kontakt", element: <Kontakt /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
