import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./lib/Providers";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});
export const metadata = {
  title: "YodePay",
  description: "YodePay App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Toaster position="top-right" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}