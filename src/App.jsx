import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardsPizzas from "./assets/features/cardpizzas/CardsPizzas";
import Details from "./assets/features/details/Details";
import Layout from "./assets/features/layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Pizzas-redux/",
      element: <Layout />,
      children: [
        {
          path: "/Pizzas-redux/",
          element: <CardsPizzas />,
          index: true,
        },
        {
          path: "/Pizzas-redux/Details/:idPizza",
          element: <Details />
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
