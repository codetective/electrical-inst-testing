import React from "react";
import PageTitleHero from "../../layout/PageTitleHero";
import AboutIntro from "./AboutIntro";

const pageDetails = {
  title: "About Us",
  tagline:
    "We are the leading energy technology company. We design, manufacture and service transformative technologies to help take energy forward.",
};

export default function About() {
  return (
    <>
      <PageTitleHero tagline={pageDetails.tagline} title={pageDetails.title} />
      <AboutIntro />
    </>
  );
}
