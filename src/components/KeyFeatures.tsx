import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="bg-sec-col p-4 border shadow-sm rounded-2xl w-full lg:w-[428.27px] h-[386px]">
    <div className="flex flex-row items-center">
      <div className="mr-4">
        <h1 className="text-xl">{title}</h1>
        <p className="text-dark-grey font-light">{description}</p>
      </div>
      <div className="">
        <Image
          src="/featuregrid.svg"
          width={70}
          height={70}
          alt="feature icon"
        />
      </div>
    </div>
    <div className="rounded-xl border mt-10">{/* Placeholder for image */}</div>
  </div>
);

const KeyFeatures = () => {
  const features = [
    {
      title: "Generating Working, Tested Code",
      description:
        "Instantly generate production-ready code by tagging @eacc-dev.",
    },
    {
      title: "Automated Code Reviews & Bug Fixes",
      description:
        "Detect errors, enhance security, and enforce style guides automatically.",
    },
    {
      title: "Cloud-Based",
      description:
        "Run reviews and fixes in the cloud for seamless processing.",
    },
    {
      title: "Feedback-Driven Improvements",
      description:
        "Refine suggestions based on team feedback with thumbs up/down ratings.",
    },
  ];

  return (
    <div id="key-features" className="container mx-auto px-4 my-16 lg:my-32 flex flex-col items-center justify-center">
      <div className="w-full lg:w-2/4 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center bg-sec-col border border-5black rounded-full px-2 py-1">
          <Image
            src="/KeyFeatures.svg"
            width={15}
            height={15}
            alt="key features icon"
            className="mr-1"
          />
          <div>Key Features</div>
        </div>
        <h1 className="my-6 text-2xl lg:text-4xl">
          Elevate Your Projects with SAP
        </h1>
        <p className="text-dark-grey font-light">
          Automate code reviews, generate tested solutions, integrate seamlessly
          with Git, and evolve with user feedback—all in one powerful platform
          designed to accelerate your team&apos;s productivity and code quality.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
