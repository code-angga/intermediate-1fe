import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

const HeroSection = () => {
  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    // contoh hasil API
    const apiResult = {
      youtubeId: "oBqqI6NMeaM",
    };

    setVideoId(apiResult.youtubeId);
  }, []);

  // AUTO PLAY & MUTE SAAT PLAYER READY
  const onPlayerReady = (event) => {
    playerRef.current = event.target;
    event.target.mute();
    event.target.playVideo();
  };

  // TOGGLE SOUND
  const toggleMute = () => {
    if (!playerRef.current) return;

    if (isMuted) {
      playerRef.current.unMute();
    } else {
      playerRef.current.mute();
    }

    setIsMuted(!isMuted);
  };

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      loop: 1,
      playlist: videoId,
      rel: 0,
      mute: 1,
      enablejsapi: 1,
      origin: window.location.origin,
    },
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* HERO VIDEO */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        {/* VIDEO */}
        <div className="absolute inset-0 scale-125">
          {videoId && (
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={onPlayerReady}
              className="w-full h-full"
              iframeClassName="w-full h-full"
            />
          )}
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10"></div>

        {/* CONTENT */}
        <div className="relative z-20 px-6 md:px-20 flex flex-col justify-center h-full lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Duty After School
          </h1>

          <p className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut siswa sekolah menengah.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg">
              Mulai
            </button>

            <button className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg">
              Selengkapnya
            </button>

            <span className="border px-3 py-1 rounded-lg text-sm">18+</span>

            {/* SOUND */}
            <div className="flex">
              <button
                onClick={toggleMute}
                className="border p-2 ml-auto rounded-sm hover:bg-white/20 transition"
              >
                {isMuted ? "🔇" : "🔊"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
