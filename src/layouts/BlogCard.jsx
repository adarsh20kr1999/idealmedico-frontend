import React from "react";

const BlogCard = ({ img, headlines, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-full lg:w-1/4 shadow-md">
      <div className="w-full  p-2 shadow-md rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
        <img
          className="h-64 md:h-96 lg:h-40 w-full rounded-lg"
          src={img}
          alt="img"
        />
        <h2 className="text-lg text-center font-semibold">{headlines}</h2>
      </div>
    </a>
  );
};

export default BlogCard;