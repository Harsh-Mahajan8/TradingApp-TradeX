import LeftImgSec from "./LeftImgSec";
import RightImgSec from "./RightImgSec";
import lkitePng from "../../assets/Products/Lkite.png";
import rproductsConsolePng from "../../assets/Products/Rproducts-console.png";
import lproductsCoinPng from "../../assets/Products/Lproducts-coin.png";
import rlandingSvg from "../../assets/Products/Rlanding.svg";
import lvarsityProductsPng from "../../assets/Products/Lvarsity-products.png";

function LeftRightimgSec() {
  return (
    <div className="px-[1rem]">
      <LeftImgSec
        img={lkitePng}
        title="Kite"
        des="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1Text="Try demo"
        link2Text="Learn more"
      />
      <RightImgSec
        img={rproductsConsolePng}
        title={"Console"}
        des={
          "The central dashboard for your TradeX account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        link1Text={"Learn more"}
      />
      <LeftImgSec
        img={lproductsCoinPng}
        title={"Coin"}
        des={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        link1Text={"Coin"}
      />
      <RightImgSec
        img={rlandingSvg}
        title={"Kite Connect API"}
        des={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        pr={"pt-[4rem]"}
        link1Text={"Kite Connect"}
      />
      <LeftImgSec
        img={lvarsityProductsPng}
        title={"Varsity mobile"}
        des={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
      />
      <h5 className="text-center pt-[6rem]">
        Want to know more about our technology stack? Check out the{" "}
        <a href="">TradeX.tech</a> blog.
      </h5>
    </div>
  );
}

export default LeftRightimgSec;
