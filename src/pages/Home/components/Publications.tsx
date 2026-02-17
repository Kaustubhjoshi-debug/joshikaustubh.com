import {
  Badge,
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBookOpen, FaCheckCircle, FaFileAlt, FaFlask } from "react-icons/fa";
import { me } from "../../../me";

type PublicationStatus =
  | "Published"
  | "In Press"
  | "Under Review"
  | "Preprint"
  | "In Preparation";

const groupOrder: {
  heading: string;
  description: string;
  statuses: readonly PublicationStatus[];
}[] = [
  {
    heading: "Peer-Reviewed, Preprints, and Under Review",
    description:
      "Verified and externally visible scholarly outputs prioritized for rapid evaluator review.",
    statuses: ["Published", "In Press", "Preprint", "Under Review"],
  },
  {
    heading: "Selected Ongoing Manuscripts (In Preparation)",
    description:
      "Active manuscripts being finalized for submission and internal review.",
    statuses: ["In Preparation"],
  },
];

export const Publications = () => {
  const indexedPublications = me.publications.map((publication, index) => ({
    ...publication,
    index: index + 1,
  }));
  const total = indexedPublications.length;
  const published = indexedPublications.filter((publication) =>
    ["Published", "In Press"].includes(publication.status)
  ).length;
  const visibleReview = indexedPublications.filter((publication) =>
    ["Preprint", "Under Review"].includes(publication.status)
  ).length;
  const inPreparation = indexedPublications.filter(
    (publication) => publication.status === "In Preparation"
  ).length;

  return (
    <Flex
      id="publications"
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
        borderColor={useColorModeValue("blue.200", "blue.800")}
        borderRadius={"3xl"}
        bg={useColorModeValue(
          "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(235,248,255,0.85) 100%)",
          "linear-gradient(135deg, rgba(13,18,31,0.85) 0%, rgba(29,58,102,0.45) 100%)"
        )}
        backdropFilter={"blur(8px)"}
        boxShadow={useColorModeValue("lg", "none")}
        p={{ base: 4, md: 8 }}
      >
        <Stack spacing={{ base: 1.5, md: 2 }}>
          <Flex align={"center"} gap={3}>
            <Icon as={FaBookOpen} color={useColorModeValue("blue.600", "blue.300")} />
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight={"semibold"}
              textTransform={"uppercase"}
              letterSpacing={"0.12em"}
              color={useColorModeValue("blue.700", "blue.200")}
            >
              Scholarship
            </Text>
          </Flex>
          <Heading
            as={"h2"}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontFamily={"Georgia, 'Times New Roman', serif"}
            letterSpacing={"-0.015em"}
          >
            Publications
          </Heading>
          <Text color={useColorModeValue("gray.700", "gray.200")} fontSize={{ base: "sm", md: "md" }}>
            Curated outputs in Vancouver-style citation format, organized for quick academic review.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 2, md: 3 }}>
          <SectionMetric label={"Total"} value={total} icon={FaBookOpen} />
          <SectionMetric label={"Published/In Press"} value={published} icon={FaCheckCircle} />
          <SectionMetric label={"Preprint/Under Review"} value={visibleReview} icon={FaFileAlt} />
          <SectionMetric label={"In Preparation"} value={inPreparation} icon={FaFlask} />
        </SimpleGrid>

        <Stack direction={"column"} spacing={6}>
          {groupOrder.map((group) => {
            const publications = indexedPublications.filter((publication) =>
              group.statuses.includes(publication.status)
            );

            if (publications.length === 0) {
              return null;
            }

            return (
              <Stack
                key={group.heading}
                spacing={{ base: 3, md: 4 }}
                p={{ base: 3.5, md: 5 }}
                border={"1px solid"}
                borderColor={useColorModeValue("blue.100", "blue.800")}
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
                  <Badge colorScheme={"blue"} borderRadius={"full"} px={3} py={1} fontSize={"0.72rem"}>
                    {publications.length} item{publications.length > 1 ? "s" : ""}
                  </Badge>
                </Flex>
                <Text color={useColorModeValue("gray.700", "gray.200")} fontSize={{ base: "sm", md: "md" }}>
                  {group.description}
                </Text>
                <Stack direction={"column"} spacing={{ base: 3, md: 4 }}>
                  {publications.map((publication) => (
                    <PublicationCard key={`${publication.title}-${publication.status}`} {...publication} />
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
  icon,
}: {
  label: string;
  value: number;
  icon: typeof FaBookOpen;
}) => (
  <Stack
    direction={"column"}
    spacing={0.25}
    p={{ base: 2.5, md: 3 }}
    border={"1px solid"}
    borderColor={useColorModeValue("blue.100", "blue.700")}
    borderRadius={"xl"}
    bg={useColorModeValue("whiteAlpha.900", "blackAlpha.400")}
  >
    <Flex align={"center"} gap={2}>
      <Icon as={icon} color={useColorModeValue("blue.600", "blue.300")} />
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

const PublicationCard = ({
  index,
  authors,
  title,
  journal,
  year,
  details,
  doi,
  pmid,
  status,
  url,
}: {
  index: number;
  authors: string;
  title: string;
  journal?: string;
  year?: string;
  details?: string;
  doi?: string;
  pmid?: string;
  status: PublicationStatus;
  url?: string;
}) => {
  const cardBg = useColorModeValue("whiteAlpha.900", "blackAlpha.300");
  const borderColor = useColorModeValue("brand.200", "brand.700");
  const accentColor = useColorModeValue(
    status === "Published"
      ? "green.500"
      : status === "In Press"
        ? "teal.500"
        : status === "Preprint"
          ? "orange.500"
          : status === "Under Review"
            ? "yellow.500"
            : "purple.500",
    status === "Published"
      ? "green.300"
      : status === "In Press"
        ? "teal.300"
        : status === "Preprint"
          ? "orange.300"
          : status === "Under Review"
            ? "yellow.300"
            : "purple.300"
  );
  const hasEvidenceLink = Boolean(doi || pmid || url);

  return (
    <Stack
      direction={"column"}
      spacing={{ base: 2.5, md: 3 }}
      p={{ base: 4, md: 6 }}
      border={"1px"}
      borderColor={borderColor}
      borderRadius={"2xl"}
      bg={cardBg}
      backdropFilter={"blur(6px)"}
      position={"relative"}
      overflow={"hidden"}
    >
      <Box
        position={"absolute"}
        left={0}
        top={0}
        bottom={0}
        w={"6px"}
        bg={accentColor}
      />
      <Flex align={"center"} justify={"space-between"} gap={4} wrap={"wrap"}>
        <Badge borderRadius={"full"} px={3} py={1} colorScheme={"blue"} fontSize={"0.7rem"}>
          Citation {index}
        </Badge>
        <StatusBadge status={status} />
      </Flex>
      <Text
        fontWeight={"semibold"}
        fontSize={{ base: "md", md: "xl" }}
        lineHeight={1.45}
        fontFamily={"Georgia, 'Times New Roman', serif"}
        letterSpacing={"-0.01em"}
      >
        {title}
      </Text>
      <Text lineHeight={1.7} fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.700", "gray.200")}>
        {authors}.
      </Text>
      {(journal || year || details) && (
        <Text color={useColorModeValue("gray.600", "gray.300")} fontSize={{ base: "xs", md: "sm" }}>
          {journal ? `${journal}` : ""}
          {journal && year ? " · " : ""}
          {year ? `${year}` : ""}
          {(journal || year) && details ? " · " : ""}
          {details ? `${details}` : ""}
        </Text>
      )}
      <Stack direction={"row"} spacing={4} wrap={"wrap"}>
        {doi && (
          <Link
            href={`https://doi.org/${doi}`}
            isExternal
            color={useColorModeValue("blue.700", "blue.200")}
            fontWeight={"medium"}
            fontSize={{ base: "xs", md: "sm" }}
          >
            DOI: {doi}
          </Link>
        )}
        {pmid && (
          <Link
            href={`https://pubmed.ncbi.nlm.nih.gov/${pmid}/`}
            isExternal
            color={useColorModeValue("blue.700", "blue.200")}
            fontWeight={"medium"}
            fontSize={{ base: "xs", md: "sm" }}
          >
            PMID: {pmid}
          </Link>
        )}
        {!doi && !pmid && url && (
          <Link
            href={url}
            isExternal
            color={useColorModeValue("blue.700", "blue.200")}
            fontWeight={"medium"}
            fontSize={{ base: "xs", md: "sm" }}
          >
            {status === "Preprint" ? "Preprint" : "Link"}
          </Link>
        )}
        {!hasEvidenceLink && (
          <Text fontSize={{ base: "xs", md: "sm" }} color={useColorModeValue("gray.600", "gray.300")}>
            Evidence link pending
          </Text>
        )}
      </Stack>
    </Stack>
  );
};

const StatusBadge = ({
  status,
}: {
  status: PublicationStatus;
}) => {
  const colorScheme =
    status === "Published"
      ? "green"
      : status === "In Press"
        ? "teal"
        : status === "Preprint"
          ? "orange"
          : status === "Under Review"
            ? "yellow"
            : "purple";

  return (
    <Badge borderRadius={"full"} px={3} py={1} colorScheme={colorScheme}>
      {status}
    </Badge>
  );
};

export default Publications;
