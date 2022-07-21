import Dreamer from "../components/templates/Dreamer";
import Hero from "../components/templates/Hero";
import MainHeader from "../components/templates/MainHeader";

export default function LandingPage() {
  return (
    <div className="landing-page bg-primary-light">
      <MainHeader />
      <Hero />
      <Dreamer />
    </div>
  );
}
