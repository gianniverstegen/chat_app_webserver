import { Box } from "@chakra-ui/react";
import React from "react";
import { ViewTodayMessagesQuery } from "../generated/graphql";
import { ChatFailedToLoad } from "./ChatFailedToLoad";
import { ChatIsLoading } from "./ChatIsLoading";
import { Message } from "./Message";

interface ChatFieldProps {
  data: ViewTodayMessagesQuery | undefined;
  currentUsername: String;
  loading: boolean;
}

export const ChatField: React.FC<ChatFieldProps> = ({
  data,
  currentUsername,
  loading,
}) => {
  if (loading) {
    return <ChatIsLoading />;
  }
  if (!data) {
    return <ChatFailedToLoad />;
  }

  return (
    <Box height="calc(100vh - 82px)" overflowY="auto">
      {data.viewTodayMessages.map(({ text, creatorName, id }) => {
        return (
          <Box key={id} mt="2px" mb="2px">
            <Message
              id={id}
              text={text}
              creatorName={creatorName}
              currentUsername={currentUsername}
            />
          </Box>
        );
      })}
      <Box id="a"> </Box>
    </Box>
  );
};
