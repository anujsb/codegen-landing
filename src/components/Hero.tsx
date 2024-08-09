import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-hero h-auto w-full">
      <div className="pt-20 md:pt-40 m-5 md:m-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-center md:justify-start mb-4 text-light-grey-bg">
            backed by
            <Image
              src="/ycom.png"
              width={131.39}
              height={24.11}
              alt="ycom"
              className="mx-2 px-2 py-1 border rounded-md bg-white"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
            <div className="flex flex-row items-center justify-center md:justify-start mt-4 md:mt-12 border rounded-full bg-white shadow-sm m-1 py-1 px-2">
              <Image src="/trusted.svg" width={40} height={20} alt="ycom" />
              <h1 className="text-dark-grey text-sm">
                Trusted by 3k+ Github Members
              </h1>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-center md:text-left">
            Revolutionize Your Code Reviews & Bug Fixes with AI
          </h1>
          <p className="text-dark-grey mt-4 text-lg text-center md:text-left">
            Experience faster, smarter, and more secure development with
            eacc.dev, where AI-driven code reviews and automated bug fixes
            streamline your workflow and elevate code quality.
          </p>
          <div className="flex flex-col md:flex-row mt-4 items-center justify-center md:justify-start">
            <Button className="mr-0 md:mr-4 mb-4 md:mb-0 black-grad-radial shadow-inner border rounded-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" className="bg-sec-col border rounded-lg">
              Book Demo
            </Button>
          </div>
          <p className="text-sm mt-5 text-center md:text-left">
            Loved by developers at 500+ companies
          </p>
          <div className="flex flex-wrap justify-center md:justify-start text-dark-grey mt-2">
            <div className="flex text-sm bg-white border shadow-sm p-1 px-2 rounded-md m-1">
              <Image
                src="/ResourceAllocation.svg"
                width={15}
                height={15}
                alt="Resource Allocation"
                className="mr-1"
              />
              <p>Resource Allocation</p>
            </div>
            <div className="flex text-sm bg-white border shadow-sm p-1 px-2 rounded-md m-1">
              <Image
                src="/AgileWorkflow.svg"
                width={15}
                height={15}
                alt="Agile Workflow"
                className="mr-1"
              />
              <p>Agile Workflow</p>
            </div>
            <div className="flex text-sm bg-white border shadow-sm p-1 px-2 rounded-md m-1">
              <Image
                src="/TaskManagement.svg"
                width={15}
                height={15}
                alt="Task Management"
                className="mr-1"
              />
              <p>Task Management</p>
            </div>
            <div className="flex text-sm bg-white border shadow-sm p-1 px-2 rounded-md m-1">
              <Image
                src="/Real-timeCollaboration.svg"
                width={15}
                height={15}
                alt="Real-time Collaboration"
                className="mr-1"
              />
              <p>Real-time Collaboration</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
          <Image
            src="/home-page.png"
            width={700}
            height={400}
            alt="image"
            className="mr-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
