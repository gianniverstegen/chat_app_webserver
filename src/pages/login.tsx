import { Box } from "@chakra-ui/react";
import Head from "next/head";
import router from "next/router";
import React from "react";
import { BabelBanner } from "../components/BabelBanner";
import { LoginForm } from "../components/LoginForm";
import { NavBar } from "../components/NavBar";
import { useMeQuery } from "../generated/graphql";

interface loginProps {}

const login: React.FC<loginProps> = ({}) => {
  const { data: meData } = useMeQuery();

  if (meData && meData.me !== null) {
    router.push("/");
  }

  return (
    <Box>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar currentUsername={undefined} displayChatButton={true} />
      <LoginForm />
    </Box>
  );
};

export default login;
