import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Product, Products } from "./Pages/index";
import { Layout } from "./components/index";

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
