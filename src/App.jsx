import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import './App.css';
import SearchMedicines from './components/Search';

const App = () => {

 

  return (
    <div>
      <Navbar />

      <main>
          <>
            <div id="home">
              <Home />
            </div>

            <div id="doctors">
              <Doctors />
            </div>

            <div id="services">
              <Services />
            </div>

            <div id="blog">
              <Blogs />
            </div>

            <div id="about">
              <About />
            </div>
          </>
        
      </main>
      <Footer />
    </div>
  );
};

export default App;
