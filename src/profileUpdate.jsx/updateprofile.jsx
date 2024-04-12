import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/authprovider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const UpdateProfile = () => {
  const { user,logOut} = useContext(AuthContext);
  const [error, setError] = useState(null); // State to handle errors
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: user.displayName,
      url: user.photoURL,
    },
  });

  const updateSubmit = async (data) => {
    try {
      const updateName = data.name;
      const updateImgURL = data.url;

      // Update user profile in Firebase
      await updateProfile(user, {
        displayName: updateName,
        photoURL: updateImgURL,
      });
      toast(`your name and photo url has been updated`);
      setTimeout(() => {
        logOut();
      }, 2000);
    } catch (error) {
      setError(error)
      
    }
  };

  return (
    <div>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <div className="hero">
        <div className="w-full max-w-sm border-2 rounded-lg bg-base-100 m-10">
          <h1 className="text-center text-2xl font-bold p-6">
            Update your Information
          </h1>
          <form className="card-body" onSubmit={handleSubmit(updateSubmit)}>
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
            {error && (
              <div className="text-red-500 mt-4">
                Error: {error}
              </div>
            )}
          </form>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
