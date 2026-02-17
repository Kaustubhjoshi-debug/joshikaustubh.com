import {
  Badge,
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

export const Talks = () => {
  const sortedTalks = [...me.talks].sort(
    (a, b) => Number(b.date.replace(/\D/g, "")) - Number(a.date.replace(/\D/g, ""))
  );
  const invitedCount = sortedTalks.filter((talk) => talk.role === "Invited").length;
  const oralCount = sortedTalks.filter((talk) => talk.role === "Oral").length;
  const posterCount = sortedTalks.filter((talk) => talk.role === "Poster").length;
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const subduedText = useColorModeValue("gray.600", "gray.300");

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
      <Stack w={"full"} maxW={"1040px"} spacing={{ base: 5, md: 8 }}>
        <Stack spacing={2}>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight={"semibold"}
            textTransform={"uppercase"}
            letterSpacing={"0.12em"}
            color={useColorModeValue("brand.700", "brand.300")}
          >
            Scholarly Exchange
          </Text>
          <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }} maxW={HEADING_MAX_W}>
            Talks & Invited Presentations
          </Heading>
          <Text color={subduedText} fontSize={{ base: "sm", md: "md" }} maxW={HEADING_MAX_W}>
            Chronological speaking record with venue, role, and presentation title for quick committee review.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 2, md: 3 }}>
          <SectionMetric label={"Total"} value={sortedTalks.length} />
          <SectionMetric label={"Invited"} value={invitedCount} />
          <SectionMetric label={"Oral"} value={oralCount} />
          <SectionMetric label={"Poster"} value={posterCount} />
        </SimpleGrid>

        <Stack
          direction={"column"}
          spacing={0}
          border={"1px solid"}
          borderColor={borderColor}
          borderRadius={"xl"}
          overflow={"hidden"}
        >
          {sortedTalks.map((talk, index) => (
            <Grid
              key={`${talk.title}-${talk.date}-${talk.venue}`}
              templateColumns={{ base: "1fr", md: "112px 112px 1fr" }}
              gap={{ base: 2.5, md: 4 }}
              px={{ base: 4, md: 5 }}
              py={{ base: 4, md: 4.5 }}
              minH={ROW_MIN_H}
              alignItems={"start"}
              borderBottom={index === sortedTalks.length - 1 ? "none" : "1px solid"}
              borderColor={borderColor}
            >
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight={"semibold"}
                textTransform={"uppercase"}
                letterSpacing={"0.06em"}
                color={subduedText}
              >
                {talk.date}
              </Text>
              <RoleBadge role={talk.role} />
              <Stack spacing={1}>
                <Text fontWeight={"semibold"} fontSize={{ base: "md", md: "lg" }} lineHeight={1.45}>
                  {talk.title}
                </Text>
                <Text color={useColorModeValue("gray.700", "gray.200")} fontSize={{ base: "sm", md: "md" }}>
                  {talk.venue}
                </Text>
              </Stack>
            </Grid>
          ))}
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

const RoleBadge = ({ role }: { role: "Invited" | "Oral" | "Poster" }) => (
  <Badge
    borderRadius={"full"}
    px={3}
    py={1}
    fontSize={META_BADGE_FONT}
    w={"fit-content"}
    color={useColorModeValue("gray.600", "gray.200")}
    bg={useColorModeValue("gray.100", "whiteAlpha.100")}
    border={"1px solid"}
    borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
  >
    {role}
  </Badge>
);

export default Talks;
