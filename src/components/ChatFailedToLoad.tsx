import { Box } from "@chakra-ui/react";
import React from "react";

interface ChatFailedToLoadProps {}

export const ChatFailedToLoad: React.FC<ChatFailedToLoadProps> = ({}) => {
  return (
    <Box height="calc(100vh - 82px)" display="flex" alignItems="center">
      <Box flex="1" color="black" textAlign="center" fontWeight="bold">
        Oops, something went wrong...
      </Box>
    </Box>
  );
};
