import { Button, Center, SimpleGrid, Spinner, Stack } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";
import SEO from "../../components/SEO";
import PageTitleHero from "../../layout/PageTitleHero";
import WrapContent from "../../layout/WrapContent";
import { usePCtx } from "./ProjectContext";
import ProjectDetails from "./ProjectDetails";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function index() {
  const { error, loading, projects, dispatchEvent } = usePCtx();
  return (
    <>
      <SEO
        title={"Our Projects"}
        desc="With a quick review of our project profiles and client testimonials below, your confidence in our performance will be reinforced..."
        path="/projects"
      />
      <PageTitleHero
        tagline={
          "With a quick review of our project profiles and client testimonials below, your confidence in our performance will be reinforced, our results will be validated and enough proof will be provided to support your decision to trust us with your projects."
        }
        title="Our Projects"
      />
      <WrapContent>
        <SimpleGrid spacing="10" columns={[1]} py="40px">
          {!loading &&
            !error &&
            projects &&
            projects.map((p, index) => (
              <ProjectDetails
                key={index}
                desc={p.caption}
                title={p.title}
                image={p.path}
              />
            ))}
          {loading && !error && (
            <>
              <Stack spacing="8">
                <Skeleton h="200px" />
                <SkeletonText noOfLines={5} />
              </Stack>
              <Stack spacing="8">
                <Skeleton h="200px" />
                <SkeletonText noOfLines={5} />
              </Stack>
            </>
          )}
          {!loading && error && (
            <Alert
              status="error"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                An error occurred!
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                This may be a problem with the network.
                <br />
                <br />
                <Button
                  onClick={() => dispatchEvent("FETCH_PROJECTS", null)}
                  colorScheme={"blue"}
                >
                  Pleast Retry
                </Button>
              </AlertDescription>
            </Alert>
          )}
        </SimpleGrid>
      </WrapContent>
    </>
  );
}

export default index;
