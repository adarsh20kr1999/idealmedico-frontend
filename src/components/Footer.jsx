import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">idealMedico</h1>
          <p className=" text-sm">
          idealMedico is a web application designed to help users compare prices and stock availability for various medicines across different online pharmacies. It aims to simplify the process of finding the best deals on medications and making informed purchasing decisions.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Medicines
            </Link>
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Best Sellers
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Allopathy
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Ayurveda
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Homeopathy
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              A-25 Arabell Boy's Hostel North-Eastern Hill University Tura Campus Meghalaya India
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              adarsh20kr1999@gmail.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +91 7905729161
            </Link>
          </nav>
          <div className="flex gap-4 pt-4">
            <a href="https://www.instagram.com/adarsh__singh__rajput_?igsh=MXJ1ZzJ4MGtmOTF4Zw==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-hoverColor transition-all">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100005274458381&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-white hover:text-hoverColor transition-all">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.youtube.com/@AdarshMCA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-hoverColor transition-all">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/adarsh-kumar-95ab09272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-hoverColor transition-all">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-hoverColor">Adarsh Kumar MCA</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
