import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
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
  const underEvaluation = indexedPublications.filter((publication) =>
    ["Preprint", "Under Review"].includes(publication.status)
  ).length;
  const inPreparation = indexedPublications.filter(
    (publication) => publication.status === "In Preparation"
  ).length;

  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const mutedText = useColorModeValue("gray.600", "gray.300");

  return (
    <Flex
      id="publications"
      w={"full"}
      maxW={"container.xl"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      px={4}
      py={{ base: 5, md: 8 }}
      tabIndex={-1}
    >
      <Stack w={"full"} maxW={"1040px"} spacing={{ base: 3, md: 5 }}>
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
          <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }} maxW={"760px"}>
            Publications
          </Heading>
          <Text color={mutedText} fontSize={{ base: "sm", md: "md" }} maxW={"760px"}>
            Bibliography-style listing with status and verification links.
          </Text>
          <Flex wrap={"wrap"} gap={{ base: 2, md: 4 }} color={mutedText} fontSize={{ base: "xs", md: "sm" }}>
            <StatItem label={"Total"} value={total} />
            <StatItem label={"Published/In Press"} value={published} />
            <StatItem label={"Preprint/Under Review"} value={underEvaluation} />
            <StatItem label={"In Preparation"} value={inPreparation} />
          </Flex>
        </Stack>

        <Stack direction={"column"} spacing={{ base: 3, md: 4 }}>
          {groupOrder.map((group) => {
            const publications = indexedPublications.filter((publication) =>
              group.statuses.includes(publication.status)
            );

            if (publications.length === 0) {
              return null;
            }

            return (
              <Stack key={group.heading} spacing={{ base: 2.5, md: 3 }}>
                <Flex align={"center"} justify={"space-between"} gap={3} wrap={"wrap"}>
                  <Heading as={"h3"} fontSize={{ base: "xl", md: "2xl" }} maxW={"760px"}>
                    {group.heading}
                  </Heading>
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
                    {publications.length} item{publications.length > 1 ? "s" : ""}
                  </Badge>
                </Flex>
                <Text color={mutedText} fontSize={{ base: "sm", md: "md" }} maxW={"760px"}>
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
                  {publications.map((publication, idx) => (
                    <PublicationRow
                      key={`${publication.title}-${publication.status}`}
                      isLast={idx === publications.length - 1}
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
  const mutedText = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      px={{ base: 4, md: 5 }}
      py={{ base: 3, md: 4 }}
      minH={{ base: "auto", md: "104px" }}
      borderBottom={isLast ? "none" : "1px solid"}
      borderColor={borderColor}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "56px 1fr auto" }}
        gap={{ base: 2.5, md: 4 }}
        alignItems={"start"}
      >
        <Text
          fontSize={{ base: "xs", md: "sm" }}
          fontWeight={"semibold"}
          color={mutedText}
          letterSpacing={"0.04em"}
          pt={{ md: 0.5 }}
        >
          [{index}]
        </Text>
        <Stack spacing={{ base: 2, md: 2.5 }}>
          <Text fontWeight={"semibold"} fontSize={{ base: "md", md: "lg" }} lineHeight={1.45}>
            {title}
          </Text>
          <Text
            lineHeight={1.7}
            fontSize={{ base: "sm", md: "md" }}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            {authors}.
          </Text>
          {(journal || year || details) && (
            <Text color={mutedText} fontSize={{ base: "xs", md: "sm" }}>
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
              <Text fontSize={{ base: "xs", md: "sm" }} color={mutedText}>
                Evidence link pending
              </Text>
            )}
          </Flex>
        </Stack>
        <StatusBadge status={status} />
      </Grid>
    </Box>
  );
};

const StatusBadge = ({ status }: { status: PublicationStatus }) => (
  <Badge
    mt={{ base: 0, md: 0.5 }}
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
    {status}
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

export default Publications;
