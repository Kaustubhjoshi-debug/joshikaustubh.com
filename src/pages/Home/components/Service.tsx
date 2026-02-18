import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { me } from "../../../me";

export const Service = () => {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <Flex
      id="service"
      align={"center"}
      justify={"center"}
      direction={"column"}
      maxW={"container.xl"}
      w={"full"}
      px={4}
      py={{ base: 5, md: 8 }}
      tabIndex={-1}
    >
      <Box w={"full"} maxW={"1040px"}>
        <Text
          fontSize={"sm"}
          fontWeight={"semibold"}
          textTransform={"uppercase"}
          letterSpacing={"0.1em"}
          color={useColorModeValue("brand.700", "brand.300")}
        >
          Academic Service
        </Text>
        <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }}>
          Professional Service
        </Heading>

        <Stack direction={"column"} spacing={3} mt={4}>
          {me.professionalService.map((entry, index) => (
            <Stack
              key={`${entry.company}-${entry.position}-${index}`}
              direction={"column"}
              spacing={2}
              p={{ base: 3.5, md: 4.5 }}
              border={"1px"}
              borderColor={borderColor}
              borderRadius={"xl"}
              bg={useColorModeValue("whiteAlpha.900", "blackAlpha.300")}
              backdropFilter={"blur(6px)"}
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                justify={"space-between"}
                align={{ base: "start", md: "center" }}
                gap={1}
              >
                <Heading as={"h3"} fontSize={{ base: "lg", md: "xl" }}>
                  {entry.company}
                </Heading>
                <Text
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight={"semibold"}
                  textTransform={"uppercase"}
                  letterSpacing={"0.08em"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  {entry.duration}
                </Text>
              </Flex>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"medium"}>
                {entry.position}
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.600", "gray.300")}>
                {entry.location}
              </Text>
              <Stack as={"ul"} spacing={1.5} pl={4}>
                {entry.bullets.map((bullet) => (
                  <Text as={"li"} key={bullet} fontSize={{ base: "sm", md: "md" }}>
                    {bullet}
                  </Text>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

export default Service;
