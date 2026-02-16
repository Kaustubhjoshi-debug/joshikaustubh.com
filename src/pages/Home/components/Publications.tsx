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
  { heading: "Published and In Press", statuses: ["Published", "In Press"] },
  { heading: "Preprints and Under Review", statuses: ["Preprint", "Under Review"] },
  { heading: "In Preparation", statuses: ["In Preparation"] },
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
      p={{ base: 8, md: 16 }}
      tabIndex={-1}
    >
      <Box w={"full"}>
        <Heading as={"h2"} fontSize={"3xl"}>
          Publications
        </Heading>
        <Text mt={2} color={useColorModeValue("brand.700", "brand.200")}>
          Selected manuscripts in Vancouver-style citation format.
        </Text>

        <Stack direction={"column"} spacing={6} mt={8}>
          {groupOrder.map((group) => {
            const publications = indexedPublications.filter((publication) =>
              group.statuses.includes(publication.status)
            );

            if (publications.length === 0) {
              return null;
            }

            return (
              <Box key={group.heading}>
                <Heading as={"h3"} fontSize={"2xl"} mb={4}>
                  {group.heading}
                </Heading>
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
  const cardBg = useColorModeValue("white", "brand.900");
  const borderColor = useColorModeValue("brand.200", "brand.700");

  return (
    <Stack
      direction={"column"}
      spacing={3}
      p={4}
      border={"1px"}
      borderColor={borderColor}
      borderRadius={"xl"}
      bg={cardBg}
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
      <Text lineHeight={1.8}>
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
          <Link href={`https://doi.org/${doi}`} isExternal color={useColorModeValue("brand.700", "brand.200")}>
            DOI: {doi}
          </Link>
        )}
        {pmid && (
          <Link
            href={`https://pubmed.ncbi.nlm.nih.gov/${pmid}/`}
            isExternal
            color={useColorModeValue("brand.700", "brand.200")}
          >
            PMID: {pmid}
          </Link>
        )}
        {!doi && !pmid && url && (
          <Link href={url} isExternal color={useColorModeValue("brand.700", "brand.200")}>
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
