import TopMenu from "./TopMenu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index mb-[0!important] ">NIFTY 50</p>
          <p className="index-points mb-[0!important] ">{100.2} </p>
          <p className="percent mb-[0!important] "> </p>
        </div>
        <div className=" m-0 sensex">
          <p className="index mb-[0!important] ">SENSEX</p>
          <p className="index-points mb-[0!important] ">{100.2}</p>
          <p className="percent mb-[0!important] "></p>
        </div>
      </div>
      <TopMenu />
    </div>
  );
};

export default TopBar;
