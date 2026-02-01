"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa"; 

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const startFromSecond = 65; 

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = startFromSecond;
        // محاولة التشغيل
        const promise = audioRef.current.play();
        
        if (promise !== undefined) {
          promise
            .then(() => setIsPlaying(true))
            .catch(() => {
              // لو المتصفح لسه معترض، هنستنى أول لمسة للشاشة عشان يشتغل
              console.log("Autoplay blocked, waiting for interaction");
              const enableAudio = () => {
                audioRef.current.play();
                setIsPlaying(true);
                window.removeEventListener("click", enableAudio);
                window.removeEventListener("touchstart", enableAudio);
              };
              window.addEventListener("click", enableAudio);
              window.addEventListener("touchstart", enableAudio);
            });
        }
      }
    };

    playAudio();
  }, []);

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[320px] md:max-w-md">
      {/* تأكد من حذف كلمة play الموجودة داخل التاج وضع autoPlay و playsInline */}
      <audio 
        ref={audioRef} 
        src="/baba.mp3" 
        loop 
        autoPlay 
        playsInline
      />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between bg-white/10 backdrop-blur-2xl border border-white/30 p-2 md:p-3 rounded-full shadow-2xl"
      >
        <div className="flex items-center gap-3 ml-2">
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-pink-500 to-rose-400 rounded-full flex items-center justify-center shadow-lg"
          >
            <span className="text-lg">💿</span>
          </motion.div>
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs text-white/70 font-light uppercase tracking-tighter">
              Now Playing
            </span>
            <span className="text-xs md:text-sm text-white font-bold truncate w-24 md:w-32">
              أغنية بابا ❤️
            </span>
          </div>
        </div>

        <button
          onClick={togglePlay}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-pink-600 rounded-full shadow-xl active:scale-90 transition-all hover:bg-pink-50 overflow-hidden"
        >
          {isPlaying ? (
            <FaPauseCircle className="text-3xl md:text-4xl" />
          ) : (
            <FaPlayCircle className="text-3xl md:text-4xl" />
          )}
        </button>
      </motion.div>
    </div>
  );
}