import React, { useContext } from 'react'
import {Helmet} from "react-helmet";
// import { AuthContext } from '../context/authprovider';
const Home = () => {
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
    </div>
  )
}

export default Home
