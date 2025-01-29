import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ImageGallery } from "@/components/image-gallery";
import { Mission } from "@/components/mission";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <main className="grow space-y-4 pt-16 md:pt-20">
        <Hero
          src="/img/banners/home-banner-desktop-2.jpg"
          alt="Luz Electric and Control Systems Inc"
        />
        <Mission />
        <ImageGallery />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
