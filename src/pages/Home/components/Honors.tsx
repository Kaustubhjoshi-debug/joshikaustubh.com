import {
  Badge,
  Box,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaAward,
  FaMedal,
  FaRibbon,
  FaSeedling,
  FaUniversity,
} from "react-icons/fa";
import { me } from "../../../me";

type HonorGroup = "Funding/Fellowship" | "Award/Honor" | "Society Distinction";

const groupOrder: {
  heading: HonorGroup;
  description: string;
}[] = [
  {
    heading: "Funding/Fellowship",
    description:
      "Competitive support and training awards that signal trajectory and institutional confidence.",
  },
  {
    heading: "Award/Honor",
    description:
      "Performance recognitions tied to research outcomes and scholarly contributions.",
  },
  {
    heading: "Society Distinction",
    description:
      "Professional-society invitations and memberships that reflect external standing.",
  },
];

export const Honors = () => {
  const groupedHonors = groupOrder.map((group) => ({
    ...group,
    entries: me.honors.filter((honor) => classifyHonor(honor.title) === group.heading),
  }));
  const fundingCount = groupedHonors.find((group) => group.heading === "Funding/Fellowship")?.entries.length ?? 0;
  const awardsCount = groupedHonors.find((group) => group.heading === "Award/Honor")?.entries.length ?? 0;
  const societyCount = groupedHonors.find((group) => group.heading === "Society Distinction")?.entries.length ?? 0;

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
      <Stack
        w={"full"}
        maxW={"1040px"}
        spacing={{ base: 5, md: 6 }}
        border={"1px solid"}
        borderColor={useColorModeValue("green.200", "green.700")}
        borderRadius={"3xl"}
        bg={useColorModeValue(
          "linear-gradient(140deg, rgba(255,255,255,0.95) 0%, rgba(240,253,250,0.95) 52%, rgba(167,243,208,0.2) 100%)",
          "linear-gradient(140deg, rgba(13,35,30,0.82) 0%, rgba(10,80,62,0.45) 100%)"
        )}
        backdropFilter={"blur(8px)"}
        boxShadow={useColorModeValue("lg", "none")}
        p={{ base: 4, md: 8 }}
      >
        <Stack spacing={{ base: 1.5, md: 2 }}>
          <Flex align={"center"} gap={3}>
            <Icon as={FaAward} color={useColorModeValue("green.600", "green.300")} />
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight={"semibold"}
              textTransform={"uppercase"}
              letterSpacing={"0.12em"}
              color={useColorModeValue("green.700", "green.200")}
            >
              Recognition
            </Text>
          </Flex>
          <Heading
            as={"h2"}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontFamily={"Georgia, 'Times New Roman', serif"}
            letterSpacing={"-0.015em"}
          >
            Funding, Fellowships & Honors
          </Heading>
          <Text color={useColorModeValue("gray.700", "gray.200")} fontSize={{ base: "sm", md: "md" }}>
            Key distinctions organized by award type and awarding body for committee-ready review.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 2, md: 3 }}>
          <SectionMetric label={"Total"} value={me.honors.length} icon={FaAward} />
          <SectionMetric label={"Funding/Fellowship"} value={fundingCount} icon={FaSeedling} />
          <SectionMetric label={"Awards/Honors"} value={awardsCount} icon={FaMedal} />
          <SectionMetric label={"Society"} value={societyCount} icon={FaUniversity} />
        </SimpleGrid>

        <Stack direction={"column"} spacing={6}>
          {groupedHonors.map((group) => {
            if (group.entries.length === 0) {
              return null;
            }

            return (
              <Stack
                key={group.heading}
                spacing={{ base: 3, md: 4 }}
                p={{ base: 3.5, md: 5 }}
                border={"1px solid"}
                borderColor={useColorModeValue("green.100", "green.800")}
                borderRadius={"2xl"}
                bg={useColorModeValue("whiteAlpha.900", "blackAlpha.400")}
              >
                <Flex align={"center"} justify={"space-between"} gap={3} wrap={"wrap"}>
                  <Heading
                    as={"h3"}
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontFamily={"Georgia, 'Times New Roman', serif"}
                    letterSpacing={"-0.01em"}
                  >
                    {group.heading}
                  </Heading>
                  <Badge colorScheme={"green"} borderRadius={"full"} px={3} py={1} fontSize={"0.72rem"}>
                    {group.entries.length} item{group.entries.length > 1 ? "s" : ""}
                  </Badge>
                </Flex>
                <Text color={useColorModeValue("gray.700", "gray.200")} fontSize={{ base: "sm", md: "md" }}>
                  {group.description}
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 3, md: 4 }}>
                  {group.entries.map((honor) => (
                    <Stack
                      key={`${honor.title}-${honor.year}`}
                      direction={"column"}
                      spacing={{ base: 1.5, md: 2 }}
                      p={{ base: 4, md: 5 }}
                      border={"1px"}
                      borderColor={useColorModeValue("green.200", "green.700")}
                      borderRadius={"xl"}
                      bg={useColorModeValue("whiteAlpha.900", "blackAlpha.300")}
                      position={"relative"}
                      overflow={"hidden"}
                    >
                      <Box
                        position={"absolute"}
                        left={0}
                        top={0}
                        bottom={0}
                        w={"5px"}
                        bg={groupAccentColor(group.heading)}
                      />
                      <Flex align={"center"} justify={"space-between"} gap={3} wrap={"wrap"}>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          fontWeight={"semibold"}
                          letterSpacing={"0.08em"}
                          textTransform={"uppercase"}
                          color={useColorModeValue("green.700", "green.200")}
                        >
                          {honor.year}
                        </Text>
                        <Badge
                          borderRadius={"full"}
                          px={3}
                          py={1}
                          colorScheme={"green"}
                          variant={"subtle"}
                          fontSize={"0.68rem"}
                        >
                          {group.heading}
                        </Badge>
                      </Flex>
                      <Heading
                        as={"h4"}
                        fontSize={{ base: "md", md: "lg" }}
                        fontFamily={"Georgia, 'Times New Roman', serif"}
                        letterSpacing={"-0.01em"}
                        lineHeight={1.45}
                      >
                        {honor.title}
                      </Heading>
                      <Flex align={"start"} gap={2}>
                        <Icon as={FaRibbon} mt={1} color={useColorModeValue("brand.600", "brand.300")} />
                        <Text color={useColorModeValue("gray.700", "gray.200")} fontSize={{ base: "sm", md: "md" }}>
                          {honor.issuer}
                        </Text>
                      </Flex>
                      {honor.details && (
                        <Text color={useColorModeValue("gray.600", "gray.300")} fontSize={{ base: "sm", md: "md" }}>
                          {honor.details}
                        </Text>
                      )}
                    </Stack>
                  ))}
                </SimpleGrid>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Flex>
  );
};

