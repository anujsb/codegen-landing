import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-hero h-screen flex items-center justify-">
      <div className="grid grid-flow-col grid-cols-2">
        <div className="flex ">
          <div className="flex items-center ">
            backed by
            {/* <Image
              src="/ycom.png"
              width={131.39}
              height={24.11}
              alt="Picture of the author m-2 border"
            /> */}
          </div>
          {/* <div>head``</div> */}
          {/* <div>baki</div> */}
        </div>
        <div>image</div>
      </div>
    </div>
  );
};

export default Hero;
