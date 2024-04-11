import React from "react";
import { MdHolidayVillage } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const CardsDitails = ({land}) => {
  // console.log(land);
  return (
   <div >
     <div className="card card-compact w-auto bg-base-100 shadow-sm border-2">
      <figure className="h-96">
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
            <div className="flex items-center gap-2 text-xl">
              <IoLocationOutline></IoLocationOutline>
            <p>{land.location}</p>
            </div>
        </div>
        {/* location and segment end */}
        {/* price and status */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl">
            <RiMoneyDollarCircleFill></RiMoneyDollarCircleFill>
            <p>{land.price}</p>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <IoMdPricetags></IoMdPricetags>
            <p>{land.status}</p>
            </div>
        </div>
    <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
        {/* price and status end */}
        <Link to={`/details/${land.id}`} className="btn">View Property</Link>
        </div>
    </div>
   </div>
  );
};

export default CardsDitails;
