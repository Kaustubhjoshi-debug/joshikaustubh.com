import {
  Flex,
  Heading,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { IconType } from "react-icons";
import { useInView } from "react-intersection-observer";
import { me } from "../../../me";

export const Skills = () => {
  return (
    <Flex
      maxW={"container.xl"}
      flexBasis={"auto"}
      id="skills"
      align={"center"}
      justify={"center"}
      direction={"column"}
      p={{
        base: 8,
        md: 16,
      }}
      tabIndex={-1}
    >
      <Stack spacing={4} w={"full"}>
        <Heading
          as={"p"}
          fontSize={"sm"}
          fontWeight={"semibold"}
          textTransform={"uppercase"}
          letterSpacing={"0.1em"}
          color={useColorModeValue("brand.700", "brand.300")}
        >
          Tools and Methods
        </Heading>
        <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }}>
          Skills/Technologies
        </Heading>
        <Stack
          direction={"row"}
          spacing={0}
          rowGap={3}
          mt={6}
          wrap={"wrap"}
          columnGap={3}
          tabIndex={0}
        >
          {me.skills.map((skill, index) => (
            <SingleSkill {...skill} key={skill.name} index={index} />
          ))}
        </Stack>
      </Stack>
    </Flex>
  );
};

const SingleSkill = ({
  name,
  icon,
  index = 0,
}: {
  name: string;
  icon?: IconType;
  index?: number;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, x: 20, transition: { duration: 0.5 } },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
      },
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
      initial="hidden"
      variants={variants}
    >
      <Stack
        direction={"row"}
        align={"center"}
        bg={useColorModeValue("whiteAlpha.900", "blackAlpha.300")}
        backdropFilter={"blur(6px)"}
        px={4}
        py={2}
        borderRadius={"xl"}
        border={"1px"}
        borderColor={useColorModeValue("brand.200", "brand.700")}
      >
        {icon && <Icon as={icon} boxSize={4} color={useColorModeValue("brand.700", "brand.300")} />}
        <Heading as={"h3"} fontSize={{ base: "md", md: "lg" }}>
          {name}
        </Heading>
      </Stack>
    </motion.div>
  );
};

export default Skills;
