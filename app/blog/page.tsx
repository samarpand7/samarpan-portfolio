import { Box, Container, Heading, Link, Stack, Text } from "@chakra-ui/react";
import {
  SectionTitle,
  SiteFooter,
  SiteHeader
} from "../components/site-chrome";

const posts = [
  {
    title: "Evaluating RAG systems beyond basic accuracy",
    desc: "A lightweight framework for grounding, usefulness, and failure-mode analysis.",
    href: "https://example.com"
  },
  {
    title: "Practical guardrails for agent workflows",
    desc: "How to constrain tools, measure reliability, and ship safely.",
    href: "https://example.com"
  },
  {
    title: "From notebook to production: an ML checklist",
    desc: "What usually breaks, and how to prevent it early.",
    href: "https://example.com"
  }
];

export default function BlogPage() {
  return (
    <Box minH="100vh">
      <SiteHeader />

      <Container maxW="6xl" py={{ base: 10, md: 16 }}>
        <SectionTitle>Blog</SectionTitle>
        <Text mt={3} color="gray.700" maxW="3xl">
          Insights, tutorials, and build logs from applied ML and GenAI.
        </Text>
        <Stack mt={8} spacing={4}>
          {posts.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              isExternal
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="2xl"
              p={{ base: 5, md: 6 }}
              _hover={{ textDecoration: "none", borderColor: "gray.300" }}
            >
              <Heading as="h3" fontSize={{ base: "lg", md: "xl" }}>
                {item.title}
              </Heading>
              <Text mt={2} color="gray.700">
                {item.desc}
              </Text>
            </Link>
          ))}
        </Stack>
      </Container>

      <SiteFooter />
    </Box>
  );
}
