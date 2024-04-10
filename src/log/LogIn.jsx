import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../context/authprovider";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { GithubAuthProvider,signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const LogIn = () => {
  const { logInuser,user } = useContext(AuthContext);
  const gitHubProvider = new GithubAuthProvider();
  const navigate = useNavigate();

  // from submit function
  const handelLogInSubmit = (e) => {
    e.preventDefault();
    const logEmail = e.target.email.value;
    const logPassword = e.target.password.value;
    // console.log(logEmail,logPassword);
    logInuser(logEmail, logPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast("Login successful")
        // ...
        // navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // github log in function 
  // GitHub login function 
const githublogInHandel = () => {
  signInWithPopup(auth, gitHubProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      toast("GitHub login successful");
      // navigate("/");
    })
    .catch((error) => {
      // Handle GitHub login errors
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(`GitHub login failed: ${errorMessage}`);
    });
  };
  return (
    <div>
      <Helmet>
        <title>Log in from</title>
      </Helmet>
      {
        user? 'your are logged in':
        <div className="hero">
          <div className="hero-content flex-col lg:w-2/3 w-full ">
            <h1 className="text-3xl font-bold">Login now!</h1>
            <div className="card shrink-0 w-full max-w-full shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handelLogInSubmit}>
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
                  <ToastContainer></ToastContainer>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
  
              <div>
                <div>
                  <button onClick={githublogInHandel}>git Hub logIn</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default LogIn;
