import {
  Badge,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { HeroIntro } from "./components/hero-intro";
import { SectionTitle, SiteFooter, SiteHeader } from "./components/site-chrome";

function FeatureCard(props: {
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
  tag?: string;
}) {
  const content = (
    <Stack spacing={3}>
      <HStack spacing={2}>
        <Text fontSize="sm" color="gray.600">
          {props.eyebrow}
        </Text>
        {props.tag ? (
          <Badge colorScheme="gray" variant="subtle">
            {props.tag}
          </Badge>
        ) : null}
      </HStack>
      <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} lineHeight="1.2">
        {props.title}
      </Heading>
      <Text color="gray.700">{props.description}</Text>
      <HStack spacing={2} color="gray.900" fontWeight="semibold">
        <Text>Read more</Text>
        <Icon viewBox="0 0 24 24" w={4} h={4} aria-hidden>
          <path
            fill="currentColor"
            d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
          />
        </Icon>
      </HStack>
    </Stack>
  );

  if (!props.href) return <Box>{content}</Box>;

  return (
    <Link
      href={props.href}
      isExternal
      _hover={{ textDecoration: "none" }}
      role="group"
    >
      <Box
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="2xl"
        p={{ base: 5, md: 6 }}
        transition="all 120ms ease"
        _groupHover={{ borderColor: "gray.300", transform: "translateY(-2px)" }}
      >
        {content}
      </Box>
    </Link>
  );
}

export default function Home() {
  return (
    <Box minH="100vh">
      <SiteHeader />
      <HeroIntro />

      <Container maxW="6xl" py={{ base: 10, md: 16 }}>
        <Box
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="3xl"
          p={{ base: 6, md: 8 }}
          maxW="3xl"
        >
          <Stack spacing={4}>
            <Text fontSize="sm" color="gray.600">
              Currently
            </Text>
            <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
              Open to collaborations in applied AI.
            </Heading>
            <Text color="gray.700">
              If you’re building LLM products, agent workflows, or ML platforms,
              I can help with prototyping, evaluation, and production hardening.
            </Text>
            <Divider />
            <HStack spacing={3} flexWrap="wrap">
              <Badge variant="subtle" colorScheme="gray">
                LLM evaluation
              </Badge>
              <Badge variant="subtle" colorScheme="gray">
                RAG
              </Badge>
              <Badge variant="subtle" colorScheme="gray">
                MLOps
              </Badge>
              <Badge variant="subtle" colorScheme="gray">
                Data pipelines
              </Badge>
            </HStack>
          </Stack>
        </Box>

        <Box id="featured" pt={{ base: 12, md: 16 }}>
          <SectionTitle>Featured</SectionTitle>
          <Text mt={3} color="gray.700" maxW="3xl">
            A few recent highlights—deep dives, build notes, and practical
            guides.
          </Text>

          <SimpleGrid
            mt={8}
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 5, md: 6 }}
          >
            <FeatureCard
              eyebrow="Featured"
              tag="Guide"
              title="Intelligent Document Processing with GenAI"
              description="Design an end-to-end pipeline to extract structured data from messy documents at scale."
              href="https://example.com"
            />
            <FeatureCard
              eyebrow="Featured"
              tag="Code"
              title="Reflection-style inference for better outputs"
              description="A practical pattern for configurable additional compute at inference time."
              href="https://example.com"
            />
            <FeatureCard
              eyebrow="Featured"
              tag="Paper"
              title="Bias-aware learning for real-world credit models"
              description="A framework for bias-aware self-learning and robust evaluation under sampling bias."
              href="https://example.com"
            />
          </SimpleGrid>
        </Box>
      </Container>

      <SiteFooter />
    </Box>
  );
}
