import {
  Badge,
  Box,
  Flex,
  Heading,
  Link,
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
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const subduedText = useColorModeValue("gray.600", "gray.300");

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
      <Stack w={"full"} maxW={"1040px"} spacing={{ base: 5, md: 8 }}>
        <Stack spacing={2}>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight={"semibold"}
            textTransform={"uppercase"}
            letterSpacing={"0.12em"}
            color={useColorModeValue("brand.700", "brand.300")}
          >
            Scholarship
          </Text>
          <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }} maxW={HEADING_MAX_W}>
            Publications
          </Heading>
          <Text color={subduedText} fontSize={{ base: "sm", md: "md" }} maxW={HEADING_MAX_W}>
            Curated outputs in Vancouver-style citation format, organized for quick academic review.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 2, md: 3 }}>
          <SectionMetric label={"Total"} value={total} />
          <SectionMetric label={"Published/In Press"} value={published} />
          <SectionMetric label={"Preprint/Under Review"} value={visibleReview} />
          <SectionMetric label={"In Preparation"} value={inPreparation} />
        </SimpleGrid>

        <Stack direction={"column"} spacing={{ base: 5, md: 6 }}>
          {groupOrder.map((group) => {
            const publications = indexedPublications.filter((publication) =>
              group.statuses.includes(publication.status)
            );

            if (publications.length === 0) {
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
                    {publications.length} item{publications.length > 1 ? "s" : ""}
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
                  {publications.map((publication, index) => (
                    <PublicationRow
                      key={`${publication.title}-${publication.status}`}
                      isLast={index === publications.length - 1}
                      {...publication}
                    />
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

const PublicationRow = ({
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
  isLast,
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
  isLast: boolean;
}) => {
  const hasEvidenceLink = Boolean(doi || pmid || url);
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const subduedText = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      px={{ base: 4, md: 5 }}
      py={{ base: 4, md: 5 }}
      minH={ROW_MIN_H}
      borderBottom={isLast ? "none" : "1px solid"}
      borderColor={borderColor}
    >
      <Stack spacing={{ base: 2.5, md: 3 }}>
        <Flex align={"center"} justify={"space-between"} gap={3} wrap={"wrap"}>
          <Text fontSize={"xs"} color={subduedText}>
            Citation {index}
          </Text>
          <StatusBadge status={status} />
        </Flex>
        <Text fontWeight={"semibold"} fontSize={{ base: "md", md: "lg" }} lineHeight={1.45}>
          {title}
        </Text>
        <Text lineHeight={1.7} fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.700", "gray.200")}>
          {authors}.
        </Text>
        {(journal || year || details) && (
          <Text color={subduedText} fontSize={{ base: "xs", md: "sm" }}>
            {journal ? `${journal}` : ""}
            {journal && year ? " · " : ""}
            {year ? `${year}` : ""}
            {(journal || year) && details ? " · " : ""}
            {details ? `${details}` : ""}
          </Text>
        )}
        <Flex direction={"row"} gap={4} wrap={"wrap"}>
          {doi && (
            <Link
              href={`https://doi.org/${doi}`}
              isExternal
              color={useColorModeValue("brand.700", "brand.300")}
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
              color={useColorModeValue("brand.700", "brand.300")}
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
              color={useColorModeValue("brand.700", "brand.300")}
              fontWeight={"medium"}
              fontSize={{ base: "xs", md: "sm" }}
            >
              {status === "Preprint" ? "Preprint" : "Link"}
            </Link>
          )}
          {!hasEvidenceLink && (
            <Text fontSize={{ base: "xs", md: "sm" }} color={subduedText}>
              Evidence link pending
            </Text>
          )}
        </Flex>
      </Stack>
    </Box>
  );
};

const StatusBadge = ({
  status,
}: {
  status: PublicationStatus;
}) => (
  <Badge
    borderRadius={"full"}
    px={3}
    py={1}
    fontSize={META_BADGE_FONT}
    color={useColorModeValue("gray.600", "gray.200")}
    bg={useColorModeValue("gray.100", "whiteAlpha.100")}
    border={"1px solid"}
    borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
  >
    {status}
  </Badge>
);

export default Publications;
