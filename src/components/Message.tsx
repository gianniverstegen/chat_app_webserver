import { Box } from "@chakra-ui/react";
import React from "react";

interface messageProps {
  text: String;
  id: number;
  creatorName: String;
  currentUsername: String | undefined;
}

export const Message: React.FC<messageProps> = ({
  text,
  id,
  creatorName,
  currentUsername,
}) => {
  if (currentUsername === undefined || currentUsername !== creatorName) {
    return (
      <Box textAlign="left">
        <Box
          key={id}
          display="inline-block"
          backgroundColor="gray.300"
          padding="5px"
          borderRadius="5px"
        >
          <Box display="flex" flexDirection="column">
            <Box flex="1" fontWeight="semibold">
              {creatorName}:
            </Box>{" "}
            <Box flex="1" textAlign="right">
              {" "}
              {text}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <Box textAlign="right">
      <Box
        display="inline-block"
        key={id}
        backgroundColor="lightblue"
        padding="5px"
        borderRadius="5px"
      >
        {text}
      </Box>
    </Box>
  );
};
