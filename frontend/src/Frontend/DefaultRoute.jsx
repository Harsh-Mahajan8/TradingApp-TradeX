import Footer from "./landing-page/Footer";
import Navbar from "./landing-page/Navbar/Navbar";
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
