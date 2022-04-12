import { Box, Button, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import WrapContent from "../../layout/WrapContent";
import SectionHeading from "../../components/SectionHeading";
import SmallHorizontalBar from "../../components/SmallHorizontalBar";
import Link from "next/link";

export default function AboutSection() {
  return (
    <WrapContent>
      <SimpleGrid columns={[1, 1, 2]} py="60px" spacing="20">
        <Stack spacing="5">
          <Box>
            <SmallHorizontalBar mb="5" />
            <SectionHeading text="About Us" />
          </Box>
          <Text fontWeight="semibold">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking.
          </Text>
          <Text fontSize={"15px"} color="gray.600">
            Osed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci sed quia non numquam qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
          </Text>
          <Link href="/about_us">
            <a>
              <Button
                bg={"brand.300"}
                rounded="full"
                color="white"
                px={"40px"}
                fontWeight="bold"
                _hover={{
                  bg: "brand.400",
                }}
              >
                Learn more about us
              </Button>
            </a>
          </Link>
        </Stack>

        <Image
          alt={"feature image"}
          w="full"
          h="full"
          src={"/images/pj1.jpg"}
          objectFit={"cover"}
        />
      </SimpleGrid>
    </WrapContent>
  );
}
