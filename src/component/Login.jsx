import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [input, setinput] = useState({ email: "", password: "" });
  const [allData, setallData] = useState([]);

  const changeHandle = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
    // console.log(setinput)
  };

  const clickHandle = (e) => {
    e.preventDefault();
    let getData = JSON.parse(localStorage.getItem("user")) || [];

    console.log("getdatas", getData);

    let getindexNumber = getData.findIndex(
      (ele) => ele.email === input.email && ele.password === input.password
    );
    console.log(getindexNumber);

    if (getindexNumber !== -1) {
      let localData = [...allData, input];
      setallData(localData);
      localStorage.setItem(
        "loggedIn",
        JSON.stringify({ email: input.email, password: input.password })
      );

      toast.success("Logged in successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setinput({ email: "", password: "" });
      navigate("/");
    } else {
      toast.warn("Please use valid data !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <form
        style={{
          border: "2px solid #102447",
          width: "40rem",
          margin: "auto",
          marginTop: "2rem",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ marginLeft: "16rem", color: "#102447" }}>Login</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            onChange={changeHandle}
            value={input.email}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={changeHandle}
            value={input.password}
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button
          type="submit"
          class="btn btn-dark"
          onClick={clickHandle}
          style={{ borderRadius: "5px", marginLeft: "17rem" }}
        >
          Submit
        </button>
        <Link to="/Signup">
          <p>Create an new Account</p>
        </Link>
      </form>
      {/* <hr /> */}
      <br />
      <br />
    </>
  );
};

export default Login;
