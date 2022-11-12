import React, { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Box, Center, Flex } from "@chakra-ui/react";
import Header from "../sections/Header";

// TODO: temp solution to rm ts err
interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Flex direction="column" align="center">
      <Box ml="auto" w="100%" mr="auto" maxW="1280px" pl={8} pr={8} pt={8}>
        <Header />
      </Box>
      {children}
    </Flex>
  );
};

export default Layout;
