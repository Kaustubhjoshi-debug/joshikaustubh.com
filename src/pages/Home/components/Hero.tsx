import {
  chakra,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  shouldForwardProp,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import ReactGA from "react-ga4";
import { IconType } from "react-icons";
import { me } from "../../../me";

export const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  };

  return (
    <Stack
      id={"home"}
      w={"full"}
      minH={{ base: "auto", md: "72vh" }}
      spacing={0}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={1}
      px={4}
      py={{
        base: 6,
        md: 10,
      }}
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={variants}
      tabIndex={-1}
      maxW={"container.xl"}
    >
      <Stack
        h={"full"}
        w={"full"}
        bg={useColorModeValue("whiteAlpha.900", "blackAlpha.300")}
        backdropFilter={"blur(6px)"}
        rounded={"3xl"}
        border={"1px"}
        borderColor={useColorModeValue("brand.200", "whiteAlpha.300")}
        p={{
          base: 6,
          md: 12,
        }}
        justify={"space-between"}
        spacing={{ base: 8, md: 10 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, md: 10 }}
          alignItems={"center"}
        >
          <Stack direction={"column"} spacing={4}>
            <Heading
              as={"h1"}
              size={{ base: "2xl", md: "3xl" }}
              color={useColorModeValue("brand.900", "brand.50")}
            >
              {me.name}
            </Heading>
            <Heading
              as={"h2"}
              fontSize={{ base: "xl", md: "2xl" }}
              color={useColorModeValue("brand.700", "brand.200")}
            >
              {me.subtitle}
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={useColorModeValue("brand.800", "brand.100")}
              maxW={"640px"}
            >
              {me.tagline}
            </Text>
          </Stack>
          <Image
            rounded={"2xl"}
            w={{ base: "220px", md: "280px" }}
            h={{ base: "294px", md: "374px" }}
            src={me.image}
            border={"1px"}
            borderColor={useColorModeValue("brand.200", "brand.500")}
            objectFit={"cover"}
            objectPosition={"center top"}
            alt={"Profile picture"}
            justifySelf={{ base: "center", md: "end" }}
            boxShadow={useColorModeValue("xl", "dark-lg")}
          />
        </SimpleGrid>
        <Stack
          direction={"row"}
          spacing={0}
          wrap={"wrap"}
          rowGap={3}
          columnGap={3}
        >
          {me.social.map((social) => (
            <Social
              key={social.name}
              name={social.name}
              icon={social.icon}
              url={social.uri}
              hover={social.hover}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

const Social = ({
  name,
  icon,
  url,
  hover,
}: {
  name: string;
  icon: IconType;
  url: string;
  hover: {
    bg: [string, string];
    color: string;
  };
}) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const onClick = () => {
    trackSocial(name);
  };

  return (
    <ChakraBox
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      tabIndex={-1}
    >
      <Stack
        direction={"row"}
        as={"a"}
        href={url}
        target={"_blank"}
        align={"center"}
        bg={useColorModeValue("brand.50", "brand.950")}
        border={"1px"}
        borderColor={useColorModeValue("brand.200", "brand.700")}
        px={4}
        py={2}
        rounded={"full"}
        textDecoration={"none"}
        _hover={{
          bg: useColorModeValue(hover.bg[0], hover.bg[1]),
          color: hover.color,
          borderColor: useColorModeValue("brand.300", "brand.500"),
        }}
        tabIndex={0}
        onClick={onClick}
      >
        <Icon as={icon} />
        <Text fontWeight={"semibold"} fontSize={"md"}>
          {name}
        </Text>
      </Stack>
    </ChakraBox>
  );
};

// Analytics (ReactGA4)
const trackSocial = (name: string) => {
  ReactGA.event({
    category: "Social",
    action: "Clicked",
    label: name,
  });
};

export default Hero;
