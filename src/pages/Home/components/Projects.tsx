import {
  Badge,
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { me } from "../../../me";

export const Projects = () => {
  return (
    <Flex
      id="projects"
      w={"full"}
      maxW={"container.xl"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      p={{
        base: 8,
        md: 16,
      }}
      tabIndex={-1}
    >
      <Box w={"full"}>
        <Text
          fontSize={"sm"}
          fontWeight={"semibold"}
          textTransform={"uppercase"}
          letterSpacing={"0.1em"}
          color={useColorModeValue("brand.700", "brand.300")}
        >
          Research Work
        </Text>
        <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }}>
          Projects
        </Heading>
        <Text
          mt={2}
          maxW={"760px"}
          color={useColorModeValue("brand.700", "brand.200")}
          fontSize={{ base: "md", md: "lg" }}
        >
          Selected translational and preclinical projects, presented as concise
          case studies with methods, execution scope, and technical stack.
        </Text>
        <Grid
          mt={6}
          templateColumns={{
            base: "repeat(1, 1fr)",
            lg: me.projects.length > 1 ? "repeat(2, 1fr)" : "repeat(1, 1fr)",
          }}
          gap={6}
        >
          {me.projects.map((project, i) => (
            <SingleProject key={`project-${i}`} {...project} index={i + 1} />
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};

const SingleProject = ({
  index,
  name,
  description,
  contribution,
  technologies,
  links,
}: {
  index: number;
  name: string;
  description: string;
  contribution: string;
  technologies: readonly string[];
  links: readonly {
    name: string;
    uri: string;
  }[];
}) => {
  const bg = useColorModeValue("white", "brand.900");
  const borderColor = useColorModeValue("brand.200", "brand.700");
  const subtleText = useColorModeValue("brand.700", "brand.300");

  return (
    <Stack
      as={motion.article}
      w={"full"}
      h={"full"}
      direction={"column"}
      spacing={5}
      p={{ base: 5, md: 6 }}
      borderRadius={"xl"}
      border={"1px"}
      bg={bg}
      borderColor={borderColor}
      boxShadow={useColorModeValue("sm", "none")}
      whileHover={{
        y: -3,
        borderColor: useColorModeValue("brand.300", "brand.500"),
        boxShadow: useColorModeValue("md", "dark-lg"),
      }}
      transition={"all 0.2s ease"}
    >
      <HStack justify={"space-between"} align={"flex-start"}>
        <Stack spacing={1}>
          <Text
            fontSize={"xs"}
            fontWeight={"semibold"}
            letterSpacing={"0.12em"}
            textTransform={"uppercase"}
            color={subtleText}
          >
            Project {index}
          </Text>
          <Heading as={"h3"} fontSize={{ base: "xl", md: "2xl" }}>
            {name}
          </Heading>
        </Stack>
        <Badge
          borderRadius={"full"}
          px={3}
          py={1}
          fontSize={"xs"}
          colorScheme={useColorModeValue("blue", "cyan")}
        >
          Case Study
        </Badge>
      </HStack>

      <Divider borderColor={borderColor} />

      <Stack spacing={4}>
        <ContentBlock title={"Overview"} text={description} />
        <ContentBlock title={"Execution"} text={contribution} />
      </Stack>

      <Stack spacing={2}>
        <Text
          fontSize={"sm"}
          fontWeight={"semibold"}
          letterSpacing={"0.08em"}
          textTransform={"uppercase"}
          color={subtleText}
        >
          Methods and Technologies
        </Text>
        <Flex wrap={"wrap"} gap={2}>
          {technologies.map((technology) => (
            <Pill key={technology}>{technology}</Pill>
          ))}
        </Flex>
      </Stack>

      {links.length > 0 && (
        <Flex gap={2} wrap={"wrap"}>
          {links.map((link) => (
            <OutLink href={link.uri} key={link.name}>
              {link.name}
            </OutLink>
          ))}
        </Flex>
      )}
    </Stack>
  );
};

const ContentBlock = ({ title, text }: { title: string; text: string }) => (
  <Stack spacing={1.5}>
    <Text
      fontSize={"sm"}
      fontWeight={"semibold"}
      letterSpacing={"0.08em"}
      textTransform={"uppercase"}
      color={useColorModeValue("brand.700", "brand.300")}
    >
      {title}
    </Text>
    <Text fontSize={{ base: "md", md: "lg" }}>{text}</Text>
  </Stack>
);

const Pill = ({ children }: { children: string }) => {
  return (
    <Box
      border={"1px"}
      borderColor={useColorModeValue("brand.200", "brand.600")}
      bg={useColorModeValue("brand.50", "brand.800")}
      color={useColorModeValue("brand.800", "brand.100")}
      px={2.5}
      py={1}
      borderRadius={"full"}
      fontSize={"xs"}
      fontWeight={"semibold"}
      letterSpacing={"0.04em"}
      textTransform={"uppercase"}
    >
      {children}
    </Box>
  );
};

const OutLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <Link
      href={href}
      target={"_blank"}
      rel={"noreferrer"}
      display={"inline-flex"}
      alignItems={"center"}
      gap={1.5}
      fontSize={"sm"}
      fontWeight={"semibold"}
      border={"1px"}
      borderColor={useColorModeValue("brand.200", "brand.600")}
      borderRadius={"md"}
      px={3}
      py={1.5}
      color={useColorModeValue("brand.700", "brand.200")}
      bg={useColorModeValue("white", "brand.800")}
      _hover={{
        textDecoration: "none",
        borderColor: useColorModeValue("brand.400", "brand.400"),
        bg: useColorModeValue("brand.50", "brand.700"),
      }}
    >
      {children}
      <Icon as={FiExternalLink} />
    </Link>
  );
};

export default Projects;
