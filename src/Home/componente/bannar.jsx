import React from "react";

export default function Bannar() {

  return (
       
      <div className="carousel w-full lg:mb-5 relative sm:-top-4 -top-3 md:top-1 lg:top-0">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row justify-evenly">
              <img
                src="https://www.theluxurybali.com/wp-content/uploads/2014/12/Villa-Bayu-Gita-Beachfront-Pool-and-deck-1-660x440.jpg"
                className="sm:h-[600px] h-[200px] rounded-lg lg:w-1/2"
              />
              <div>
                <h1 className="text-5xl font-bold">Luxury Island Paradise</h1>
                <p className="py-6">
                Welcome to our exclusive luxury tour apartment company, <br />
                where opulence meets convenience. We offer a curated <br />
                 selection of premium properties for sale and rent, catering to discerning individuals seeking refined living experiences.
                </p>
                
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="hero ">
            <div className="hero-content flex-col lg:flex-row justify-evenly">
              <img
                src="https://www.ecowatch.com/wp-content/uploads/2021/10/1114608237-origin.jpg"
                className="sm:h-[600px] h-[200px] rounded-lg"
              />
              <div >
                <h1 className="text-5xl font-bold">Remote Island Sanctuary</h1>
                <p className="py-6">
                Welcome to our exclusive luxury tour apartment company, <br />
                where opulence meets convenience. We offer a curated <br />
                 selection of premium properties for sale and rent, catering to discerning individuals seeking refined living experiences.
                </p>
                
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://na.rdcpix.com/1553713940/93a210875a43ac69f86eaad92b7d2a6dw-c0rd-w832_h468_r4_q80.jpg"
                className="h-auto sm:h-[600px] rounded-lg "
              />
              <div >
                <h1 className="text-5xl font-bold">Lakefront Estate Mansion</h1>
                <p className="py-6">
                Welcome to our exclusive luxury tour apartment company, 
                where opulence meets convenience. We offer a curated 
                 selection of premium properties for sale and rent, catering to discerning individuals seeking refined living experiences.
                </p>
                
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://homeworlddesign.com/wp-content/uploads/2017/07/Boulder-Ridge-Mountain-Retreat-1.jpg"
                className="h-auto rounded-lg"
              />
              <div >
                <h1 className="text-5xl font-bold">Mountain Retreat Mansion</h1>
                <p className="py-6">
                Welcome to our exclusive luxury tour apartment company, 
                where opulence meets convenience. We offer a curated 
                 selection of premium properties for sale and rent, catering to discerning individuals seeking refined living experiences.
                </p>
                
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

  );}
