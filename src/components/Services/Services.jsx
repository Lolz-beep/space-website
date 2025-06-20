import React from "react";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import wave from "../../assets/wave.gif";

const ServicesData = [
  {
    title: "HSI",
    content: "300-1500km",
    description: "High Speed Interplanetary",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "HSI",
    content: "300-1500km",
    description: "High Speed Interplanetary",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "HSI",
    content: "300-1500km",
    description: "High Speed Interplanetary",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
];
const Services = () => {
  return (
    <div className="bg-black text-white relativeq">
      <div className="container">
        <div className="min-h-[400px] p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {ServicesData.map((data, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="min-h-[180px] flex flex-col gap-2 justify-center items-center bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
              >
                {data.icon}
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
          </div>
          <img
            src={wave}
            alt=""
            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
