import React from "react";
import { BackgroundBeamsWithCollisionDemo } from "../../../../components/actual/backgroundbeamsdemo";
import { ThreeDCardDemo } from "../../../../components/actual/3dcardsDemo";

const Mindfulactivitespage = () => {
  // Data for the 3D cards
  const beginnerData = [
    {
      image:"/musicimages/forest.jpg",
      title: "Forest Quietness",
      description: "Discover music that soothes your mind and lifts your spirit.",
      link: "https://example.com/relaxing-tunes",
    },
    {
      image:"/musicimages/clearsky.jpg",
      title: "Free Clear Sky",
      description: "Start your journey with gentle, soothing melodies.",
      link: "https://example.com/calm-beginnings",
    },
    {
      image:"/musicimages/harp.jpg",
      title: "Free Cinematic Peaceful Harp",
      description: "Start your journey with gentle, soothing melodies.",
      link: "https://example.com/calm-beginnings",
    },
    {
      image:"/musicimages/lasthope.jpg",
      title: "Free Lost Hope",
      description: "Start your journey with gentle, soothing melodies.",
      link: "https://example.com/calm-beginnings",
    },
    {
      image:"/musicimages/life.jpg",
      title: "Free Peace In My Life",
      description: "Start your journey with gentle, soothing melodies.",
      link: "https://example.com/calm-beginnings",
    },
    {
      image:"/musicimages/gentlness.jpg",
      title: "Free Gentleness",
      description: "Start your journey with gentle, soothing melodies.",
      link: "https://example.com/calm-beginnings",
    },
  ];

  const intermediateData = [
    {
      image:"/musicimages/desert.jpg",
      title: "Free Desert Renaissance",
      description: "Find harmony with curated sounds for meditation.",
      link: "https://example.com/meditation-melodies",
    },
    {
      image:"/musicimages/inspiration.jpg",
      title: "Free Moment of Inspiration",
      description: "Elevate your practice with these serene tracks.",
      link: "https://example.com/serenity-beats",
    },
    {
      image:"/musicimages/freefromclouds.jpg",
      title: "Free From The Clouds",
      description: "Elevate your practice with these serene tracks.",
      link: "https://example.com/serenity-beats",
    },
    {
      image:"/musicimages/relax.jpg",
      title: "Begin To Relax",
      description: "Elevate your practice with these serene tracks.",
      link: "https://example.com/serenity-beats",
    },
    {
      image:"/musicimages/stress.jpg",
      title: "Stress Relief",
      description: "Elevate your practice with these serene tracks.",
      link: "https://example.com/serenity-beats",
    },
    {
      image:"/musicimages/life.jpg",
      title: "Ever life",
      description: "Elevate your practice with these serene tracks.",
      link: "https://example.com/serenity-beats",
    },
  ];

  const advancedData = [
    {
      image:"/musicimages/dreams.jpg",
      title: "Land Of Forgotten Dreams",
      description: "Boost your productivity with these calming tracks.",
      link: "https://example.com/focus-beats",
    },
    {
      image:"/musicimages/winds.jpg",
      title: "Anemoi Winds",
      description: "Achieve deep relaxation with advanced soundscapes.",
      link: "https://example.com/deep-relaxation",
    },
    {
      image:"/musicimages/heart.jpg",
      title: "Heartbeat Of Destiny",
      description: "Achieve deep relaxation with advanced soundscapes.",
      link: "https://example.com/deep-relaxation",
    },
    {
      image:"/musicimages/stars.jpg",
      title: "Motion Of Stars",
      description: "Achieve deep relaxation with advanced soundscapes.",
      link: "https://example.com/deep-relaxation",
    },
    {
      image:"/musicimages/shadow.jpg",
      title: "Shadows On The Water",
      description: "Achieve deep relaxation with advanced soundscapes.",
      link: "https://example.com/deep-relaxation",
    },
    {
      image:"/musicimages/forest.jpg",
      title: "The Power Of Your Mind",
      description: "Achieve deep relaxation with advanced soundscapes.",
      link: "https://example.com/deep-relaxation",
    },
  ];

  return (
    <div>
      {/* Background Beams */}
      <BackgroundBeamsWithCollisionDemo />

      {/* 3D Cards Sections */}
      <div className="mt-10 space-y-16">
        {/* Beginner Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-6">Beginner</h2>
          <ThreeDCardDemo data={beginnerData} />
        </section>

        {/* Intermediate Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-6">Intermediate</h2>
          <ThreeDCardDemo data={intermediateData} />
        </section>

        {/* Advanced Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-6">Advanced</h2>
          <ThreeDCardDemo data={advancedData} />
        </section>
      </div>
    </div>
  );
};

export default Mindfulactivitespage;
