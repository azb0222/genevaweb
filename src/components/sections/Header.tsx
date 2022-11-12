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

const LinkWrap = ({ to = "/", children }: Props) => {
  return (
    <Link
      as={GatsbyLink}
      to={to}
      color="#004ca3"
      _hover={{ textDecor: "none", color: "blue.900" }}
    >
      {children}
    </Link>
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
        <LinkWrap to="/about">About</LinkWrap>
        <LinkWrap to="/pricing">Pricing</LinkWrap>
        <LinkWrap to="/careers">Careers</LinkWrap>
      </Flex>
      <Link href="mailto:meelvidushi1@gmail.com">
        <Button
          size="md"
          rounded="md"
          bg="#004ca3"
          color="white"
          _hover={{ textDecor: "none", bg: "blue.900" }}
        >
          Contact us
        </Button>
      </Link>
    </Flex>
  );
};

export default Header;