const SectionMetric = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: typeof FaAward;
}) => (
  <Stack
    direction={"column"}
    spacing={0.25}
    p={{ base: 2.5, md: 3 }}
    border={"1px solid"}
    borderColor={useColorModeValue("green.100", "green.700")}
    borderRadius={"xl"}
    bg={useColorModeValue("whiteAlpha.900", "blackAlpha.400")}
  >
    <Flex align={"center"} gap={2}>
      <Icon as={icon} color={useColorModeValue("green.600", "green.300")} />
      <Text fontSize={{ base: "xs", md: "sm" }} color={useColorModeValue("gray.700", "gray.300")}>
        {label}
      </Text>
    </Flex>
    <Heading
      as={"h3"}
      fontSize={{ base: "lg", md: "2xl" }}
      fontFamily={"Georgia, 'Times New Roman', serif"}
      letterSpacing={"-0.01em"}
    >
      {value}
    </Heading>
  </Stack>
);

const classifyHonor = (title: string): HonorGroup => {
  const lower = title.toLowerCase();
  if (lower.includes("fellowship")) {
    return "Funding/Fellowship";
  }
  if (lower.includes("membership") || lower.includes("invitation")) {
    return "Society Distinction";
  }
  return "Award/Honor";
};

const groupAccentColor = (group: HonorGroup) => {
  if (group === "Funding/Fellowship") {
    return "green.400";
  }
  if (group === "Society Distinction") {
    return "cyan.400";
  }
  return "yellow.400";
};

export default Honors;
