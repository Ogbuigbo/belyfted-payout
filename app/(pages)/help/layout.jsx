import { Montserrat } from "next/font/google";
import "../../globals.css";
// import { Toaster } from "react-hot-toast";
import { Providers } from "../../lib/Providers";
import Footer from "../../_partials/Footer";
import Header from "../../_partials/Header";
import HelpHero from "./HelpHero";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});
export const metadata = {
  title: "Belyfted Payout",
  description: "Belyfted Payout App",
};

export default function HelpLayout({ children }) {
  return (
    <div className={montserrat.className}>
      <div className="relative">
        <Header />
        <HelpHero />
      </div>
      {/* <Toaster position="top-right" /> */}
      <Providers>{children}</Providers>
      <Footer />
    </div>
  );
}
