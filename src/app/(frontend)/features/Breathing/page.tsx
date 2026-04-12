"use client";

import { useState } from "react";

const ChatBotPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-6xl h-[700px] relative rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700"> 
        {/* IFRAME */}
        <iframe
          src="https://serene-breath-guide.vercel.app/"
          width="100%"
          height="100%"
          frameBorder="0"
          onLoad={() => setIsLoaded(true)}
          className={`${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          style={{
            position: "absolute",
            top: "-100px",         // hides the top header
            height: "calc(100% + 120px)",
            border: "none",
          }}
        />

        {/* LOADING SCREEN */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-20">
            <div className="text-gray-500">Loading...</div>
          </div>
        )}

        {/* CUSTOM HEADER */}
       
      </div>
    </div>
  );
};

export default ChatBotPage;
