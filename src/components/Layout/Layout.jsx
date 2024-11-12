import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../index";

export const Layout = () => {
  return (
    <div className="flex flex-col">
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </div>
  );
};
