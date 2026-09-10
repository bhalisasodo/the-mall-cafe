import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import FindUs from "@/components/FindUs";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Menu />
      </main>
      <FindUs />
      <MobileStickyBar />
    </>
  );
}
