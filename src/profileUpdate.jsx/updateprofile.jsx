import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/authprovider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import updatelogo from "../../public/img/qRZm6CIDi.png"

const UpdateProfile = () => {
  const { user,logOut,setUser,setReload} = useContext(AuthContext);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user.displayName,
      url: user.photoURL,
      // email: user.email,
    },
  });

  const updateSubmit = async (data) => {
    try {
      const updateName = data.name;
      const updateImgURL = data.url;
      // const updateEmail=data.email;

      // Update user profile in Firebase
      await updateProfile(user, {
        displayName: updateName,
        photoURL: updateImgURL,
      });
      toast(`your name and photo url has been updated`);
      setUser({displayName : updateName, photoURL : updateImgURL}) 
      // setTimeout(() => {
      //   logOut();
      // }, 2000);
    } catch (error) {
      console.log(error);
      
    }
    setReload(true);
  };

  return (
    <div >
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <div className="hero flex justify-center">
        
        <div className="w-full max-w-sm border-2 rounded-lg bg-base-100 m-10 z-50">
          <h1 className="text-center text-2xl font-bold p-6">
            Update your Information
          </h1>
          <form className="card-body" onSubmit={handleSubmit(updateSubmit)}>
            {/* name change */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Update Name:</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                {...register("name")}
                required
              />
            </div>

            {/* photo change */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Update Photo URL:</span>
              </label>
              <input
                type="url"
                placeholder="URL"
                className="input input-bordered"
                name="url"
                {...register("url")}
                required
              />
            </div>
            {/* email change start */}
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Update Photo URL:</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                {...register("email")}
                required
              />
            </div> */}
            {/* email chanege end */}
            <div className="form-control mt-6">
              <button className="btn bg-sky-300 hover:bg-sky-700 hover:text-white">Update</button>
            </div>
          </form>
          <ToastContainer></ToastContainer>
        </div>
          <div className="hidden sm:flex">
            <img src={updatelogo} alt="" />
          </div>
      </div>
    </div>
  );
};

export default UpdateProfile;