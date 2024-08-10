import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div
      id="HowItWorks"
      className="container mx-auto px-4 my-16 lg:my-32 flex flex-col items-center justify-center"
    >
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
        <h1 className="my-6 text-2xl lg:text-4xl">How it works</h1>
        <p className="text-dark-grey font-light">
          Start with eacc.dev: Connect your GitHub/GitLab, index repositories,
          and streamline code reviews and bug fixes with our flexible API.{" "}
        </p>
      </div>
      <div className="md:w-[1130px] lg:w-[1130px] sm:w-[375px] md:h-[600px] lg:h-[600px] sm:h-[600px] rounded-xl mt-10">
        <iframe
          src="https://www.loom.com/embed/b9ec564cd4d04a6d985c077088794fe6?sid=b6dbae93-f413-4b83-b684-c353fd11ace4"
          frameBorder="0"
          className="w-full h-full rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default HowItWorks;
