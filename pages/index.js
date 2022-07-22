import Dreamer from "../components/templates/Dreamer";
import Hero from "../components/templates/Hero";
import Quote from "../components/templates/Quote";
import MainHeader from "../components/templates/MainHeader";
import Footer from "../components/templates/Footer";

export default function LandingPage() {
  return (
    <div className="landing-page bg-primary-light">
      <MainHeader />
      <Hero />
      <Dreamer />
      <Quote />
      <Footer />
    </div>
  );
}
