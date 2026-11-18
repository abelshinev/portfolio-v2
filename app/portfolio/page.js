import BusinessNav from "../../components/portfolio/BusinessNav";
import HeroB from "../../components/portfolio/HeroB";
import SocialProof from "../../components/portfolio/SocialProof";
import Services from "../../components/portfolio/Services";
import SelectedWork from "../../components/portfolio/SelectedWork";
import Process from "../../components/business/Process";
import Expertise from "../../components/business/Expertise";
import AboutB from "../../components/business/AboutB";
import ContactB from "../../components/business/ContactB";

export default function BusinessPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white font-sans">
      <BusinessNav />

      <section id="hero" className="w-full">
        <HeroB />
      </section>

      <section id="proof" className="w-full">
        <SocialProof />
      </section>

      <section id="services" className="w-full">
        <Services />
      </section>

      <section id="work" className="w-full">
        <SelectedWork />
      </section>

      <section id="process" className="w-full">
        <Process />
      </section>

      <section id="expertise" className="w-full">
        <Expertise />
      </section>

      <section id="about" className="w-full">
        <AboutB />
      </section>

      <section id="contact" className="w-full">
        <ContactB />
      </section>
    </main>
  );
}
