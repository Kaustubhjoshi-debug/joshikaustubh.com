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
  FaBullhorn,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaMapMarkerAlt,
  FaMicrophoneAlt,
  FaRegDotCircle,
} from "react-icons/fa";
import { me } from "../../../me";

export const Talks = () => {
  const sortedTalks = [...me.talks].sort(
    (a, b) => Number(b.date.replace(/\D/g, "")) - Number(a.date.replace(/\D/g, ""))
  );
  const invitedCount = sortedTalks.filter((talk) => talk.role === "Invited").length;
  const oralCount = sortedTalks.filter((talk) => talk.role === "Oral").length;
  const posterCount = sortedTalks.filter((talk) => talk.role === "Poster").length;

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
      <Stack
        w={"full"}
        maxW={"1040px"}
        spacing={{ base: 5, md: 6 }}
        border={"1px solid"}
        borderColor={useColorModeValue("orange.200", "orange.700")}
        borderRadius={"3xl"}
        bg={useColorModeValue(
          "linear-gradient(140deg, rgba(255,255,255,0.95) 0%, rgba(255,247,237,0.92) 55%, rgba(254,215,170,0.2) 100%)",
          "linear-gradient(140deg, rgba(21,23,32,0.85) 0%, rgba(120,72,20,0.45) 100%)"
        )}
        backdropFilter={"blur(8px)"}
        boxShadow={useColorModeValue("lg", "none")}
        p={{ base: 4, md: 8 }}
      >
        <Stack spacing={{ base: 1.5, md: 2 }}>
          <Flex align={"center"} gap={3}>
            <Icon as={FaBullhorn} color={useColorModeValue("orange.600", "orange.300")} />
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight={"semibold"}
              textTransform={"uppercase"}
              letterSpacing={"0.12em"}
              color={useColorModeValue("orange.700", "orange.200")}
            >
              Scholarly Exchange
            </Text>
          </Flex>
          <Heading
            as={"h2"}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontFamily={"Georgia, 'Times New Roman', serif"}
            letterSpacing={"-0.015em"}
          >
            Talks & Invited Presentations
          </Heading>
          <Text color={useColorModeValue("gray.700", "gray.200")} fontSize={{ base: "sm", md: "md" }}>
            Chronological speaking record with venue, role, and presentation title for quick committee review.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 2, md: 3 }}>
          <SectionMetric label={"Total"} value={sortedTalks.length} icon={FaBullhorn} />
          <SectionMetric label={"Invited"} value={invitedCount} icon={FaChalkboardTeacher} />
          <SectionMetric label={"Oral"} value={oralCount} icon={FaMicrophoneAlt} />
          <SectionMetric label={"Poster"} value={posterCount} icon={FaRegDotCircle} />
        </SimpleGrid>

        <Stack direction={"column"} spacing={{ base: 3, md: 5 }}>
          {sortedTalks.map((talk, index) => (
            <Flex key={`${talk.title}-${talk.date}-${talk.venue}`} align={"stretch"} gap={{ base: 0, md: 4 }}>
              <Box
                position={"relative"}
                w={"28px"}
                flexShrink={0}
                display={{ base: "none", md: "block" }}
              >
                <Box
                  position={"absolute"}
                  left={"13px"}
                  top={0}
                  bottom={index === sortedTalks.length - 1 ? "50%" : 0}
                  w={"2px"}
                  bg={useColorModeValue("orange.200", "orange.700")}
                />
                <Box
                  position={"absolute"}
                  left={"8px"}
                  top={"24px"}
                  boxSize={"12px"}
                  borderRadius={"full"}
                  bg={roleAccentColor(talk.role)}
                  border={"2px solid"}
                  borderColor={useColorModeValue("white", "gray.800")}
                />
              </Box>
              <Stack
                direction={"column"}
                spacing={{ base: 2.5, md: 3 }}
                p={{ base: 4, md: 6 }}
                border={"1px"}
                borderColor={useColorModeValue("orange.100", "orange.800")}
                borderRadius={"2xl"}
                bg={useColorModeValue("whiteAlpha.900", "blackAlpha.400")}
                backdropFilter={"blur(6px)"}
                flex={1}
              >
                <Flex align={"center"} justify={"space-between"} wrap={"wrap"} gap={3}>
                  <Flex align={"center"} gap={2}>
                    <Icon as={FaCalendarAlt} color={useColorModeValue("orange.600", "orange.300")} />
                    <Text
                      fontSize={{ base: "xs", md: "sm" }}
                      fontWeight={"semibold"}
                      letterSpacing={"0.08em"}
                      textTransform={"uppercase"}
                      color={useColorModeValue("orange.700", "orange.200")}
                    >
                      {talk.date}
                    </Text>
                  </Flex>
                  <RoleBadge role={talk.role} />
                </Flex>
                <Heading
                  as={"h3"}
                  fontSize={{ base: "md", md: "xl" }}
                  lineHeight={1.45}
                  fontFamily={"Georgia, 'Times New Roman', serif"}
                  letterSpacing={"-0.01em"}
                >
                  {talk.title}
                </Heading>
                <Flex align={"start"} gap={2}>
                  <Icon
                    as={FaMapMarkerAlt}
                    mt={1}
                    color={useColorModeValue("brand.600", "brand.300")}
                  />
                  <Text fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.700", "gray.200")}>
                    {talk.venue}
                  </Text>
                </Flex>
              </Stack>
            </Flex>
          ))}
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
  icon: typeof FaBullhorn;
}) => (
  <Stack
    direction={"column"}
    spacing={0.25}
    p={{ base: 2.5, md: 3 }}
    border={"1px solid"}
    borderColor={useColorModeValue("orange.100", "orange.700")}
    borderRadius={"xl"}
    bg={useColorModeValue("whiteAlpha.900", "blackAlpha.400")}
  >
    <Flex align={"center"} gap={2}>
      <Icon as={icon} color={useColorModeValue("orange.600", "orange.300")} />
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

const RoleBadge = ({ role }: { role: "Invited" | "Oral" | "Poster" }) => {
  const colorScheme =
    role === "Invited" ? "purple" : role === "Oral" ? "blue" : "green";

  return (
    <Badge borderRadius={"full"} px={3} py={1} colorScheme={colorScheme} fontSize={"0.72rem"}>
      {role}
    </Badge>
  );
};

const roleAccentColor = (role: "Invited" | "Oral" | "Poster") => {
  if (role === "Invited") {
    return "purple.400";
  }
  if (role === "Oral") {
    return "blue.400";
  }
  return "green.400";
};

export default Talks;
