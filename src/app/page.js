"use client";

import { _post } from "@/utils/http";
import {
  Box,
  VStack,
  Input,
  Button,
  useColorModeValue,
  Center,
  Container,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const bgGradient = useColorModeValue(
    "linear(to-r, yellow.200, purple.200)",
    "linear(to-r, yellow.700, purple.700)"
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await _post("/api/login/", {
      login,
      password,
    });
    console.log(response);
  };

  return (
    <Center h='100vh' bgGradient={bgGradient}>
      <Container centerContent>
        <form onSubmit={handleSubmit}>
          <VStack
            p={4}
            w='100%'
            maxW='md'
            boxShadow='xl'
            borderRadius='lg'
            bg='white'
            spacing={4}>
            <Input
              placeholder='Login'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <Input
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button colorScheme='teal' w='100%' type='submit'>
              Run
            </Button>
          </VStack>
        </form>
      </Container>
    </Center>
  );
}
