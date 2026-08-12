"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack
} from "@chakra-ui/react";

function SocialIconLink(props: {
  href: string;
  label: string;
  children: React.ReactNode;
  isExternal?: boolean;
}) {
  return (
    <Link
      href={props.href}
      isExternal={props.isExternal}
      aria-label={props.label}
      color="gray.700"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      _hover={{ color: "gray.900", textDecoration: "none" }}
    >
      {props.children}
    </Link>
  );
}

function LinkedInIcon() {
  return (
    <Icon viewBox="0 0 24 24" boxSize={5} aria-hidden>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.06-2.065 2.064 2.064 0 112.06 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </Icon>
  );
}

function GitHubIcon() {
  return (
    <Icon viewBox="0 0 24 24" boxSize={5} aria-hidden>
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </Icon>
  );
}

function EmailIcon() {
  return (
    <Icon viewBox="0 0 24 24" boxSize={5} aria-hidden>
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
      />
    </Icon>
  );
}

export function SocialLinks() {
  return (
    <HStack spacing={4}>
      <SocialIconLink
        href="https://www.linkedin.com/in/duttasamarpan"
        label="LinkedIn"
        isExternal
      >
        <LinkedInIcon />
      </SocialIconLink>
      <SocialIconLink
        href="https://github.com/samarpand7"
        label="GitHub"
        isExternal
      >
        <GitHubIcon />
      </SocialIconLink>
      <SocialIconLink href="mailto:samarpand7@outlook.com" label="Email">
        <EmailIcon />
      </SocialIconLink>
    </HStack>
  );
}

export function SectionTitle(props: { children: React.ReactNode }) {
  return (
    <HStack spacing={3} align="center">
      <Box w="10px" h="10px" bg="gray.900" borderRadius="full" />
      <Heading as="h2" fontSize={{ base: "lg", md: "xl" }}>
        {props.children}
      </Heading>
    </HStack>
  );
}

const navItems = [
  { href: "/blog", label: "Blog" },
  { href: "/talks", label: "Talks" },
  { href: "/publications", label: "Publications" },
  { href: "/#contact", label: "Contact" }
] as const;

function MenuIcon() {
  return (
    <Icon viewBox="0 0 24 24" boxSize={5} aria-hidden>
      <path
        fill="currentColor"
        d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
      />
    </Icon>
  );
}

function CloseIcon() {
  return (
    <Icon viewBox="0 0 24 24" boxSize={5} aria-hidden>
      <path
        fill="currentColor"
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      />
    </Icon>
  );
}

export function SiteHeader() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box as="header" borderBottomWidth="1px" borderColor="gray.100">
      <Container maxW="6xl" py={5}>
        <Flex align="center" justify="space-between" gap={6}>
          <Link
            href="/"
            fontWeight="semibold"
            color="gray.900"
            _hover={{ textDecoration: "none", color: "gray.700" }}
          >
            Samarpan Dutta
          </Link>

          <HStack
            spacing={6}
            fontSize="sm"
            display={{ base: "none", md: "flex" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                color="gray.700"
                _hover={{ color: "gray.900" }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>

          <IconButton
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="site-nav-menu"
            icon={isOpen ? <CloseIcon /> : <MenuIcon />}
            variant="ghost"
            color="gray.700"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onToggle}
          />
        </Flex>

        {isOpen ? (
          <VStack
            id="site-nav-menu"
            as="nav"
            align="stretch"
            spacing={1}
            pt={4}
            display={{ md: "none" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                py={2}
                px={1}
                fontSize="sm"
                color="gray.700"
                _hover={{ color: "gray.900", textDecoration: "none" }}
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </VStack>
        ) : null}
      </Container>
    </Box>
  );
}

export function SiteFooter() {
  return (
    <Box as="footer" borderTopWidth="1px" borderColor="gray.100">
      <Container maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box id="contact">
            <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }}>
              Get in touch
            </Heading>
            <Text mt={2} color="gray.700" maxW="lg">
              Interested in collaboration, speaking, or consulting? Send a note
              and I’ll reply soon.
            </Text>
            <HStack mt={4} spacing={3}>
              <Button
                as={Link}
                href="mailto:samarpand7@outlook.com"
                variant="outline"
              >
                Email me
              </Button>
              <Button
                as={Link}
                href="https://cal.com"
                isExternal
                variant="outline"
              >
                Schedule
              </Button>
            </HStack>
          </Box>

          <Box>
            <Text color="gray.600" fontSize="sm">
              © 2026 Samarpan Dutta. All opinions are my own.
            </Text>
            <Box mt={3}>
              <SocialLinks />
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
