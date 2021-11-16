import React from "react";
import { Box } from "@chakra-ui/react";
import { RegisterOptions } from "../components/RegisterOptions";
import { NavBar } from "../components/NavBar";
import { useMeQuery } from "../generated/graphql";
import router from "next/router";
import Head from "next/head";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const { data: meData } = useMeQuery();

  if (meData && meData.me !== null) {
    router.push("/");
  }

  return (
    <Box>
      <Head>
        <title>Register</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar currentUsername={undefined} displayChatButton={true} />
      <RegisterOptions />
    </Box>
  );
};

export default Register;
