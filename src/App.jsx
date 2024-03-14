import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DATA from "./pizza.json";
import Navbar from "./assets/features/navbar/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Pizzas-redux/",
      element: <Navbar />,
      children: [{}],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
