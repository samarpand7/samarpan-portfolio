import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  Stack,
  Text
} from "@chakra-ui/react";
import {
  SectionTitle,
  SiteFooter,
  SiteHeader
} from "../components/site-chrome";

const publications = [
  {
    title: "A practical framework for bias-aware self-learning",
    meta: "Journal / 2025",
    href: "https://example.com"
  },
  {
    title: "Robust evaluation under sampling bias",
    meta: "Conference / 2024",
    href: "https://example.com"
  }
];

export default function PublicationsPage() {
  return (
    <Box minH="100vh">
      <SiteHeader />

      <Container maxW="6xl" py={{ base: 10, md: 16 }}>
        <SectionTitle>Publications</SectionTitle>
        <Text mt={3} color="gray.700" maxW="3xl">
          Selected research and writing.
        </Text>
        <Stack mt={8} spacing={4}>
          {publications.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              isExternal
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="2xl"
              p={{ base: 5, md: 6 }}
              _hover={{ textDecoration: "none", borderColor: "gray.300" }}
            >
              <HStack justify="space-between" align="start">
                <Box>
                  <Heading as="h3" fontSize={{ base: "lg", md: "xl" }}>
                    {p.title}
                  </Heading>
                  <Text mt={1} color="gray.600">
                    {p.meta}
                  </Text>
                </Box>
                <Text color="gray.900" fontWeight="semibold">
                  View
                </Text>
              </HStack>
            </Link>
          ))}
        </Stack>
      </Container>

      <SiteFooter />
    </Box>
  );
}
