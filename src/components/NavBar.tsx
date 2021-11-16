import { ApolloClient, useApolloClient } from "@apollo/client";
import { Box, Button, HStack } from "@chakra-ui/react";
import router, { useRouter } from "next/router";
import React from "react";
import { LogoutMutationFn, useLogoutMutation } from "../generated/graphql";

interface NavBarProps {
  currentUsername: String;
  displayChatButton?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({
  currentUsername,
  displayChatButton = false,
}) => {
  const apolloClient = useApolloClient();
  const [logout] = useLogoutMutation();

  return (
    <HStack width="100%" height="40px" justifyContent="space-between">
      <Box fontWeight="bold" textAlign="center">
        Global Chatroom
      </Box>
      <Box textAlign="center">
        {usernameDisplay(
          currentUsername,
          apolloClient,
          logout,
          displayChatButton
        )}
      </Box>
    </HStack>
  );
};

const usernameDisplay = (
  currentUsername: String,
  apolloClient: ApolloClient<object>,
  logout: LogoutMutationFn,
  displayChatButton?: boolean
) => {
  if (currentUsername === undefined) {
    return (
      <HStack mr="8px">
        {ChatButton(displayChatButton)}
        <Box
          fontWeight="bold"
          onClick={() => router.push("/register")}
          _hover={{
            cursor: "default",
            borderBottom: "1px",
          }}
        >
          register
        </Box>
        <Box
          fontWeight="bold"
          onClick={() => router.push("/login")}
          _hover={{
            cursor: "default",
            borderBottom: "1px",
          }}
        >
          log in
        </Box>
      </HStack>
    );
  } else {
    return (
      <HStack spacing="20px" mr="20px">
        <Box> {currentUsername} </Box>
        <Box
          fontWeight="bold"
          onClick={async () => {
            await logout();
            await apolloClient.resetStore();
          }}
          _hover={{
            cursor: "default",
            borderBottom: "1px",
          }}
        >
          log out{" "}
        </Box>
      </HStack>
    );
  }
};

const ChatButton = (displayChatButton) => {
  if (displayChatButton) {
    return (
      <Box
        fontWeight="bold"
        onClick={() => router.push("/")}
        _hover={{
          cursor: "default",
          borderBottom: "1px",
        }}
      >
        chat
      </Box>
    );
  }
};
