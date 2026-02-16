import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useInView } from "react-intersection-observer";
import { me } from "../../../me";

export const Experience = () => {
  return (
    <Flex
      id="experience"
      w={"full"}
      maxW={"container.xl"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      p={{ base: 8, md: 16 }}
      tabIndex={-1}
    >
      <Box w={"full"}>
        <Text
          fontSize={"sm"}
          fontWeight={"semibold"}
          textTransform={"uppercase"}
          letterSpacing={"0.1em"}
          color={useColorModeValue("brand.700", "brand.300")}
          px={{ base: 0, md: 2 }}
        >
          Professional Journey
        </Text>
        <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }} px={{ base: 0, md: 2 }}>
          Experience
        </Heading>
        <Stack direction={"column"} spacing={5} mt={6} wrap={"wrap"}>
          {me.experience.map((experience, index) => (
            <SingleExperience
              {...experience}
              key={`${experience.company}-${index}`}
              index={index}
            />
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

const SingleExperience = ({
  company,
  location,
  position,
  duration,
  bullets,
  index = 0,
}: {
  company: string;
  location: string;
  position: string;
  duration: string;
  bullets: readonly string[];
  index?: number;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: index * 0.05 },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
    trackInView(inView, position);
  }, [controls, inView]);

  return (
    <Stack
      as={motion.div}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      direction={"column"}
      justify={"center"}
      p={{ base: 5, md: 6 }}
      borderRadius={"2xl"}
      border={"1px"}
      borderColor={useColorModeValue("brand.200", "brand.700")}
      bg={useColorModeValue("whiteAlpha.900", "blackAlpha.300")}
      backdropFilter={"blur(6px)"}
      spacing={3}
      tabIndex={0}
    >
      <Stack spacing={0}>
        <Text
          fontSize={"sm"}
          fontWeight={"semibold"}
          textTransform={"uppercase"}
          letterSpacing={"0.08em"}
          color={useColorModeValue("brand.700", "brand.300")}
          mb={1}
        >
          {duration}
        </Text>
        <Heading as={"h3"} fontSize={{ base: "xl", md: "2xl" }}>
          {company}
        </Heading>
        <Text as={"h4"} fontSize={{ base: "lg", md: "xl" }} fontWeight={"medium"}>
          {position}
        </Text>
      </Stack>
      <Heading as={"span"} fontSize={{ base: "md", md: "lg" }} fontWeight={"normal"} mr={2}>
        {location}
      </Heading>

      <Stack direction={"column"} spacing={1.5}>
        {bullets.map((bullet) => (
          <Text as={"p"} fontSize={{ base: "md", md: "lg" }} key={bullet}>
            {bullet}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};

// Analytics
const trackInView = (inView: boolean, label: string) => {
  if (inView) {
    ReactGA.event({
      category: "Experience",
      action: "InView",
      label: label,
    });
  }
};

export default Experience;
