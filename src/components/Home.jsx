import React from "react";
import Button from "../layouts/Button";
import { useState } from "react";
import SearchMedicines from "./Search";

const Home = () => {

  

  

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-16 px-5 text-red-50 bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          idealMedico
        </h1>
        <h2 className="text-4xl font-semibold leading-tight">
          A One-Stop for Medicines
        </h2>
        <p className="text-3xl font-semibold leading-tight">
        <br/>
          Search for medicines
          <br/><br/>
        </p>
        < SearchMedicines />
      </div>
    </div>
  );
};

export default Home;
