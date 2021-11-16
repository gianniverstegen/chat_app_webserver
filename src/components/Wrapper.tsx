import { Box } from "@chakra-ui/react";
import React from "react";

interface WrapperProps {}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box mt="8px " minW="250px" maxW="300px" w="100%" mx="auto">
      {children}
    </Box>
  );
};
