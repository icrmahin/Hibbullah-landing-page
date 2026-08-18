import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Showcase } from "./sections/Showcase";
import { Features } from "./sections/Features";
import { DownloadSection } from "./sections/Download";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Features />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
