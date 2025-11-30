import { ReactNode } from "react";
import "./globals.css";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className="bg-[#0c0c11]">
      <body className="min-h-screen bg-[#0c0c11] text-gray-300">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
