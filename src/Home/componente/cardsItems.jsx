import React, { useEffect } from "react";
import { MdHolidayVillage } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
import locationIcon from '../../../public/img/Animation - 1712991377164 (1).gif'
import moneyIcon from '../../../public/img/Animation - 1713035749776.gif'

const CardsDitails = ({land}) => {
  useEffect(() => {
    AOS.init();
  }, [])
  // console.log(land);
  return (
   <div  data-aos="fade-up"
   data-aos-anchor-placement="top-bottom">
     <div className="card card-compact w-auto bg-base-100 shadow-sm border-2">
      <figure className="lg:h-96 md:h-72 h-48 p-2">
        <img
          src={land.image}
          alt="Photo of property"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{land.estate_title}</h2>
        <p>{land.description}</p>
        <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
        {/* location and segment */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-xl">
            <MdHolidayVillage></MdHolidayVillage>
            <p>{land.segment_name}</p>
            </div>
            <div className="flex items-center  text-xl">
              {/* <IoLocationOutline></IoLocationOutline> */}
              {/* <locationIcon></locationIcon> */}
              <img className="h-[50px]" src={locationIcon} alt="" />
            <p>{land.location}</p>
            </div>
        </div>
        {/* location and segment end */}
        {/* price and status */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl">
              <img className="h-[50px]" src={moneyIcon} alt="" />
            {/* <RiMoneyDollarCircleFill></RiMoneyDollarCircleFill> */}
            <p>{land.price}</p>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <IoMdPricetags></IoMdPricetags>
            <p>{land.status}</p>
            </div>
        </div>
    <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
        {/* price and status end */}
        <Link to={`/details/${land.id}`} className="btn border-none bg-sky-400 hover:bg-sky-800 hover:text-white">View Property</Link>
        </div>
    </div>
   </div>
  );
};

export default CardsDitails;
