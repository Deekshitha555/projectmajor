"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { 
  IconMusic, 
  IconYoga, 
  IconWind, 
  IconBrain, 
  IconSoup ,
  IconWeight,
} from "@tabler/icons-react";
import Link from "next/link";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Relaxing Music",
      description: "Immerse yourself in calming music to soothe your stress.",
      icon: <IconMusic />,
      link:"/features/music"
    },
    {
      title: "Guided Meditation",
      description:
        "Follow expert-led meditation sessions for inner peace and focus.",
      icon: <IconYoga />,
      link:"/features/meditation"
    },
    {
      title: "Breathing Exercises",
      description:
        "Simple yet effective breathing techniques to calm your mind.",
      icon: <IconWind />,
       link:"/features/Breathing"
    },
    {
      title: "Stress Relief Yoga",
      description:
        "Practice yoga routines tailored to alleviate stress effectively.",
      icon: <IconYoga />,
       link:"/features/yoga"
    },

    {
      title: "Mindfulness Activities",
      description:
        "Engage in activities designed to enhance your mindfulness.",
      icon: <IconBrain />,
       link:"/features/mindful-activities"
    },
    {
      title: "Healthy Recipes",
      description:
        "Discover recipes to nourish your body and reduce stress levels.",
      icon: <IconSoup />,
       link:"/features/healthy-recipes"
    },
    {
      title: "Fitness Tips",
      description: "Get tips to maintain physical health and relieve stress.",
      icon: <IconWeight />,
       link:"/features/fitness-tips"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto bg-gray-900">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  link,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  link:string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border  py-10 relative group/feature dark:border-neutral-500 m-5",
        
      )}
    >
      {index >=0 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-orange-400 to-transparent pointer-events-none" />
      )}
      
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
      <Link href={link}>
        <button className=" z-30 relative dark:bg-neutral-200 rounded-full w-fit text-white dark:text-black ml-8 mt-5 px-5 py-3 ">
          Explore now
        </button>
      </Link>
    </div>
  );
};
