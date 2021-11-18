import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import router, { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { useRegisterMutation } from "../generated/graphql";

interface registerFormProps {}

export const RegisterForm: React.FC<registerFormProps> = ({}) => {
  const [registerUser, { loading, data, error }] = useRegisterMutation();
  const router = useRouter();
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
      <Box>
        <Wrapper>
          <Formik
            initialValues={{ username: "", password: "", email: "" }}
            onSubmit={async (values, { setErrors }) => {
              const response = await registerUser({
                variables: {
                  username: values.username,
                  password: values.password,
                  email: values.email,
                },
              });
              if (response.data?.register.errors) {
                // change the object because of the typename
                const error = response.data.register.errors;
                const newErrObject: Record<string, string> = {};
                newErrObject[error.field] = error.message;
                setErrors(newErrObject);
              } else if (response.data.register.succesFlag) {
                router.push("/login");
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputField
                  main="Register"
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
                <InputField name="email" placeholder="email" label="Email" />
                <Button
                  type="submit"
                  mt={4}
                  isLoading={isSubmitting}
                  left="0%"
                  _hover={{ borderBottom: "2px", borderRadius: "0px" }}
                >
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
