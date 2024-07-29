import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Security = () => {
  return (
    <div className="container mx-auto px-4 my-16 lg:my-32 flex flex-col items-center justify-center">
      <div className="w-full lg:w-2/4 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center bg-sec-col border border-5black rounded-full px-2 py-1">
          <Image
            src="/Values.svg"
            width={15}
            height={15}
            alt="our values icon"
            className="mr-1"
          />
          <div>Our Values</div>
        </div>
        <h1 className="my-6 text-2xl lg:text-4xl">Built with security in mind</h1>
        <p className="text-dark-grey">We are committed to ensuring your code's safety and providing clear, reliable AI-powered assistance.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-full">
        <div className="bg-security p-8 rounded-xl text-white flex flex-col justify-center">
          <h1 className="text-2xl lg:text-3xl">SOC II Certified</h1>
          <p className="mt-2">
            eacc.dev is SOC II Type I certified, ensuring top-tier security for your code. To request a copy of our report, please email team@eacc.dev or schedule a call with a founder.
          </p>
          <div className="mt-4 flex flex-wrap">
            <Button
              variant="ghost"
              className="bg-10white border border-40white shadow-sm mr-2 mb-2 md:mb-0"
            >
              <Image
                src="/mail.svg"
                width={15}
                height={15}
                alt="mail icon"
                className="mr-1"
              />
              Mail us
            </Button>
            <Button
              variant="ghost"
              className="bg-10white border border-40white shadow-sm"
            >
              <Image
                src="/talk.svg"
                width={15}
                height={15}
                alt="talk icon"
                className="mr-1"
              />
              Talk to founder
            </Button>
          </div>
        </div>
        <div className="bg-security p-8 rounded-xl text-white flex flex-col justify-center">
          <h1 className="text-2xl lg:text-3xl">No Rogue Commits</h1>
          <p className="mt-2">
            eacc.dev will never commit code without your explicit permission. You can configure eacc.dev to raise a side-PR, ensuring all changes are transparent and manageable.
          </p>
          <div className="mt-4">
            <Button
              variant="ghost"
              className="bg-10white border border-40white shadow-sm"
            >
              <Image
                src="/LearnMore.svg"
                width={15}
                height={15}
                alt="learn more icon"
                className="mr-1"
              />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
