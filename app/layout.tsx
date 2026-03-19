import type { Metadata, Viewport } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brian Bundi | Student Engineer & Builder",
  description: "Computer Science student and Full-Stack Developer",
};

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${firaCode.variable} font-sans antialiased bg-[#0B1120] text-gray-100 flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
