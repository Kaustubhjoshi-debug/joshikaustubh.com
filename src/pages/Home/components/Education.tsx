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
import { useInView } from "react-intersection-observer";
import { me } from "../../../me";

export const Education = () => {
  return (
    <Flex
      id={"education"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      maxW={"container.xl"}
      w={"full"}
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
        >
          Background
        </Text>
        <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }}>
          Education
        </Heading>
        <Stack direction={"column"} spacing={5} mt={6}>
          {me.education.map((education) => (
            <SingleEducation key={education.school} {...education} />
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

const SingleEducation = ({
  degree,
  major,
  school,
  graduation,
  awards,
}: {
  degree: string;
  major: string;
  school: string;
  graduation: string;
  awards?: readonly string[];
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 1 } },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
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
      initial="hidden"
      variants={variants}
    >
      <Stack
        direction={"column"}
        tabIndex={0}
        border={"1px"}
        borderColor={useColorModeValue("brand.200", "brand.700")}
        borderRadius={"2xl"}
        bg={useColorModeValue("whiteAlpha.900", "blackAlpha.300")}
        backdropFilter={"blur(6px)"}
        p={{ base: 5, md: 6 }}
        spacing={2}
      >
        <Text
          as={"h5"}
          fontSize={"sm"}
          fontWeight={"semibold"}
          letterSpacing={"0.08em"}
          textTransform={"uppercase"}
          color={useColorModeValue("brand.700", "brand.300")}
        >
          {graduation}
        </Text>
        <Heading as={"h3"} fontSize={{ base: "xl", md: "2xl" }}>
          {school}
        </Heading>
        <Text as={"h4"} fontSize={{ base: "lg", md: "xl" }} fontWeight={"medium"}>
          {degree} in {major}
        </Text>

        {awards && awards.length > 0 && <Box h={"10px"} />}
        {awards &&
          awards.length > 0 &&
          awards.map((award) => (
            <Text as={"p"} fontSize={{ base: "md", md: "lg" }} key={award}>
              {award}
            </Text>
          ))}
      </Stack>
    </motion.div>
  );
};

export default Education;
