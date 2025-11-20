"use client"

import React, { useState } from 'react';
import { Play } from 'lucide-react';

const TalimVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            See TALIM in Action
          </h2>
          <p className="text-gray-600 text-lg">
            Watch how schools, teachers, and students use TALIM to simplify everyday tasks.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <>
              {/* Thumbnail */}
              <div className="relative w-full aspect-video bg-gray-900">
                {/* Overlay with play button */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  {/* Text overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-white rounded-2xl px-8 py-4 shadow-lg">
                    <p className="text-black font-semibold text-lg md:text-xl flex items-center gap-2">
                      Because Every Great School
                      Deserves Great Tools.
                    </p>
                  </div>

                  {/* Play button */}
                  <button
                    onClick={handlePlayClick}
                    className="absolute bottom-50 left-1/2 -translate-x-1/2 bg-white rounded-full p-6 hover:scale-110 transition-transform shadow-xl"
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8 text-black fill-black" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* Video player */
            <div className="w-full aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/rmejrs_kzT8?autoplay=1&rel=0"
                title="TALIM Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TalimVideoSection;