import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  main?: string;
  verticalStack?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  main,
  label,
  verticalStack = true,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl
      isInvalid={!!error}
      mt={verticalStack ? "18px" : "0px"}
      width="100%"
      mx={verticalStack ? "auto" : "none"}
    >
      {main ? (
        <FormLabel fontFamily="sans-serif" fontWeight="bold" fontSize="40px">
          {main}
        </FormLabel>
      ) : null}
      <Input
        // mt="10px"
        fontFamily="sans-serif"
        {...field}
        {...props}
        id={field.name}
      />
      {error ? (
        <FormErrorMessage fontStyle="italic" ml="2px">
          {error}
        </FormErrorMessage>
      ) : null}
    </FormControl>
  );
};
