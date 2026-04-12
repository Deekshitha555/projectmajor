"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Relaxing Music",
    link: "/features/music",
    thumbnail: "/images/music.jpg",
  },
  {
    title: "Guided Meditation",
    link: "/features/meditation",
    thumbnail: "/images/meditation.jpg",
  },
  {
    title: "Breathing Exercises",
    link: "/features/breathing-exercise",
    thumbnail: "/images/breathing.jpg",
  },
  {
    title: "Stress Relief Yoga",
    link: "/features/yoga",
    thumbnail: "/images/yoga.jpg",
  },
  {
    title: "Therapy Sessions",
    link: "/features/therapy-sessions",
    thumbnail: "/images/therapy.jpg",
  },
  {
    title: "Mindfulness Activities",
    link: "/features/mindful-activities",
    thumbnail: "/images/mindful.jpg",
  },
  {
    title: "Healthy Recipes",
    link: "/features/healthy-recipes",
    thumbnail: "/images/recepies.jpg",
  },
  {
    title: "Daily Motivation",
    link: "/features/daliy-motivation",
    thumbnail: "/images/dailymotivation.jpg",
  },
  {
    title: "Fitness Tips",
    link: "/features/fitness-tips",
    thumbnail: "/images/fitnesstip.jpg",
  },
  {
    title: "Sleep Better",
    link: "/features/sleep-better",
    thumbnail: "/images/sleep.jpg",
  },
  {
    title: "Wellness Webinars",
    link: "/features/wellness-webinars",
    thumbnail: "/images/webinars.jpg",
  },
  {
    title: "Stress Tests",
    link: "/features/stress-test",
    thumbnail: "/images/stresstest.jpg",
  },
  {
    title: "Spiritual Connections",
    link: "/features/spiritual-connection",
    thumbnail: "/images/spritual.jpg"
 } ,
 {
  title: "Stress Relief Yoga",
  link: "/features/yoga",
  thumbnail: "/images/yoga.jpg",
},
{
  title: "Healthy Recipes",
  link: "/features/heathly-recipes",
  thumbnail: "/images/recepies.jpg",
},
];