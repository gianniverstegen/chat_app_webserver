import { Box } from "@chakra-ui/react";
import React from "react";

interface BannerProps {
  bannerName: string;
}

export const BabelBanner: React.FC<BannerProps> = ({ bannerName }) => {
  return (
    <Box
      backgroundColor="white"
      width="100%"
      minHeight="100%"
      position="fixed"
      display={{ base: "none", md: "block" }}
    >
      <Box
        position="fixed"
        fontFamily="sans-serif"
        fontSize="35px"
        fontWeight="bold"
        top="200px"
        left="10%"
      >
        Global chat app by Gianni Verstegen
      </Box>
      <Box
        position="fixed"
        backgroundColor="grey"
        width="1px"
        minHeight="250px"
        top="10%"
        height="60%"
        right="300px"
      ></Box>
    </Box>
  );
};
