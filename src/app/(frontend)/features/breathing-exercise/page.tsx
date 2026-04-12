"use client"
import React from "react";
import { useState } from "react";
import { ThreeDCardDemo } from "../../../../components/actual/3dcardsDemo";
import { BackgroundBeamsWithCollision } from "src/components/ui/background-beams-with-collision";

const Breathingexercisepage = () => {
  // Data for the 3D cards
  const beginnerData = [
    {
      image: "/musicimages/forest.jpg",
      title: "Forest Quietness",
      description: "Discover music that soothes your mind and lifts your spirit.",
      link: "/video/begin.mp4",
    },

  ];

  const intermediateData = [
    {
      image: "/musicimages/desert.jpg",
      title: "Free Desert Renaissance",
      description: "Find harmony with curated sounds for meditation.",
      link: "/video/inter.mp4",
    },
  ];

  const advancedData = [
    {
      image: "/musicimages/dreams.jpg",
      title: "Land Of Forgotten Dreams",
      description: "Boost your productivity with these calming tracks.",
      link: "/video/advance.mp4",
    }
  ];
  const [isBlurred, setIsBlurred] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const handleClose = () => {
    setIsBlurred(false);
    setCurrentVideo("")
  };

  const handleOpenBreathingExercise = (videoLink: string) => {
    setIsBlurred(true);
    setCurrentVideo(videoLink);
  };

  return (
    <div>
      <BackgroundBeamsWithCollision>
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Breathe In, Breathe Out,{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-blue-500 via-cyan-500 to-green-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Find Your Calm.</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 py-4">
              <span className="">Find Your Calm.</span>
            </div>
          </div>
        </h2>
      </BackgroundBeamsWithCollision>
      <div className="relative">
        <div className="mt-10 w-screen flex items-center justify-center">
          {isBlurred && (
            <div className="w-[700px] z-10 bg-black bg-opacity-60 text-white">
              <div className="bg-gray-800 p-10 rounded-xl shadow-lg text-center space-y-10 relative">
                <h2 className="text-xl font-bold">Breathing Exercise</h2>
                <div className="flex justify-center items-center">
                  {currentVideo && (
                    <video
                      src={currentVideo}
                      className="w-[500px] h-96"
                      autoPlay
                      loop
                      muted
                    />
                  )}
                </div>
                <div className="absolute top-2 right-2">
                  <button
                    onClick={handleClose}
                    className="bg-red-500 text-white rounded-full px-4 py-2 hover:bg-red-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    
      {/* 3D Cards Sections */}
      <div className="mt-10 space-y-16">
        {/* Beginner Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-6">Beginner</h2>
          <ThreeDCardDemo data={beginnerData}  onPlayNow={handleOpenBreathingExercise} />
        </section>

        {/* Intermediate Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-6">Intermediate</h2>
          <ThreeDCardDemo data={intermediateData}  onPlayNow={handleOpenBreathingExercise}/>
        </section>

        {/* Advanced Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-6">Advanced</h2>
          <ThreeDCardDemo data={advancedData}  onPlayNow={handleOpenBreathingExercise}/>
        </section>
      </div>
    </div>
  );
};

export default Breathingexercisepage;
