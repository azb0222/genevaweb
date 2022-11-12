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

interface Props {
  title: string;
  subtitle: string;
  image: string;
  ctaLink: string;
  ctaText: string;
}

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}: Props) {
  return (
    <Section>
      <Flex align="center" gap={8} direction="row" {...rest}>
        <Box w="50%">
          <Heading as="h1" size="2xl" fontWeight="bold" mb={6} color="#004ca3">
            {title}
          </Heading>
          <Heading
            as="h2"
            size="md"
            fontWeight="normal"
            lineHeight={1.5}
            mb={4}
            color="#004ca3"
          >
            {subtitle}
          </Heading>

          <Link to={ctaLink}>
            <Button
              size="md"
              rounded="md"
              bg="#004ca3"
              _hover={{ bg: "blue.900" }}
              color="white"
            >
              {ctaText}
            </Button>
          </Link>
        </Box>
        <Box w="50%">
          <Image src={image} rounded="1rem" shadow="xl" mr={5} />
        </Box>
      </Flex>
    </Section>
  );
}
