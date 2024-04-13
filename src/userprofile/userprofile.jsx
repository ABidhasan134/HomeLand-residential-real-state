import React, { useContext } from 'react'
import {Helmet} from "react-helmet";
import { AuthContext } from '../context/authprovider';
import { Link } from 'react-router-dom';
import Bakground from "../../public/img/cool-background.png"
import imgtheme from "../../public/img/The Little Things - UI Design.png"
const Userprofile = () => {
  const {user}=useContext(AuthContext);
  console.log(user);
  return (
    <div className="container mx-auto">
         <Helmet>
            <title>user Profile</title>
        </Helmet>
  <div className="hero mt-2 min-h-[80vh] flex justify-center  gap-10" style={{backgroundImage: `url(${Bakground})`}}>
  <div >
  <div className="hero-content flex-col lg:flex-row">

    <div>
      <h1 className="text-5xl font-bold">{user.displayName}</h1>
      <p >Email: {user.email}</p>
      <p className="">user id: {user.uid?.slice(0,5) || "365aj"}</p>
      <p className='text-xl font-semibold'>phone number: {user?.phoneNumber||'71***550100'}</p>
      <p className="">user varification: {user?.emailVerified || "False"}</p>
      <article>
      {user.displayName} is a passionate and ambitious junior web developer with a knack for problem-solving and a keen eye for detail. With a solid foundation in HTML, CSS, and JavaScript, {user.displayName} thrives on learning new technologies and techniques to enhance his coding skills. He is dedicated to creating user-friendly and visually appealing websites, always striving to stay updated with the latest trends and best practices in web development. With a collaborative spirit and a proactive approach, {user.displayName} is eager to contribute to projects and grow within the dynamic field of web development.
      </article>
        <h1 className='text-3xl font-bold'>Skill at</h1>
      <ul className='list-disc list-inside'>
        <li>HTML 5</li>
        <li>css 3 , tailwind css</li>
        <li> javaScript, React</li>
        <li> Firbase</li>
        <li> git and github (verson control)</li>
      </ul>
    </div>

    <img src={user.photoURL} className="max-w-xl rounded-lg " />
  </div>
</div>
  </div>
    </div>
  )
}

export default Userprofile
