import React from 'react';
import { Helmet } from 'react-helmet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../Home/componente/style.css';
import { Icon } from 'leaflet';

const Location = () => {
  const handelFeedback=(e)=>{
    e.preventDefault();
    e.target.reset();
  }
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Location</title>
      </Helmet>

      <div>
        <MapContainer center={[23.7661, 90.3588]} zoom={12} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[23.7661,90.3588]}>
            <Popup>Ring Rood</Popup>
          </Marker>
        </MapContainer>
        <div className='flex justify-evenly sm:flex-row-reverse flex-col mt-2'>
          <div className='grid  bg-orange-50 p-6  sm:w-2/3 w-full'>
            <h1 className='text-5xl font-bold'>Feed Back</h1>
          <form className='mt-2 ' onSubmit={handelFeedback}>
          <input type="text" placeholder="Name" className=" mt-2 input input-bordered input-accent w-full" />
          <input type="text" placeholder="phone number" className=" mt-2 input input-bordered input-accent w-full" />
          <textarea className="textarea textarea-accent w-full  mt-2 " placeholder="give us feed back"></textarea>
          <button className=" mt-2 btn btn-outline btn-accent w-full">Accent</button>
          </form>
          </div>
          <div className='sm:w-1/3 w-full pl-3'>
            <h1 className='text-2xl font-bold'>Location of main office</h1>
          <p>101/101, Tajmohol Road</p>
            <p>Mohammadpur, Dhaka,Bangladesh</p>
            <h1 className='text-2xl font-bold'>Office building in Dhaka</h1>
            <ul className='list-disc list-inside'>
              <li>Bonanni</li>
              <li>Mohammad pur</li>
              <li>Gabtoli</li>
              <li>Jatrabari</li>
              <li>Sutrapur</li>
              <li>Gulshan 1</li>
              <li>Gulshan 2</li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Location;
