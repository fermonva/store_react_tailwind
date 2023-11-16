import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../index";

export const Layout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
