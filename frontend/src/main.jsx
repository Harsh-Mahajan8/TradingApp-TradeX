import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Frontend/index.css";
import "./Dashboard/index.css"
import HomePage from "./Frontend/landing-page/Home/HomePage";
import SignUpPage from "./Frontend/landing-page/SignUp/SignUpPage";
import AboutPage from "./Frontend/landing-page/About/AboutPage";
import ProductPage from "./Frontend/landing-page/Products/ProductPage";
import SupportPage from "./Frontend/landing-page/Support/SupportPage";
import PricingPage from "./Frontend/landing-page/Pricing/PricingPage";
import NotFound from "./Frontend/landing-page/NotFound";
import Equity from "./Frontend/landing-page/Pricing/BrokageCal/Equity";
import Commodity from "./Frontend/landing-page/Pricing/BrokageCal/Commodity";
import Currency from "./Frontend/landing-page/Pricing/BrokageCal/Currency";
import LoginPage from "./Frontend/landing-page/LoginPage";
import Home from "./Dashboard/components/Home"
import DefaultRoute from "../DefaultRoute";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<DefaultRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />}>
          <Route path="equity" element={<Equity />} />
          <Route path="currency" element={<Currency />} />
          <Route path="commodity" element={<Commodity />} />
        </Route>
        <Route path="/support" element={<SupportPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/tradeX/*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
