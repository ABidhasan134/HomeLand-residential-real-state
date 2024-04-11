import React, { useContext } from 'react'
import {Helmet} from "react-helmet";
// import { AuthContext } from '../context/authprovider';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../context/authprovider';
import Card from './componente/cards';
const Home = () => {
  const {user}=useContext(AuthContext);
  // const authInfo=useContext(AuthContext)
  // console.log(authInfo);
  return (
    <div>
        <Helmet>
        <title>Home</title>
        </Helmet>
        {/* <p>
       {authInfo}</p> */}
       home component
       <Card></Card>
       {/* {
        user?toast("there in successfully"):""
       } */}
       <ToastContainer></ToastContainer>
    </div>
  )
}

export default Home
