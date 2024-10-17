import { Box, Image, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import footerBG from "../assets/footerbg.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import insta from "../assets/insta.svg";
import linkd from "../assets/linkd.svg";
import call from "../assets/call.svg";
import email from "../assets/email.svg";
import location from "../assets/location.svg";
import cloud from "../assets/cloud.svg";
const Footer = () => {
  return (
    <Box
      position={"relative"}
      color={"white"}
      w={"full"}
      h={{ base: "auto", md: "460px" }}
    >
      <Image
        src={cloud}
        w={"full"}
        objectFit={"cover"}
        position={"absolute"}
        top={{
          base: "-20px",
          sm: "-20px",
          md: "-40px",
          lg: "-52px",
          xl: "-72px",
          // "2xl": "-127px",
        }}
        left={0}
        zIndex={2}
      />
      <Image
        src={footerBG}
        w={"full"}
        minH={"300px"}
        objectFit={"cover"}
        position={"absolute"}
        top={0}
        left={0}
        zIndex={1}
      />

      <Flex
        bgColor={{
          base: "#61C0BF",
          sm: "#61C0BF",
          // md: "transparent",
          // lg: undefined,
          // xl: undefined,
        }}
        px={{ base: 3, sm: 6, md: 5, lg: 14, xl: 28 }}
        top={{ base: "50%", md: "40px" }}
        position={"relative"}
        w={"full"}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 6, md: 6, lg: 8, xl: 10 }}
        alignItems={{ base: "center", md: "start" }}
        textAlign={{ base: "center", md: "left" }}
        py={{ base: 10, md: 20, lg: 28 }} // Adds padding on top and bottom to avoid content overlapping with image
      >
        <VStack
          zIndex={3}
          align={{ base: "center", md: "flex-start" }}
          spacing={3}
          w={{ base: "full", md: "40%" }}
        >
          <Text fontWeight="bold" fontSize={{ base: 24, md: 28 }}>
            About
          </Text>
          <Text fontSize={{ base: 14, md: 16 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nemo
            sapiente! Consectetur doloribus velit possimus.
          </Text>
          <HStack mt={10} spacing={3}>
            <Image src={twitter} />
            <Image src={facebook} />
            <Image src={insta} />
            <Image src={linkd} />
          </HStack>
        </VStack>

        <VStack
          zIndex={3}
          align={{ base: "center", md: "flex-start" }}
          spacing={3}
          w={{ base: "full", md: "20%" }}
        >
          <Text fontWeight="bold" fontSize={{ base: 16, md: 18 }}>
            Courses
          </Text>
          <Text fontSize={{ base: 14, md: 16 }}>Course Title 1</Text>
          <Text fontSize={{ base: 14, md: 16 }}>Course Title 2</Text>
          <Text fontSize={{ base: 14, md: 16 }}>Course Title 3</Text>
          <Text fontSize={{ base: 14, md: 16 }}>Course Title 4</Text>
        </VStack>

        <VStack
          zIndex={3}
          align={{ base: "center", md: "flex-start" }}
          spacing={3}
          w={{ base: "full", md: "20%" }}
        >
          <Text fontWeight="bold" fontSize={{ base: 16, md: 18 }}>
            Services
          </Text>
          <Text fontSize={{ base: 14, md: 16 }}>Other Services 1</Text>
          <Text fontSize={{ base: 14, md: 16 }}>Other Services 2</Text>
          <Text fontSize={{ base: 14, md: 16 }}>Other Services 3</Text>
        </VStack>

        <VStack
          zIndex={3}
          align={{ base: "center", md: "flex-start" }}
          spacing={3}
          w={{ base: "full", md: "20%" }}
        >
          <Text fontWeight="bold" fontSize={{ base: 16, md: 18 }}>
            Support
          </Text>
          <Text fontSize={{ base: 14, md: 16 }}>Getting Started</Text>
          <Text fontSize={{ base: 14, md: 16 }}>Support</Text>
          <Text fontSize={{ base: 14, md: 16 }}>FAQs</Text>
          <Text fontSize={{ base: 14, md: 16 }}>Report a bug</Text>
        </VStack>

        <VStack
          zIndex={3}
          align={{ base: "center", md: "flex-start" }}
          spacing={3}
          w={{ base: "full", md: "20%" }}
        >
          <Text fontWeight="bold" fontSize={{ base: 16, md: 18 }}>
            Contact
          </Text>
          <HStack>
            <Image src={call} />
            <Text fontSize={{ base: 14, md: 16 }}>Call Us</Text>
          </HStack>
          <HStack>
            <Image src={email} />
            <Text fontSize={{ base: 14, md: 16 }}>Email Now</Text>
          </HStack>
          <HStack>
            <Image src={location} />
            <Text fontSize={{ base: 14, md: 16 }}>Our Location</Text>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
