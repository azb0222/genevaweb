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

import Logo from "../../images/headerlogo.svg";

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
      <Box>
        <Heading size="lg" fontWeight="bold" color="blue.600">
          Geneva
        </Heading>
        {/* <Image
          as={StaticImage}
          src="../images/geneva-logo-large.png"
          alt="geneva-logo-large.png"
        /> */}
      </Box>

      <Flex align="center" wrap="wrap" gap={8}>
        <Link
          as={GatsbyLink}
          to="/about"
          color="blue.600"
          // _hover={{ textDecor: 'none' }}
        >
          About
        </Link>
        <Link
          as={GatsbyLink}
          to="/about"
          color="blue.600"
          // _hover={{ textDecor: 'none' }}
        >
          Pricing 
        </Link>
        <Link
          as={GatsbyLink}
          to="/about"
          color="blue.600"
          // _hover={{ textDecor: 'none' }}
        >
          Careers
        </Link>
      </Flex>
      <GatsbyLink to="/contact">
        <Button size="md" rounded="md" bg="blue.600" color="white">
          Contact us
        </Button>
      </GatsbyLink>
    </Flex>
  );
};

export default Header;
