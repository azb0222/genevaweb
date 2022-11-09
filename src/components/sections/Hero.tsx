import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import Section from "../layouts/Section";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Section>
      <Flex align="center" gap={8} direction="row" {...rest}>
        <Box w="50%">
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            mb={6}
          >
            {title}
          </Heading>
          <Heading
            as="h2"
            size="md"
            fontWeight="normal"
            lineHeight={1.5}
            mb={4}
          >
            {subtitle}
          </Heading>
          
          <Link to={ctaLink}>
            <Button size="md" rounded="md" bg="green.400" color="white">
              {ctaText}
            </Button>
          </Link>

        </Box>
        <Box w="50%">
          <Image src={image} rounded="1rem" shadow="xl" mr={5}/>
        </Box>
      </Flex>
    </Section>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

Hero.defaultProps = {
  title: "React landing page with Chakra UI",
  subtitle:
    "This is the subheader section where you describe the basic benefits of your product",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup",
};
