import pricingEqSvg from "../../assets/Home/pricing-eq.svg";
import otherTradesSvg from "../../assets/Home/other-trades.svg";

function Pricing() {
  return (
    <div className="container my-[5rem]">
      <div className="px-[3rem]">
        <div className="row">
          <h3>Unbeatable pricing</h3>
        </div>
        <div className="row">
          <p className="col-md-5">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <div className="imgs col-7 ms-[5rem] md:ms-[0rem]">
            <div className="md:flex text-center">
              <div className="ms-3 mp-0 flex">
                <img className="col-6" src={pricingEqSvg} alt="" />
                <span className="">
                  Free account <br /> opening
                </span>
              </div>
              <div className="mp-0 flex">
                <img className="col-6" src={pricingEqSvg} alt="" />
                <span>
                  Free equity delivery and <br />
                  direct mutual funds
                </span>
              </div>
              <div className="mp-0 flex">
                <img className="col-6" src={otherTradesSvg} alt="" />
                <span className="">
                  Intraday and <br /> F&O
                </span>
              </div>
            </div>
          </div>
        </div>
        <p>
          <a href="">
            See Pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Pricing;
