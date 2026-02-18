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
      spacing={0}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={1}
      px={4}
      py={{
        base: 5,
        md: 7,
      }}
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={variants}
      tabIndex={-1}
      maxW={"container.xl"}
    >
      <Stack
        w={"full"}
        bg={useColorModeValue("whiteAlpha.900", "blackAlpha.300")}
        backdropFilter={"blur(6px)"}
        rounded={"3xl"}
        border={"1px"}
        borderColor={useColorModeValue("brand.200", "whiteAlpha.300")}
        p={{
          base: 5,
          md: 9,
        }}
        justify={"space-between"}
        spacing={{ base: 6, md: 8 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 6, md: 8 }}
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
            loading={"eager"}
            decoding={"async"}
            border={"1px"}
            borderColor={useColorModeValue("brand.200", "brand.500")}
            objectFit={"cover"}
            objectPosition={"center top"}
            alt={"Profile picture"}
            justifySelf={{ base: "center", md: "end" }}
            boxShadow={useColorModeValue("xl", "dark-lg")}
          />
        </SimpleGrid>
        <SimpleGrid
          w={"full"}
          columns={{ base: 1, sm: 2, md: 2, lg: 5 }}
          spacing={3}
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
        </SimpleGrid>
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
  const isDisabled = url.trim().length === 0;
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const onClick = () => {
    trackSocial(name);
  };

  return (
    <ChakraBox
      w={"full"}
      whileHover={isDisabled ? undefined : { scale: 1.05 }}
      whileTap={isDisabled ? undefined : { scale: 0.95 }}
      tabIndex={-1}
    >
      <Stack
        direction={"row"}
        as={"a"}
        href={isDisabled ? undefined : url}
        target={isDisabled ? undefined : "_blank"}
        rel={isDisabled ? undefined : "noopener noreferrer"}
        aria-disabled={isDisabled}
        align={"center"}
        bg={useColorModeValue("brand.50", "brand.950")}
        border={"1px"}
        borderColor={useColorModeValue("brand.200", "brand.700")}
        w={"full"}
        h={"52px"}
        justify={"center"}
        px={4}
        py={2}
        rounded={"full"}
        textDecoration={"none"}
        cursor={isDisabled ? "not-allowed" : "pointer"}
        opacity={isDisabled ? 0.7 : 1}
        _hover={
          isDisabled
            ? { textDecoration: "none" }
            : {
                bg: useColorModeValue(hover.bg[0], hover.bg[1]),
                color: hover.color,
                borderColor: useColorModeValue("brand.300", "brand.500"),
              }
        }
        tabIndex={isDisabled ? -1 : 0}
        onClick={isDisabled ? undefined : onClick}
      >
        <Icon as={icon} />
        <Text
          fontWeight={"semibold"}
          fontSize={{ base: "sm", md: "md" }}
          whiteSpace={"nowrap"}
        >
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
