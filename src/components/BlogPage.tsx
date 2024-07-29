import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const BlogPage = () => {
  return (
    <div className="h-auto mx-4 lg:mx-40 my-16 lg:my-32 flex flex-col items-center justify-center">
      <div className="w-full lg:w-2/4 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center bg-sec-col border border-5black rounded-full px-2 py-1">
          <Image
            src="/blog.svg"
            width={15}
            height={15}
            alt="blog icon"
            className="mr-1"
          />
          <div>Our Blogs</div>
        </div>
        <h1 className="my-6 text-2xl lg:text-4xl text-center">Explore Our Blog</h1>
        <p className="text-center text-dark-grey">
          Stay updated with the latest trends, tips, and insights on AI-driven code reviews,
          bug fixes, and development best practices.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-10">
        <BlogCard
          imageSrc="/blog1.png"
          title="Optimizing Workflow Processes for Maximum Efficiency"
          description="Understand the importance of optimizing workflow processes to enhance efficiency. Learn techniques…"
          authorImage="/joel.png"
          authorName="Joel Keneley"
          readTime="4 Min Read"
        />
        <BlogCard
          imageSrc="/blog2.png"
          title="Best Practices for Effective Project Documentation"
          description="Dive into the importance of maintaining thorough project documentation. Learn best practices for…"
          authorImage="/joel.png"
          authorName="Sarah Devis"
          readTime="10 Min Read"
        />
        <BlogCard
          imageSrc="/blog3.png"
          title="Managing Stakeholder Expectations for Project Success"
          description="Understand the importance of stakeholder management in project planning. Learn strategies…"
          authorImage="/joel.png"
          authorName="Micheal Smith"
          readTime="14 Min Read"
        />
      </div>
      <div className="mt-10">
        <Button className="mt-4 bg-light-grey-2 text-black border hover:bg-5black shadow-sm">
          View All Blogs
          <Image
            src="/dash-arrow.svg"
            width={15}
            height={15}
            alt="arrow icon"
            className="ml-2"
          />
        </Button>
      </div>
    </div>
  );
};

const BlogCard = ({ imageSrc, title, description, authorImage, authorName, readTime }) => (
  <div className="p-2 border shadow-sm rounded-2xl">
    <div>
      <Image
        src={imageSrc}
        width={406.27}
        height={252.5}
        alt={`${title} image`}
        className="rounded-xl"
      />
    </div>
    <div className="p-2">
      <h1 className="text-lg mt-5">{title}</h1>
      <p className="text-dark-grey">{description}</p>
      <div className="mt-5 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={authorImage}
            width={25}
            height={20}
            alt={`${authorName} image`}
            className="mr-2"
          />
          <p>{authorName}</p>
        </div>
        <div className="flex items-end justify-end">
          <p className="px-2 py-1 border rounded-lg text-dark-grey bg-sec-col">{readTime}</p>
        </div>
      </div>
    </div>
  </div>
);

export default BlogPage;
