import React, { useContext } from "react";
import { Helmet } from "react-helmet";
// import { AuthContext } from '../context/authprovider';
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../context/authprovider";
import Card from "./componente/cards";
import Bannar from "./componente/bannar";
import Footer from "./componente/footer";
const Home = () => {
  const { user } = useContext(AuthContext);
  // const authInfo=useContext(AuthContext)
  // console.log(authInfo);
  return (
    <>
      <div className="container">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Bannar></Bannar>
      <div className=" relative -top-64 md:top-0  lg:top-3  text-center">
      <h1 className="text-3xl font-bold lg:p-6 sm:p-2 p-1">Find your Dream property</h1>
      <p className="pb-6 lg:p-6 sm:p-2 p-1">We understand that finding the perfect property is more than just a transaction. <br />
       It's about discovering a place where memories are made and dreams are realized.</p>
      </div>
      <Card></Card>
      {/* {
        user?toast("there in successfully"):""
       } */}
      <ToastContainer></ToastContainer>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Home;
