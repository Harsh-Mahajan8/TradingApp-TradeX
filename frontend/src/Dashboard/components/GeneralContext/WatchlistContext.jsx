import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import GeneralContext from "./GeneralContext";

const WatchlistContext = createContext({
  handleRemove: () => {},
  addToWishList: () => {},
  stockData: [],
});

export const WatchlistContextProvider = ({ children }) => {
  const { refreshUserData } = useContext(GeneralContext);
  const url =
    import.meta.env.VITE_API_URL || "https://tradingapp-tradex.onrender.com";
  const [stockData, setStockData] = useState([]);

  // Helper axios instance with Authorization header
  const api = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      "Content-Type": "application/json",
    },
  });

  // Load stocks on mount
  useEffect(() => {
    api
      .get("/load/stocks")
      .then((res) => {
        setStockData(res.data || []);
      })
      .catch((err) => {
        console.error("Error loading stocks:", err);
      });
  }, []);

  // Add stock to watchlist
  const addToWishList = async (uuid) => {
    try {
      const res = await api.put("/watchlist/add", { name: uuid });
      const { message, status } = res.data;

      if (status === "success") {
        toast.success(message, { position: "bottom-right", autoClose: 3000 });
        console.log(`${uuid} stock is saved on watchlist`);
      } else {
        toast.error(message, { position: "top-right" });
      }

      refreshUserData();
    } catch (error) {
      console.error("Error adding to watchlist:", error);
      toast.error("Something went wrong!", { position: "top-right" });
    }
  };

  // Remove stock from watchlist
  const handleRemove = async (uuid) => {
    try {
      const res = await api.delete("/watchlist/remove", {
        data: { name: uuid },
      });
      const { message, status } = res.data;

      if (status === "success") {
        toast.success(message, { position: "bottom-right" });
        console.log(`${uuid} removed from watchlist`);
      } else {
        toast.error(message, { position: "top-right" });
      }

      refreshUserData();
    } catch (error) {
      console.error("Error removing from watchlist:", error);
      toast.error("Something went wrong!", { position: "top-right" });
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
