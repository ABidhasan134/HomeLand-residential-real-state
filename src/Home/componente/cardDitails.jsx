import React, { useContext } from 'react';
import { useLoaderData } from "react-router-dom";
import { AuthContext } from '../../context/authprovider';

const CardDetails = () => {
    const{cardInfo}=useContext(AuthContext);
    const id = useLoaderData();
    // console.log(id);
    const landProperty = cardInfo.find((land) =>land.id==id); //we not chacking type
    // console.log(landProperty);
    return (
        <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">{landProperty.estate_title}</h1>
            <p class="py-6">{landProperty.description}</p>
            
          </div>
        </div>
      </div>
    );
};

export default CardDetails; // Added semicolon
