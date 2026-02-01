import "./globals.css";
import { Dancing_Script, Cairo } from "next/font/google";

const dancing_script = Dancing_Script({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
});

export const metadata = {
  title: "هدية لأغلى إنسانة - ايه ❤️",
  description: "موقع مليان حب ومشاعر صادقة",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} ${dancing_script.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
