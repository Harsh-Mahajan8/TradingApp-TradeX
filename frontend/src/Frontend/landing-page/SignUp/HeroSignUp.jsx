import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import accountOpenSvg from "../../assets/Signup/account_open.svg";

function HeroSignUp() {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_API_URL;
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${url}/user/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
          // window.location.href = "http://localhost:5173";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 ">
          <img src={accountOpenSvg} alt="" />
        </div>
        <div className="col-md-4 pt-5">
          <h4>Signup now</h4>
          <p className="text-[#5f5f5f!important] text-[1rem]">
            Or track your existing application
          </p>
          <form action="" onSubmit={handleSubmit}>
            <TextField
              id="standard-basic2"
              label="Username"
              variant="standard"
              name="username"
              value={username}
              onChange={handleOnChange}
            />{" "}
            <br />
            <TextField
              id="standard-basic1"
              label="Email"
              variant="standard"
              name="email"
              value={email}
              onChange={handleOnChange}
            />{" "}
            <br />
            <TextField
              id="standard-basic3"
              label="Password"
              variant="standard"
              name="password"
              value={password}
              onChange={handleOnChange}
            />{" "}
            <br />
            <button
              type="submit"
              className="custom-btn my-3 mx-0 hover:text-[#fff!important] "
            >
              Signup
            </button>{" "}
            <br />
            <span>
              Already have an account? <Link to={"/login"}>Login</Link>
            </span>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default HeroSignUp;
