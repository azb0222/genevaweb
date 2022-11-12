import * as React from "react";
import { Box, Center, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import Section from "../layouts/Section";

interface LogoProps {
  src: string;
  alt: string;
}

const Logo = (props: LogoProps) => {
  if (!props.src) return null;
  console.log(props.src);

  return <StaticImage src={props.src} alt={props.alt} />;
};

// TODO: remove optionality
interface BackedByProps {
  logos?: { src: string; alt: string }[];
}

const BackedBy = ({ logos }: BackedByProps) => {
  return (
    <Section>
      <Box>
          <Center color="#004ca3" fontSize="xl" pb={4}>
            Backed and consulted by industry-leading organizations
          </Center>
        <Flex gap={40} align="center" justify="space-between" w="100%">
          {/* 

          TODD: The logos are hard coded, because this is an example

        {logos.map(
          (logo) =>
            logo && (
              <Box>
                hii
                <Logo {...logo} />{" "}
              </Box>
            )
        )} */}
          <StaticImage
            width={150}
            src="../../images/a16z-logo.png"
            alt="a16z-logo"
          />
          <StaticImage
            width={150}
            src="../../images/seq-logo.png"
            alt="sequoia-logo"
          />
          <StaticImage
            width={150}
            src="../../images/yc-logo.png"
            alt="yc-logo"
          />
        </Flex>
      </Box>
    </Section>
  );
};

export default BackedBy;
