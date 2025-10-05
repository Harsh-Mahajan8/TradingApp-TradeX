import acopBenefitsSvg from "../../assets/Signup/acop-benefits.svg";

function Benefits() {
  return (
    <div className="container my-[6rem]">
      <h4 className="text-center">
        Benefits of opening a Zerodha demat account
      </h4>
      <div className="row md:pt-[2rem] ps-4 md:justify-items-center">
        <div className="col-md-6  md:pt-[3rem]">
          <img src={acopBenefitsSvg} alt="" className="w-[25rem]" />
        </div>
        <div className="col-md-6">
          <h5> Unbeatable pricing</h5>
          <p className="text-[1.03rem] text-[#5f5f5f!important] py-3">
            Zero charges for equity & mutual fund investments. Flat ₹20 fees for
            intraday and F&O trades.
          </p>

          <h5> Best investing experience</h5>
          <p className="text-[1.03rem] text-[#5f5f5f!important] py-3">
            Simple and intuitive trading platform with an easy-to-understand
            user interface.
          </p>

          <h5> No spam or gimmicks</h5>
          <p className="text-[1.03rem] text-[#5f5f5f!important] py-3">
            Committed to transparency — no gimmicks, spam, "gamification", or
            intrusive push notifications.
          </p>

          <h5> The Zerodha universe</h5>
          <p className="text-[1.03rem] text-[#5f5f5f!important] py-3">
            More than just an app — gain free access to the entire ecosystem of
            our partner products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
