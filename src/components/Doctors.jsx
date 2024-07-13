import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  const data = [
    {
      img: "/src/assets/img/1.jpg",
      name: "Allopathy",
      link: 'https://www.1mg.com/search/all?filter=true&name=Allopathy%20medicine',
    },
    {
      img: "/src/assets/img/2.jpg",
      name: "Ayurveda",
      link: 'https://www.1mg.com/categories/ayurveda-45',
    },
    {
      img: "/src/assets/img/3.jpg",
      name: "Homeopathy",
      link: 'https://www.1mg.com/categories/homeopathy-57',
    },

  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Medicines
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            idealMedico - A ONE-STOP FOR MEDICINES
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
        </div>
      </div>
      <div className=" mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <a key={index} href={e.link} target="blank">
              <div
                className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                key={index}
              >
                <div>
                    <img
                      src={e.img}
                      alt="img"
                      className=" h-56 rounded-t-xl w-full"
                    />
                </div>

                <div className=" flex flex-col justify-center items-center">
                  <h1 className=" font-semibold text-xl pt-4">{e.name}</h1>
                  <h3 className=" pt-2">{e.specialties}</h3>
                </div>
              </div>
              </a>
          ))}
            </Slider>
      </div>
    </div>
  );
};

export default Doctors;
