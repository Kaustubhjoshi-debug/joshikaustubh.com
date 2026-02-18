import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { me } from "../../../me";

export const Talks = () => {
  const sortedTalks = [...me.talks].sort(
    (a, b) => Number(b.date.replace(/\D/g, "")) - Number(a.date.replace(/\D/g, ""))
  );

  const invitedCount = sortedTalks.filter((talk) => talk.role === "Invited").length;
  const oralCount = sortedTalks.filter((talk) => talk.role === "Oral").length;
  const posterCount = sortedTalks.filter((talk) => talk.role === "Poster").length;

  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const mutedText = useColorModeValue("gray.600", "gray.300");

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
          <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }} maxW={"760px"}>
            Talks & Invited Presentations
          </Heading>
          <Text color={mutedText} fontSize={{ base: "sm", md: "md" }} maxW={"760px"}>
            Structured speaking record with date, role, talk title, and venue.
          </Text>
          <Flex wrap={"wrap"} gap={{ base: 2, md: 4 }} color={mutedText} fontSize={{ base: "xs", md: "sm" }}>
            <StatItem label={"Total"} value={sortedTalks.length} />
            <StatItem label={"Invited"} value={invitedCount} />
            <StatItem label={"Oral"} value={oralCount} />
            <StatItem label={"Poster"} value={posterCount} />
          </Flex>
        </Stack>

        <Box border={"1px solid"} borderColor={borderColor} borderRadius={"xl"} overflow={"hidden"}>
          <TableContainer display={{ base: "none", md: "block" }} m={0}>
            <Table variant={"simple"} sx={{ tableLayout: "fixed", borderCollapse: "separate", borderSpacing: 0 }}>
              <colgroup>
                <col style={{ width: "112px" }} />
                <col style={{ width: "132px" }} />
                <col style={{ width: "44%" }} />
                <col />
              </colgroup>
              <Thead bg={useColorModeValue("blackAlpha.50", "whiteAlpha.50")}>
                <Tr>
                  <Th sx={tableHeaderCellStyles(borderColor, mutedText)}>Year</Th>
                  <Th sx={tableHeaderCellStyles(borderColor, mutedText)}>Role</Th>
                  <Th sx={tableHeaderCellStyles(borderColor, mutedText)}>Talk Title</Th>
                  <Th sx={tableHeaderCellStyles(borderColor, mutedText)}>Venue</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedTalks.map((talk) => (
                  <Tr key={`${talk.title}-${talk.date}-${talk.venue}`} _last={{ td: { borderBottom: "none" } }}>
                    <Td sx={tableBodyCellStyles(borderColor)}>
                      <Text
                        fontSize={"sm"}
                        fontWeight={"semibold"}
                        textTransform={"uppercase"}
                        letterSpacing={"0.06em"}
                        color={mutedText}
                      >
                        {talk.date}
                      </Text>
                    </Td>
                    <Td sx={tableBodyCellStyles(borderColor)}>
                      <RoleBadge role={talk.role} />
                    </Td>
                    <Td sx={tableBodyCellStyles(borderColor)}>
                      <Text
                        fontSize={"md"}
                        fontWeight={"semibold"}
                        color={useColorModeValue("gray.700", "gray.100")}
                        lineHeight={1.5}
                      >
                        {talk.title}
                      </Text>
                    </Td>
                    <Td sx={tableBodyCellStyles(borderColor)}>
                      <Text fontSize={"md"} color={useColorModeValue("gray.700", "gray.200")} lineHeight={1.55}>
                        {talk.venue}
                      </Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>

          <Stack display={{ base: "flex", md: "none" }} direction={"column"} spacing={0}>
            {sortedTalks.map((talk, index) => (
              <Grid
                key={`${talk.title}-${talk.date}-${talk.venue}-mobile`}
                templateColumns={"1fr"}
                gap={2.5}
                px={4}
                py={4}
                borderBottom={index === sortedTalks.length - 1 ? "none" : "1px solid"}
                borderColor={borderColor}
              >
                <RowLabel label={"Year"} value={talk.date} />
                <Box>
                  <Text
                    display={"inline"}
                    mr={2}
                    fontSize={"xs"}
                    fontWeight={"semibold"}
                    textTransform={"uppercase"}
                    letterSpacing={"0.06em"}
                    color={mutedText}
                  >
                    Role
                  </Text>
                  <RoleBadge role={talk.role} />
                </Box>
                <RowLabel label={"Talk Title"} value={talk.title} isStrong />
                <RowLabel label={"Venue"} value={talk.venue} />
              </Grid>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

const tableHeaderCellStyles = (borderColor: string, mutedText: string) => ({
  px: 5,
  py: 3,
  fontSize: "xs",
  fontWeight: "semibold",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: mutedText,
  borderBottom: "1px solid",
  borderColor,
});

const tableBodyCellStyles = (borderColor: string) => ({
  px: 5,
  py: 4.5,
  borderBottom: "1px solid",
  borderColor,
  verticalAlign: "top",
});

const RowLabel = ({
  label,
  value,
  isStrong,
}: {
  label: string;
  value: string;
  isStrong?: boolean;
}) => (
  <Stack spacing={0.5}>
    <Text
      display={{ base: "inline", md: "none" }}
      fontSize={"xs"}
      fontWeight={"semibold"}
      textTransform={"uppercase"}
      letterSpacing={"0.06em"}
      color={useColorModeValue("gray.600", "gray.300")}
    >
      {label}
    </Text>
    <Text
      fontSize={{ base: "sm", md: isStrong ? "md" : "sm" }}
      fontWeight={isStrong ? "semibold" : "medium"}
      color={useColorModeValue("gray.700", "gray.200")}
      lineHeight={1.5}
    >
      {value}
    </Text>
  </Stack>
);

const RoleBadge = ({ role }: { role: "Invited" | "Oral" | "Poster" }) => (
  <Badge
    borderRadius={"full"}
    px={3}
    py={1}
    fontSize={"0.72rem"}
    w={"fit-content"}
    color={useColorModeValue("gray.600", "gray.200")}
    bg={useColorModeValue("gray.100", "whiteAlpha.100")}
    border={"1px solid"}
    borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
  >
    {role}
  </Badge>
);

const StatItem = ({ label, value }: { label: string; value: number }) => (
  <Flex align={"center"} gap={1.5}>
    <Text as={"span"} fontWeight={"semibold"} color={useColorModeValue("gray.700", "gray.100")}>
      {value}
    </Text>
    <Text as={"span"}>{label}</Text>
  </Flex>
);

export default Talks;
