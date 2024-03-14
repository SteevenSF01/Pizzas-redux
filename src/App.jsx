import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DATA from "./pizza.json";
import Navbar from "./assets/features/navbar/Navbar";
import CardsPizzas from "./assets/features/cardpizzas/CardsPizzas";
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
