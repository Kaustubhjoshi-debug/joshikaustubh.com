import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { me } from "../../../me";

export const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

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
        p={{ base: 8, md: 16 }}
        tabIndex={-1}
      >
        <Stack
          w={"full"}
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
              {me.about}
            </Text>
          </Box>
        </Stack>
      </Flex>
    </motion.div>
  );
};

export default About;
