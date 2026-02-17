import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { me } from "../../../me";

const aboutLinks = [
  {
    text: "Department of Mechanical Engineering",
    href: "https://www.me.utexas.edu/",
  },
  {
    text: "The University of Texas at Austin",
    href: "https://www.utexas.edu/",
  },
  {
    text: "Maryam Tilton",
    href: "https://www.me.utexas.edu/people/faculty-directory/tilton",
  },
] as const;

type AboutSegment =
  | { type: "text"; value: string }
  | { type: "link"; text: string; href: string };

const renderAboutWithLinks = (text: string) => {
  let nodes: AboutSegment[] = [{ type: "text", value: text }];

  aboutLinks.forEach(({ text: linkText, href }) => {
    const nextNodes: AboutSegment[] = [];

    nodes.forEach((node) => {
      if (node.type === "link") {
        nextNodes.push(node);
        return;
      }

      const parts = node.value.split(linkText);
      parts.forEach((part, partIndex) => {
        if (part) {
          nextNodes.push({ type: "text", value: part });
        }

        if (partIndex < parts.length - 1) {
          nextNodes.push({ type: "link", text: linkText, href });
        }
      });
    });

    nodes = nextNodes;
  });

  return nodes;
};

export const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();
  const linkColor = useColorModeValue("brand.700", "brand.200");
  const linkHoverColor = useColorModeValue("brand.600", "brand.300");

  const variants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={"hidden"}
      variants={variants}
      style={{ width: "100%" }}
    >
      <Flex
        id="about"
        w={"full"}
        maxW={"container.xl"}
        align={"center"}
        justify={"center"}
        px={4}
        py={{ base: 8, md: 12 }}
        tabIndex={-1}
      >
        <Stack
          w={"full"}
          maxW={"980px"}
          spacing={6}
          border={"1px"}
          borderColor={useColorModeValue("brand.200", "brand.700")}
          borderRadius={"2xl"}
          bg={useColorModeValue("whiteAlpha.900", "blackAlpha.300")}
          backdropFilter={"blur(6px)"}
          p={{ base: 6, md: 10 }}
        >
          <Stack tabIndex={0} spacing={3}>
            <Text
              fontSize={"sm"}
              fontWeight={"semibold"}
              letterSpacing={"0.1em"}
              textTransform={"uppercase"}
              color={useColorModeValue("brand.700", "brand.300")}
            >
              About
            </Text>
            <Heading
              as={"h1"}
              size={{ base: "2xl", md: "3xl" }}
              color={useColorModeValue("brand.900", "brand.100")}
            >
              {me.bigHeading.black}{" "}
              <Text
                as={"span"}
                color={useColorModeValue("brand.700", "brand.300")}
              >
                {me.bigHeading.blue}
              </Text>
            </Heading>
          </Stack>
          <Box tabIndex={0} maxW={"900px"}>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={useColorModeValue("brand.800", "brand.100")}
              align={{ base: "left", md: "justify" }}
            >
              {renderAboutWithLinks(me.about).map((node, index) =>
                node.type === "text" ? (
                  <span key={index}>{node.value}</span>
                ) : (
                  <Link
                    key={index}
                    href={node.href}
                    isExternal
                    textDecoration={"underline"}
                    color={linkColor}
                    _hover={{ color: linkHoverColor }}
                  >
                    {node.text}
                  </Link>
                )
              )}
            </Text>
          </Box>
        </Stack>
      </Flex>
    </motion.div>
  );
};

export default About;
