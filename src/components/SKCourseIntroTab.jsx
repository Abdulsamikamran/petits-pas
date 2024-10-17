import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  VStack,
  HStack,
  Icon,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { VscTriangleRight } from "react-icons/vsc";

import Week1Content from "./Week1Content";
import FAQAccordion from "./FAQAccordion";

const weeks = [
  {
    week: "Week 1",
    description:
      "Welcome to Part 1 of your Virtual French Kindergarten Program!",
    content: <Week1Content />,
  },
  {
    week: "Week 2",
    description:
      "French learning journey continues with new activities and lessons.",
    content: "Week 2 Content",
  },
  {
    week: "Week 3",
    description:
      "Explore more with interactive French games and outdoor tasks.",
    content: "Week 3 Content",
  },
  {
    week: "Week 4",
    description: "Focus on numbers and basic French phrases.",
    content: "Week 4 Content",
  },
  {
    week: "Week 5",
    description: "Recap and revise with additional worksheets and activities.",
    content: "Week 5 Content",
  },
];

const SkCourseIntroTab = () => {
  const orientation = useBreakpointValue({
    base: "horizontal",
    lg: "vertical",
  });
  const flexDirection = useBreakpointValue({
    base: "column-reverse",
    lg: "row",
  });
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Box overflow={"hidden"} py={8} maxW="full" color={"#6D6D6D"} mx="auto">
      <VStack fontSize={16} spacing={6} align="start">
        <Text fontSize={16} fontWeight={"semibold"}>
          Welcome to Part 1 of your Virtual French Kindergarten Program!
        </Text>
        <Text>
          I am so happy and honoured to support you in your French learning
          journey!
          <br /> There are 11 weeks included in Part 1 of the 23 weeks Pre-JK/SK
          French program.
        </Text>
        <Text>
          You have immediate access to all content and it’s completely up to you
          how you go about your scheduling. You can use each weekly plan, week
          by week, as intended, or you can choose to go at a slower pace if you
          find there’s too much content to fit into a week.
        </Text>

        <Box
          bg="rgba(97, 192, 191, 0.12)"
          py={8}
          px={{ base: 4, md: 8 }}
          borderRadius="lg"
          textAlign="left"
        >
          <Text as="span" fontWeight="bold" color="primary">
            Please note:
          </Text>
          <Text as="span" ml={2}>
            The unmentioned Kindergarten subjects: “personal & social
            development”, “the arts”, and “health & physical education”, will be
            incorporated into the lessons of the other subjects. Note that,
            although “le français” has its own category, we’re learning French
            the whole time as we practice our skills in the other categories.
          </Text>
        </Box>

        <Text color={"black"} fontSize={16} fontWeight={"semibold"}>
          Your Weekly Plans
        </Text>
        <Text color={"black"} fontSize={14} fontWeight={"semibold"}>
          Each week includes:
        </Text>
        <Text>
          A French video lesson, Math video lesson, Science video lesson, and an
          outdoor activity. You will also find ample downloads, accompanying
          resources, and lots of French support for parents/educators!
        </Text>
      </VStack>

      <Tabs
        w={"full"}
        py={4}
        orientation={orientation}
        variant={"unstyled"}
        colorScheme="teal"
        flexDirection={flexDirection}
        onChange={(index) => setActiveIndex(index)} // Update active index on tab change
      >
        <HStack
          w="full"
          flexDirection={flexDirection} // Change layout to column-reverse on base view
          alignItems="start" // Align items to the start to avoid stretching
        >
          <TabPanels flex={1}>
            {weeks.map((item, index) => (
              <TabPanel key={index} p={0} mr={4}>
                {item.content}
              </TabPanel>
            ))}
          </TabPanels>

          <TabList
            px={3}
            flexWrap={"wrap"}
            flex={1}
            display="flex"
            justifyContent="flex-start" // Align tabs to the start
          >
            {weeks.map((item, index) => (
              <Tab
                p={0}
                key={index}
                fontWeight="bold"
                w={{ base: "50%", sm: "50%", md: "100%" }} // 2 in a row at base, full width from md onward
              >
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
                    <Box
                      bg="primary"
                      color="white"
                      px={4}
                      py={4}
                      rounded="md"
                      minW="100px"
                      textAlign="center"
                    >
                      <Text fontWeight="bold">{item.week}</Text>
                    </Box>
                  </HStack>

                  <Text
                    ml={2}
                    display={{ base: "none", lg: "block" }} // Hide text on smaller screens
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
        </HStack>
      </Tabs>

      <FAQAccordion />
    </Box>
  );
};

export default SkCourseIntroTab;
