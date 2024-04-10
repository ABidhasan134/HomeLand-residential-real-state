import React, { useContext} from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../context/authprovider";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { GithubAuthProvider,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const LogIn = () => {
  const { logInuser } = useContext(AuthContext);
  const gitHubProvider = new GithubAuthProvider();
  const provider = new GoogleAuthProvider();
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
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);
        toast(errorMessage);
      });
      e.target.reset();
  };

  // GitHub login function 
const githublogInHandel = () => {
  signInWithPopup(auth, gitHubProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      // toast("GitHub login successful");
      navigate("/");
    })
    .catch((error) => {
      // Handle GitHub login errors
      const errorCode = error.code;
      const errorMessage = error.message;
      // toast.error(`GitHub login failed: ${errorMessage}`);
    });
  };

  // google login function
  const handelGoogleSubmit = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setPerson(user);
        console.log(user);
      })
      .catch((error) => console.log("error", error.message));
  };
  return (
    <div>
      <Helmet>
        <title>Log in from</title>
      </Helmet>

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
                  <button className="btn bg-sky-400 hover:bg-sky-700 hover:text-white">Login</button>
                </div>
              </form>
  
              <div>
                <div className="w-full  p-6 gap-5">
                  <button className="btn btn-outline w-[48%] ml-2 mr-2" onClick={githublogInHandel}>
                    <span className="text-2xl"><FaGithub></FaGithub></span>git Hub logIn</button>
                  <button className="btn bg-transparent bottom-2 border-green-800 w-[48%] ml-2 mr-2 hover:bg-green-500" onClick={handelGoogleSubmit}>
                  <span className="text-2xl"><FaGoogle></FaGoogle></span>Google log in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default LogIn;
