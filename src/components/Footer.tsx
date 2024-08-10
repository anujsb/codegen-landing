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
          <p className="mt-5 font-light">
            Automate code reviews and bug fixes
            <br /> with EACC.dev. Boost productivity and
            <br /> ensure code quality effortlessly.
          </p>
          <div className="flex justify-center lg:justify-start mt-5 space-x-2">
            <Link href="https://www.linkedin.com/company/eacc-dev">
              <div className="p-2 bg-dark-grey-bg rounded-lg">
                <Image
                  src="/linkedin.svg"
                  width={25}
                  height={25}
                  alt="LinkedIn"
                />
              </div>
            </Link>
            <Link href="https://x.com/EaccDev">
              <div className="p-2 bg-dark-grey-bg rounded-lg">
                <Image src="/x.svg" width={25} height={25} alt="X" />
              </div>
            </Link>
            {/* <Link href="#">
              <div className="p-2 bg-dark-grey-bg rounded-lg">
                <Image
                  src="/insta.svg"
                  width={25}
                  height={25}
                  alt="Instagram"
                />
              </div>
            </Link> */}
          </div>
        </div>
        <div className="flex flex-row justify-between items-start mt-10 ">
          <div className="flex flex-col  justify-start items-start">
            <a href="#">
              <Button variant="link" className="text-light-grey">
                Home
              </Button>
            </a>
            <a href="#key-features">
              <Button variant="link" className="text-dark-grey">
                Product Features
              </Button>
            </a>
            <a href="#Security">
              <Button variant="link" className="text-dark-grey">
                Benefits
              </Button>
            </a>
            <a href="#HowItWorks">
              <Button variant="link" className="text-dark-grey">
                How To Use
              </Button>
            </a>
            <a href="#MoreFeatures">
              <Button variant="link" className="text-dark-grey">
                Key Features
              </Button>
            </a>
            <a href="#Pricing">
              <Button variant="link" className="text-dark-grey">
                Pricing
              </Button>
            </a>
            <a href="#Testimonials">
              <Button variant="link" className="text-dark-grey">
                Testimonials
              </Button>
            </a>
            <a href="#">
              <Button variant="link" className="text-dark-grey">
                Home
              </Button>
            </a>
          </div>
          <div className="flex flex-col  justify-start items-start">
            <a href="">
              <Button variant="link" className="text-light-grey">
                All Pages
              </Button>
            </a>
            <a href="">
              <Button variant="link" className="text-dark-grey">
                Home
              </Button>
            </a>{" "}
            <a href="">
              <Button variant="link" className="text-dark-grey">
                App
              </Button>
            </a>{" "}
            <a href="#BlogPage">
              <Button variant="link" className="text-dark-grey">
                Blogs
              </Button>
            </a>{" "}
            <a href="#">
              <Button variant="link" className="text-dark-grey">
                Blog Open
              </Button>
            </a>{" "}
            <a href="#ContactSection">
              <Button variant="link" className="text-dark-grey">
                Contact
              </Button>
            </a>{" "}
            <Link href="/privacy-policy">
              <Button variant="link" className="text-dark-grey">
                Privacy Policy
              </Button>
            </Link>
            <a href="">
              <Button variant="link" className="text-dark-grey">
                404
              </Button>
            </a>{" "}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center border-t border-dark-grey pt-4 mt-4 space-y-4 lg:space-y-0">
        <p>© 2024 EACC Dev. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="/privacy-policy">
            <Button variant="link" className="text-dark-grey">
              Privacy Policy
            </Button>
          </Link>
          <Link href="/tos">
            <Button variant="link" className="text-dark-grey">
              Terms & Conditions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
