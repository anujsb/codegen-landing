import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div id="Testimonials" className="h-auto mx-4 lg:mx-40 my-16 lg:my-32 flex flex-col items-center justify-center">
      <div className="w-full lg:w-2/4 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center bg-sec-col border border-5black rounded-full px-2 py-1">
          <Image
            src="/Testimonials.svg"
            width={15}
            height={15}
            alt="testimonials icon"
            className="mr-1"
          />
          <div>Our Testimonials</div>
        </div>
        <h1 className="my-6 text-2xl lg:text-4xl">What our customers are saying</h1>
        <p className="text-dark-grey">
          Read testimonials from our satisfied customers and learn how SAP has
          transformed their project management experience.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
