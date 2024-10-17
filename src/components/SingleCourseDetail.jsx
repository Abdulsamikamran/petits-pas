import React from "react";
import SectionHeader from "./SectionHeader";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Progress,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import image1 from "../assets/courseDetail1.svg";
import image2 from "../assets/courseDetail2.svg";
import CourseIntroTab from "./CourseIntroTab";
import CourseContentTab from "./CourseContentTab";

const tabData = [
  {
    name: "Course Introduction",
    content: <CourseIntroTab />,
  },
  {
    name: "Course Content",
    content: <CourseContentTab />,
  },
];

const SingleCourseDetail = ({ description }) => {
  const direction = useBreakpointValue({ base: "column", md: "row" });
  return (
    <>
      <SectionHeader
        title={description}
        variant={"none"}
        description={"Petits Pas Inc"}
      />
      <Box w={"full"}>
        <Flex py={{ base: 2, md: 4, lg: 8 }} alignItems={"center"} gap={5}>
          <Progress
            w={"70%"}
            size="sm"
            value={80}
            sx={{
              borderRadius: "20px",
              "& > div": { borderRadius: "20px" },
            }}
          />
          <Text color="primary" fontWeight={"semibold"} fontSize={14}>
            63% Complete
          </Text>
          <Divider
            orientation="vertical"
            borderColor="gray.300"
            borderWidth={1}
            height="20px"
          />
          <VStack alignItems={"start"}>
            <Text color={"primary"} fontWeight={"semibold"} fontSize={14}>
              Last Activity
            </Text>
            <Text fontSize={14}>July 17, 2023 3:57 pm</Text>
          </VStack>
        </Flex>
        <VStack alignItems={"center"} w={"full"} spacing={2}>
          <Image w={{ sm: "full" }} src={image1} />
          <HStack
            justifyContent={"start"}
            w={"full"}
            spacing={2}
            justify={"center"} // Centers content horizontally
            direction={direction} // Changes direction based on screen size
            wrap={{ base: "wrap", lg: "nowrap" }}
          >
            <Image
              src={image2}
              w={{ base: "142px", md: "180px", lg: "185px", xl: "290px" }}
            />
            <Image
              src={image2}
              w={{ base: "142px", md: "180px", lg: "185px", xl: "290px" }}
            />
            <Image
              src={image2}
              w={{ base: "142px", md: "180px", lg: "185px", xl: "290px" }}
            />
          </HStack>
        </VStack>

        <Tabs maxW={"full"} py={10}>
          <TabList>
            {tabData.map((tab, index) => (
              <Tab
                fontWeight={"semibold"}
                fontSize={{ base: "10px", lg: "md" }}
                px={0}
                py={4}
                w={"full"}
                _selected={{
                  bg: "rgba(97, 192, 191, 0.12)",
                  color: "#61C0BF",
                  borderBottom: "2px solid",
                  borderColor: "#61C0BF",
                }}
                color="gray.400"
              >
                {tab.name}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {tabData.map((tab, index) => (
              <TabPanel px={0} py={4} key={index}>
                {tab.content}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default SingleCourseDetail;
