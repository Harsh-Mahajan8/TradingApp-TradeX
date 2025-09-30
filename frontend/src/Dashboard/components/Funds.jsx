import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import GeneralContext from "./GeneralContext/GeneralContext";
const Funds = () => {
  const { userData, updateUserData } = useContext(GeneralContext);
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="funds">
        <p className="pt-4">Instant, zero-cost fund transfers with UPI </p>
        <button
          className={`btn btn-green ${clicked ? "bg-[#5f5f5f!important] text-[#fff!important]" : ""}`}
          onClick={() => {
            if (clicked) return;
            updateUserData({
              equityBalance: userData.equityBalance + 50000,
            });
            setClicked(true);
          }}
          disabled={clicked}
        >
          {clicked ? "Funds Added" : "Add Funds"}
        </button>
        <div className="btn btn-blue">Withdraw</div>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p className="me-5">Available margin</p>
              <p className="imp colored">{userData.availableMargin}</p>
            </div>
            <div className="data">
              <p className="me-5">Used margin</p>
              <p className="imp">{userData.usedMargin}</p>
            </div>
            <div className="data">
              <p className="me-5">Available cash</p>
              <p className="imp">{userData.availableCash}</p>
            </div>
            <hr />
            <div className="data">
              <p className="me-5">Opening Balance</p>
              <p className="imp">{userData.openingBalance}</p>
            </div>
            <div className="data">
              <p className="me-5">Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p className="me-5">SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p className="me-5">Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p className="me-5">Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p className="me-5">Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p className="me-5">Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link to={"/login"} className="btn btn-blue">
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
