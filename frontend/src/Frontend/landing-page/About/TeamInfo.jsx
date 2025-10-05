import imgJpg from "../../assets/About/img.jpg";

function TeamInfo() {
  return (
    <div className="container">
      <div className="row text-center">
        <h4>People</h4>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="row justify-content-end ps-3 mx-3">
            <img
              src={imgJpg}
              className="w-[20rem!important] h-[18rem] grayscale rounded-[50%] object-fill"
              alt="CEO"
            />
            <div className="row text-center mt-4 ms-1 text-[black]">
              <p className="font-medium">Homer Jay Simpson</p>
              <br />
              <p>Founder/ CEO</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 leading-7 text-[1.03rem] px-5 ms-3">
          <p>
            Homer Simpson bootstrapped and founded TradeX in 2010 to overcome
            the hurdles he faced during his decade long stint as a trader.
            Today, TradeX has changed the landscape of the Indian broking
            industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA </a>/{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamInfo;
