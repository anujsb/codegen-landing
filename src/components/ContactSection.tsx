import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

interface ContactMethodProps {
  iconSrc: string;
  title: string;
  detail: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({
  iconSrc,
  title,
  detail,
}) => (
  <div className="flex border p-2 mt-4 justify-between rounded-2xl">
    <div className="flex items-center">
      <div className="flex items-center justify-center bg-light-lavender border border-5black rounded-xl p-2 mr-2">
        <Image src={iconSrc} width={25} height={25} alt="Contact method icon" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-dark-grey">{title}</h1>
        <p>{detail}</p>
      </div>
    </div>
    <div className="p-4 bg-light-lavender rounded-full border">
      <Image
        src="/featuregrid.svg"
        width={10}
        height={10}
        alt="Feature grid icon"
      />
    </div>
  </div>
);

const ContactSection = () => {
  return (
    <div className="h-auto mx-4 lg:mx-40 my-16 lg:my-32 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border rounded-xl p-4 flex flex-col">
          <h1 className="text-xl">Send Us a Message</h1>
          <p className="mt-2 text-dark-grey">
            Use our convenient contact form to reach out with questions,
            feedback, or collaboration inquiries.
          </p>
          <form className="flex flex-col mt-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="bg-light-lavender p-2 rounded-xl flex-grow"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-light-lavender p-2 rounded-xl flex-grow"
              />
            </div>
            <input
              type="text"
              name="message"
              placeholder="Message"
              className="bg-light-lavender my-4 p-2 rounded-xl"
            />
            <Button className="p-2 rounded-xl">Send Message</Button>
          </form>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-start justify-center mb-4">
            <div className="flex bg-sec-col border border-5black rounded-full px-2 py-1">
              <Image
                src="/talk-black.svg"
                width={15}
                height={15}
                alt="Contact us icon"
                className="mr-1"
              />
              <div>Contact Us</div>
            </div>
          </div>
          <h1 className="text-3xl mb-2">We&apos;re Here to Help</h1>
          <p className="text-dark-grey mb-4">
            Have questions or need assistance? Reach out to our team for
            support, inquiries, or feedback. We&apos;re always ready to assist
            you with any issues or concerns.
          </p>
          <ContactMethod
            iconSrc="/mail-black.svg"
            title="You can email us here"
            detail="hello@sap.com"
          />
          <ContactMethod
            iconSrc="/talk-black.svg"
            title="Or give us a call"
            detail="Book a Call"
          />
          <ContactMethod
            iconSrc="/location.svg"
            title="Locations"
            detail="Get Directions"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
