import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import banner from "../assets/banner.png";
import {
  Box,
  HStack,
  Icon,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import videoimage from "../assets/videoimage.png";
import videoimage2 from "../assets/videoimage2.png";
import videoimage3 from "../assets/videoimage3.png";

const weeks = [
  {
    week: videoimage,
    description:
      "Welcome to Part 1 of your Virtual French Kindergarten Program!",
    content: <VideoDetail />,
  },
  {
    week: videoimage2,
    description:
      "French learning journey continues with new activities and lessons.",
    content: "video2",
  },
  {
    week: videoimage3,
    description:
      "Explore more with interactive French games and outdoor tasks.",
    content: "video3",
  },
  {
    week: videoimage,
    description: "Focus on numbers and basic French phrases.",
    content: "video4",
  },
  {
    week: videoimage2,
    description: "Recap and revise with additional worksheets and activities.",
    content: "video5",
  },
];
import { VscTriangleRight } from "react-icons/vsc";
import VideoDetail from "./VideoDetail";

const WeeklyVideos = () => {
  const orientation = useBreakpointValue({
    base: "horizontal",
    lg: "vertical",
  });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box w={"full"}>
      <SectionHeader
        title={"Part 1. JK/SK Program"}
        variant={"input"}
        color={"white"}
      />
      <Image py={4} w={"full"} src={banner} />
      <Tabs
        py={4}
        orientation={orientation}
        variant={"unstyled"}
        colorScheme="teal"
        onChange={(index) => setActiveIndex(index)} // Update active index on tab change
      >
        <TabPanels>
          {weeks.map((item, index) => (
            <TabPanel key={index} p={0} mr={4}>
              {item.content}
            </TabPanel>
          ))}
        </TabPanels>
        <TabList flexWrap={{ base: "wrap", xl: "nowrap" }}>
          {weeks.map((item, index) => (
            <Tab p={0} key={index} w="full" fontWeight="bold">
              <HStack
                w={"full"}
                p={2}
                rounded={"lg"}
                bg={activeIndex === index ? "rgba(97, 192, 191, 0.12)" : ""}
              >
                {activeIndex === index && (
                  <Icon as={VscTriangleRight} color="teal.500" />
                )}
                <HStack spacing={2}>
                  <Image minW="100px" rounded="lg" src={item.week}></Image>
                </HStack>

                <Text
                  ml={2}
                  textAlign={"left"}
                  color={activeIndex === index ? "black" : "#6D6D6D"}
                  fontSize={14}
                  fontWeight={"normal"}
                >
                  {item.description}
                </Text>
              </HStack>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
};

export default WeeklyVideos;
