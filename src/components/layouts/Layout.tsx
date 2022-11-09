import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Flex } from "@chakra-ui/react";
import Header from "../sections/Header";

const Layout = ({ children }) => {
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
        <Header />
        {children}
      </Flex>
  );
};

export default Layout;
