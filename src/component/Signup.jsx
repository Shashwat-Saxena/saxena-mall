import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [input, setinput] = useState({});
  const [alldata, setallData] = useState([]);
  const navigate = useNavigate();

  const changeHandle = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  const clickHanddle = (e) => {
    e.preventDefault();
    let getData = JSON.parse(localStorage.getItem("user")) || [];
    let getindexNumber = getData.findIndex((ele) => ele.email === input.email);

    if (getindexNumber === -1) {
      let localData = [...alldata, input];
      setallData(localData);
      localStorage.setItem("user", JSON.stringify(localData));

      toast.success("Registration successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setinput({ fname: "", lname: "", email: "", mobile: "", password: "" });
      navigate("/login");
    } else {
      toast.warn("This user already exist!", {
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
          margin: "auto",
          width: "40rem",
          marginTop: "2rem",
          color: "#102447",
        }}
      >
        <h1
          style={{
            marginLeft: "16rem",
            color: "#102447",
            fontWeight: "bolder",
            fontSize: "40px",
          }}
        >
          Signup
        </h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            FirstName
          </label>
          <input
            type="text"
            value={input.fname}
            name="fname"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"  
            onChange={changeHandle}
          />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div className="md-3">
          <label htmlFor="exampleInputName" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            value={input.lname}
            name="lname"
            className="form-control"
            onChange={changeHandle}
            id="exampleInputName"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={input.email}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={changeHandle}
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
            value={input.password}
            class="form-control"
            id="exampleInputPassword1"
            onChange={changeHandle}
          />
        </div>
        <div className="md-3">
          <label htmlFor="exampleInputName" className="form-label ">
            Mobile
          </label>
          <input
            type="number"
            value={input.mobile}
            name="mobile"
            className="form-control"
            onChange={changeHandle}
            id="exampleInputName"
            aria-describedby="emailHelp"
          />
        </div>

        <button
          type="submit"
          class="btn btn-dark "
          onClick={clickHanddle}
          style={{
            marginLeft: "16rem",
            marginTop: "2rem",
            marginBottom: "1rem",
          }}
        >
          Submit
        </button>
      </form>
      <br />
    </>
  );
};

export default Signup;
