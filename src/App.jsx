import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/index";
import { Product, Home, Products } from "./Pages/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product />,
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
