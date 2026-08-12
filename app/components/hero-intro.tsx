"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { SocialLinks } from "./site-chrome";

const FALLBACK_SIZE = { base: "160px", md: "220px" } as const;

export function HeroIntro() {
  const textRef = useRef<HTMLDivElement>(null);
  const [sidePx, setSidePx] = useState<number | null>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const mq = window.matchMedia("(min-width: 48em)");

    const update = () => {
      if (!mq.matches) {
        setSidePx(null);
        return;
      }
      setSidePx(Math.round(el.getBoundingClientRect().height));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    mq.addEventListener("change", update);

    return () => {
      observer.disconnect();
      mq.removeEventListener("change", update);
    };
  }, []);

  return (
    <Box
      w="100%"
      borderBottomWidth="1px"
      borderColor="gray.100"
      bg="gray.50"
    >
      <Container maxW="6xl" py={{ base: 10, md: 16 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "flex-start" }}
          gap={{ base: 8, md: 12 }}
        >
          <Box
            boxSize={sidePx != null ? `${sidePx}px` : FALLBACK_SIZE}
            borderRadius="2xl"
            borderWidth="1px"
            borderColor="gray.300"
            overflow="hidden"
            flexShrink={0}
            bg="gray.200"
          >
            <Image
              src="/headshot.png"
              alt="Samarpan Dutta"
              boxSize="100%"
              objectFit="cover"
            />
          </Box>

          <Stack ref={textRef} spacing={5} flex="1" minW={0}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "6xl" }}
                letterSpacing="-0.03em"
                lineHeight="1.05"
              >
                Samarpan Dutta
              </Heading>
              <Text
                mt={2}
                color="gray.600"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="medium"
              >
                ML / AI • Software Engineering
              </Text>
            </Box>

            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              letterSpacing="-0.01em"
              lineHeight="1.25"
              color="gray.800"
            >
              Building practical ML systems and agentic applications.
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              maxW="2xl"
            >
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

            <SocialLinks />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
