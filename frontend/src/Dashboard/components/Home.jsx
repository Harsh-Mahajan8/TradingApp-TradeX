import TopBar from "./TopBar";
import { GeneralContextProvider } from "./GeneralContext/GeneralContext";
import { WatchlistContextProvider } from "./GeneralContext/WatchlistContext";
import { ToastContainer } from "react-toastify";
import StockDetailList from "./StockDetailList";
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <GeneralContextProvider>
      <WatchlistContextProvider>
        <TopBar />
        <div className="dashboard-container">
          <StockDetailList />
          <div className="content">
            <Outlet />
          </div>
        </div>

        <ToastContainer />
      </WatchlistContextProvider>
    </GeneralContextProvider>
  );
}

export default Home;
