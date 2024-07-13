import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Best Sellers
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            idealMedico most searched medicnes
          </p>
        </div>
        {/* <div className=" mt-4 lg:mt-0">
          <Button title="Best Sellers" />
        </div> */}
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Novamox 500" link="https://www.1mg.com/drugs/novamox-500-capsule-121841" />
          <BlogCard img={img2} headlines="Dolo 650 tablet" link="https://www.1mg.com/drugs/dolo-650-tablet-74467" />
          <BlogCard img={img3} headlines="Brufen 400" link="https://www.1mg.com/drugs/brufen-400-tablet-70206" />
          <BlogCard img={img4} headlines="Dr. Reckeweg R40 Diabetes Drop" link="https://www.netmeds.com/non-prescriptions/dr-reckeweg-r40-diaglukon-22ml" />
          <BlogCard img={img5} headlines="Himalaya Liv.52 Ds" link="https://pharmeasy.in/health-care/products/himalaya-liv-52-ds-tablets---60-s-12836" />
          <BlogCard img={img6} headlines="Kapiva dia free juice" link="https://www.netmeds.com/non-prescriptions/kapiva-dia-free-juice-1-ltr" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
