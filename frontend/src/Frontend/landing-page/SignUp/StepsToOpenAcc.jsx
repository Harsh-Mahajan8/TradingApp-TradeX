import stepsAcopSvg from "../../assets/Signup/steps-acop.svg";

function StepsToOpenAcc() {
  return (
    <div className="bg-gray-50">
      <div className="container py-[4rem]">
        <h4 className="text-center">
          Steps to open a demat account with Zerodha
        </h4>
        <div className="row justify-center md: justify-content-end pt-[4rem]">
          <div className="col-md-4">
            <img src={stepsAcopSvg} alt="" />
          </div>
          <div className="col-md-6 md:pe-[9rem!important]">
            <ul>
              <div className="fs-5 font-medium border-b p-4 border-gray-300">
                Enter the requested details
              </div>
              <div className="fs-5 font-medium border-b p-4 border-gray-300">
                Complete e-sign & verification
              </div>
              <div className="fs-5 font-medium p-4">Start investing!</div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepsToOpenAcc;
