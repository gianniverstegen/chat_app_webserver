import { ApolloQueryResult } from "@apollo/client";
import { HStack, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import {
  Exact,
  useCreateMessageMutation,
  ViewTodayMessagesQuery,
} from "../generated/graphql";
import { InputField } from "./InputField";

interface SendMessageFormProps {
  refetch: (
    variables?: Partial<Exact<{ [key: string]: never }>>
  ) => Promise<ApolloQueryResult<ViewTodayMessagesQuery>>;
}

export const SendMessageForm: React.FC<SendMessageFormProps> = ({
  refetch,
}) => {
  const [createMessage, { error: errorCreateMessage }] =
    useCreateMessageMutation();
  return (
    <Formik
      initialValues={{ message: "" }}
      onSubmit={async (values, { setErrors, resetForm }) => {
        try {
          const response = await createMessage({
            variables: {
              input: values.message,
            },
          });
        } catch (error) {
          // Middleware error handling or failed connection
          setErrors(error);
          return;
        }

        refetch();
        resetForm({});
        setTimeout(() => {
          document.getElementById("a").scrollIntoView({ behavior: "smooth" });
        }, 100);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <HStack spacing="1px">
            <InputField
              name="message"
              placeholder="Your message..."
              label="Message"
              verticalStack={false}
            />
            <Button
              type="submit"
              isLoading={isSubmitting}
              alignSelf="flex-start"
            >
              Send
            </Button>
          </HStack>
        </Form>
      )}
    </Formik>
  );
};
