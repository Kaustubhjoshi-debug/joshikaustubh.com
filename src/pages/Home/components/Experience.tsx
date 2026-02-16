import {
  Box,
  Flex,
  Grid,
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
  const lineColor = useColorModeValue("brand.300", "brand.700");

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
        <Box position={"relative"} mt={6}>
          <Box
            position={"absolute"}
            left={{ base: "14px", md: "218px" }}
            top={0}
            bottom={0}
            width={"2px"}
            bg={lineColor}
          />
          <Stack direction={"column"} spacing={6}>
            {me.experience.map((experience, index) => (
              <SingleExperience
                {...experience}
                key={`${experience.company}-${index}`}
                index={index}
              />
            ))}
          </Stack>
        </Box>
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

  const timelineDotBg = useColorModeValue("brand.500", "brand.300");
  const timelineDotBorder = useColorModeValue("brand.50", "brand.900");

  return (
    <Grid
      as={motion.div}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      templateColumns={{ base: "40px 1fr", md: "240px 1fr" }}
      columnGap={{ base: 4, md: 8 }}
      alignItems={"start"}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        left={{ base: "14px", md: "218px" }}
        top={"28px"}
        transform={"translateX(-50%)"}
        w={4}
        h={4}
        borderRadius={"full"}
        bg={timelineDotBg}
        border={"2px solid"}
        borderColor={timelineDotBorder}
        zIndex={1}
      />

      <Stack
        display={{ base: "none", md: "flex" }}
        align={"flex-end"}
        textAlign={"right"}
        pt={5}
        pr={8}
        spacing={0.5}
      >
        <Text
          fontSize={"sm"}
          fontWeight={"semibold"}
          textTransform={"uppercase"}
          letterSpacing={"0.08em"}
          color={useColorModeValue("brand.700", "brand.300")}
        >
          {duration}
        </Text>
        <Text fontSize={"sm"} color={useColorModeValue("brand.700", "brand.300")}>
          {location}
        </Text>
      </Stack>

      <Stack
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
        <Stack spacing={0.5}>
          <Stack display={{ base: "flex", md: "none" }} spacing={0}>
            <Text
              fontSize={"sm"}
              fontWeight={"semibold"}
              textTransform={"uppercase"}
              letterSpacing={"0.08em"}
              color={useColorModeValue("brand.700", "brand.300")}
            >
              {duration}
            </Text>
            <Text fontSize={"sm"} color={useColorModeValue("brand.700", "brand.300")}>
              {location}
            </Text>
          </Stack>
          <Heading as={"h3"} fontSize={{ base: "xl", md: "2xl" }}>
            {company}
          </Heading>
          <Text as={"h4"} fontSize={{ base: "lg", md: "xl" }} fontWeight={"medium"}>
            {position}
          </Text>
        </Stack>

        <Stack as={"ul"} direction={"column"} spacing={1.5} pl={4}>
          {bullets.map((bullet) => (
            <Text as={"li"} fontSize={{ base: "md", md: "lg" }} key={bullet}>
              {bullet}
            </Text>
          ))}
        </Stack>
      </Stack>
    </Grid>
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
