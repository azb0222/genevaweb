import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Link,
  Image,
  Heading,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Logo from "../images/headerlogo.svg";

// TODO: temporarily removed type safety
interface Props {
  children?: ReactNode;
  to: string;
}

const LinkWrapper = ({ children, to = "/", ...rest }: Props) => {
  return (
    <Box mr={8} display="block" {...rest}>
      <Link as={GatsbyLink} to={to}>
        {children}
      </Link>
    </Box>
  );
};

const Header = () => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex align="center" justify="space-between" wrap="wrap" w="100%" gap={4}>
      {/* <Box> */}
      <StaticImage
        width={150}
        layout="constrained"
        src="../../images/geneva-logo-large.png"
        alt="geneva-logo.png"
      />
      {/* <Heading size="lg" fontWeight="bold" color="#004ca3">
          Geneva
        </Heading> */}
      {/* </Box> */}

      <Flex align="center" wrap="wrap" gap={8}>
        <Link
          as={GatsbyLink}
          to="/about"
          color="#004ca3"
          _hover={{ textDecor: "none", color: "blue.900" }}
        >
          About
        </Link>
        <Link
          as={GatsbyLink}
          to="/about"
          color="#004ca3"
          _hover={{ textDecor: "none", color: "blue.900" }}
        >
          Pricing
        </Link>
        <Link
          as={GatsbyLink}
          to="/about"
          color="#004ca3"
          _hover={{ textDecor: "none", color: "blue.900" }}
        >
          Careers
        </Link>
      </Flex>
      <GatsbyLink to="/contact">
        <Button
          size="md"
          rounded="md"
          bg="#004ca3"
          color="white"
          _hover={{ bg: "blue.900" }}
        >
          Contact us
        </Button>
      </GatsbyLink>
    </Flex>
  );
};

export default Header;
