import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Harsh Sojitra",
  description:
    "Welcome to my portfolio! I am a full-stack developer with a passion for building scalable and user-friendly web applications. Explore my projects and learn more about my skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
