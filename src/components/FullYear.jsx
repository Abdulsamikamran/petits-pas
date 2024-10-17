import React from "react";
import SectionHeader from "./SectionHeader";
import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import hand from "../assets/hand.svg";
import video from "../assets/video1.png";
import FullYearContentTab from "./FullYearContentTab";

const FullYear = () => {
  return (
    <>
      <SectionHeader
        color="white"
        title="My Full Year of French Program"
        description="4 Contents Found"
        variant="input"
      />
      <Flex py={4} direction={{ base: "column", xl: "row" }} gap={5}>
        <Box flex={0.6}>
          <Flex alignItems={"center"} gap={2}>
            <Image src={hand} />
            <Text fontWeight={"semibold"} fontSize={16}>
              Bonjour les amis! 
            </Text>
          </Flex>
          <Text mb={4}>
            I hope you’re as excited as I am about this JK/SK French program!
          </Text>

          <Text mb={6}>
            This program will provide you everything you need to feel confident
            that your child will have a great French kinder year at school.
            Whether that school be in-person, virtual, or in your own home, I am
            here to help you each step of the way!
          </Text>

          <Text>
            First time here? Watch the video and then click on the
            <strong>“Module 1. Introduction” to get started!</strong>
          </Text>
        </Box>
        <VStack
          flex={0.4}
          justifyContent={"center"}
          border={"1px solid #D1D1D1"}
          p={2}
          rounded={"md"}
        >
          <Image src={video} w={"full"}></Image>
          <Text fontWeight={"semibold"} fontSize={14}>
            Introductory Video
          </Text>
        </VStack>
      </Flex>
      <Tabs>
        <TabList>
          <Tab
            py={4}
            fontWeight={"semibold"}
            w={"full"}
            _selected={{
              bg: "rgba(97, 192, 191, 0.12)",
              color: "#61C0BF",
              borderBottom: "2px solid",
              borderColor: "#61C0BF",
            }}
            color="gray.400"
          >
            Course Content
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <FullYearContentTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default FullYear;
