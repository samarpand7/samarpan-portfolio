import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack
} from "@chakra-ui/react";
import {
  SectionTitle,
  SiteFooter,
  SiteHeader
} from "../components/site-chrome";

const talks = [
  {
    when: "2026",
    title: "Shipping reliable GenAI systems",
    where: "Industry meetup"
  },
  {
    when: "2025",
    title: "RAG evaluation and failure-mode analysis",
    where: "Tech summit"
  },
  {
    when: "2024",
    title: "Data-centric iteration for ML products",
    where: "University talk"
  }
];

export default function TalksPage() {
  return (
    <Box minH="100vh">
      <SiteHeader />

      <Container maxW="6xl" py={{ base: 10, md: 16 }}>
        <SectionTitle>Talks</SectionTitle>
        <Text mt={3} color="gray.700" maxW="3xl">
          Meetups, workshops, and conference sessions.
        </Text>
        <VStack align="stretch" mt={8} spacing={4}>
          {talks.map((t) => (
            <Flex
              key={t.title}
              justify="space-between"
              gap={4}
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="2xl"
              p={{ base: 5, md: 6 }}
            >
              <Box>
                <Heading as="h3" fontSize={{ base: "lg", md: "xl" }}>
                  {t.title}
                </Heading>
                <Text mt={1} color="gray.700">
                  {t.where}
                </Text>
              </Box>
              <Text color="gray.600" fontWeight="semibold">
                {t.when}
              </Text>
            </Flex>
          ))}
        </VStack>
      </Container>

      <SiteFooter />
    </Box>
  );
}
