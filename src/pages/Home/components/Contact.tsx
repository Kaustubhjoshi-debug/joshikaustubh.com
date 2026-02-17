import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { me } from "../../../me";

export const Contact = () => {
  return (
    <Flex
      id="contact"
      w={"full"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      maxW={"container.xl"}
      px={4}
      py={{ base: 8, md: 12 }}
      tabIndex={-1}
    >
      <Box w={"full"} maxW={"980px"}>
        <Text
          fontSize={"sm"}
          fontWeight={"semibold"}
          textTransform={"uppercase"}
          letterSpacing={"0.1em"}
          color={useColorModeValue("brand.700", "brand.300")}
        >
          Connect
        </Text>
        <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }}>
          Contact Me
        </Heading>
      </Box>
      <Stack
        w={"full"}
        maxW={"980px"}
        mt={6}
        border={"1px"}
        borderColor={useColorModeValue("brand.200", "brand.700")}
        borderRadius={"2xl"}
        bg={useColorModeValue("whiteAlpha.900", "blackAlpha.300")}
        backdropFilter={"blur(6px)"}
        p={{ base: 5, md: 6 }}
      >
        <Text fontSize={{ base: "md", md: "lg" }}>
          I welcome research collaborations and speaking invitations at the intersection of translational neuroscience, aging biology, and bone cancers.
        </Text>
        <Text
          fontSize={{ base: "lg", md: "2xl" }}
          color={useColorModeValue("brand.700", "brand.200")}
          as={Link}
          href={`mailto:${me.contact.email}`}
          target="_blank"
          fontWeight={"semibold"}
          _hover={{ textDecoration: "underline", color: useColorModeValue("brand.600", "brand.300") }}
        >
          {me.contact.email}
        </Text>
      </Stack>
    </Flex>
  );
};

export default Contact;
