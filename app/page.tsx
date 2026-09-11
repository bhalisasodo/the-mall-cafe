import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GatsbyCallout from "@/components/GatsbyCallout";
import CategoryTiles from "@/components/CategoryTiles";
import Menu from "@/components/Menu";
import About from "@/components/About";
import FindUs from "@/components/FindUs";
import MobileStickyBar from "@/components/MobileStickyBar";
import CartDrawer from "@/components/CartDrawer";
import FloatingCartButton from "@/components/FloatingCartButton";
import Toast from "@/components/Toast";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <GatsbyCallout />
        <CategoryTiles />
        <Menu />
        <About />
      </main>
      <FindUs />
      <MobileStickyBar />
      <FloatingCartButton />
      <CartDrawer />
      <Toast />
    </>
  );
}
