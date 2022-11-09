import React from "react";
import { Box, Center } from "@chakra-ui/react";

const Section = ({ children, className = "", ...rest }) => (
  <Box as="section" mt={16} mb={16} {...rest}>
    <Center w="full" maxW={1280} pl={8} pr={8} ml="auto" mr="auto">
      {children}
    </Center>
  </Box>
);

export default Section;
