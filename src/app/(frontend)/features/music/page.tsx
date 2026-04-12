"use client"
import { useState, useRef, useEffect } from "react";
import { BackgroundBeamsWithCollisionDemo } from "../../../../components/actual/backgroundbeamsdemo";
import { ThreeDCardDemo } from "../../../../components/actual/3dcardsDemo";

const Musicpage = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Data for the 3D cards
  const [isBlurred, setIsBlurred] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioSrc, setCurrentAudioSrc] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current!.currentTime);
      };
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current!.duration);
      };
    }
  }, []);

  const handlePlayNow = (audioSrc: string) => {
    if (!audioRef.current) {
      const audio = new Audio(audioSrc);
      audioRef.current = audio;
    } else {
      if (audioRef.current.src !== audioSrc) {
        audioRef.current.src = audioSrc;
      }
    }

    audioRef.current.play();
    setCurrentAudioSrc(audioSrc);
    setIsPlaying(true);
    setIsBlurred(true);
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setIsBlurred(false);
    setCurrentAudioSrc(null);
    setCurrentTime(0);
  };

  const handleSeek = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const beginnerData = [
    {
      image: "/musicimages/forest.jpg",
      title: "Forest Quietness",
      description: "Discover music that soothes your mind and lifts your spirit.",
      link: "https://example.com/relaxing-tunes",
      audio: "/audio/forest.mp3",
    },
    {
      image: "/musicimages/clearsky.jpg",
      title: "Free Clear Sky",
      description: "Start your journey with gentle, soothing melodies.",
      link: "https://example.com/calm-beginnings",
      audio: "/audio/clearsky.mp3",
    },
    {
      image: "/musicimages/harp.jpg",
      title: "Free Cinematic Peaceful Harp",
      description: "Start your journey with gentle, soothing melodies.",
      link: "https://example.com/calm-beginnings",
      audio: "/audio/cinematic.mp3",
    },
    {
      image: "/musicimages/lasthope.jpg",
      title: "Free Lost Hope",
      description: "Start your journey with gentle, soothing melodies.",
      link: "https://example.com/calm-beginnings",
      audio: "/audio/lasthope.mp3",
    },
    {
      image: "/musicimages/life.jpg",
      title: "Free Peace In My Life",
      description: "Start your journey with gentle, soothing melodies.",
      link: "https://example.com/calm-beginnings",
      audio: "/audio/life.mp3",
    },
    {
      image: "/musicimages/gentlness.jpg",
      title: "Free Gentleness",
      description: "Start your journey with gentle, soothing melodies.",
      link: "https://example.com/calm-beginnings",
      audio: "/audio/gentleness.mp3",
    },
  ];

  const intermediateData = [
    {
      image: "/musicimages/desert.jpg",
      title: "Free Desert Renaissance",
      description: "Find harmony with curated sounds for meditation.",
      link: "https://example.com/meditation-melodies",
      audio: "/audio/desert.mp3",
    },
    {
      image: "/musicimages/inspiration.jpg",
      title: "Free Moment of Inspiration",
      description: "Elevate your practice with these serene tracks.",
      link: "https://example.com/serenity-beats",
      audio: "/audio/inspriation.mp3",
    },
    {
      image: "/musicimages/freefromclouds.jpg",
      title: "Free From The Clouds",
      description: "Elevate your practice with these serene tracks.",
      link: "https://example.com/serenity-beats",
      audio: "/audio/freefromclouds.mp3",
    },
    {
      image: "/musicimages/relax.jpg",
      title: "Begin To Relax",
      description: "Elevate your practice with these serene tracks.",
      link: "https://example.com/serenity-beats",
      audio: "/audio/relax.mp3",
    },
    {
      image: "/musicimages/stress.jpg",
      title: "Stress Relief",
      description: "Elevate your practice with these serene tracks.",
      link: "https://example.com/serenity-beats",
      audio: "/audio/stress.mp3",
    },
    {
      image: "/musicimages/life.jpg",
      title: "Ever life",
      description: "Elevate your practice with these serene tracks.",
      link: "https://example.com/serenity-beats",
      audio: "/audio/life.mp3",
    },
  ];

  const advancedData = [
    {
      image: "/musicimages/dreams.jpg",
      title: "Land Of Forgotten Dreams",
      description: "Boost your productivity with these calming tracks.",
      link: "https://example.com/focus-beats",
      audio: "/audio/dreams.mp3",
    },
    {
      image: "/musicimages/winds.jpg",
      title: "Anemoi Winds",
      description: "Achieve deep relaxation with advanced soundscapes.",
      link: "https://example.com/deep-relaxation",
      audio: "/audio/winds.mp3",
    },
    {
      image: "/musicimages/heart.jpg",
      title: "Heartbeat Of Destiny",
      description: "Achieve deep relaxation with advanced soundscapes.",
      link: "https://example.com/deep-relaxation",
      audio: "/audio/heartbeat.mp3",
    },
    {
      image: "/musicimages/stars.jpg",
      title: "Motion Of Stars",
      description: "Achieve deep relaxation with advanced soundscapes.",
      link: "https://example.com/deep-relaxation",
      audio: "/audio/stars.mp3",
    },
    {
      image: "/musicimages/shadow.jpg",
      title: "Shadows On The Water",
      description: "Achieve deep relaxation with advanced soundscapes.",
      link: "https://example.com/deep-relaxation",
      audio: "/audio/shadow.mp3",
    },
    {
      image: "/musicimages/forest.jpg",
      title: "The Power Of Your Mind",
      description: "Achieve deep relaxation with advanced soundscapes.",
      link: "https://example.com/deep-relaxation",
      audio: "/audio/mind.mp3",
    },
  ];

  return (
    <div className="relative">
      {/* Background Beams */}
      <BackgroundBeamsWithCollisionDemo />

      {/* Overlay Controls */}
      <div className="mt-10 w-screen flex item-center justify-center">
        {isBlurred && currentAudioSrc && (
          <div className=" w-[300px] z-10 bg-black bg-opacity-60 text-white">
            <div className="bg-gray-800 p-10 rounded-xl shadow-lg text-center space-y-10">
              <h2 className="text-xl font-bold">Relaxing Music</h2>
              <div className="flex justify-between space-x-10">
                <button
                  onClick={isPlaying ? handlePause : () => handlePlayNow(currentAudioSrc)}
                  className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600"
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <button
                  onClick={handleClose}
                  className="bg-red-500 text-white rounded-full px-4 py-2 hover:bg-red-600"
                >
                  Close
                </button>
              </div>
              <input
                type="range"
                min={0}
                max={duration || 0}
                value={currentTime}
                onChange={(e) => handleSeek(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-sm text-gray-400">
                {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)
                  .toString()
                  .padStart(2, "0")}{" "}
                / {Math.floor(duration / 60)}:{Math.floor(duration % 60)
                  .toString()
                  .padStart(2, "0")}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Blur Background */}
      <div className={isBlurred ? "blur-md" : ""}>
        <div className="mt-10 space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-center mb-6">Beginner</h2>
            <ThreeDCardDemo data={beginnerData} onPlayNow={handlePlayNow} />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-center mb-6">Intermediate</h2>
            <ThreeDCardDemo data={intermediateData} onPlayNow={handlePlayNow} />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-center mb-6">Advanced</h2>
            <ThreeDCardDemo data={advancedData} onPlayNow={handlePlayNow} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Musicpage;
