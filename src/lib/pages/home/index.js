import Hero from "./hero";
import TestimonyMarquee from "./TestimonyMarquee";
import DisciplineAndProjectCycleSection from "./DisciplineAndProjectCycleSection";
import FeaturesAndNumbers from "./FeaturesAndNumbers";
import SafetyInfoBanner from "./SafetyInfoBanner";

const Home = () => {
  return (
    <>
      <Hero />
      <DisciplineAndProjectCycleSection />
      <FeaturesAndNumbers />
      <SafetyInfoBanner />
      <TestimonyMarquee />
    </>
  );
};

export default Home;
