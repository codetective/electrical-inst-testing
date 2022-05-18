import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SEO from "../../components/SEO";
import PageTitleHero from "../../layout/PageTitleHero";
import WrapContent from "../../layout/WrapContent";
import ProjectDetails from "./ProjectDetails";

const projects = [
  {
    title: "Project 1 title lorem",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam z   nonumy eirmod tempor invidunt ut labore",
    image: "/images/pj1.jpg",
    location: "Oshodip, Lagos",
    tag: "Design and Development",
  },
  {
    title: "Project 2 title lorem",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam z   nonumy eirmod tempor invidunt ut labore",
    image: "/images/pj2.jpg",
    location: "Oshodip, Lagos",
    tag: "Design and Development",
  },
  {
    title: "Project 3 title lorem",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam z   nonumy eirmod tempor invidunt ut labore",
    image: "/images/pj3.jpg",
    location: "Oshodip, Lagos",
    tag: "Design and Development",
  },
  {
    title: "Project 4 title lorem",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam z   nonumy eirmod tempor invidunt ut labore",
    image: "/images/pj4.jpg",
    location: "Oshodip, Lagos",
    tag: "Design and Development",
  },
];

function index() {
  return (
    <>
      <SEO title={"projects"} desc="projects page" path="/projects" />
      <PageTitleHero
        tagline={
          "With a quick review of our project profiles and client testimonials below, hopefully your confidence in our performance will be reinforced, our results will be validated and enough proof will be provided to support your decision to trust us with your projects."
        }
        title="Our Projects"
      />
      <WrapContent>
        <SimpleGrid spacing="10" columns={[1, 1, 2]} py="40px">
          {projects.map((p, index) => (
            <ProjectDetails
              key={index}
              title={p.title}
              desc={p.desc}
              tag={p.tag}
              location={p.location}
              image={p.image}
              idx={index}
            />
          ))}
        </SimpleGrid>
      </WrapContent>
    </>
  );
}

export default index;
