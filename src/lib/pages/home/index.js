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
      <SEO
        title={"Welcome"}
        desc="We are an electrical instrumentation and automation company with extensive experience in Engineering, Procurement, Construction, Project Management and Facility Maintenance."
        path="/"
      />
      <NewHero />
      <AboutSection />
      {/* <div id="services" /> */}
      <OurServicesAreas />
      <Projects />
      <OurApproach />
      <CTA />
    </>
  );
};

export default Home;
