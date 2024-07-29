import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-auto m-5 mt-32 px-8 lg:px-16 py-5 flex flex-col items-center justify-center bg-black-grey rounded-xl text-dark-grey">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center my-10">
        <div className="text-center lg:text-left">
          <Image
            src="/logo-footer.svg"
            width={50}
            height={50}
            alt="EACC.dev logo"
            className="rounded-xl mx-auto lg:mx-0"
          />
          <p className="mt-5">
            Automate code reviews and bug fixes
            <br /> with EACC.dev. Boost productivity and
            <br /> ensure code quality effortlessly.
          </p>
          <div className="flex justify-center lg:justify-start mt-5 space-x-2">
            <Link href="#">
              <div className="p-2 bg-dark-grey-bg rounded-lg">
                <Image
                  src="/linkedin.svg"
                  width={25}
                  height={25}
                  alt="LinkedIn"
                />
              </div>
            </Link>
            <Link href="#">
              <div className="p-2 bg-dark-grey-bg rounded-lg">
                <Image src="/x.svg" width={25} height={25} alt="X" />
              </div>
            </Link>
            <Link href="#">
              <div className="p-2 bg-dark-grey-bg rounded-lg">
                <Image
                  src="/insta.svg"
                  width={25}
                  height={25}
                  alt="Instagram"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start mt-10 lg:mt-0 space-y-4 lg:space-y-0 lg:space-x-10">
          <div className="flex flex-col  justify-start items-start">
            <Button variant="link" className="text-light-grey">
              Home
            </Button>
            <Button variant="link" className="text-dark-grey">
              Product Features
            </Button>
            <Button variant="link" className="text-dark-grey">
              Benefits
            </Button>
            <Button variant="link" className="text-dark-grey">
              How To Use
            </Button>
            <Button variant="link" className="text-dark-grey">
              Key Features
            </Button>
            <Button variant="link" className="text-dark-grey">
              Pricing
            </Button>
            <Button variant="link" className="text-dark-grey">
              Testimonials
            </Button>
            <Button variant="link" className="text-dark-grey">
              Home
            </Button>
          </div>
          <div className="flex flex-col  justify-start items-start">
            <Button variant="link" className="text-light-grey">
              All Pages
            </Button>
            <Button variant="link" className="text-dark-grey">
              Home
            </Button>
            <Button variant="link" className="text-dark-grey">
              App
            </Button>
            <Button variant="link" className="text-dark-grey">
              Blogs
            </Button>
            <Button variant="link" className="text-dark-grey">
              Blog Open
            </Button>
            <Button variant="link" className="text-dark-grey">
              Contact
            </Button>
            <Button variant="link" className="text-dark-grey">
              Privacy Policy
            </Button>
            <Button variant="link" className="text-dark-grey">
              404
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center border-t border-dark-grey pt-4 mt-4 space-y-4 lg:space-y-0">
        <p>© 2024 EACC Dev. All rights reserved.</p>
        <div className="flex space-x-4">
          <Button variant="link" className="text-dark-grey">
            Privacy Policy
          </Button>
          <Button variant="link" className="text-dark-grey">
            Terms & Conditions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
