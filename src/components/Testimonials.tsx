import React from "react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    heading: "1",
    content:
      "Integrating eacc.dev with our GitHub was seamless, and the immediate improvement in code quality was remarkable.",
    name: "John Doe",
    role: "CTO at FutureTech",
    href: "https://x.com/",
  },
  {
    heading: "2",
    content:
      "Integrating eacc.dev with our GitHub was seamless, and the immediate improvement in code quality was remarkable.",
    name: "John Doe",
    role: "CTO at FutureTech",
    href: "https://x.com/",
  },
  {
    heading: "3",
    content:
      "Integrating eacc.dev with our GitHub was seamless, and the immediate improvement in code quality was remarkable.",
    name: "John Doe",
    role: "CTO at FutureTech",
    href: "https://x.com/",
  },
  // Add more testimonials as needed
];

const Testimonials: React.FC = () => {
  return (
    <div
      id="Testimonials"
      className="h-auto mx-4 lg:mx-40 my-16 lg:my-32 flex flex-col items-center justify-center"
    >
      <div className="w-full lg:w-1/3 flex flex-col items-center justify-center text-center">
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
        <h1 className="my-6 text-2xl lg:text-4xl">
          What our customers are saying
        </h1>
        <p className="text-dark-grey">
          Read testimonials from our satisfied customers and learn how SAP has
          transformed their project management experience.
        </p>
        {/* <div> */}
        <div className="mt-10">
          <div className="relative m-auto w-[1000px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <div className="animate-infinite-slider-forward slide-forward flex w-[calc(384px*10)]">
              {testimonials.map((testimonial, index) => (
                <Link href={testimonial.href} key={`testimonial-${index}`}>
                  <div className="border rounded-2xl text-start w-96 mx-2">
                    <div className="bg-sec-col p-6 m-2 rounded-xl">
                      <Image
                        src="/testsvg.svg"
                        width={35}
                        height={35}
                        alt="learn more icon"
                        className="mr-1"
                      />
                      <h1 className="mt-4">{testimonial.heading}</h1>
                      <p className="text-dark-grey font-light mt-2">
                        {testimonial.content}
                      </p>
                      <div className="flex justify-between mt-4">
                        <div className="flex flex-col">
                          <h1>{testimonial.name}</h1>
                          <p className="text-dark-grey font-light">
                            {testimonial.role}
                          </p>
                        </div>
                        <Image
                          src="/x2.svg"
                          width={25}
                          height={25}
                          alt="learn more icon"
                          className="mx-2"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              {testimonials.map((testimonial, index) => (
                <Link
                  href={testimonial.href}
                  key={`testimonial-duplicate-${index}`}
                >
                  <div className="border rounded-2xl text-start w-96 mx-2">
                    <div className="bg-sec-col p-6 m-2 rounded-xl">
                      <Image
                        src="/testsvg.svg"
                        width={35}
                        height={35}
                        alt="learn more icon"
                        className="mr-1"
                      />
                      <h1 className="mt-4">{testimonial.heading}</h1>
                      <p className="text-dark-grey font-light mt-2">
                        {testimonial.content}
                      </p>
                      <div className="flex justify-between mt-4">
                        <div className="flex flex-col">
                          <h1>{testimonial.name}</h1>
                          <p className="text-dark-grey font-light">
                            {testimonial.role}
                          </p>
                        </div>
                        <Image
                          src="/x2.svg"
                          width={25}
                          height={25}
                          alt="learn more icon"
                          className="mx-2"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className=" mt-5 relative m-auto w-[1000px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <div className="animate-infinite-slider-reverse slide-reverse flex w-[calc(384px*10)]">
              {testimonials.map((testimonial, index) => (
                <Link href={testimonial.href} key={`testimonial-${index}`}>
                  <div className="border rounded-2xl text-start w-96 mx-2">
                    <div className="bg-sec-col p-6 m-2 rounded-xl">
                      <Image
                        src="/testsvg.svg"
                        width={35}
                        height={35}
                        alt="learn more icon"
                        className="mr-1"
                      />
                      <h1 className="mt-4">{testimonial.heading}</h1>
                      <p className="text-dark-grey font-light mt-2">
                        {testimonial.content}
                      </p>
                      <div className="flex justify-between mt-4">
                        <div className="flex flex-col">
                          <h1>{testimonial.name}</h1>
                          <p className="text-dark-grey font-light">
                            {testimonial.role}
                          </p>
                        </div>
                        <Image
                          src="/x2.svg"
                          width={25}
                          height={25}
                          alt="learn more icon"
                          className="mx-2"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              {testimonials.map((testimonial, index) => (
                <Link
                  href={testimonial.href}
                  key={`testimonial-duplicate-${index}`}
                >
                  <div className="border rounded-2xl text-start w-96 mx-2">
                    <div className="bg-sec-col p-6 m-2 rounded-xl">
                      <Image
                        src="/testsvg.svg"
                        width={35}
                        height={35}
                        alt="learn more icon"
                        className="mr-1"
                      />
                      <h1 className="mt-4">{testimonial.heading}</h1>
                      <p className="text-dark-grey font-light mt-2">
                        {testimonial.content}
                      </p>
                      <div className="flex justify-between mt-4">
                        <div className="flex flex-col">
                          <h1>{testimonial.name}</h1>
                          <p className="text-dark-grey font-light">
                            {testimonial.role}
                          </p>
                        </div>
                        <Image
                          src="/x2.svg"
                          width={25}
                          height={25}
                          alt="learn more icon"
                          className="mx-2"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
