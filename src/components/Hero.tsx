import React from "react";
import { HeroImg, Play } from "../assets";
import { styles } from "../styles";
import Company from "./Company";

const Hero = () => {
  return (
    <section className={` ${styles.padding} py-[80px] flex-col`}>
      <h1 className={`lg:text-title text-4xl text-white lg:max-w-[800px] w-full leading-[50px]`}>
        We design physical <span className="underline">experiences</span> that
        create more happy in the world
      </h1>
      <p className={`text-white max-w-[500px] mt-[20px]`}>
        — We’re a full-service interior design agency who specialise in simple,
        useful and beautiful solutions for any space.
      </p>
      <div className={`mt-[40px] flexer gap-x-2`}>
        <div className="bg-white p-[8px] flex items-center justify-center lg:w-[150px] w-full rounded-md">
          <span className="text-[#7F56D9] flex items-center">
            <img src={Play} alt="play" className="h-[16px] w-[16px] mr-[8px]" />
            Showreel
          </span>
        </div>
        <div className="flex items-center justify-center p-[8px] rounded-md bg-[#7F56D9] lg:w-[150px] w-full lg:mt-0 mt-[20px]">
          <span className={`${styles.navitem}`}>Get In Touch</span>
        </div>
      </div>
      <div className="w-full lg:h-[400px] h-[200px] mt-[40px]">
        <img
          src={HeroImg}
          alt="hero image"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <Company />
    </section>
  );
};

export default Hero;
