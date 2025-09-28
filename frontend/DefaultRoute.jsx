import Footer from "./src/Frontend/landing-page/Footer";
import Navbar from "./src/Frontend/landing-page/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function DefaultRoute() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultRoute;
