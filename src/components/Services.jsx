import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;
  const allopathyText = "Allopathic medicine is another term for conventional, or modern Western medicine. It is an evidence-based system where doctors and other healthcare professionals treat symptoms using conventional medications.";
  const ayurvedaText = "The ancient Indian medical system, also known as Ayurveda, is based on ancient writings that rely on a “natural” and holistic approach to physical and mental health. Ayurvedic medicine is one of the world’s oldest medical systems and remains one of India’s traditional health care systems.";
  const homeopathyText = "Homeopathy is an alternative medicine based on the theory of treating 'like with like'. Homeopathy claims to stimulate healing responses to diseases by administering substances that mimic the symptoms of those diseases in healthy people.";

  const allopathyURL = 'https://en.wikipedia.org/wiki/Allopathic_medicine';
  const ayurvedaURL = 'https://en.wikipedia.org/wiki/Ayurveda';
  const homeopathyURL = 'https://en.wikipedia.org/wiki/Homeopathy';

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            idealMedico
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            A One-Stop For Medicines
          </p>
        </div>
        {/* <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div> */}
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon2} title="Allopathy" desc={allopathyText} url={allopathyURL} />
        <ServicesCard icon={icon2} title="Ayurveda" desc={ayurvedaText} url={ayurvedaURL} />
        <ServicesCard icon={icon2} title="Homeopathy" desc={homeopathyText} url={homeopathyURL} />
      </div>
    </div>
  );
};

export default Services;
