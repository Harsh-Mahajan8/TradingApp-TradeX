import { useContext, useState } from "react";
import GeneralContext from "./GeneralContext/GeneralContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function BuyActionWindow({ uid }) {
  const [orderData, setOrderdata] = useState({
    name: "",
    price: 0,
    qty: 1,
    mode: "BUY",
    product: null,
  });
  const context = useContext(GeneralContext);

  const handleBuyClick = async () => {
    context.buyStock({
      name: uid,
      qty: orderData.qty,
      price: orderData.price,
      mode: "BUY",
      product: orderData.product,
      orderStatus: "Executed",
    });
    context.closeTradeWindow();
  };
  const handleCancelBtn = () => {
    context.closeTradeWindow();
  };

  return (
    <div
      className="shadow-md border-zinc-400 ps-2 pb-3 pt-0 rounded-md"
      id="buy-window"
    >
      <span className="row mb-2 h-10 bg-blue-400 px-3 rounded-t text-white font-semibold">
        {uid}
      </span>

      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "15ch" } }}
        noValidate
        autoComplete="off"
        className="flex pb-3"
      >
        <TextField
          size="small"
          id="qty"
          label="Qty."
          onChange={(e) =>
            setOrderdata({ ...orderData, qty: parseInt(e.target.value)||0})
          }
          value={orderData.qty}
          required
        />
        <TextField
          size="small"
          id="price"
          label="Price"
          onChange={(e) =>
            setOrderdata({
              ...orderData,
              price: parseFloat(e.target.value)||0,
            })
          }
          value={orderData.price}
          required
        />
      </Box>
      <FormControl className="ms-[.82rem!important]">
        <FormLabel id="demo-row-radio-buttons-group-label">Product</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={(e) =>
            setOrderdata({
              ...orderData,
              product: e.target.value,
            })
          }
        >
          <FormControlLabel value="CNC" control={<Radio />} label="CNC" />
          <FormControlLabel value="MIS" control={<Radio />} label="MIS" />
          <FormControlLabel value="NRML" control={<Radio />} label="NRML" />
        </RadioGroup>
      </FormControl>
      <div className="buttons flex justify-between mt-4">
        <span className="text-[0.8em] ps-2">
          {orderData.product ? (
            orderData.product == "CNC" ? (
              <>
                <div className="text-[1.0151rem] font-semibold">
                  CNC / Delivery
                </div>
                {`Funds required = ₹${(orderData.price * orderData.qty).toFixed(
                  2
                )}`}
              </>
            ) : (
              <>
                <div className="text-[1.0151rem] font-semibold">
                  MIS / Intraday
                </div>
                {`Margin required = ₹${(
                  orderData.price *
                  orderData.qty *
                  0.2
                ).toFixed(2)}`} <br />
                MIS – Position will auto square-off at 11:59 PM
              </>
            )
          ) : (
            ""
          )}
        </span>
        <div className="">
          <button className="buyActionBtn" onClick={handleBuyClick}>
            Buy
          </button>
          <button
            className="buyActionBtn bg-[#ff3737!important]"
            onClick={handleCancelBtn}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyActionWindow;
