import rgooglePlayBadgeSvg from "../../assets/Products/Rgoogle-play-badge.svg";
import rappstoreBadgeSvg from "../../assets/Products/Rappstore-badge.svg";

function LeftImgSec({ img, title, des, link1Text, link2Text }) {
  return (
    <div className="container ">
      <div className="row pt-5">
        <div className="col-7 ms-5 ">
          <a href="">
            <img className="p-1 me-5" src={img} alt={title} />
          </a>
        </div>
        <div className="col-4 font-normal mt-5 ms-auto">
          <h4>{title}</h4>
          <p className="pt-4 text-[1.05rem] leading-7">{des}</p>
          <div className="row">
            {link1Text && (
              <div className="col-5 font-medium">
                <a href="">{link1Text}→</a>
              </div>
            )}
            {link2Text && (
              <div className="col-5 font-medium">
                <a href="">{link2Text}→</a>
              </div>
            )}
          </div>
          <div className="row pt-3">
            <div className="col-5">
              <a href="">
                <img
                  className="w-[12rem] h-[2.7rem] "
                  src={rgooglePlayBadgeSvg}
                  alt=""
                />
              </a>
            </div>
            <div className="col-5">
              <a href="">
                <img
                  className="w-[12rem] h-[2.7rem]"
                  src={rappstoreBadgeSvg}
                  alt=""
                />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImgSec;
