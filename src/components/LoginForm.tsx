import { useApolloClient } from "@apollo/client";
import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import router from "next/router";
import React from "react";
import { PassThrough } from "stream";
import { useLoginMutation, useMeQuery } from "../generated/graphql";
import { InputField } from "./InputField";
import { NavBar } from "./NavBar";
import { Wrapper } from "./Wrapper";

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const [loginUser, { data, error, loading }] = useLoginMutation();
  const apolloClient = useApolloClient();

  return (
    <Box>
      <Box
        position="fixed"
        right="0"
        top="20%"
        // minW={["100%", "100%", "300px", "300px"]}
        minW="100%"
        maxW="400px"
        minHeight="100%"
        zIndex="10"
        backgroundColor="white"
      >
        <Wrapper>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values, { setErrors }) => {
              console.log(values);
              const response = await loginUser({
                variables: {
                  usernameOrEmail: values.username,
                  password: values.password,
                },
              });

              if (response.data?.login.errors) {
                // change the object because of the typename
                const error = response.data.login.errors;
                const newErrObject: Record<string, string> = {};
                newErrObject[error.field] = error.message;
                setErrors(newErrObject);
              } else if (response.data.login.succesFlag) {
                await apolloClient.resetStore();
                router.push("/");
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputField
                  main="Login"
                  name="username"
                  placeholder="username *"
                  label="Username"
                />
                <InputField
                  name="password"
                  placeholder="password *"
                  label="Password"
                  type="password"
                />
                <Button type="submit" mt={4} isLoading={isSubmitting} left="0%">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Box>
    </Box>
  );
};
