import React, { useContext } from 'react'
import { AuthContext } from '../context/authprovider'
import { Navigate } from "react-router-dom";

const PriveteRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  )
}

export default PriveteRoute
