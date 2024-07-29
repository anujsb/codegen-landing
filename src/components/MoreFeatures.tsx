import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col justify-center bg-sec-col p-4 border shadow-sm rounded-2xl w-full lg:w-[555px] h-[156px]">
    <div className="flex items-center">
      <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
        <Image src={icon} width={25} height={25} alt={`${title} icon`} />
      </div>
      <h1 className="text-xl mr-4">{title}</h1>
    </div>
    <p className="text-dark-grey mt-4">{description}</p>
  </div>
);

const MoreFeatures = () => {
  const features = [
    {
      icon: "/Smart.svg",
      title: "Smart Code Reviews",
      description:
        "Catch logical mistakes, best practice deviations, and non-idiomatic code",
    },
    {
      icon: "/Async.svg",
      title: "Async Code Generation",
      description:
        "Assign work to Eacc via GitHub comments, get working, tested code a few minutes later",
    },
    {
      icon: "/Question.svg",
      title: "Question & Answers",
      description: "Tag @eacc-dev with a question, right from a GitHub comment",
    },
    {
      icon: "/Style.svg",
      title: "Style Guide-as-code",
      description:
        "Write your style guide in natural language, Ellipsis will flag violations",
    },
    {
      icon: "/Customize.svg",
      title: "Customize with Feedback",
      description:
        "Ellipsis learns which types of comments your team values, customizing reviews over time",
    },
    {
      icon: "/Generate.svg",
      title: "Generate Change Logs",
      description:
        "Create weekly summaries of what's changed in your codebase and why it matters",
    },
  ];

  return (
    <div className="container mx-auto px-4 my-16 lg:my-32 flex flex-col items-center justify-center">
      <div className="w-full lg:w-2/4 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center bg-sec-col border border-5black rounded-full px-2 py-1">
          <Image
            src="/Versatile.svg"
            width={15}
            height={15}
            alt="versatile icon"
            className="mr-1"
          />
          <div>Versatile AI assistant</div>
        </div>
        <h1 className="my-6 text-2xl lg:text-4xl">
          Beyond just LGTM-as-a-service
        </h1>
        <p className="text-dark-grey">
          Ellipsis functions as an AI teammate adept at answering questions,
          crafting release notes, developing features, and resolving build
          issues.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MoreFeatures;
