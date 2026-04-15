import {
  Badge,
  chakra,
  Grid,
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
  const heroTags = [
    "Translational Neuroscience",
    "Cardiac Engineering",
    "Aging Biology",
    "Cancer Biology",
  ];

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
        base: 6,
        md: 8,
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
          base: 6,
          md: 12,
        }}
        justify={"space-between"}
        spacing={{ base: 8, md: 10 }}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "minmax(0, 1.45fr) minmax(260px, 0.55fr)" }}
          columnGap={{ base: 0, md: 10 }}
          rowGap={{ base: 8, md: 10 }}
          alignItems={"center"}
        >
          <Stack direction={"column"} spacing={4} w={"full"}>
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
              bgGradient={useColorModeValue(
                "linear(to-r, brand.700, cyan.500)",
                "linear(to-r, brand.200, cyan.200)"
              )}
              bgClip={"text"}
              letterSpacing={"0.01em"}
            >
              {me.subtitle}
            </Heading>
            <Stack direction={"row"} wrap={"wrap"} spacing={2}>
              {heroTags.map((tag) => (
                <Badge
                  key={tag}
                  borderRadius={"full"}
                  px={3}
                  py={1}
                  fontSize={"0.72rem"}
                  border={"1px solid"}
                  borderColor={useColorModeValue("brand.300", "brand.600")}
                  bg={useColorModeValue("brand.50", "whiteAlpha.100")}
                  color={useColorModeValue("brand.700", "brand.100")}
                >
                  {tag}
                </Badge>
              ))}
            </Stack>
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
        </Grid>
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
