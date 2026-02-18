import {
  Box,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { me } from "../../me";

export const Footer = () => {
  return (
    <Container maxW={"container.xl"}>
      <Stack
        w={"full"}
        align={"center"}
        justify={"center"}
        direction={"column"}
        spacing={3}
        py={{ base: 6, md: 8 }}
      >
        <BrandedDivider />
        <Text
          color={useColorModeValue("brand.700", "brand.300")}
          fontSize={{ base: "sm", md: "md" }}
        >
          All rights reserved © Kaustubh Joshi {new Date().getFullYear()}
        </Text>
      </Stack>
    </Container>
  );
};

const BrandedDivider = () => {
  const borderColor = useColorModeValue("brand.200", "brand.700");
  return (
    <Stack
      direction={"row"}
      w={"full"}
      align={"center"}
      justify={"center"}
      spacing={4}
      py={2}
    >
      <Box w={"full"} h={"1px"} bg={borderColor} />
      <Image
        src={"/assets/drug.png"}
        alt={`${me.name} profile picture`}
        boxSize={8}
      />
      <Box w={"full"} h={"1px"} bg={borderColor} />
    </Stack>
  );
};

export default Footer;
