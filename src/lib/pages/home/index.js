import OurServicesAreas from "./OurServicesAreas";
import SEO from "../../components/SEO";
import AboutSection from "./AboutSection";
import NewHero from "./NewHero";
import Projects from "./Projects";
import OurApproach from "./OurApproach";
import CTA from "../../components/CTA2";

const Home = () => {
  return (
    <>
      <SEO title={"Welcome"} desc="landing page for site" path="/" />
      <NewHero />
      <AboutSection />
      <OurServicesAreas />
      <Projects />
      <OurApproach />
      <CTA />
    </>
  );
};

export default Home;
