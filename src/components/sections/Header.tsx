import React, { ReactNode } from "react";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";
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
    <Flex
      as="nav"
      // align="start"
      justify="space-around"
      // wrap="wrap"
      w="100%"
      mb={8}
      p={8}
    >
      <Box>
        {/* <Logo /> */}
        <StaticImage
          src="../images/geneva-logo-large.png"
          alt="geneva-logo-large.png"
        />
      </Box>

      <Box>
        <GatsbyLink to="/about">How it works</GatsbyLink>
        <GatsbyLink to="/about">About</GatsbyLink>
      </Box>
      <GatsbyLink to="/contact">
        <Button size="md" rounded="md" bg="green.400" color="white">
          Contact
        </Button>
      </GatsbyLink>
    </Flex>
  );
};

export default Header;
