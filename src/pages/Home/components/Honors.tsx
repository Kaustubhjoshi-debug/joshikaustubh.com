import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { me } from "../../../me";

const HEADING_MAX_W = "760px";
const META_BADGE_FONT = "0.72rem";
const ROW_MIN_H = { base: "auto", md: "132px" };
const METRIC_MIN_H = { base: "74px", md: "96px" };

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
  const fundingCount =
    groupedHonors.find((group) => group.heading === "Funding/Fellowship")?.entries.length ?? 0;
  const awardsCount =
    groupedHonors.find((group) => group.heading === "Award/Honor")?.entries.length ?? 0;
  const societyCount =
    groupedHonors.find((group) => group.heading === "Society Distinction")?.entries.length ?? 0;
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const subduedText = useColorModeValue("gray.600", "gray.300");

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
      <Stack w={"full"} maxW={"1040px"} spacing={{ base: 5, md: 8 }}>
        <Stack spacing={2}>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight={"semibold"}
            textTransform={"uppercase"}
            letterSpacing={"0.12em"}
            color={useColorModeValue("brand.700", "brand.300")}
          >
            Recognition
          </Text>
          <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }} maxW={HEADING_MAX_W}>
            Funding, Fellowships & Honors
          </Heading>
          <Text color={subduedText} fontSize={{ base: "sm", md: "md" }} maxW={HEADING_MAX_W}>
            Key distinctions organized by award type and awarding body for committee-ready review.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 2, md: 3 }}>
          <SectionMetric label={"Total"} value={me.honors.length} />
          <SectionMetric label={"Funding/Fellowship"} value={fundingCount} />
          <SectionMetric label={"Awards/Honors"} value={awardsCount} />
          <SectionMetric label={"Society"} value={societyCount} />
        </SimpleGrid>

        <Stack direction={"column"} spacing={{ base: 5, md: 6 }}>
          {groupedHonors.map((group) => {
            if (group.entries.length === 0) {
              return null;
            }

            return (
              <Stack key={group.heading} spacing={{ base: 3, md: 4 }}>
                <Flex align={"center"} justify={"space-between"} gap={3} wrap={"wrap"}>
                  <Heading as={"h3"} fontSize={{ base: "xl", md: "2xl" }} maxW={HEADING_MAX_W}>
                    {group.heading}
                  </Heading>
                  <Badge
                    borderRadius={"full"}
                    px={3}
                    py={1}
                    fontSize={META_BADGE_FONT}
                    color={subduedText}
                    bg={useColorModeValue("gray.100", "whiteAlpha.100")}
                    border={"1px solid"}
                    borderColor={borderColor}
                  >
                    {group.entries.length} item{group.entries.length > 1 ? "s" : ""}
                  </Badge>
                </Flex>
                <Text color={subduedText} fontSize={{ base: "sm", md: "md" }} maxW={HEADING_MAX_W}>
                  {group.description}
                </Text>
                <Stack
                  direction={"column"}
                  spacing={0}
                  border={"1px solid"}
                  borderColor={borderColor}
                  borderRadius={"xl"}
                  overflow={"hidden"}
                >
                  {group.entries.map((honor, index) => (
                    <Box
                      key={`${honor.title}-${honor.year}`}
                      px={{ base: 4, md: 5 }}
                      py={{ base: 4, md: 4.5 }}
                      minH={ROW_MIN_H}
                      borderBottom={index === group.entries.length - 1 ? "none" : "1px solid"}
                      borderColor={borderColor}
                    >
                      <Grid templateColumns={{ base: "1fr", md: "112px 1fr" }} gap={{ base: 2.5, md: 4 }}>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          fontWeight={"semibold"}
                          textTransform={"uppercase"}
                          letterSpacing={"0.06em"}
                          color={subduedText}
                        >
                          {honor.year}
                        </Text>
                        <Stack spacing={1}>
                          <Text fontWeight={"semibold"} fontSize={{ base: "md", md: "lg" }} lineHeight={1.45}>
                            {honor.title}
                          </Text>
                          <Text color={useColorModeValue("gray.700", "gray.200")} fontSize={{ base: "sm", md: "md" }}>
                            {honor.issuer}
                          </Text>
                          {honor.details && (
                            <Text color={subduedText} fontSize={{ base: "sm", md: "md" }}>
                              {honor.details}
                            </Text>
                          )}
                        </Stack>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
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
}: {
  label: string;
  value: number;
}) => (
  <Stack
    direction={"column"}
    spacing={0.5}
    p={{ base: 2.5, md: 3 }}
    minH={METRIC_MIN_H}
    border={"1px solid"}
    borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
    borderRadius={"lg"}
  >
    <Text fontSize={{ base: "xs", md: "sm" }} color={useColorModeValue("gray.600", "gray.300")}>
      {label}
    </Text>
    <Heading as={"h3"} fontSize={{ base: "lg", md: "2xl" }}>
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

export default Honors;
