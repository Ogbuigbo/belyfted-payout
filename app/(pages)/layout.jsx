import { Montserrat } from "next/font/google";
import "../globals.css";
// import { Toaster } from "react-hot-toast";
import { Providers } from "../lib/Providers";
import Footer from "../_partials/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can customize weights if needed
});
export const metadata = {
  title: "Belyfted Payout",
  description: "Belyfted Payout App",
};

export default function PagesLayout({ children }) {
  return (
    <div className={montserrat.className}>
      {/* <Toaster position="top-right" /> */}
      <Providers>{children}</Providers>
      <Footer />
    </div>
  );
}
