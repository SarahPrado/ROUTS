import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from "./Form.jsx";
import Usuarios from "./pages/Usuarios.jsx"
import Cadastro from "./pages/Cadastro.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Form />,
  },
  {
    path: "/usuarios",
    element: <Usuarios />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
