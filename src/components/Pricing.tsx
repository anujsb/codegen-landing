import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

// Define the prop types for the PricingCard component
interface PricingCardProps {
  imageSrc: string;
  planName: string;
  planTag: string;
  description: string;
  price: string;
  priceInfo?: string; // This prop can be optional
  buttonText: string;
  buttonClass?: string; // This prop can be optional
  arrowSrc: string;
  features: string[];
}

const Pricing = () => {
  return (
    <div className="h-auto mx-4 lg:mx-40 my-16 lg:my-32 flex flex-col items-center justify-center">
      <div className="w-full lg:w-2/4 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center bg-sec-col border border-5black rounded-full px-2 py-1">
          <Image
            src="/Pricing.svg"
            width={15}
            height={15}
            alt="pricing icon"
            className="mr-1"
          />
          <div>Our Pricing</div>
        </div>
        <h1 className="my-6 text-2xl lg:text-4xl text-center">
          Our Pricing Plans
        </h1>
        <p className="text-center text-dark-grey">
          Choose from our flexible pricing options to fit your development needs
          and budget. Start with a free trial and enjoy unlimited access to
          eacc.dev&apos;s powerful features.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 w-full">
        <PricingCard
          imageSrc="/bill-free.svg"
          planName="Free Plan"
          planTag="For Developers"
          description="For large open source projects"
          price="$0"
          priceInfo="/month"
          buttonText="Get Started"
          arrowSrc="/dash-arrow.svg" // Default arrow icon
          features={[
            "AI code reviews on every commit",
            "Bug fixes & code generations",
            "Question & answer functionality",
          ]}
        />
        <PricingCard
          imageSrc="/bill-pro.svg"
          planName="Pro"
          planTag="For Businesses"
          description="Unlimited use of all features"
          price="$20"
          priceInfo="/month per developer"
          buttonText="Get Started"
          buttonClass="bg-black text-white" // Additional class for Pro plan button
          arrowSrc="/dash-arrow-white.svg" // White arrow icon for Pro plan
          features={[
            "AI code reviews on every commit",
            "Bug fixes & code generations",
            "Question & answer functionality",
          ]}
        />
        <PricingCard
          imageSrc="/bill-pro.svg"
          planName="Enterprise"
          planTag="For Organizations"
          description="More customization and support"
          price="Contact us"
          buttonText="Get Started"
          arrowSrc="/dash-arrow.svg" // Default arrow icon
          features={[
            "Weekly code change",
            "Security documentation",
            "Priority support, with SLA",
          ]}
        />
      </div>

      <div className="bg-security h-auto lg:h-[362px] p-8 rounded-xl text-white flex flex-col justify-center mt-10 w-full">
        <h1 className="text-2xl lg:text-3xl">Get Your 14 Days Free Trial</h1>
        <p className="mt-2">
          Start exploring SAP risk-free with our 14-day free trial offer today{" "}
          <br />
          and experience seamless project management firsthand.
        </p>
        <div className="mt-4">
          <Button className="bg-10white border border-40white shadow-sm">
            Get Started
            <Image
              src="/dash-arrow-white.svg"
              width={15}
              height={15}
              alt="arrow icon"
              className="ml-1"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

const PricingCard: React.FC<PricingCardProps> = ({
  imageSrc,
  planName,
  planTag,
  description,
  price,
  priceInfo,
  buttonText,
  buttonClass, // Accept additional class as a prop
  arrowSrc, // Accept arrow image source as a prop
  features,
}) => (
  <div className="p-4 bg-white rounded-2xl border flex flex-col shadow-sm">
    <Image
      src={imageSrc}
      width={55}
      height={55}
      alt={`${planName} logo`}
      className="bg-light-lavender p-4 rounded-2xl"
    />
    <div className="flex items-center mt-2">
      <h1 className="text-2xl">{planName}</h1>
      <p className="bg-light-lavender py-1 px-2 ml-2 rounded-lg text-sm text-[#3D3D3D]">
        {planTag}
      </p>
    </div>
    <p className="mt-2 text-dark-grey">{description}</p>
    <div className="border-dashed border-b mt-4" />
    <p className="flex items-center mt-4 text-light-grey-bg">
      <span className="text-3xl text-black px-1">{price}</span> {priceInfo}
    </p>
    <Button
      className={`mt-4 bg-light-grey-2 text-black border hover:bg-5black shadow-sm ${
        buttonClass || ""
      }`}
    >
      {buttonText}
      <Image
        src={arrowSrc}
        width={15}
        height={15}
        alt="arrow icon"
        className="ml-2"
      />
    </Button>
    <div className="mt-4">
      <h1 className="text-pri my-2">Features Included:</h1>
      {features.map((feature, index) => (
        <div key={index} className="flex my-2 text-dark-grey">
          <Image
            src="/tick.svg"
            width={25}
            height={25}
            alt="tick icon"
            className="bg-light-lavender rounded-md p-1.5 mr-1"
          />
          <p>{feature}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Pricing;
