import React from "react";
import { Form, Formik } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
} from "@chakra-ui/react";
import { RegisterForm } from "../components/RegisterForm";
import { BabelBanner } from "../components/BabelBanner";
import { NavBar } from "../components/NavBar";
import router from "next/router";
import { useMeQuery } from "../generated/graphql";
import Head from "next/head";

interface registerProps {}

const RegisterNormalAccount: React.FC<registerProps> = ({}) => {
  const { data: meData } = useMeQuery();

  if (meData && meData.me !== null) {
    router.push("/");
  }

  return (
    <Box>
      <Head>
        <title>Register form</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar currentUsername={undefined} displayChatButton={true} />
      <RegisterForm />
    </Box>
  );
};

export default RegisterNormalAccount;
