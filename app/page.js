"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPage() {
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date === "2025-05-20") {
      router.push("/love");
    } else {
      setError(true);
      setTimeout(() => setError(false), 500); // هزّة الخطأ
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fff0f3]">
      {/* خلفية القلوب المتحركة الخفيفة */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200/50"
            initial={{ y: "110vh", x: Math.random() * 100 + "vw" }}
            animate={{ y: "-10vh" }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          x: error ? [0, -10, 10, -10, 10, 0] : 0, // حركة الاهتزاز عند الخطأ
        }}
        className="relative z-10 w-[90%] max-w-md"
      >
        {/* الكارت الزجاجي الفاخر */}
        <div className="bg-white/70 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(255,182,193,0.4)] border border-white/50 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block bg-pink-100 p-4 rounded-full mb-6"
          >
            <span className="text-4xl">🔐</span>
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
            بوابة الحب
          </h1>
          <p className="text-gray-500 mb-8 text-sm md:text-base">
            يا إيه، الموقع ده متقفل بكلمة سر.. <br />
            تاريخ اليوم اللي نورتي فيه الدنيا؟
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                maxLength="10"
                className="w-full bg-white/50 border-2 border-pink-100 p-4 rounded-2xl text-center text-2xl tracking-[0.2em] font-black text-pink-500 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all placeholder:text-pink-200"
                placeholder="??-??-????"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {/* لمسة سحرية: قلب يظهر لما تبدأ تكتب */}
              <AnimatePresence>
                {date.length > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -right-2 -top-2 text-2xl"
                  >
                    💖
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold py-4 rounded-2xl shadow-[0_10px_20px_rgba(244,63,94,0.3)] hover:shadow-[0_15px_30px_rgba(244,63,94,0.4)] transition-all flex items-center justify-center gap-2"
            >
              افتح قلبي ✨
            </motion.button>
          </form>

          <p className="mt-8 text-[10px] text-pink-300 uppercase tracking-widest font-bold">
            Specially for Eha
          </p>
        </div>

        {/* تأثير الظل السفلي */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-pink-200/30 blur-2xl rounded-full" />
      </motion.div>
    </div>
  );
}
