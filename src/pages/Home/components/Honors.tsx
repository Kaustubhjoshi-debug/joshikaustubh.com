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

type HonorGroup = "Funding/Fellowship" | "Award/Honor" | "Society Distinction";

export const Honors = () => {
  const sortedHonors = [...me.honors].sort(
    (a, b) => Number(b.year.replace(/\D/g, "")) - Number(a.year.replace(/\D/g, ""))
  );

  const fundingCount = sortedHonors.filter(
    (honor) => classifyHonor(honor.title) === "Funding/Fellowship"
  ).length;
  const awardCount = sortedHonors.filter((honor) => classifyHonor(honor.title) === "Award/Honor")
    .length;
  const societyCount = sortedHonors.filter(
    (honor) => classifyHonor(honor.title) === "Society Distinction"
  ).length;

  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const mutedText = useColorModeValue("gray.600", "gray.300");
  const railColor = useColorModeValue("gray.300", "whiteAlpha.300");
  const dotColor = useColorModeValue("gray.500", "gray.200");

  return (
    <Flex
      id="honors"
      w={"full"}
      maxW={"container.xl"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      px={4}
      py={{ base: 6, md: 10 }}
      tabIndex={-1}
    >
      <Stack w={"full"} maxW={"1040px"} spacing={{ base: 4, md: 6 }}>
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
          <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }} maxW={"760px"}>
            Funding, Fellowships & Honors
          </Heading>
          <Text color={mutedText} fontSize={{ base: "sm", md: "md" }} maxW={"760px"}>
            Milestone view of distinctions, fellowships, and society recognitions.
          </Text>
          <Flex wrap={"wrap"} gap={{ base: 2, md: 4 }} color={mutedText} fontSize={{ base: "xs", md: "sm" }}>
            <StatItem label={"Total"} value={sortedHonors.length} />
            <StatItem label={"Funding/Fellowship"} value={fundingCount} />
            <StatItem label={"Awards/Honors"} value={awardCount} />
            <StatItem label={"Society"} value={societyCount} />
          </Flex>
        </Stack>

        <Stack
          direction={"column"}
          spacing={0}
          border={"1px solid"}
          borderColor={borderColor}
          borderRadius={"xl"}
          overflow={"hidden"}
        >
          {sortedHonors.map((honor, index) => {
            const group = classifyHonor(honor.title);
            const isLast = index === sortedHonors.length - 1;

            return (
              <Box
                key={`${honor.title}-${honor.year}`}
                px={{ base: 4, md: 5 }}
                py={{ base: 3.5, md: 4.5 }}
                minH={{ base: "auto", md: "118px" }}
                borderBottom={isLast ? "none" : "1px solid"}
                borderColor={borderColor}
              >
                <Flex gap={{ base: 3, md: 5 }} align={"stretch"}>
                  <Stack
                    w={{ base: "74px", md: "112px" }}
                    flexShrink={0}
                    align={"center"}
                    spacing={2}
                    pt={0.5}
                  >
                    <Text
                      fontSize={{ base: "xs", md: "sm" }}
                      fontWeight={"semibold"}
                      textTransform={"uppercase"}
                      letterSpacing={"0.06em"}
                      color={mutedText}
                    >
                      {honor.year}
                    </Text>
                    <Box
                      position={"relative"}
                      w={"full"}
                      flex={1}
                      display={{ base: "none", md: "block" }}
                    >
                      <Box position={"absolute"} left={"50%"} top={0} bottom={0} w={"1px"} bg={railColor} />
                      <Box
                        position={"absolute"}
                        left={"calc(50% - 4px)"}
                        top={0}
                        boxSize={"8px"}
                        borderRadius={"full"}
                        bg={dotColor}
                      />
                    </Box>
                  </Stack>

                  <Stack spacing={{ base: 1.5, md: 2 }} flex={1}>
                    <Flex wrap={"wrap"} align={"center"} gap={2}>
                      <Text
                        fontWeight={"semibold"}
                        fontSize={{ base: "md", md: "lg" }}
                        lineHeight={1.45}
                        color={useColorModeValue("gray.700", "gray.100")}
                      >
                        {honor.title}
                      </Text>
                      <Badge
                        borderRadius={"full"}
                        px={3}
                        py={1}
                        fontSize={"0.72rem"}
                        color={mutedText}
                        bg={useColorModeValue("gray.100", "whiteAlpha.100")}
                        border={"1px solid"}
                        borderColor={borderColor}
                      >
                        {group}
                      </Badge>
                    </Flex>
                    <Text color={useColorModeValue("gray.700", "gray.200")} fontSize={{ base: "sm", md: "md" }}>
                      {honor.issuer}
                    </Text>
                    {honor.details && (
                      <Text color={mutedText} fontSize={{ base: "sm", md: "md" }}>
                        {honor.details}
                      </Text>
                    )}
                  </Stack>
                </Flex>
              </Box>
            );
          })}
        </Stack>
      </Stack>
    </Flex>
  );
};

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

const StatItem = ({ label, value }: { label: string; value: number }) => (
  <Flex align={"center"} gap={1.5}>
    <Text as={"span"} fontWeight={"semibold"} color={useColorModeValue("gray.700", "gray.100")}>
      {value}
    </Text>
    <Text as={"span"}>{label}</Text>
  </Flex>
);

export default Honors;
