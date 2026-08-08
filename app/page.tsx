import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";

function ExternalLink(props: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={props.href}
      isExternal
      color="gray.700"
      _hover={{ color: "gray.900", textDecoration: "none" }}
    >
      {props.children}
    </Link>
  );
}

function SectionTitle(props: { children: React.ReactNode }) {
  return (
    <HStack spacing={3} align="center">
      <Box w="10px" h="10px" bg="gray.900" borderRadius="full" />
      <Heading as="h2" fontSize={{ base: "lg", md: "xl" }}>
        {props.children}
      </Heading>
    </HStack>
  );
}

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
      <Box as="header" borderBottomWidth="1px" borderColor="gray.100">
        <Container maxW="6xl" py={5}>
          <Flex align="center" justify="space-between" gap={6}>
            <Box>
              <Heading as="h1" fontSize={{ base: "lg", md: "xl" }}>
                Samarpan Dutta
              </Heading>
              <Text color="gray.600" fontSize="sm">
                ML / AI • Software Engineering
              </Text>
            </Box>

            <HStack spacing={{ base: 3, md: 6 }} fontSize="sm">
              <Link href="#blog" color="gray.700" _hover={{ color: "gray.900" }}>
                Blog
              </Link>
              <Link
                href="#talks"
                color="gray.700"
                _hover={{ color: "gray.900" }}
              >
                Talks
              </Link>
              <Link
                href="#publications"
                color="gray.700"
                _hover={{ color: "gray.900" }}
              >
                Publications
              </Link>
              <Link
                href="#contact"
                color="gray.700"
                _hover={{ color: "gray.900" }}
              >
                Contact
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 14 }}>
          <Stack spacing={6}>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              letterSpacing="-0.02em"
              lineHeight="1.05"
            >
              Building practical ML systems and agentic applications.
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
              I’m a Machine Learning engineer focused on turning research into
              reliable products: retrieval + generation, evaluation, MLOps, and
              data-centric iteration.
            </Text>

            <HStack spacing={3} flexWrap="wrap">
              <Button as={Link} href="#featured" variant="outline">
                Explore work
              </Button>
              <Button as={Link} href="#contact" variant="outline">
                Get in touch
              </Button>
              <Button as={Link} href="/Samarpan_Dutta_CV.pdf" variant="outline">
                Download CV
              </Button>
            </HStack>

            <HStack spacing={4} fontSize="sm" color="gray.700">
              <ExternalLink href="https://www.linkedin.com/in/your-handle">
                LinkedIn
              </ExternalLink>
              <ExternalLink href="https://github.com/your-handle">
                GitHub
              </ExternalLink>
              <ExternalLink href="mailto:hello@example.com">Email</ExternalLink>
            </HStack>
          </Stack>

          <Box>
            <Box
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="3xl"
              p={{ base: 6, md: 8 }}
            >
              <Stack spacing={4}>
                <Text fontSize="sm" color="gray.600">
                  Currently
                </Text>
                <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
                  Open to collaborations in applied AI.
                </Heading>
                <Text color="gray.700">
                  If you’re building LLM products, agent workflows, or ML
                  platforms, I can help with prototyping, evaluation, and
                  production hardening.
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
          </Box>
        </SimpleGrid>

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

        <Stack spacing={12} pt={{ base: 14, md: 18 }}>
          <Box id="blog">
            <SectionTitle>Blog</SectionTitle>
            <Text mt={3} color="gray.700" maxW="3xl">
              Insights, tutorials, and build logs from applied ML and GenAI.
            </Text>
            <Stack mt={6} spacing={4}>
              {[
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
              ].map((item) => (
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
          </Box>

          <Box id="talks">
            <SectionTitle>Talks</SectionTitle>
            <Text mt={3} color="gray.700" maxW="3xl">
              Meetups, workshops, and conference sessions.
            </Text>
            <VStack align="stretch" mt={6} spacing={4}>
              {[
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
              ].map((t) => (
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
          </Box>

          <Box id="publications">
            <SectionTitle>Publications</SectionTitle>
            <Text mt={3} color="gray.700" maxW="3xl">
              Selected research and writing.
            </Text>
            <Stack mt={6} spacing={4}>
              {[
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
              ].map((p) => (
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
          </Box>
        </Stack>
      </Container>

      <Box as="footer" borderTopWidth="1px" borderColor="gray.100">
        <Container maxW="6xl" py={10}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box id="contact">
              <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }}>
                Get in touch
              </Heading>
              <Text mt={2} color="gray.700" maxW="lg">
                Interested in collaboration, speaking, or consulting? Send a
                note and I’ll reply soon.
              </Text>
              <HStack mt={4} spacing={3}>
                <Button
                  as={Link}
                  href="mailto:hello@example.com"
                  colorScheme="gray"
                  bg="gray.900"
                  _hover={{ bg: "black" }}
                >
                  Email me
                </Button>
                <Button as={Link} href="https://cal.com" isExternal variant="outline">
                  Schedule
                </Button>
              </HStack>
            </Box>

            <Box>
              <Text color="gray.600" fontSize="sm">
                © {new Date().getFullYear()} Samarpan Dutta. All opinions are my
                own.
              </Text>
              <HStack mt={3} spacing={5} fontSize="sm">
                <ExternalLink href="https://github.com/your-handle">
                  GitHub
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/your-handle">
                  LinkedIn
                </ExternalLink>
                <ExternalLink href="https://x.com/your-handle">X</ExternalLink>
              </HStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

