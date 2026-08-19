import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
// අලුත් Component එක Import කරගන්න
import CursorBee from "@/components/CursorBee"; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, 
  userScalable: false, 
};

export const metadata: Metadata = {
  title: "ApianStack",
  description: "Building entire stacks, layer by layer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased font-poppins bg-[#050505] text-white cursor-default">
        {/* පියාඹන මී මැස්සා මුළු වෙබ් අඩවියටම එකතු කිරීම */}
        <CursorBee />
        
        {children}
      </body>
    </html>
  );
}