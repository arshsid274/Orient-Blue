import React from "react";
import Ashoka from "../assets/Ashoka.jpg"
import Seven from "../assets/SevenInn.jpg";
import "./Marquee.css";

function Marquee() {
  const items = [Ashoka, Seven, Ashoka, Seven, Ashoka, Seven, Ashoka, Seven, Ashoka, Seven];

  return (
    <>
    <div className="py-8">
      <h1 className="text-white text-center text-xl md:text-3xl">Our Brand <span className="text-[#000080]">Partner</span> </h1>
    <div className="marquee marquee--6">
      <h1>Our Brand Partner</h1>
      {items.map((item, index) => (
        <img
          key={index}
          className="marquee__item"
          src={item}
          width="150"
          height="100"
          alt=""
          style={{ "--marquee-item-index": index + 1 }}
        />
      ))}
    </div>
    </div>
    
    </>
  );
}

export default Marquee;
