import { Button, Box, VStack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import {
  useRegisterMutation,
  useRegisterOneTimeUserMutation,
} from "../generated/graphql";
import { InputField } from "./InputField";
import { Wrapper } from "./Wrapper";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";

interface RegisterFormProps {}

export const RegisterOptions: React.FC<RegisterFormProps> = ({}) => {
  const [registerOnetimeUser, { data, loading, error }] =
    useRegisterOneTimeUserMutation();
  const router = useRouter();
  const apolloClient = useApolloClient();

  return (
    <Box
      position="fixed"
      right="0"
      top="20%"
      minW="100%"
      maxW="400px"
      minHeight="100%"
      zIndex="10"
      mx="auto"
    >
      <VStack spacing="30px">
        <Box fontWeight="bold" fontSize="20px">
          Register Options:
        </Box>
        <Button
          border="1px"
          onClick={() => {
            router.push("/registerNormalAccount");
          }}
        >
          Register the normal way
        </Button>
        <Button
          border="1px"
          onClick={async () => {
            try {
              await registerOnetimeUser();
            } catch {
              return;
            }

            await apolloClient.resetStore();
            router.push("/");
          }}
        >
          Register a one time user account
        </Button>
      </VStack>
    </Box>
  );
};
