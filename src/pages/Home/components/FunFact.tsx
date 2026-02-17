import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { me } from "../../../me";

const FunFact: React.FC = () => {
  const [currentFact, setCurrentFact] = useState(0);
  const [randomFacts] = useState(
    me.facts?.sort(() => Math.random() - 0.5) || []
  );

  const funFactColor = useColorModeValue("brand.800", "brand.100");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % randomFacts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!randomFacts.length) {
    return <></>;
  }

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={4}
      w={"full"}
      maxW={"container.xl"}
      justify={"center"}
      align={"center"}
      px={4}
      py={2}
    >
      <Box
        border={"1px"}
        borderColor={useColorModeValue("brand.200", "brand.700")}
        bg={useColorModeValue("whiteAlpha.900", "blackAlpha.300")}
        backdropFilter={"blur(6px)"}
        borderRadius={"xl"}
        px={4}
        py={2}
      >
        <AnimatePresence mode={"wait"}>
          <motion.div
            key={currentFact}
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{ duration: 0.5 }}
          >
            <Text fontSize={"md"} color={funFactColor}>
              {randomFacts[currentFact]}
            </Text>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Stack>
  );
};

export default FunFact;
