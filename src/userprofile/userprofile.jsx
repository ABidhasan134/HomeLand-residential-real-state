import React, { useContext } from 'react'
import {Helmet} from "react-helmet";
import { AuthContext } from '../context/authprovider';
import { Link } from 'react-router-dom';
const Userprofile = () => {
  const {user}=useContext(AuthContext);
  console.log(user);
  return (
    <div>
         <Helmet>
            <title>user Profile</title>
        </Helmet>
      <div className='xl:flex h-auto justify-evenly grid p-6 bg-sky-50'>
       <div className='flex xl:justify-between justify-evenly p-4'>
        {/* 1st colume */}
       <div className='xl:m-36 m-1 '>
        <div className='my-10'>
          <p>your ID:</p>
          <p className='text-xl font-semibold'>{user.uid.slice(0,4)}</p>
        </div>
        <div className='xl:my-10 my-2'>
          <p>Phone Number:</p>
        <p className='text-xl font-semibold'>{user?.phoneNumber||'71***550100'}</p>
        </div>
        <Link to="/updateprofile" className='xl:flex hidden btn bg-transparent bottom-2 border-green-800 w-[78%] xl:w-full  ml-2 mr-2 hover:bg-sky-800 hover:text-white'>Update Your Profile</Link>
        </div>
       {/* 2nd colume */}
        <div className='xl:mt-36 mt-2'>
        <div className='mt-10'>
          <p>Name:</p>
        <h1 className='text-3xl  font-semibold'>{user.displayName}</h1>
        </div >
        <div className='mt-10'>
          <p>email:</p>
          <p className='text-xl font-semibold'>{user?.email||'ab@c.com'}</p>
        </div>
        </div>
       </div>
        {/* 3rd colume */}
          <div className=" w-auto m-16 lg:mr-56 ">
              <img src={user.photoURL} alt="User Profile" />
        </div>
        <div className='flex justify-center xl:hidden'>
        <Link to="/updateprofile" className=' btn bg-transparent bottom-2 border-green-800 w-[78%] xl:w-full  ml-2 mr-2 hover:bg-sky-800 hover:text-white'>Update Your Profile</Link>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Userprofile
