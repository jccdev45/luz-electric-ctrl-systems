import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Services from "../components/services";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-grow">
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
