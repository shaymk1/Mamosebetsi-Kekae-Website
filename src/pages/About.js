import React from "react";
import { IdentificationIcon } from '@heroicons/react/solid';
const About = () => {
  return (
    <div
      id="About"
      className="items-center justify-center mx-12 text-justify mt-60 lg:mx-60 lg:w-1/2"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="w-5 h-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            I am a Solidity developer who has a past life as a Python developer.
          </code>
          <br />
          <br />
          <code>I am fascinated by web3 technology and i want to be part of it!</code>
          
          </div>
        </div>
      </div>
   
  );
};

export default About;
