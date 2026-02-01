// app/love/page.js
"use client";
import HeartsAnimation from "@/components/HeartsAnimation";
import MusicPlayer from "@/components/MusicPlayer";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation"; // تأكد من وجود هذا السطر

export default function LovePage() {
  const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg",
    "/images/9.jpeg",
    "/images/10.jpeg",
    "/images/11.jpeg",
    "/images/12.jpeg",
    "/images/13.jpeg",
    "/images/14.jpeg",
    "/images/15.jpeg",
    "/images/16.jpeg",
  ];
  const part1 = `يا ايه.. بجد مش عارف أبدأ منين ولا منين.. \n النهاردة يوم مش عادي في حياتي، النهاردة اتولد فيه أجمل وأحن إنسانة شفتها عيني. \n`;
  const part2 =
    part1 +
    `عارفة؟ أنا ساعات بقعد أسرح وأقول هو أنا عملت ايه حلو في حياتي عشان ربنا يرزقني بيكي؟ \n إنتي مش بس حبيبتي، إنتي بجد رزق وفرحة جاتلي في وقت كنت محتاج فيه لضحكة صافية زيك. \n`;
  const part3 =
    part2 +
    `معاكي عرفت يعني ايه حد يهتم بيا من غير مقابل، يعني ايه حد يفهمني من نظرة عيني. \n إنتي السند اللي وقت ما بقع بلقاه شادد إيدي، وإنتي الراحة اللي بهرب ليها من تعب اليوم كله. \n`;
  const part4 =
    part3 +
    `حبك ده غير فيا حاجات كتير أوي، خلاني أشوف الدنيا بشكل أحلى بكتير. \n بقيت بستنى الصبح عشان أكلمك، وبستنى الليل عشان أسرح في كلامنا ونرسم أحلامنا سوا. \n`;
  const part5 =
    part4 +
    `بجد يا ايه، إنتي الروح اللي من غيرها حياتي دي متبقاش حياة، مجرد أيام بتعدي وخلاص. \n معاكي إنتي بس، الأيام بقى ليها طعم، والمستقبل بقى له معنى، وبقيت خايف على نفسي عشانك. \n`;
  const part6 =
    part5 +
    `نفسي بجد أقدر أسعدك ربع السعادة اللي بتديهالي، نفسي أكون لك كل حاجة بتحلمي بيها. \n بوعدك قدام ربنا وقدام نفسي، إني هفضل جنبك في المرة قبل الحلوة، وهشيلك في عيني طول العمر. \n`;
  const part7 =
    part6 +
    `مفيش حاجة في الدنيا دي تستاهل زعلك، ولا حاجة تقدر توصف غلاوتك عندي يا روح قلبي. \n إنتي بنتي وصاحبتي وأمي وكل دنيتي، إنتي اللي خلتيني أحس إني ملكت الدنيا وما فيها. \n`;
  const part8 =
    part7 +
    `كل سنة وإنتي منورة حياتي، وكل سنة وإنتي أجمل "ايه" في المجرة دي كلها. \n يارب السنين الجاية كلها نكون سوا، وبنحقق كل اللي حلمنا بيه وبنبني بيتنا اللي دايماً بنحكي عنه. \n`;
  const part9 =
    part8 +
    `إنتي النور اللي في عيني، والنبض اللي في قلبي، والضحكة اللي على وشي دايماً. \n بحبك أوي أوي يا ايه، أكتر بكتير من اللي أي كلام ممكن يوصفه أو أي أغنية تقوله. \n ربنا يخليكي ليا وميحرمنيش من وجودك ولا من ضحكتك اللي بترد فيا الروح.. ❤️`;
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    // تأخير بسيط قبل ظهور المحتوى الرئيسي لإعطاء HeartsAnimation فرصة للبدء
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); // يظهر بعد ثانية واحدة

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div className="relative min-h-screen overflow-hidden flex items-center justify-center p-4">
        <MusicPlayer />
        <HeartsAnimation />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="z-10 w-full max-w-4xl my-20"
        >
          <motion.h1
            className="text-center text-white text-4xl md:text-6xl font-bold mb-10 drop-shadow-2xl"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
          >
            يا روح قلبي يا ايه ❤️
          </motion.h1>

          <div
            className="bg-white/10 backdrop-blur-2xl p-8 md:p-16 rounded-[50px] border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.2)] text-right"
            dir="rtl"
          >
            <div className="text-xl md:text-3xl leading-[2] text-white font-light text-justify">
              <TypeAnimation
                cursor={true}
                style={{ whiteSpace: "pre-line", display: "block" }}
                sequence={[
                  part1,
                  1500,
                  part2,
                  1500,
                  part3,
                  1500,
                  part4,
                  1500,
                  part5,
                  1500,
                  part6,
                  1500,
                  part7,
                  1500,
                  part8,
                  1500,
                  part9,
                  2000,
                  () => setIsFinished(true),
                ]}
                speed={75}
                repeat={0}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 0.2, rotate: 15 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-10 z-0 opacity-20 hidden md:block"
        >
          <img
            src="/images/10.jpeg"
            alt="Eha"
            className="w-32 h-32 object-contain"
          />
        </motion.div>
      </div>
      <div className="min-h-screen bg-transparent p-4 pb-32 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            ذكرياتنا الحلوة 💕
          </h2>
          <p className="text-pink-100 mt-4 italic text-lg">
            كل صورة وراها حكاية حب.. وكله معاكي إنتي يا ايه
          </p>
          <p className="text-pink-100 text-sm mt-2 opacity-80">
            اضغطي على الصور يا ايه ✨
          </p>
        </motion.div>

        {/* تقليص عدد الأعمدة في الجوال ليكون مريح للعين */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 max-w-5xl mx-auto">
          {images.map((img, index) => (
            <ImageCard key={index} src={img} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
function ImageCard({ src, index }) {
  const [isTapped, setIsTapped] = useState(false);
  const controls = useAnimation();

  const handleTap = async () => {
    setIsTapped(true);
    // حركة "نبض" سريعة عند الضغط
    await controls.start({ scale: 0.95 });
    await controls.start({ scale: 1.05 });
    await controls.start({ scale: 1 });

    // إخفاء تأثير القلب بعد ثانية
    setTimeout(() => setIsTapped(false), 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
      onTap={handleTap} // ميزة في framer-motion مخصصة للمس
    >
      <motion.div
        animate={controls}
        className="relative overflow-hidden rounded-3xl border-[6px] border-white shadow-xl bg-white transition-all"
        style={{ rotate: index % 2 === 0 ? "1.5deg" : "-1.5deg" }}
      >
        <img src={src} alt="Memory" className="w-full h-auto object-cover" />

        {/* تأثير القلوب المنبثقة عند الضغط */}
        {isTapped && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 2, 0], opacity: [1, 1, 0], y: -50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <FaHandHoldingHeart className="text-pink-500 text-6xl shadow-2xl" />
              <FaHandHoldingHeart className="text-white text-3xl absolute top-0 left-0 -translate-x-4 -translate-y-4" />
            </motion.div>
          </div>
        )}

        {/* طبقة لونية خفيفة تظهر وقت الضغط */}
        <motion.div
          animate={{ opacity: isTapped ? 0.3 : 0 }}
          className="absolute inset-0 bg-pink-400 pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}
