import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";
import { FundingLogos } from "../components/funding-logos";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";

export default function RootLayout() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <FundingLogos />
      <Footer />
    </div>
  );
}
