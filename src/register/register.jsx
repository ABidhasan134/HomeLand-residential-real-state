
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/authprovider";

const Register = () => {
  
  const {createUser}=useContext(AuthContext);
  const [error,setError]=useState()
  // const naviget=useNavigate();
  // console.log(creatUser);
  const handelregisterSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const useremail = e.target.email.value;
    const userpassword = e.target.password.value;
    const userphotoUrl = e.target.url.value;
    // console.log(userName, userpassword, userphotoUrl, useremail);
    if(userpassword.length<6){
      toast("your password must be at least 6 characters")
      return;
    }
    if(!/[A-Z]/.test(userpassword)){
      toast("your password must have on upperCase letter")
      return;
    }
    if(!/[a-z]/.test(userpassword)){
      toast("your password must have on lowrCase letter")
      return;
    }
    createUser(useremail, userpassword)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);
        toast(`Your already Have account please log in`);
        // naviget("/login");
        // ..
      });
  };
  return (
    <div>
      <Helmet>
        <title>Register from</title>
      </Helmet>
      <div className="hero ">
        <div className="hero-content flex-col lg:w-2/3 w-full ">
          <h1 className="lg:text-5xl text-3xl font-bold ">Register</h1>

          <div className="card shrink-0 w-full max-w-full shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handelregisterSubmit}>
              {/* name input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* photo url */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Add photo url</span>
                </label>
                <input
                  type="text"
                  placeholder="text"
                  className="input input-bordered"
                  name="url"
                  required
                />
              </div>
              {/* email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              {/* password input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              {/* log in btn */}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <ToastContainer></ToastContainer>
            <div className="flex justify-center mb-6 text-xl">
              <p>If you have already an account. please </p>
              <Link to="/login" className="ml-1 text-blue-500 underline">
                LogIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
