import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export const wrapPageElement = ({ element }) => {
  <ChakraProvider>{element}</ChakraProvider>;
};
