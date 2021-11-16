import { Box } from "@chakra-ui/react";
import React from "react";
import { ChatField } from "../components/ChatField";
import { NavBar } from "../components/NavBar";
import { SendMessageForm } from "../components/SendMessageForm";
import { useMeQuery, useViewTodayMessagesQuery } from "../generated/graphql";
import Head from "next/head";

interface indexProps {}

const index: React.FC<indexProps> = () => {
  const {
    loading: messageLoading,
    data: messageData,
    refetch,
  } = useViewTodayMessagesQuery({
    pollInterval: 1000,
  });

  let currentUsername = undefined;
  const { data: meData } = useMeQuery();

  if (meData) {
    if (!!meData.me) {
      currentUsername = meData.me.username;
    }
  }

  if (messageData) {
    setTimeout(() => {
      document.getElementById("a").scrollIntoView({ behavior: "smooth" });
    }, 300);
  }

  return (
    <Box width="100%" display="flex">
      <Head>
        <title>Global chatroom</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box
        width={{ base: "100%", sm: "70%", lg: "700px" }}
        height="100%"
        margin="auto"
        display="flex"
        flexDirection="column"
      >
        <Box flex="1">
          <NavBar currentUsername={currentUsername} />
        </Box>
        <Box flex="1">
          <ChatField
            data={messageData}
            loading={messageLoading}
            currentUsername={currentUsername}
          />
        </Box>
        <Box flex="1">
          <SendMessageForm refetch={refetch} />
        </Box>
      </Box>
    </Box>
  );
};

export default index;
