import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Frontend/index.css";
import "./Dashboard/index.css";
// Landing page components
const HomePage = lazy(() => import("./Frontend/landing-page/Home/HomePage"));
const SignUpPage = lazy(() =>
  import("./Frontend/landing-page/SignUp/SignUpPage")
);
const AboutPage = lazy(() => import("./Frontend/landing-page/About/AboutPage"));
const ProductPage = lazy(() =>
  import("./Frontend/landing-page/Products/ProductPage")
);
const SupportPage = lazy(() =>
  import("./Frontend/landing-page/Support/SupportPage")
);
const PricingPage = lazy(() =>
  import("./Frontend/landing-page/Pricing/PricingPage")
);
const NotFound = lazy(() => import("./Frontend/landing-page/NotFound"));
const Equity = lazy(() =>
  import("./Frontend/landing-page/Pricing/BrokageCal/Equity")
);
const Commodity = lazy(() =>
  import("./Frontend/landing-page/Pricing/BrokageCal/Commodity")
);
const Currency = lazy(() =>
  import("./Frontend/landing-page/Pricing/BrokageCal/Currency")
);
const LoginPage = lazy(() => import("./Frontend/landing-page/LoginPage"));

// Dashboard components
const Home = lazy(() => import("./Dashboard/components/Home"));
const DefaultRoute = lazy(() => import("./Frontend/DefaultRoute"));
const Summary = lazy(() => import("./Dashboard/components/Summary"));
const Orders = lazy(() => import("./Dashboard/components/Orders"));
const Holdings = lazy(() => import("./Dashboard/components/Holdings"));
const Positions = lazy(() => import("./Dashboard/components/Positions"));
const Funds = lazy(() => import("./Dashboard/components/Funds"));
const Apps = lazy(() => import("./Dashboard/components/Apps"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<p>Loading.....</p>}>
        <DefaultRoute />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<p>Loading.....</p>}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <SignUpPage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "/product",
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <ProductPage />
          </Suspense>
        ),
      },
      {
        path: "/pricing",
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <PricingPage />
          </Suspense>
        ),
        children: [
          {
            path: "equity",
            element: (
              <Suspense fallback={<p>Loading.....</p>}>
                <Equity />
              </Suspense>
            ),
          },
          {
            path: "currency",
            element: (
              <Suspense fallback={<p>Loading.....</p>}>
                <Currency />
              </Suspense>
            ),
          },
          {
            path: "commodity",
            element: (
              <Suspense fallback={<p>Loading.....</p>}>
                <Commodity />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/support",
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <SupportPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<p>Loading.....</p>}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/tradeX",
    element: (
      <Suspense fallback={<p>Loading.....</p>}>
        <Home />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <Summary />
          </Suspense>
        ),
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <Orders />
          </Suspense>
        ),
      },
      {
        path: "holdings",
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <Holdings />
          </Suspense>
        ),
      },
      {
        path: "positions",
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <Positions />
          </Suspense>
        ),
      },
      {
        path: "funds",
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <Funds />
          </Suspense>
        ),
      },
      {
        path: "apps",
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <Apps />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
