import React from "react";
import PageTitleHero from "../../layout/PageTitleHero";
import AboutIntro from "./AboutIntro";
import Details from "./Details";
import Leadership from "./Leadership";

import SEO from "../../components/SEO";
import CTA from "../../components/CTA";

const pageDetails = {
  title: "About Us",
  tagline:
    "We are the leading energy technology company. We design, manufacture and service transformative technologies to help take energy forward.",
};

export default function About() {
  return (
    <>
      <SEO title={"About"} desc="about page for site" path="/about_us" />

      <PageTitleHero tagline={pageDetails.tagline} title={pageDetails.title} />
      <AboutIntro />
      <Details />
      <Leadership />
      <CTA />
    </>
  );
}
