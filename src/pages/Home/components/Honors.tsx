import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { me } from "../../../me";

export const Honors = () => {
  return (
    <Flex
      id="honors"
      w={"full"}
      maxW={"container.xl"}
      align={"center"}
      justify={"center"}
      direction={"column"}
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
          Recognition
        </Text>
        <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }}>
          Funding, Fellowships & Honors
        </Heading>

        <Stack direction={"column"} spacing={4} mt={6}>
          {me.honors.map((honor) => (
            <Stack
              key={`${honor.title}-${honor.year}`}
              direction={"column"}
              spacing={2}
              p={{ base: 5, md: 6 }}
              border={"1px"}
              borderColor={useColorModeValue("brand.200", "brand.700")}
              borderRadius={"2xl"}
              bg={useColorModeValue("whiteAlpha.900", "blackAlpha.300")}
              backdropFilter={"blur(6px)"}
            >
              <Text
                fontSize={"sm"}
                fontWeight={"semibold"}
                letterSpacing={"0.08em"}
                textTransform={"uppercase"}
                color={useColorModeValue("brand.700", "brand.300")}
              >
                {honor.year}
              </Text>
              <Heading as={"h3"} fontSize={{ base: "lg", md: "xl" }}>
                {honor.title}
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color={useColorModeValue("brand.800", "brand.100")}>
                {honor.issuer}
              </Text>
              {honor.details && (
                <Text fontSize={{ base: "md", md: "lg" }} color={useColorModeValue("brand.700", "brand.200")}>
                  {honor.details}
                </Text>
              )}
            </Stack>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

export default Honors;
