import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import GeneralContext from "./GeneralContext";
import { useContext } from "react";
const url = import.meta.env.VITE_API_URL;

const WatchlistContext = createContext({
  handleRemove: () => {},
  addToWishList: () => {},
  stockData: [],
});

export const WatchlistContextProvider = ({ children }) => {
  const { refreshUserData } = useContext(GeneralContext);
  // const url = "http://localhost:3002"; //for deployment //url = "http://localhost:3002"
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    axios.get(`${url}/load/stocks`).then((res) => {
      setStockData(res.data || []);
    });
  }, []);

  const addToWishList = async (uuid) => {
    try {
      const res = await axios.put(`${url}/watchlist/add`, {
        name: uuid,
      });
      const { message, status } = res.data;
      console.log(`${uuid} stock is saved on watchlist`);
      if (status === "success") {
        toast.success(message, {
          position: "bottom-right",
          autoClose: 3000,
          closeOnClick: true,
        });
      } else {
        toast.error(message, {
          position: "top-right",
        });
      }
      refreshUserData();
    } catch (error) {
      console.error("Error adding to watchlist:", error);
      toast.error("Something went wrong!", {
        position: "top-right",
      });
    }
  };
  const handleRemove = async (uuid) => {
    try {
      const res = await axios.delete(`${url}/watchlist/remove`, {
        data: { name: uuid },
      });
      const { message, status } = res.data;
      console.log("removed", res);
      if (status === "success") {
        toast.success(message, {
          position: "bottom-right",
        });
      } else {
        toast.error(message, {
          position: "top-right",
        });
      }
      console.log(`${uuid} removed from watchlist`);
      refreshUserData();
    } catch (error) {
      console.error("Error removing from watchlist:", error);
      toast.error("Something went wrong!", {
        position: "top-right",
      });
    }
  };

  return (
    <WatchlistContext.Provider
      value={{ handleRemove, addToWishList, stockData }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
export default WatchlistContext;
