import { useEffect, useMemo } from "react";
import GeneralContext from "./GeneralContext/GeneralContext";
import { useContext } from "react";
import { VerticalChart } from "./VerticalChart";
import CircularProgress from "@mui/material/CircularProgress";
import WatchlistContext from "./GeneralContext/WatchlistContext";

const Holdings = ({ updateSummary }) => {
  const { userData } = useContext(GeneralContext);
  const { stockData } = useContext(WatchlistContext);

  const holdings = useMemo(
    () => userData?.holdings || [],
    [userData?.holdings]
  );
  const holdingLen = holdings.length;

  const tInvestment = useMemo(
    () => holdings.reduce((sum, s) => sum + (s.avg || 0) * (s.qty || 0), 0),
    [holdings]
  );

  const currValue = useMemo(
    () => holdings.reduce((sum, s) => sum + (s.price || 0) * (s.qty || 0), 0),
    [holdings]
  );

  const pnlAbs = currValue - tInvestment;
  const pnlPct = tInvestment ? (pnlAbs / tInvestment) * 100 : 0;

  // Call updateSummary when holdings change
  useEffect(() => {
    if (updateSummary) {
      updateSummary({
        holdingLen,
        tInvestment,
        currValue,
        lp: { per: pnlPct, num: pnlAbs },
      });
    }
  }, [holdingLen, tInvestment, currValue, pnlAbs, pnlPct, updateSummary]);

  if (!userData?.username) return <CircularProgress disableShrink />;

  return (
    <>
      <h3 className="title">Holdings ({holdingLen})</h3>

      <div className="order-table">
        <table>
          <tbody>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>

            {holdings.map((stock, idx) => {
              const curValue = (stock.price || 0) * (stock.qty || 0);
              const stockDataPrice = stockData.find(
                (s) => s.name === stock.name
              )?.price;
              const lp = stockDataPrice
                ? ((stock.price - stock.avg) / stockDataPrice) * 100
                : 0;
              const profClass = lp > 0 ? "profit" : "loss";
              const NetClass = (stock.net || 0) > 0 ? "profit" : "loss";
              const dayClass = (stock.day || 0) < 0 ? "loss" : "profit";

              return (
                <tr key={idx}>
                  <td>{stock.name || "N/A"}</td>
                  <td>{stock.qty || 0}</td>
                  <td>{(stock.avg || 0).toFixed(2)}</td>
                  <td>{(stock.price || 0).toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {profClass === "profit" ? "+" : ""}
                    {lp.toFixed(2)}%
                  </td>
                  <td className={NetClass}>
                    {NetClass === "profit" ? "+" : ""}
                    {(stock.net || 0).toFixed(2)}%
                  </td>
                  <td className={dayClass}>
                    {dayClass === "profit" ? "+" : ""}
                    {(stock.day || 0).toFixed(2)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            ₹{" "}
            {tInvestment.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            ₹{" "}
            {currValue.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={pnlAbs ? "profit" : "loss"}>
            ₹
            {pnlAbs.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            ({pnlAbs} %)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <div className="pt-5">
        {holdings.length != 0 && <VerticalChart data={holdings} />}
      </div>
    </>
  );
};

export default Holdings;
