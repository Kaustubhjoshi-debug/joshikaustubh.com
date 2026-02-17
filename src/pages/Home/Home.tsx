import { Flex, useColorModeValue } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Loader } from "../loading/Loader";

// Lazy Import
const Navbar = lazy(() => import("../common/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Publications = lazy(() => import("./components/Publications"));
const Projects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("../common/Footer"));
const Contact = lazy(() => import("./components/Contact"));

export const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Flex
        scrollBehavior={"smooth"}
        bg={useColorModeValue("brand.50", "brand.950")}
        bgImage={useColorModeValue(
          "radial-gradient(circle at 15% 15%, rgba(190, 227, 248, 0.35), transparent 40%), radial-gradient(circle at 85% 30%, rgba(144, 205, 244, 0.22), transparent 35%)",
          "radial-gradient(circle at 15% 15%, rgba(44, 82, 130, 0.35), transparent 40%), radial-gradient(circle at 85% 30%, rgba(49, 130, 206, 0.22), transparent 35%)"
        )}
        direction={"column"}
        align={"center"}
      >
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Publications />
        <Projects />
        <Contact />
        <Footer />
      </Flex>
    </Suspense>
  );
};
