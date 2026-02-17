import {
  Badge,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { me } from "../../../me";

export const Talks = () => {
  return (
    <Flex
      id="talks"
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
          Scholarly Exchange
        </Text>
        <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }}>
          Talks & Invited Presentations
        </Heading>

        <Stack direction={"column"} spacing={4} mt={6}>
          {me.talks.map((talk) => (
            <Stack
              key={`${talk.title}-${talk.date}-${talk.venue}`}
              direction={"column"}
              spacing={2}
              p={{ base: 5, md: 6 }}
              border={"1px"}
              borderColor={useColorModeValue("brand.200", "brand.700")}
              borderRadius={"2xl"}
              bg={useColorModeValue("whiteAlpha.900", "blackAlpha.300")}
              backdropFilter={"blur(6px)"}
            >
              <Flex align={"center"} justify={"space-between"} wrap={"wrap"} gap={3}>
                <Text
                  fontSize={"sm"}
                  fontWeight={"semibold"}
                  letterSpacing={"0.08em"}
                  textTransform={"uppercase"}
                  color={useColorModeValue("brand.700", "brand.300")}
                >
                  {talk.date}
                </Text>
                <RoleBadge role={talk.role} />
              </Flex>
              <Heading as={"h3"} fontSize={{ base: "lg", md: "xl" }}>
                {talk.title}
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color={useColorModeValue("brand.800", "brand.100")}>
                {talk.venue}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

const RoleBadge = ({ role }: { role: "Invited" | "Oral" | "Poster" }) => {
  const colorScheme =
    role === "Invited" ? "purple" : role === "Oral" ? "blue" : "green";

  return (
    <Badge borderRadius={"full"} px={3} py={1} colorScheme={colorScheme}>
      {role}
    </Badge>
  );
};

export default Talks;
