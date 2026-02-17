import {
  Badge,
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { me } from "../../../me";

const groupOrder: {
  heading: string;
  statuses: readonly ("Published" | "In Press" | "Under Review" | "Preprint" | "In Preparation")[];
}[] = [
  {
    heading: "Peer-Reviewed, Preprints, and Under Review",
    statuses: ["Published", "In Press", "Preprint", "Under Review"],
  },
  {
    heading: "Selected Ongoing Manuscripts (In Preparation)",
    statuses: ["In Preparation"],
  },
];

export const Publications = () => {
  const indexedPublications = me.publications.map((publication, index) => ({
    ...publication,
    index: index + 1,
  }));

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
      <Box w={"full"} maxW={"980px"}>
        <Text
          fontSize={"sm"}
          fontWeight={"semibold"}
          textTransform={"uppercase"}
          letterSpacing={"0.1em"}
          color={useColorModeValue("brand.700", "brand.300")}
        >
          Scholarship
        </Text>
        <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }}>
          Publications
        </Heading>
        <Text mt={2} color={useColorModeValue("brand.700", "brand.200")}>
          Selected manuscripts in Vancouver-style citation format.
        </Text>

        <Stack direction={"column"} spacing={6} mt={6}>
          {groupOrder.map((group) => {
            const publications = indexedPublications.filter((publication) =>
              group.statuses.includes(publication.status)
            );

            if (publications.length === 0) {
              return null;
            }

            return (
              <Box key={group.heading}>
                <Heading as={"h3"} fontSize={{ base: "xl", md: "2xl" }} mb={3}>
                  {group.heading}
                </Heading>
                {group.heading === "Selected Ongoing Manuscripts (In Preparation)" && (
                  <Text mb={3} color={useColorModeValue("brand.700", "brand.200")}>
                    Selected manuscripts currently being prepared for submission.
                  </Text>
                )}
                <Stack direction={"column"} spacing={4}>
                  {publications.map((publication) => (
                    <PublicationCard key={`${publication.title}-${publication.status}`} {...publication} />
                  ))}
                </Stack>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Flex>
  );
};

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
  status: "Published" | "In Press" | "Under Review" | "Preprint" | "In Preparation";
  url?: string;
}) => {
  const cardBg = useColorModeValue("whiteAlpha.900", "blackAlpha.300");
  const borderColor = useColorModeValue("brand.200", "brand.700");

  return (
    <Stack
      direction={"column"}
      spacing={3}
      p={{ base: 5, md: 6 }}
      border={"1px"}
      borderColor={borderColor}
      borderRadius={"2xl"}
      bg={cardBg}
      backdropFilter={"blur(6px)"}
    >
      <Flex align={"center"} justify={"space-between"} gap={4} wrap={"wrap"}>
        <Text
          as={"span"}
          fontWeight={"semibold"}
          color={useColorModeValue("brand.800", "brand.100")}
        >
          {index}.
        </Text>
        <StatusBadge status={status} />
      </Flex>
      <Text lineHeight={1.9} fontSize={{ base: "md", md: "lg" }}>
        {authors}. <Text as={"span"} fontWeight={"semibold"}>{title}</Text>
        {journal ? (
          <>
            {" "}
            <Text as={"span"} fontStyle={"italic"}>
              {journal}
            </Text>
            .
          </>
        ) : (
          "."
        )}
        {year ? ` ${year}.` : ""}
        {details ? ` ${details}.` : ""}
      </Text>
      <Stack direction={"row"} spacing={4} wrap={"wrap"}>
        {doi && (
          <Link href={`https://doi.org/${doi}`} isExternal color={useColorModeValue("brand.700", "brand.200")} fontWeight={"medium"}>
            DOI: {doi}
          </Link>
        )}
        {pmid && (
          <Link
            href={`https://pubmed.ncbi.nlm.nih.gov/${pmid}/`}
            isExternal
            color={useColorModeValue("brand.700", "brand.200")}
            fontWeight={"medium"}
          >
            PMID: {pmid}
          </Link>
        )}
        {!doi && !pmid && url && (
          <Link href={url} isExternal color={useColorModeValue("brand.700", "brand.200")} fontWeight={"medium"}>
            {status === "Preprint" ? "Preprint" : "Link"}
          </Link>
        )}
      </Stack>
    </Stack>
  );
};

const StatusBadge = ({
  status,
}: {
  status: "Published" | "In Press" | "Under Review" | "Preprint" | "In Preparation";
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
