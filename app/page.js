// app/page.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
export default function LoginPage() {
  const [date, setDate] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date === "02-02") {
      router.push("/love");
    } else {
      alert("مممم.. مش ده التاريخ الصح! حاولي تاني يا روحي 😅");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-50">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="login-card p-8 rounded-3xl shadow-2xl bg-white text-center"
      >
        <h1 className="text-3xl mb-4 text-pink-600 font-bold">💝 أهلاً يا إيه</h1>
        <p className="mb-6 text-gray-500">أدخلي تاريخ مميز جداً عشان تدخلي (DD-MM)</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="border-2 border-pink-200 p-3 rounded-full text-center outline-none focus:border-pink-500 text-pink-600 font-bold"
            placeholder="02-02"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
            دخول لقلبي ✨
          </button>
        </form>
      </motion.div>
    </div>
  );
}