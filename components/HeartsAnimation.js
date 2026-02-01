"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeartsAnimation() {
  const [renderHearts, setRenderHearts] = useState([]);

  useEffect(() => {
    // توليد بيانات القلوب مرة واحدة عند تحميل الصفحة لضمان العشوائية
    const hearts = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "%", // موقع عشوائي بالعرض
      size: Math.random() * (30 - 15) + 15 + "px", // أحجام مختلفة
      duration: Math.random() * (6 - 4) + 4, // سرعات مختلفة
      delay: Math.random() * 5,
      sway: Math.random() * 50 - 25, // درجة التمايل يميناً ويساراً
    }));
    setRenderHearts(hearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {renderHearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-red-500/60" // قلوب شفافة قليلاً لراحة العين
          style={{ 
            left: heart.left, 
            fontSize: heart.size,
            filter: "drop-shadow(0 0 5px rgba(255,182,193,0.5))" // توهج بسيط
          }}
          initial={{ y: "110vh", opacity: 0, rotate: 0 }}
          animate={{ 
            y: "-10vh", 
            opacity: [0, 1, 1, 0], // تظهر ثم تثبت ثم تختفي في النهاية
            x: [0, heart.sway, 0, -heart.sway, 0], // حركة تمايل يمين ويسار
            rotate: [0, 20, -20, 0] // دوران بسيط
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}