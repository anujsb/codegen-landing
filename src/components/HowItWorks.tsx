import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 my-16 lg:my-32 flex flex-col items-center justify-center">
      <div className="w-full lg:w-2/4 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center bg-sec-col border border-5black rounded-full px-2 py-1">
          <Image
            src="/LearnToUse.svg"
            width={15}
            height={15}
            alt="learn to use icon"
            className="mr-1"
          />
          <div>Learn To Use</div>
        </div>
        <h1 className="my-6 text-2xl lg:text-4xl">Elevate Your Projects with SAP</h1>
        <p className="text-dark-grey">
          Start with eacc.dev: Connect your GitHub/GitLab, index repositories, and streamline code reviews and bug fixes with our flexible API.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
