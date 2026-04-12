"use client";

import { useState } from "react";

const ChatBotPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-6xl h-[700px] relative rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
        <iframe
          src="https://deekshitha11-random-123.hf.space"
          width="100%"
          height="100%"
          frameBorder="0"
          onLoad={() => setIsLoaded(true)}
          className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
         style={{
            position: "absolute",
            top: "-80px", // reduced cut (better fit)
            height: "calc(100% + 80px)",
            width: "100%",
            border: "none",
          }}
        />
        
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="text-gray-500">Loading chatbot...</div>
          </div>
        )}
        
        {/* Optional: Add your own header to replace the cropped one */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 z-10">
          <p className="text-sm opacity-90">AI Assistant</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBotPage;