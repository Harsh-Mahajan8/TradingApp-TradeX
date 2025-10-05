import { NavLink, Link } from "react-router-dom";
import NavDrop from "./NavDrop.jsx";
import crossMarkPng from "../../assets/Navbar/cross-mark.png";
import kiteLogoSvg from "../../assets/Navdrop/kite-logo.svg";
import consoleSvg from "../../assets/Navdrop/console.svg";
import kiteConnectSvg from "../../assets/Navdrop/kite-connect.svg";
import coinSvg from "../../assets/Navdrop/coin.svg";
import varsityPng from "../../assets/Navdrop/varsity.png";
import tqnaPng from "../../assets/Navdrop/tqna.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-2 border-bottom sticky-top">
      <div className="container-fluid container ">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img className="w-6 h-6" src={crossMarkPng} alt="TradeX Logo" />
          <span className="fs-4 ps-2 bg-gradient-to-b from-indigo-500 to-pink-700 bg-clip-text text-transparent font-bold">
            TradeX
          </span>
        </Link>
        <button
          className="navbar-toggler border-0 bg-white"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <img className="w-6 h-6" src={crossMarkPng} alt="TradeX Logo" />
            </h5>
            <button
              type="button "
              className="btn-close me-2 bg-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ps-3 p-1] font-[500]">
            <ul className="navbar-nav justify-content-end flex-grow-1 gap-3">
              <li className="nav-item navItems">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  end
                  aria-current="page"
                  to="/signup"
                >
                  Signup
                </NavLink>
              </li>
              <li className="nav-item navItems">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  end
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item navItems">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  end
                  to="/product"
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item navItems">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  end
                  to="/pricing"
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item navItems">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  end
                  to="/support"
                >
                  Support
                </NavLink>
              </li>

              <li className="pt-[.81rem] dropDown">
                <NavDrop
                  title={<i className="fa-solid fa-bars text-[1.32rem]"></i>}
                >
                  <div className="row p-6 text-center mx-auto mt-[0!important]">
                    <div className="col-3">
                      <Link to="/login">
                        <img src={kiteLogoSvg} alt="kite" />
                        <header>Kite</header>
                        <p>Trading Platform</p>
                      </Link>
                    </div>
                    <div className="col-3">
                      <a href="#">
                        <img src={consoleSvg} alt="" />
                        <header>Console</header>
                        <p>Backoffice</p>
                      </a>
                    </div>
                    <div className="col-3">
                      <a href="#">
                        <img src={kiteConnectSvg} alt="" />
                        <header>Kite Connect</header>
                        <p>Trading APIs</p>
                      </a>
                    </div>
                    <div className="col-3">
                      <a href="#">
                        <img src={coinSvg} alt="" />
                        <header>Coin</header>
                        <p>Mutual funds</p>
                      </a>
                    </div>
                  </div>
                  <div className="row p-6 text-base text-[0.86rem] mx-auto mt-[0!important]">
                    <div className="col-4 ps-5 leading-6">
                      <header>Utilities</header>
                      <a href=""> Calculators</a> <br />
                      <a href="">Brokerage calculator</a> <br />
                      <a href="">Margin calculator</a> <br />
                      <a href="">SIP calculator</a> <br />
                    </div>
                    <div className="col-3 -ms-5 leading-6">
                      <header>Updates</header>
                      <a href=""> Z-Connect blog</a> <br />
                      <a href="">Circulars / Bulletin</a> <br />
                      <a href="">IPOs</a> <br />
                      <a href="">Markets</a> <br />
                    </div>
                    <div className="col-1">
                      <header>Education</header>
                      <img
                        className="w-9 ms-3 my-3"
                        src={varsityPng}
                        alt="varsity"
                      />
                      <ul>
                        <li className="ms-1">
                          <a href="">Varsity</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-2 pt-[1.82rem] ms-[5.6rem]">
                      <img className="w-9 my-3 " src={tqnaPng} alt="tqna" />
                      <ul>
                        <li className="-ms-3">
                          <a href="">Trading Q&A</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavDrop>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
