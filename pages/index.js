import Hero from "../components/templates/Hero";
import MainHeader from "../components/templates/MainHeader";

export default function LandingPage() {
  return (
    <div className="landing-page bg-primary-light">
      <MainHeader />
      <Hero />
    </div>
  );
}
