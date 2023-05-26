import { Box, Heading, Text, Button } from "@chakra-ui/react";

export default function dw() {
  return (
    <Box p={4}>
      <Heading as='h1' mb={6}>
        Bienvenue sur la page d
      </Heading>
      <Text fontSize='xl' mb={6}>
        Ceci est un exemple de page daccueil créée avec Next.js et Chakra UI.
      </Text>
      <Button colorScheme='teal'>Bouton dexemple</Button>
    </Box>
  );
}
