// Komponenta Index stranice za kalkulator dizajna solarnih panela
import { Box, Button, Container, Heading, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { FaSun, FaCalculator } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const calculateSolarPanels = () => {
    // Ovdje bi se implementirala logika za izračunavanje potrebnog broja solarnih panela
    toast({
      title: "Izračunavanje u tijeku...",
      description: "Ova funkcionalnost će biti implementirana kasnije.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl" textAlign="center">
          Kalkulator za solarni panel <FaSun />
        </Heading>
        <Text>Dobrodošli u aplikaciju za izračunavanje i dizajn solarnih panela. Molimo unesite potrebne informacije za izračunavanje.</Text>
        <Box w="full">
          <Text mb={2}>Unesite površinu u m²:</Text>
          <Input placeholder="Površina u kvadratnim metrima" />
        </Box>
        <Box w="full">
          <Text mb={2}>Unesite prosječnu potrošnju energije u kWh:</Text>
          <Input placeholder="Potrošnja energije u kWh" />
        </Box>
        <Button leftIcon={<FaCalculator />} colorScheme="teal" onClick={calculateSolarPanels}>
          Izračunaj
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
