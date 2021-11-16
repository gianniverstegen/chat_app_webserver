import { Box } from "@chakra-ui/react";
import React from "react";

interface ChatIsLoadingProps {}

export const ChatIsLoading: React.FC<ChatIsLoadingProps> = ({}) => {
  return (
    <Box height="calc(100vh - 82px)" display="flex" alignItems="center">
      <Box flex="1" color="black" textAlign="center" fontWeight="bold">
        Loading...
      </Box>
    </Box>
  );
};
